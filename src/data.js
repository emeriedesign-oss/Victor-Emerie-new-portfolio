/* ============================================================
   OCHRE — shared project dataset
   Used by projects.html (grid) and case-study.html (detail + prev/next)
   ============================================================ */
window.PROJECTS = [
  {
    slug:"northwind",
    link:"https://usehaya.io/",
    cover:"assets/haya-cover.jpg",
    title:"Haya Ai",
    client:"Northwind Analytics",
    industry:"B2B SaaS",
    year:"2026",
    role:"Lead Design Founder",
    duration:"11 weeks",
    summary:"Haya is a product behavioral intelligence layer for growth and adaptability.",
    tags:["Behavioral Intelligence","Product Design","SaaS"],
    categories:["Behavioral Intelligence","SaaS","Research"],
    feature:true,
    label:"NORTHWIND · DASHBOARD",
    overview:"Northwind's analytics suite was powerful and almost unusable. Trial-to-paid sat at 4%, and session recordings showed a recurring pattern: users opened the dashboard, hovered without clicking for 40+ seconds, then left. Leadership assumed it was a pricing problem. The behavior said otherwise.",
    problem:"Activation was failing in the first 90 seconds. New users faced 14 widgets, 9 filters and no narrative about where to start. The interface optimized for the power user who never existed yet — and punished the curious one who did.",
    research:[
      {t:"40s of hesitation",d:"Heatmaps showed cursors drifting across the screen with no committed click — a textbook signal of choice overload, not disinterest."},
      {t:"The 'safe' escape hatch",d:"73% of first sessions ended on the Settings page. Users retreated to the one screen that felt controllable when the dashboard overwhelmed them."},
      {t:"Vocabulary mismatch",d:"In interviews, 11 of 12 users described their goal in plain language the product never used — 'cohorts', 'attribution', 'retention' appeared nowhere in their words."}
    ],
    insights:[
      {t:"Friction was emotional, not functional","d":"Users weren't confused about how to click — they were anxious about clicking the wrong thing in front of their data. Reversibility, not tutorials, was the unlock."},
      {t:"Defaults are decisions","d":"An empty, configurable canvas reads as a chore. A pre-built starter view reframed the product as a head start rather than homework."},
      {t:"Progress needs proof","d":"Without a visible sense of 'you've done something', users couldn't tell exploration from progress, so they assumed they were failing."}
    ],
    process:[
      {t:"Behavioral audit",d:"Scored 240 session recordings against a friction taxonomy — hesitation, backtracking, rage-clicks, dead-ends."},
      {t:"Heuristic + cognitive walkthrough",d:"Mapped every first-run decision point against Hick's Law and recognition-over-recall."},
      {t:"Moderated interviews",d:"12 sessions to separate stated reasons from observed behavior."},
      {t:"Re-architecture & prototype",d:"Designed a guided first session and validated it with a 5-day unmoderated test."}
    ],
    strategy:"We stopped treating onboarding as a tour and started treating it as a single, completable action. The new first session opens on a pre-built 'Weekly pulse' view tied to the user's stated goal, hides advanced configuration behind a clearly reversible 'Customize' affordance, and surfaces one obvious next step at all times.",
    solutions:"The redesigned experience leads with a templated dashboard, a persistent progress strip, and language pulled verbatim from user interviews. Every destructive or complex action gained an undo and a plain-language preview, lowering the felt cost of exploration.",
    metrics:[
      {n:"+58%",l:"Trial users reaching their first insight in session one"},
      {n:"4% → 14%",l:"Trial-to-paid conversion over the quarter"},
      {n:"−41%",l:"First-session drop-off on the dashboard"}
    ],
    learnings:"The most expensive UX problems rarely look broken in a static screenshot — they live in the seconds between actions. Auditing behavior, not layouts, is what surfaced the real failure: a confidence gap, not a usability bug.",
    reflection:"Northwind didn't need more features or a lower price. It needed to make the first 90 seconds feel survivable. When we designed for emotional safety first, the metrics everyone cared about followed on their own.",
    quote:"Victor found the exact moment our users gave up — something three years of analytics never showed us."
  },
  {
    slug:"vault-co",
    cover:"assets/3ex-cover.jpg",
    coverVideo:"assets/3ex-cover.mp4",
    strategyImg:"assets/3ex-strategy.png",
    beforeImg:"assets/3ex-before.png",
    afterImg:"assets/3ex-after.png",
    title:"3EX Mobile",
    client:"CPT Market",
    industry:"Crypto Trading",
    year:"2025",
    role:"UIUX Designer",
    duration:"4 weeks",
    summary:"3Ex is a cryptocurrency trading platform designed for both new and experienced users, with a strong focus on simplicity, speed, security, and real-time insights. ",
    tags:["UX Audit","Fintech","Trust"],
    categories:["UX Audit","Fintech","Mobile Apps"],
    feature:false,
    label:"VAULT & CO · MOBILE BANKING",
    overview:"The goal of the redesign was to transform a complex trading environment into a cleaner, more intuitive experience while still supporting advanced trading functionality. Alongside the redesign, a major feature, AI CRYPTO GPT was introduced to help users access intelligent market insights powered by AI.",
    problem:"In the name of minimalism, the redesign had stripped the small confirmations and status cues people rely on to trust a money transfer. Users couldn't tell if an action had worked, so they hesitated, retried, and called support.",
    research:[
      {t:"Persona Mapping",d:"I mapped the platform against the two core personas and the moments where their needs diverged versus converged. The novice's anxiety peaked at the buy/sell confirmation step, where irreversible action met unfamiliar language. The advanced trader's frustration concentrated in navigation depth — too many taps between a signal and an executed order."},
      {t:"Competitor Analysis",d:"I audited competitor flows (Binance, Coinbase, Bybit) to locate the gap: most either dumbed the product down for beginners at the expense of depth, or buried beginners under a pro interface. Few attempted to serve both fluidly within one adaptive system."},
      {t:"Data Ideation",d:"The research surfaced a clear thesis: the problem wasn't a lack of features it was the absence of hierarchy, context, and timing. Users didn't need more data. They needed the right data, framed in language they understood, at the moment they were deciding."}
    ],
    insights:[
      {t:"Hesitation under irreversibility","d":"At confirmation screens, users froze. Loss aversion makes the cost of a wrong trade feel disproportionately larger than the reward of a right one. The interface was amplifying this by offering no reassurance, no plain-language summary of what was about to happen."},
      {t:"Decision paralysis from undifferentiated information.","d":"When every metric carries equal visual weight, the brain has no anchor. Users defaulted to inaction the most expensive behavior on a trading platform."},
      {t:"Confidence as the real currency","d":"Across both personas, the binding constraint wasn't capability it was confidence. The novice lacked the confidence to act; the expert lacked confidence that the platform was fast enough to keep up. Every design decision needed to convert uncertainty into clarity."}
    ],
    process:[
      {t:"Trust-signal audit",d:"Catalogued every point where the old flow confirmed an action and the new one didn't."},
      {t:"Support-ticket mining",d:"Clustered 1,800 tickets to map complaints back to specific screens."},
      {t:"Session replay analysis",d:"Quantified retries, hesitations and rage-taps per flow."},
      {t:"Prototype & A/B test",d:"Reintroduced confirmation states and tested against the live build."}
    ],
    strategy:"The strategy rested on four pillars, each targeting a specific failure mode uncovered in research and audit.",
    solutions:"One adaptive system that scales with confidence, guided for beginners, dense for pros, with AI Crypto GPT explaining the market right where you trade.",
    metrics:[
      {n:"−64%",l:"Duplicate transfer attempts"},
      {n:"−38%",l:"Transfer-related support tickets"},
      {n:"+19%",l:"30-day retention recovered"}
    ],
    learnings:"Minimalism and trust are not the same goal. Removing a confirmation can make a screen cleaner and the experience scarier. In high-stakes products, the audit has to weigh emotional cost, not just visual clutter.",
    reflection:"The redesign wasn't wrong to want simplicity — it just optimized for the wrong variable. Once we measured trust as carefully as we measured speed, the right amount of feedback became obvious.",
    quote:"We thought we were removing clutter. Victor showed us we were removing confidence."
  },
  {
    slug:"lumen-health",
    cover:"assets/nebula-cover.jpg",
    title:"Nebula Protocol",
    client:"Lumen Health",
    industry:"Defi - Lending and Borrowing",
    year:"",
    role:"Product Designer & Researcher",
    duration:"10 weeks",
    summary:"Nebula Protocol is a Defi Lending and Borrowing Dapp that supports the use of DEX LP tokens as collateral.",
    tags:["Product Design","Research","Health"],
    categories:["Product Design","Mobile Apps","Research"],
    feature:false,
    label:"LUMEN HEALTH · TELEHEALTH",
    overview:"Lumen connects patients with doctors in minutes — if they finish booking. Half didn't. The drop-off clustered on the symptom-entry screen, exactly when users were most stressed and least patient.",
    problem:"The flow asked for a structured medical history before showing a single doctor or price. People arrived anxious, met a wall of clinical forms, and left for a phone call instead.",
    research:[
      {t:"Cliff at the form",d:"51% of sessions ended on the symptom screen — a long, clinical, mandatory questionnaire shown before any reassurance."},
      {t:"Cost uncertainty",d:"Price appeared only at checkout. Diary studies showed users assuming the worst and abandoning pre-emptively."},
      {t:"Decision fatigue",d:"After the form, users faced 30+ doctors with no guidance — a second overload right after a stressful first one."}
    ],
    insights:[
      {t:"Reassure before you interrogate","d":"Anxious users need to see the destination — a doctor, a price, a wait time — before they'll invest effort in a form."},
      {t:"Chunk the cognitive load","d":"One question per screen felt slower but tested calmer and converted better than a single dense form."},
      {t:"Defaults reduce dread","d":"A 'help me choose' path outperformed an open list for users who just wanted to feel taken care of."}
    ],
    process:[
      {t:"Funnel & emotion mapping",d:"Paired drop-off data with an emotional-journey map to find stress peaks."},
      {t:"Diary study",d:"Followed 9 patients through real booking attempts."},
      {t:"Flow restructure",d:"Reordered the journey to lead with reassurance and price."},
      {t:"Usability testing",d:"Validated the calmer flow with anxious-state participants."}
    ],
    strategy:"We inverted the order: show the value (matched doctor, transparent price, short wait) first, then collect only what's needed, one calm step at a time, with an assisted path for overwhelmed users.",
    solutions:"The new flow opens with a matched doctor and an up-front price, breaks intake into single, friendly questions, and offers a guided 'help me choose' route. Clinical depth is preserved but sequenced for a stressed mind.",
    metrics:[
      {n:"+44%",l:"Booking completion rate"},
      {n:"−52%",l:"Drop-off on the intake step"},
      {n:"4.7/5",l:"Post-booking 'felt cared for' score"}
    ],
    learnings:"Healthcare UX lives or dies on emotional state. The same form is fine for a calm user and impossible for a frightened one. Designing for the worst moment, not the average user, changed everything.",
    reflection:"We didn't simplify the medicine — we re-sequenced the experience around human anxiety. The clinical rigor stayed; it just stopped arriving before the reassurance.",
    quote:"Victor designed for how our patients feel, not just what our system needs."
  },
  {
    slug:"cartwheel",
    cover:"assets/3ex-web-cover.jpg",
    heroImg:"assets/3ex-web-hero-new.png",
    strategyImg:"assets/3ex-web-strategy.png",
    beforeImg:"assets/3ex-web-before.png",
    afterImg:"assets/3ex-web-after.png",
    title:"3EX Website/WebApp Exchange",
    client:"CPT Market",
    industry:"Crypto Trading Exchange",
    year:"",
    role:"UIUX Designer",
    duration:"4 weeks",
    summary:"3Ex is a cryptocurrency trading platform designed for both new and experienced users, with a strong focus on simplicity, speed, security, and real-time insights.",
    tags:["UX Audit","Conversion","Web"],
    categories:["UX Audit","Web Apps"],
    feature:false,
    label:"CARTWHEEL · CHECKOUT",
    overview:"The original 3EX was dense, visually inconsistent, and overwhelming — especially for new traders. Key metrics like price trends, order book depth, and portfolio performance were buried or hard to interpret, leaving users without a clear sense of what mattered. Technical jargon and unclear navigation pushed cognitive load high, particularly during fast-moving market activity. Beginners hesitated to place trades for fear of making a mistake, while advanced traders wanted quicker access to analytical context and real-time decision support. The interface was working against everyone who used it.",
    problem:"Checkout wasn't broken in one big way — it was broken in seven small ways that each shaved a few percent and stacked into a major loss. Surprise costs, a forced account, and a fragile form did most of the damage.",
    researchIntro:"I looked at where people stalled and the answer was the same for beginners and pros.",
    research:[
      {t:"Mapping User Journey",d:"Before redesigning anything, I mapped the journeys of both audiences to find where their needs split and where they overlapped. New users stalled at the highest-stakes moments reading the market and confirming a trade."},
      {t:"Defining Users",d:"Experienced users were frustrated by the distance between spotting a signal and acting on it. Looking across the wider category, most platforms picked a side: simplify for beginners and lose depth, or build for pros and lose everyone else."},
      {t:"Defining Behavior",d:"The opening was clear serve both inside one adaptive system, with hierarchy, plain language, and well-timed insight doing the work."}
    ],
    insightsIntro:"Trading is emotional. The real bottleneck wasn't skill — it was confidence.",
    insights:[
      {t:"Trust leaks at the edges","d":"Crypto trading is a rational activity wrapped around an emotional core, and the friction clustered around predictable patterns. "},
      {t:"Honesty up front beats optimization at the end","d":"New users froze at irreversible actions loss aversion makes a potential mistake feel heavier than an equivalent gain. When every number on screen carries the same visual weight, the brain has no anchor, and users default to doing nothing, the most costly behavior on a trading platform."},
      {t:"Error states are conversion surfaces","d":"Across both audiences, the binding constraint wasn't ability it was confidence. That reframed the whole project: the job was to lower the psychological cost of every decision."}
    ],
    process:[
      {t:"Funnel forensics",d:"Instrumented every checkout field to measure abandonment at input granularity."},
      {t:"Friction-log audit",d:"Walked the flow on 6 devices, logging every moment of doubt."},
      {t:"Prioritization",d:"Ranked fixes by effort vs. recovered revenue."},
      {t:"Iterative rollout",d:"Shipped and measured fixes one variable at a time."}
    ],
    strategy:"The strategy focused on reducing complexity, improving comprehension, and building an interface that scales for novice and advanced traders alike. I simplified the information architecture for fast access to trading screens, charts, and portfolios, and reorganized data blocks so the most important metrics surface first. The visual system introduced cleaner hierarchy, modern spacing, consistent typography, and a functional color logic, with charts reworked for readability to cut cognitive strain. The interaction flow lowered entry barriers by translating jargon into clear contextual language, with components built to adapt between a beginner mode and an advanced mode. And AI Crypto GPT was designed as an approachable conversational layer embedded directly into the workflow — insight delivered in the moment of decision, not after it.",
    strategyCap:"",
    solutions:"The redesigned experience is cleaner and more responsive, with streamlined navigation and stronger real-time insight. Data blocks were reorganized into intuitive sections, charts became far more readable, and trading actions were made easier to reach. The refreshed visual system strengthened brand trust while the refined layout noticeably improved decision-making speed. At the centre sits AI Crypto GPT, the platform's analytical brain: it explains trends, signals, and market patterns in natural language, surfaces personalized trade ideas and opportunity alerts, runs rapid sentiment analysis and chart interpretation, and adapts its depth to the user's skill level, clarity for beginners, speed for experts.",
    solutionCap:"Less confusion, more confidence — users move from signal to trade with far less friction.",
    resultsBody:"The redesign increased clarity, reduced user confusion, and brought the platform in line with modern crypto-trading expectations. Both new and experienced users can now navigate, read market movements, and place trades with greater efficiency and noticeably less hesitation. By embedding insight at the point of decision, AI Crypto GPT closed the gap between understanding the market and acting on it turning a platform that displayed data into one that explains it.",
    metrics:[
      {n:"+27%",l:"Checkout completion rate"},
      {n:"$1.2M",l:"Annualized recovered revenue"},
      {n:"−34%",l:"Mobile abandonment at sign-up"}
    ],
    learnings:"3EX reinforced something that runs through all my work: the product wasn't failing for lack of features, it was failing because it ignored the psychology of the moment users were actually in uncertain, exposed, deciding under risk. The most valuable move wasn't visual; it was treating \"complexity\" as a confidence problem and engineering every decision to lower its cost. If I extended the work, I'd lean harder into behavioral instrumentation capturing where users hesitate in real sessions and feeding that back into the AI, so the platform doesn't just answer questions but anticipates friction before it appears.",
    reflection:"Cartwheel expected a dramatic overhaul. The real fix was seven unglamorous corrections that respected the user's time and intelligence. Restraint, measured, paid for itself in a month.",
    quote:"Seven small changes, one enormous quarter. Victor's audit paid for itself in weeks."
  },
  {
    slug:"orbit-hq",
    cover:"assets/cpt-cover.jpg",
    heroImg:"assets/cpt-hero.png",
    strategyImg:"assets/cpt-strategy.png",
    beforeImg:"assets/cpt-before.png",
    afterImg:"assets/cpt-after.png",
    title:"CPT Funded",
    client:"CPT Market",
    industry:"Financial Market",
    year:"",
    role:"Product Designer",
    duration:"2 weeks",
    summary:"CPT Funded is a Proprietary trading firm that is looking for promising traders to join our growing global trading community.",
    tags:["Product Design","Activation","SaaS"],
    categories:["Product Design","SaaS","Web Apps"],
    feature:false,
    label:"ORBIT HQ · ONBOARDING",
    overview:"The CPT Funded website faced a stack of compounding UX/UI issues: weak visual aesthetics, confusing navigation, and inconsistent branding. Mismatched font sizes, uneven spacing, and clashing colors created a sense of untrustworthiness, quietly undermining the exact thing a funding brand needs most. Accessibility gaps and visual inconsistencies dragged usability down further. For a financial product, these weren't surface flaws; they were trust leaks at every touchpoint.",
    problem:"The checklist optimized for completion, not value. Users ticked boxes that taught the product without ever experiencing the payoff that makes a tool worth coming back to.",
    researchIntro:"I looked at the site the way a cautious first-time user would and the doubt was immediate.",
    research:[
      {t:"The aha that mattered",d:"I approached the audit through the eyes of the people who matter most: prospective traders deciding whether CPT Funded was legitimate enough to commit to."},
      {t:"Checklist theatre",d:"Reviewing the experience against trust signals, visual consistency, clear hierarchy, predictable navigation, and a legible value proposition, the pattern was obvious."},
      {t:"Empty-state dread",d:"The inconsistencies weren't isolated bugs; they were systemic, and together they sent a single unintended message: this brand isn't buttoned up. That framed the work clearly, fix the system, not just the symptoms."}
    ],
    insightsIntro:"In finance, trust is built before a single word is read through visual coherence.",
    insights:[
      {t:"Onboard to a moment, not a menu","d":"People judge financial products in seconds, mostly subconsciously. Inconsistent typography, spacing, and color don't just look messy, they trigger a quiet \"something's off\" response that pushes users to hesitate or leave."},
      {t:"Borrowed momentum","d":"Trust is cumulative: every mismatched element chips away at it, and every coherent one builds it back."},
      {t:"Social proof is structural","d":"The core insight was that CPT Funded's usability problem was really a credibility problem. Restore visual order and you restore the confidence users need before they'll engage at all."}
    ],
    process:[
      {t:"Retention modeling",d:"Found the predictive activation event across thousands of accounts."},
      {t:"Onboarding teardown",d:"Audited every step for value delivered vs. effort required."},
      {t:"Redesign",d:"Rebuilt the first run around the predictive action."},
      {t:"Cohort A/B test",d:"Measured second-login lift across new sign-ups."}
    ],
    strategy:"The strategy centered on creating a clearer, more trustworthy, and visually consistent experience. That meant establishing a cohesive design system, consistent typography, spacing, and color to eliminate the inconsistencies that were eroding trust. It meant improving navigation so users could move through the site with confidence and predictability. And it meant strengthening brand communication, sharpening the value proposition so visitors understood what CPT Funded offered and why it mattered. Structure, accessibility, and a more professional interface were the pillars holding it together.",
    strategyCap:"Build one cohesive system, clean up navigation, and make the brand speak clearly.",
    solutions:"The redesigned CPT Funded experience replaced visual chaos with order. A unified design system brought consistency to every element, so the interface reads as deliberate and credible rather than improvised. Navigation was restructured for clarity, accessibility issues were addressed, and the brand's messaging was tightened to communicate value at a glance. The result is an interface that looks and behaves like the serious financial product it is coherent, accessible, and built to earn trust.",
    solutionCap:"A consistent, accessible, professional interface that finally matches the brand's ambition.",
    resultsBody:"The redesign delivered a clearer, more consistent, and more credible experience for CPT Funded. By resolving the visual inconsistencies and structural gaps that were quietly costing trust, the product now presents itself with the professionalism users expect from a funding brand. Better structure, stronger accessibility, and sharper brand communication combined to make the site easier to use and easier to believe in, closing the gap between what CPT Funded offers and how it presents.",
    metrics:[
      {n:"+71%",l:"Day-2 return rate"},
      {n:"2.4×",l:"Teammate invites during onboarding"},
      {n:"+22%",l:"Week-4 retention"}
    ],
    learnings:"CPT Funded was a clear reminder that for financial brands, visual consistency is a trust mechanism. The site wasn't failing because of any single broken element; it was failing because the absence of a system sent a subconscious signal of unreliability. The highest-leverage move wasn't a flashy redesign, it was bringing order, consistency, and clarity to a product that desperately needed to feel dependable. Get the fundamentals right, and trust follows. That's the principle I carry into every product where the stakes are real and the decision is the user's money.",
    reflection:"We deleted more onboarding than we added. By betting the whole experience on the one action that predicted retention, a shorter flow beat a thorough one decisively.",
    quote:"Victor cut our onboarding in half and doubled the people who came back.",
    navPrev:{label:"3EX Web Exchange", sub:"Crypto Trading", slug:"cartwheel"},
    navNext:{label:"Haya Ai", sub:"Saas", slug:"northwind"}
  }
];

window.OCHRE = window.OCHRE || {};
window.OCHRE.bySlug = function(slug){ return window.PROJECTS.find(p=>p.slug===slug) || window.PROJECTS[0]; };
