/* ================================================================
   DR. SABY ROY — YOUR CONTENT FILE
   ================================================================

   THIS IS THE ONLY FILE YOU EVER NEED TO EDIT.

   HOW TO USE:
   ─ Change any text between the quote marks " "
   ─ Don't delete the commas at the end of lines
   ─ Don't delete the curly braces { } or square brackets [ ]
   ─ Save the file, then refresh your browser → done.

   TO ADD A LINK: replace the # with your full URL
   e.g.  cta_url: "https://calendly.com/sabyroy/consultation"

   TO ADD A VIDEO: paste the YouTube video ID (the part after ?v=)
   e.g.  { id: "dQw4w9WgXcQ", title: "Your title", tag: "Medical Education" }

================================================================ */

const CONTENT = {

  /* ────────────────────────────────────────────────────────
     YOUR NAME  (appears in nav, hero, footer, browser tab)
  ──────────────────────────────────────────────────────── */
  name: "Dr. Saby Roy",
  site_tagline: "Build the life you designed, not the one you defaulted into.",


  /* ────────────────────────────────────────────────────────
     SOCIAL MEDIA  —  paste your full profile URLs
  ──────────────────────────────────────────────────────── */
  socials: {
    twitter:   "https://x.com/thesabyme",
    linkedin:  "https://www.linkedin.com/in/saby-roy-9231433ab/",
    instagram: "https://www.instagram.com/sabyroyme/",
    youtube:   "https://www.youtube.com/@TheSabyMe",
    substack:  "https://substack.com/@sabyroy",
    threads:   "https://www.threads.com/@sabyroyme",
    facebook:  "https://www.facebook.com/profile.php?id=61561647265389",
  },


  /* ────────────────────────────────────────────────────────
     HERO  —  The very first thing people see
  ──────────────────────────────────────────────────────── */
  hero: {
    eyebrow:   "Doctor  ·  Medical Educator  · Body & Mind Coach",
    // Headline lines — keep to 3 or 4 lines for best layout
    // Wrap a word in <em> tags to make it italic and green
    headline:  [
      "Build the life",
      "you <em>designed</em>,",
      "not the one you",
      "defaulted into.",
    ],
    subtext:   "Weekly clarity on health, education & purpose — for those who demand more from themselves.",
    cta:       "Subscribe free",
    form_note: "No spam. Unsubscribe in one click.",
  },


  /* ────────────────────────────────────────────────────────
     MISSION  —  The pull quote beneath the hero
  ──────────────────────────────────────────────────────── */
  mission: {
    quote: "Most high achievers have optimised everything — their calendar, their output, their reputation. Everything, it seems, <em>except the life underneath it all.</em>",
    body:  "I'm Dr. Saby Roy. After years of training, teaching, and helping others perform at their best, I noticed a pattern — the most accomplished people were often living the least intentional lives. This is the work I set out to change.",
  },


  /* ────────────────────────────────────────────────────────
     NUMBERS BAR  —  Four striking statistics
  ──────────────────────────────────────────────────────── */
  stats: [
    { number: "10", suffix: "+", label: "Years in medicine & education" },
    { number: "6",  suffix: "wk", label: "Programme duration" },
    { number: "4",  suffix: "",   label: "Content pillars" },
    { number: "35", suffix: "-55", label: "Professionals served" },
  ],


  /* ────────────────────────────────────────────────────────
     ABOUT  —  Your story
  ──────────────────────────────────────────────────────── */
  about: {
    headline:      "From the ward\nto the world.",
    opening_quote: "I spent a decade becoming the doctor everyone else needed. I was good at it. Very good. But somewhere between the ward rounds and the lecture halls, I forgot to ask what I actually wanted.",
    paragraphs: [
      "That question — asked honestly, repeatedly, out loud — changed everything. Today I write, teach, coach and create. Not just about medicine, but about what it truly means to design a life of purpose, energy and freedom.",
      "My work sits at the intersection of four things I care deeply about: the science of human performance, the future of medical education, the potential of AI, and the craft of building a meaningful personal brand. This platform exists for anyone ambitious enough to want more than they were assigned.",
    ],
    stat_number: "10",
    stat_suffix: "+",
    stat_label:  "Years in medicine\n& education",
    areas: [
      "Medical Education",
      "Personal Development",
      "AI & Technology",
      "Personal Brand & Business",
    ],
  },


  /* ────────────────────────────────────────────────────────
     PROGRAMME  —  Your live coaching product
     Change cta_url to your booking/application link
  ──────────────────────────────────────────────────────── */
  programme: {
    label:     "Featured Programme",
    headline:  "You've optimised\neverything.",
    em_line:   "Your body hasn't.",
    lead:      "Your calendar is full. Your output is impressive. Your reputation is earned. And yet — something fundamental is running on default. Your energy flags by 3pm. The clarity you rely on feels thinner than it used to. You've adapted so well to performing tired that you've forgotten what it feels like not to be.",
    body:      "The 6-Week Reset is a Hormone Specialist-designed protocol for ambitious professionals aged 35–55. It eliminates visceral fat, restores mental clarity, and rebuilds the physical energy your ambitions demand.",
    key_points: [
      "Hormone Specialist-designed",
      "Evidence-based",
      "No medication",
      "Built for a 60-hour working week",
    ],
    cta_text:  "Apply for the 6-Week Reset",
    cta_url:   "#",                           // ← CHANGE THIS to your booking link
    outcomes: [
      { title: "Visceral fat reduced",    desc: "Targeted using your hormonal profile — not generic calorie restriction." },
      { title: "Mental clarity restored", desc: "The brain fog you've normalised is not inevitable. It ends here." },
      { title: "Energy rebuilt",          desc: "Sustainable energy architecture that matches the pace of your ambition." },
      { title: "Hormones rebalanced",     desc: "The foundation everything else is built on — addressed with precision." },
    ],
  },


  /* ────────────────────────────────────────────────────────
     NEWSLETTER  —  Your weekly letter
  ──────────────────────────────────────────────────────── */
  newsletter: {
    name:          "The SabyRoy Letter",
    headline:      "One letter.\nEvery week.\nWorth your time.",
    description:   "One idea on health. One on education. One on building a life of purpose. Every week, under 5 minutes. Read by ambitious professionals across the UK and beyond.",
    gift_1_title:  "The High Performer's Health Reset",
    gift_1_desc:   "A step-by-step PDF guide designed around a 60-hour working week.",
    gift_2_title:  "The 7-Day Clarity & Energy Challenge",
    gift_2_desc:   "A free email course delivered daily — evidence-based, immediately actionable.",
    form_title:    "Start here",
    cta_text:      "Send me the free resources",
    note:          "No spam. Unsubscribe in one click.",
    latest_issue_title: "\"The three decisions that separate people who grow from those who stagnate.\"",
    latest_issue_preview: "This week: one insight on learning, one on energy, one on what it means to build something that lasts — all in under 500 words.",
  },


  /* ────────────────────────────────────────────────────────
     TESTIMONIALS  —  Add or edit as many as you like
  ──────────────────────────────────────────────────────── */
  testimonials: [
    {
      quote:   "Dr. Saby has a rare ability to make complex ideas land simply. His newsletter is one of the very few I read end-to-end, every single week without exception.",
      name:    "Healthcare Professional",
      role:    "NHS, United Kingdom",
      initial: "A",
    },
    {
      quote:   "I've tried almost everything. The 6-week programme was the first thing that actually worked — and fit around 55-hour weeks without asking me to become a different person.",
      name:    "Senior Manager",
      role:    "Financial Services, London",
      initial: "R",
    },
    {
      quote:   "Finally someone talking about AI in healthcare without the noise. Practical, precise, and always ahead of what I'm hearing elsewhere.",
      name:    "Consultant Physician",
      role:    "NHS Foundation Trust",
      initial: "M",
    },
  ],


  /* ────────────────────────────────────────────────────────
     VIDEOS  —  Add your YouTube videos here
     To find your video ID: go to YouTube, click Share,
     the ID is the short code e.g. "dQw4w9WgXcQ"
  ──────────────────────────────────────────────────────── */
  videos: [
    // Uncomment and fill in when you have videos:
    // { id: "YOUR_VIDEO_ID", title: "How AI is changing medical learning — forever.", tag: "Medical Education" },
    // { id: "YOUR_VIDEO_ID", title: "Why high achievers burn out — and how to stop it.", tag: "Personal Development" },
    // { id: "YOUR_VIDEO_ID", title: "The AI tools every professional needs. No fluff.", tag: "AI & Technology" },
  ],

  // Video placeholders shown when no videos are added yet
  video_placeholders: [
    { title: "How AI is changing medical learning — forever.",  tag: "Medical Education",    gradient: "#1B4332, #40916C" },
    { title: "Why high achievers burn out — and how to stop it.", tag: "Personal Development", gradient: "#1a1a2e, #16213e" },
    { title: "The AI tools every professional needs. No fluff.", tag: "AI & Technology",      gradient: "#0d1117, #1c2942" },
  ],


  /* ────────────────────────────────────────────────────────
     FOOTER
  ──────────────────────────────────────────────────────── */
  footer: {
    tagline:    "Build the life you designed,\nnot the one you defaulted into.",
    disclaimer: "Content on this site is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional regarding your individual circumstances.",
  },


  /* ────────────────────────────────────────────────────────
     PASSWORDS
     Change these to whatever you like.
     Subscribers use the first one. You use the second to enter the Study Zone.
     Admin password is set on first use via the admin panel (browser prompt).
  ──────────────────────────────────────────────────────── */
  passwords: {
    subscriber: "subscriber2025",   // ← change this to your own subscriber password
    study:      "study2025",        // ← change this to your own study zone password
  },


  /* ────────────────────────────────────────────────────────
     STUDY ZONE — shown inside study.html (the study environment)
  ──────────────────────────────────────────────────────── */
  study_zone: {
    headline:    "The Study Zone",
    subheadline: "Your personal study environment — curated notes, resources & frameworks.",
    items: [
      { icon: "🧠", category: "Medicine",      title: "Metabolic Health 101",     desc: "Core science behind weight, insulin, and energy — explained simply.",  link: "#" },
      { icon: "⚡", category: "Productivity",  title: "Deep Work Protocol",       desc: "The system I use to produce in 2 hrs what others do in 8.",            link: "#" },
      { icon: "🤖", category: "AI",            title: "AI for Clinicians",        desc: "Practical tools every doctor should know in 2025.",                    link: "#" },
      { icon: "🌿", category: "Lifestyle",     title: "Sleep Architecture",       desc: "Why your sleep is broken and exactly how to fix it.",                  link: "#" },
      { icon: "📖", category: "Medicine",      title: "Hormone Health Primer",    desc: "Testosterone, cortisol, thyroid — the fundamentals in plain English.", link: "#" },
      { icon: "🎯", category: "Productivity",  title: "The 1-Hour Day Design",    desc: "Build a high-output day around a 60-hour working week.",               link: "#" },
    ],
  },


  /* ────────────────────────────────────────────────────────
     SUBSCRIBER AREA — shown after sign-in
  ──────────────────────────────────────────────────────── */
  subscriber_area: {
    headline:    "Welcome back.",
    subheadline: "Your subscriber resources are below.",
    links: [
      { label: "Latest Newsletter Issue",              url: "#" },
      { label: "PDF: The High Performer's Health Reset", url: "#" },
      { label: "7-Day Challenge — Day-by-Day Emails",  url: "#" },
      { label: "Study Zone →",                         url: "study.html" },
    ],
  },


  /* ────────────────────────────────────────────────────────
     KIT (CONVERTKIT) — EMAIL INTEGRATION
     ══════════════════════════════════════════════════════
     HOW TO CONNECT IN 3 STEPS:

     STEP 1 — Get your API key:
       kit.com → Settings → Developer → API Keys
       Copy your PUBLIC API key (safe to use here)

     STEP 2 — Get your Form ID:
       kit.com → Grow → Landing Pages & Forms
       Create or open a form → look at the URL:
       app.kit.com/forms/1234567/edit  ← that number is your Form ID

     STEP 3 — Paste both below and save:
  ──────────────────────────────────────────────────────── */
  email_provider: {
    provider:    "kit",             // Do not change this
    api_key:     "",                // ← PASTE your Kit PUBLIC API key here
    form_id:     "",                // ← PASTE your Kit Form ID here (numbers only)

    // What tag to apply when someone subscribes from the website
    // Create tags in Kit → Subscribers → Tags, then paste the tag ID (number) here
    // Leave as empty string if you don't want tags yet
    tag_id:      "",

    // Fallback: if api_key or form_id is empty, emails save locally in the browser
    // They will be stored until you connect Kit above
  },

};
