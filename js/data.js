/* =========================================================
   Nosa Omoragbon — Portfolio data
   Edit this file to update case studies, gallery, skills.
   ========================================================= */

const SITE = {
  name: "Nosa Omoragbon",
  role: "Digital Marketing Strategist",
  email: "nosaomoragbon99@gmail.com",
  location: "Lagos, Nigeria",
  socials: {
    linkedin: "https://www.linkedin.com/in/nosa-omoragbon-a41229272/",
    youtube: "https://www.youtube.com/@nomoragbon99",
    twitter: "https://x.com/nomoragbon99"
  }
};

/* ---------------- CASE STUDIES ---------------- */

const CASE_STUDIES = [
  {
    slug: "dsq-technology",
    index: "01",
    icon: "search",
    client: "DSQ Technology",
    category: "B2B Technology",
    industry: "Waste Management",
    service: "SEO & AEO",
    period: "2025 – 2026",
    role: "SEO & AEO Strategist",
    title: "SEO & AI Search Visibility",
    tagline: "Building search authority for DSQ Technology across Google and generative AI platforms.",
    summary:
      "Building organic search authority and positioning DSQ Technology as a top-referenced product across generative AI search.",
    overview:
      "DSQ Technology needed stronger visibility across both traditional search and emerging AI search. I developed a search strategy focused on high-intent content, competitor comparisons, category authority, and the signals increasingly influencing AI recommendations.",
    cover: "Images/dsq-technology/dsq-technology-digital-growth.jpg",
    accent: "#FF5A3C",
    challenge:
      "DSQ's products weren't consistently appearing when potential customers searched for solutions in their category. The challenge was twofold: improve organic search visibility while making the product easier for AI search engines to understand, evaluate, and recommend.",
    solution:
      "I built an SEO and AEO strategy around the searches closest to purchase.",
    solutionList: [
      "Feature comparison pages",
      "1:1 competitor comparisons",
      "Category-focused content",
      "High-intent buyer queries",
      "Product-focused content",
      "Backlink development",
      "Consistent publishing"
    ],
    solutionAfter:
      "The strategy was designed to establish relevance, authority, and product positioning across both search engines and generative AI platforms.",
    results: [
      { value: "TOP-REFERENCED", label: "Product across major category searches" },
      { value: "~6 MONTHS", label: "Of consistent SEO & AEO execution" },
      { value: "GOOGLE + AI", label: "Visibility across traditional and generative search" }
    ],
    aeoSub: "From Search Rankings to AI Recommendations",
    aeo:
      "As buyers increasingly turned to platforms like ChatGPT and Claude for product research, I identified a new visibility gap: DSQ wasn't being recommended for important category searches. I treated AEO as an authority and relevance problem, creating structured content that clearly communicated what the product does, who it serves, how it compares, and where it fits within the market. The result was top-referenced product positioning across major category searches in generative AI search.",
    strategies: [
      "Technical & On-Page SEO",
      "Bottom-of-Funnel SEO",
      "Search Intent Research",
      "Competitor SEO",
      "Content Strategy",
      "Comparison Content",
      "Backlink Development",
      "Answer Engine Optimization",
      "AI Search Visibility",
      "Schema Markup"
    ],
    tools: ["Google Search", "ChatGPT", "Claude", "SEO Research Tools", "Content & Analytics Platforms"],
    gallery: [
      "Images/dsq-technology/dsq-technology-visual-01.svg",
      "Images/dsq-technology/dsq-technology-visual-02.svg",
      "Images/dsq-technology/dsq-technology-visual-03.svg"
    ]
  },
  {
    slug: "dsq-brand-architecture",
    index: "02",
    icon: "brand",
    client: "DSQ Technology",
    category: "B2B Technology",
    industry: "Waste Management",
    service: "Brand Strategy",
    period: "2024 – 2025",
    tag: "6-Month Growth",
    role: "Brand & Digital Strategist",
    scope: "Brand & Digital Transformation",
    timeline: "6 Months",
    title: "Brand Architecture & Digital Growth",
    tagline: "Turning four disconnected digital properties into one recognisable brand with a clearer growth path.",
    summary:
      "Rebuilding a fragmented brand ecosystem into a unified digital presence that increased website traffic by 304% in six months.",
    overview:
      "The company had a strong portfolio of products, but its digital presence was fragmented across four separate websites. I led a brand and digital transformation that unified the portfolio under a single brand architecture, creating a clearer customer journey, stronger brand recognition, and one centralized digital destination.",
    cover: "Images/dsq-brand-architecture/dsq-brand-architecture.png",
    video: "https://www.youtube.com/embed/DqaOZa7jQYY",
    accent: "#F5B301",
    challenge:
      "Four websites. Three product brands. One corporate brand. Although the products served overlapping audiences, there was little connection between them. Prospects had to navigate multiple websites and piece together how the products related to the company. The challenge was to transform this fragmented ecosystem into a clear, connected brand experience that made the company's offering easier to understand and discover.",
    solution:
      "I led the transition from a fragmented house of brands to a unified branded house strategy.",
    solutionList: [
      "Restructuring the brand architecture",
      "Developing a new product naming framework",
      "Consolidating digital properties",
      "Restructuring the website experience",
      "Creating a unified messaging and product hierarchy"
    ],
    solutionAfter:
      "The result was a centralized digital ecosystem where every product had a clear relationship to the parent brand, making the company easier to understand, easier to market, and easier to navigate.",
    results: [
      { value: "304%", label: "Increase in website traffic", sub: "6 months post-launch" },
      { value: "40%", label: "Social follower growth", sub: "First 90 days" },
      { value: "200+", label: "Branded marketing assets", sub: "Content production" }
    ],
    strategies: [
      "Brand Architecture",
      "Digital Strategy",
      "Brand Positioning",
      "Website Strategy",
      "Website Consolidation",
      "UX & Information Architecture",
      "Content Strategy",
      "Social Media Strategy",
      "Conversion Optimization",
      "Digital Brand Systems"
    ],
    tools: ["Webflow", "Figma", "Google Analytics", "Microsoft Clarity", "Screaming Frog", "Systeme.io", "Google Search Console", "Social Media Platforms"],
    gallery: ["Images/dsq-brand-architecture/dsq-brand-architecture.png"]
  },
  {
    slug: "lead-qualification-automation",
    index: "03",
    icon: "funnel",
    client: "Confidential Client",
    category: "Professional Services",
    industry: "Professional Services",
    service: "Marketing Automation",
    period: "2026",
    tag: "Marketing Automation",
    role: "Marketing Automation Specialist",
    scope: "Marketing Automation & Lead Management",
    title: "Automating Lead Qualification & Follow-Up",
    tagline: "An automated workflow that qualifies leads, prioritizes follow-ups, and replies personally — the moment a lead comes in.",
    video: "https://www.youtube.com/embed/-RdhmJuBFT4",
    summary:
      "Built an automated lead qualification workflow that scores incoming leads, logs them in Google Sheets, and sends a personalized first response automatically.",
    overview:
      "A client was qualifying leads and sending first responses by hand. I built an automated workflow that evaluates every new lead on budget and timeline, prioritizes it for the team, records it in a central spreadsheet, and sends a personalized reply automatically — turning a manual, slow process into a repeatable marketing operations system.",
    challenge:
      "Every new lead meant manual work: reviewing the form submission, assessing budget and timeline, deciding who to contact first, recording the details, and writing an individual response email. As volume grew, so did the admin work — and slow first responses made leads harder to win.",
    solution:
      "I designed a lead qualification workflow that takes over the repetitive first stage the moment a submission arrives.",
    solutionList: [
      "Captures new form submissions automatically",
      "Scores each lead on budget and timeline",
      "Assigns priority for the sales team",
      "Stores every lead in a central Google Sheet",
      "Generates and sends a personalized reply instantly",
      "Gives the team a ready-to-work prioritized queue"
    ],
    solutionAfter:
      "The result: leads get an immediate, personalized first response, the team sees exactly who to contact first, and the repetitive work runs itself.",
    results: [
      { value: "100%", label: "Automated Lead Qualification", sub: "On every submission" },
      { value: "100%", label: "Automated Lead Responses", sub: "Sent automatically" },
      { value: "0", label: "Manual Lead Prioritization", sub: "Eliminated entirely" }
    ],
    strategies: [
      "Lead Qualification",
      "Marketing Automation",
      "Lead Prioritization",
      "Email Automation",
      "Marketing Operations",
      "Workflow Design",
      "Lead Management",
      "Process Automation"
    ],
    tools: ["n8n", "Google Forms", "Google Sheets", "Email Automation", "AI"],
    gallery: ["Images/lead-qualification-automation/lead-qualification-workflow-diagram.png"]
  },
  {
    slug: "wastenexus-podcast",
    index: "04",
    icon: "podcast",
    client: "WasteNexus Podcast",
    category: "Social & Content",
    industry: "Waste Management / Media",
    service: "Social Media",
    period: "Over 3 Months",
    tag: "Brand Design",
    role: "Content & Social Media Strategist",
    scope: "Content Strategy & Social Growth",
    timeline: "3 Months",
    title: "Turning Audio Into Audience",
    tagline: "Building a content system that transformed long-form podcast conversations into engaging, consistent social content.",
    summary:
      "Transforming long-form podcast content into a consistent social content engine that increased reach, engagement, and brand visibility.",
    overview:
      "WasteNexus Podcast had quality conversations and valuable industry content, but much of that value remained locked inside its full-length episodes. I developed a content strategy designed to extend the life of every episode, turning long-form recordings into a consistent stream of branded content for social media while strengthening the podcast's overall visual identity.",
    cover: "Images/wastenexus-podcast/wastenexus-podcast-hero.svg",
    coverImage: "Images/wastenexus-podcast/wastenexus-podcast-hero.svg",
    accent: "#C6A15B",
    challenge:
      "The podcast had an opportunity to reach a much larger audience, but its existing content wasn't being fully leveraged. Raw episode recordings weren't consistently repurposed, social channels lacked a cohesive visual identity, and there was no structured system for turning long-form conversations into content built for discovery and engagement. The challenge was to turn one piece of long-form content into multiple opportunities to reach new audiences.",
    solution:
      "I established a cohesive visual identity and built a content repurposing workflow around every episode. I transformed podcast recordings into short-form video clips, audiograms, pull quotes, and social posts while also editing 10+ raw recordings into publication-ready episodes. This created a repeatable content engine that extended the reach of every conversation, maintained brand consistency across channels, and gave WasteNexus a stronger social presence.",
    results: [
      { value: "20%", label: "Social follower growth", sub: "Over 3 months" },
      { value: "15%", label: "Listener reach increase", sub: "Over 3 months" },
      { value: "30+", label: "Branded assets produced", sub: "Content production" }
    ],
    strategies: [
      "Content Repurposing",
      "Social Media Strategy",
      "Community Management",
      "Short-Form Content",
      "Podcast Content Strategy",
      "Brand Design",
      "Visual Content Production"
    ],
    tools: ["Adobe Creative Suite", "Figma", "Video Editing Tools", "Social Media Platforms"],
    gallery: ["Images/wastenexus-podcast/wastenexus-podcast-visual-1.png", "Images/wastenexus-podcast/wastenexus-podcast-visual-2.png"]
  },
  {
    slug: "dev-design-community",
    index: "05",
    icon: "rocket",
    client: "Dev & Design",
    category: "Community & Content",
    industry: "Technology / Education",
    service: "Community Management",
    period: "Over 6 Months",
    tag: "3× Growth",
    role: "Social Media & Community Manager",
    scope: "Community Growth & Social Media",
    timeline: "6 Months",
    title: "Growing a Community From 500 to 1,500+",
    tagline: "Tripling a Telegram community — from 500 to 1,500+ members — through consistent management, content, and engagement.",
    summary:
      "Grew a Dev & Design Telegram community from 500 to 1,500+ members in six months through consistent social management, content, and engagement.",
    overview:
      "Dev & Design had an existing Telegram community that needed consistent growth and engagement. I managed its social presence and produced content and promotions designed to attract new members while keeping existing ones active.",
    challenge:
      "The community already had an audience, but no consistent system for growth and engagement. The goal was to attract new members, keep the community active, communicate consistently, create content that encouraged participation, and strengthen the community's overall digital presence.",
    solution:
      "I combined community management, social content, promotional campaigns, and branded visuals into one consistent growth and engagement system.",
    solutionList: [
      "Managed day-to-day Telegram community activity",
      "Created and published promotional content",
      "Designed branded social media assets",
      "Encouraged discussions and member participation",
      "Supported community announcements and campaigns",
      "Maintained consistent communication with members"
    ],
    solutionAfter:
      "The focus wasn't just raising the member count — it was giving people a reason to join, participate, and stay.",
    results: [
      { value: "3×", label: "Community growth" },
      { value: "1,500+", label: "Telegram members" },
      { value: "6 MONTHS", label: "Growth period" }
    ],
    strategies: [
      "Community Management",
      "Social Media Management",
      "Audience Growth",
      "Content Creation",
      "Community Engagement",
      "Promotional Campaigns",
      "Social Content Strategy",
      "Brand Content"
    ],
    tools: ["Telegram", "Canva", "Figma", "Social Media Platforms"],
    gallery: [
      "Images/dev-design-community/dev-and-design-community-screenshot.png",
      "Images/dev-design-community/dev-and-design-social-design-01.jpg",
      "Images/dev-design-community/dev-and-design-social-design-02.jpg",
      "Images/dev-design-community/dev-and-design-social-design-03.jpg",
      "Images/dev-design-community/dev-and-design-social-design-04.jpg",
      "Images/dev-design-community/dev-and-design-social-design-05.jpg",
      "Images/dev-design-community/dev-and-design-social-design-06.jpg"
    ]
  }
];

/* ---------------- SHOWCASE SECTIONS ----------------
   All sections render as static grids. Drop files into each section's
   folder and list them below (use `youtube` for an embedded video). */

const SHOWCASE_DIR = (folder, file) => `Images/${folder}/${file}`;

const SHOWCASE = [
  {
    name: "Social Media Designs",
    dir: "social-media-designs",
    items: [
      { file: "social-media-poster-01.jpg" },
      { file: "social-media-poster-02.jpg" },
      { file: "social-media-poster-03.jpg" },
      { file: "social-media-poster-04.jpg" },
      { file: "social-media-poster-05.jpg" },
      { file: "social-media-poster-06.jpg" },
      { file: "social-media-poster-07.jpg" },
      { file: "social-media-poster-08.jpg" },
      { file: "social-media-poster-09.jpg" }
    ]
  },
  {
    name: "Video Editing",
    dir: "videos",
    items: [
      { title: "Video Project 01", brand: "Performance", video: "https://player.vimeo.com/video/1218093111" }
    ]
  },
  {
    name: "Motion Design",
    dir: "motion-design",
    items: [
      { file: "motion-animation-1.mp4", title: "Motion Animation 01", brand: "Motion Design" },
      { file: "motion-animation-2.mp4", title: "Motion Animation 02", brand: "Motion Design" },
      { file: "motion-animation-3.mp4", title: "Motion Animation 03", brand: "Motion Design" }
    ]
  }
];

/* ---------------- SKILLS ---------------- */

const SKILL_GROUPS = [
  {
    name: "Marketing",
    skills: [
      { label: "Content Marketing", value: 95 },
      { label: "Social Media Strategy", value: 90 },
      { label: "Email Marketing", value: 95 },
      { label: "Paid Advertising", value: 95 },
      { label: "Campaign Planning", value: 90 }
    ]
  },
  {
    name: "Analytics",
    skills: [
      { label: "SEO Reporting & Insights", value: 90 },
      { label: "Campaign ROI Analysis", value: 90 },
      { label: "Competitor Analysis", value: 85 },
      { label: "A/B Testing", value: 87 },
      { label: "Google Analytics", value: 90 }
    ]
  },
  {
    name: "SEO",
    skills: [
      { label: "Keyword Research", value: 90 },
      { label: "On-Page SEO", value: 85 },
      { label: "Off-Page SEO", value: 85 },
      { label: "Link Building", value: 90 },
      { label: "Technical SEO", value: 90 }
    ]
  },
  {
    name: "AI & Automation",
    skills: [
      { label: "AI Workflow Automation", value: 92 },
      { label: "Marketing Automation", value: 92 },
      { label: "Email Automation Sequences", value: 90 },
      { label: "Prompt Engineering", value: 85 }
    ]
  }
];

const TOOL_GROUPS = [
  { name: "Design & Creativity", tools: ["Canva", "Adobe Photoshop", "CapCut"] },
  { name: "Social Media Management", tools: ["Hootsuite", "Meta Business Suite", "Buffer"] },
  { name: "Email Marketing & CRM", tools: ["Mailchimp", "Zoho", "Systeme.io", "HubSpot", "GoHighLevel"] },
  { name: "Web Development", tools: ["Webflow", "WordPress", "HTML", "CSS", "JavaScript"] },
  { name: "Analytics & Tracking", tools: ["Google Analytics", "Google Search Console", "HubSpot Reporting", "CallRail", "Google Tag Manager"] },
  { name: "Ads & Paid Tools", tools: ["Google Ads", "Meta Ads Manager", "Local Services Ads (LSA)"] },
  { name: "SEO Tools", tools: ["SEMrush", "Ahrefs", "SurferSEO"] },
  { name: "AI & Automation", tools: ["Zapier", "Make", "n8n", "Claude"] }
];

const CERTIFICATIONS = [
  { year: "2025", title: "SEO Essentials", issuer: "SEMrush" },
  { year: "2025", title: "Keyword Research Essentials", issuer: "SEMrush" },
  { year: "2024", title: "Social Media Marketing", issuer: "HubSpot Academy" },
  { year: "2024", title: "Digital Marketing", issuer: "HubSpot Academy" },
  { year: "2024", title: "Fundamentals of Digital Marketing", issuer: "Google" },
  { year: "2024", title: "On-Page SEO Essentials", issuer: "SEMrush" },
  { year: "2024", title: "Technical SEO & AI Search Essentials", issuer: "SEMrush" },
  { year: "2024", title: "HTML & CSS", issuer: "TestDome" },
  { year: "2024", title: "Adobe Certified Professional — Photoshop", issuer: "Adobe" }
];

const TESTIMONIALS = [
  {
    quote:
      "Nosa was an incredibly reliable and versatile asset to our marketing team. Whether it was web design, SEO, video editing, or podcast setup, whenever something needed to be done, he always figured it out.",
    name: "Whitney Kling",
    role: "Head of Marketing, GSQ Technology"
  },
  {
    quote:
      "Nosa built the marketing and SEO strategy for OrderSounds' launch, driving early engagement, landing our first producers, and mentoring our intern social media manager along the way.",
    name: "Micheal Adedeji",
    role: "Project Lead, OrderSounds"
  },
  {
    quote:
      "Nosa is a rare technical marketer who can handle strategy, design, and code all at once. He doesn't just map out the plan - he builds and executes it. Highly recommended for any team looking for real growth.",
    name: "Brian Dolan",
    role: "President, DSQ Technology"
  }
];

const VALUES = [
  { num: "01", title: "ROI Focused", text: "Every strategy is designed to deliver measurable growth." },
  { num: "02", title: "Data Driven", text: "I make decisions based on performance metrics, not guesses." },
  { num: "03", title: "Operational", text: "I streamline marketing processes for consistency and scalability." },
  { num: "04", title: "Customer Centered", text: "I align every campaign with your audience's real needs." }
];

const PROCESS = [
  { num: "01", title: "Discover", text: "A deep-dive into your brand, audience, and business goals to surface the real opportunities." },
  { num: "02", title: "Strategize", text: "A data-driven marketing plan engineered around measurable outcomes and milestones." },
  { num: "03", title: "Create", text: "Campaigns, content, and creative that connect with your audience and convert." },
  { num: "04", title: "Launch & Grow", text: "Ship, measure, and optimize relentlessly — scaling what works, cutting what doesn't, and automating what repeats." }
];

const MARQUEE = [
  "SEO", "Content Marketing", "Social Media", "Paid Advertising",
  "Email Marketing", "Web Design", "Branding", "Analytics", "AI Automation"
];
