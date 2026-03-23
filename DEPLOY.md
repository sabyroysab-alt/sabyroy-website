# Deployment Guide — Dr. Sabyasachi Roy Website

This guide walks through deploying the full stack:
- **Website** → Netlify (static site + serverless functions)
- **Finance API** → Railway (Flask server)
- **Email** → Kit (ConvertKit) v4 API

---

## 1. GitHub Setup

### Create a new repository

1. Go to https://github.com/new
2. Name it `sabyroy-website` (or your preferred name)
3. Set it to **Private**
4. Do NOT initialise with README or .gitignore (you already have one)
5. Click **Create repository**

### Push your local code

Run these commands from your project directory:

```bash
cd /Users/sabyasachiroy/sabyroy-website

git init
git add .gitignore netlify.toml netlify/ .env.example DEPLOY.md
git add index.html main.js content.js style.css
git add admin/index.html admin/login.html
# Add any other HTML, CSS, JS, image files you want deployed
git commit -m "Initial deployment package"

git remote add origin https://github.com/YOUR_USERNAME/sabyroy-website.git
git branch -M main
git push -u origin main
```

> **Important:** Never commit `.env`, `admin-passwords.js`, or `admin/accounts.xlsx`.
> These are excluded by `.gitignore`.

---

## 2. Netlify Deployment

### Connect to Netlify

1. Go to https://app.netlify.com
2. Click **Add new site → Import an existing project**
3. Select **GitHub** and authorise Netlify
4. Select your `sabyroy-website` repository
5. Configure build settings:
   - **Build command:** *(leave empty — no build step needed)*
   - **Publish directory:** `.`
6. Click **Deploy site**

Your site will be live at a `*.netlify.app` URL within ~1 minute.

### Set environment variables in Netlify

1. In Netlify, go to **Site configuration → Environment variables**
2. Click **Add a variable** for each of the following:

| Key | Value |
|-----|-------|
| `KIT_API_KEY` | Your Kit API secret key (see Section 3) |
| `KIT_FORM_ID` | Your Kit form ID (see Section 3) |
| `ADMIN_TOKEN` | A strong random secret (generate below) |
| `FINANCE_API_URL` | Your Railway URL (see Section 4) |

To generate a strong ADMIN_TOKEN, run:

```bash
openssl rand -hex 32
```

3. After adding all variables, click **Deploy site** to redeploy with the new env vars.

### Verify functions are working

After deployment, test the subscribe endpoint:

```bash
curl -X POST https://YOUR-SITE.netlify.app/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "first_name": "Test"}'
```

Expected response: `{"success":true,"message":"Subscribed!"}`

---

## 3. Kit (ConvertKit) API Setup

### Get your API key

1. Log into https://app.kit.com
2. Go to **Settings → Developer**
3. Under **API Keys**, click **Create new API key**
4. Name it `sabyroy-website` and copy the secret key
5. Paste it as `KIT_API_KEY` in Netlify environment variables

### Get your Form ID

1. In Kit, go to **Grow → Landing Pages & Forms**
2. Select (or create) the form you want subscribers added to
3. Click the form to open it
4. Look at the URL: `https://app.kit.com/forms/XXXXXXX/edit` — the number is your form ID
5. Paste it as `KIT_FORM_ID` in Netlify environment variables

---

## 4. Finance API Deployment on Railway

### Install Railway CLI (optional but useful)

```bash
npm install -g @railway/cli
railway login
```

### Deploy via Railway dashboard

1. Go to https://railway.app and log in
2. Click **New Project → Deploy from GitHub repo**
3. Select your Finance API repository (or push the files from the Business workflow setup folder to a separate private repo)
4. Railway will detect the `Procfile` and `requirements.txt` automatically

### Files needed in the Finance API repo

Make sure these files are present in the repo:
- `finance_api.py`
- `import_statement.py` (required by finance_api.py)
- `requirements.txt`
- `Procfile`
- `railway.json`
- Your `.xlsx` workbook (or configure its path via env var)

### Push Finance API to its own GitHub repo

```bash
cd "/Users/sabyasachiroy/Documents/Claude/Projects/Business workflow setup"

git init
git add finance_api.py import_statement.py requirements.txt Procfile railway.json
# Do NOT add the .xlsx file if it contains real financial data — keep it local
git commit -m "Finance API deployment"

git remote add origin https://github.com/YOUR_USERNAME/finance-api-private.git
git branch -M main
git push -u origin main
```

### Configure the Finance API port

Railway injects a `PORT` environment variable. Update the last line of `finance_api.py` to:

```python
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5050))
    app.run(host='0.0.0.0', port=port, debug=False)
```

### Get the Railway public URL

1. In Railway dashboard, open your Finance API project
2. Go to **Settings → Networking → Generate Domain**
3. Copy the generated URL (e.g., `https://finance-api-production-xxxx.up.railway.app`)
4. Add this as `FINANCE_API_URL` in Netlify environment variables

---

## 5. Custom Domain

### Add your domain in Netlify

1. In Netlify, go to **Site configuration → Domain management**
2. Click **Add a domain**
3. Enter your domain (e.g., `sabyroy.com` or `www.sabyasachiroy.com`)
4. Follow Netlify's instructions to update your DNS

### DNS configuration (at your domain registrar)

Add these records at your registrar (e.g., Namecheap, GoDaddy, Cloudflare):

**For apex domain (e.g., sabyroy.com):**
```
Type: A
Name: @
Value: 75.2.60.5
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR-SITE-NAME.netlify.app
```

DNS propagation can take up to 48 hours, but usually completes within 15 minutes.

### Enable HTTPS

Netlify provisions a free Let's Encrypt SSL certificate automatically once DNS is verified.
Go to **Site configuration → Domain management** and click **Verify DNS configuration**.

---

## 6. Post-Deployment Checklist

- [ ] Website loads at your custom domain with HTTPS
- [ ] Email subscription form submits successfully (check Kit dashboard for new subscriber)
- [ ] Admin panel at `/admin/login.html` requires password
- [ ] Finance API health check passes: `curl https://your-finance-api.up.railway.app/api/summary`
- [ ] Admin subscriber list loads (requires correct ADMIN_TOKEN in request header)
- [ ] No `.env` or secret files visible in the GitHub repo

---

## 7. Ongoing Maintenance

### Redeploy after changes

Netlify auto-deploys on every push to `main`:

```bash
git add -p        # stage specific changes
git commit -m "Your change description"
git push
```

### Update environment variables

Any time you rotate keys (API key, ADMIN_TOKEN):
1. Update in Netlify → Environment variables
2. Trigger a redeploy: Netlify → Deploys → Trigger deploy

### Monitor function logs

In Netlify: **Functions → subscribe / subscribers → View logs**

### Finance API workbook

The Finance API reads/writes the `.xlsx` workbook on disk. On Railway, the filesystem is ephemeral — files reset on redeploy. For production use:
- Keep the workbook backed up to Google Drive or Dropbox after each session
- Or run the Finance API locally only (its original purpose) and keep `FINANCE_API_URL` pointing to `http://localhost:5050` in your local `.env`
