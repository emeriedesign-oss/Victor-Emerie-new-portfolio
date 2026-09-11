/* cs-overrides.js — display-name + copy cleanups applied on top of data.js.
   Fixes leftover template copy so each case study reads coherently. */
(function () {
  if (!window.PROJECTS) return;

  const patches = {
    "northwind": {
      title: "Haya AI",
      client: "Haya AI",
      label: "HAYA AI · BEHAVIORAL INTELLIGENCE",
      industry: "B2B SaaS",
      external: true,
      link: "https://usehaya.io/"
    },

    "vault-co": {
      title: "3EX Mobile",
      label: "3EX · MOBILE TRADING",
      year: "2025",
      heroVideo: "/assets/3ex-hero.mp4",
      strategyImg: "/assets/3ex-screen-7.png",
      gallery: [
        "/assets/3ex-screen-1.png",
        "/assets/3ex-screen-2.png",
        "/assets/3ex-screen-3.png",
        "/assets/3ex-screen-4.png",
        "/assets/3ex-screen-5.png",
        "/assets/3ex-screen-6.png"
      ],
      problem: "The existing app treated every user the same: a dense, pro-grade interface that intimidated beginners at the exact moments that mattered most — reading the market and confirming a trade. Novices froze at irreversible actions; experienced traders fought navigation depth between spotting a signal and executing on it.",
      process: [
        { t: "Persona mapping", d: "Mapped the platform against the novice and the advanced trader, locating where their needs diverged and converged." },
        { t: "Competitive teardown", d: "Audited Binance, Coinbase and Bybit flows to find the gap: few platforms serve both audiences in one adaptive system." },
        { t: "Interface restructure", d: "Rebuilt hierarchy so the most important data surfaces first, in language users actually use." },
        { t: "Prototype & validate", d: "Tested the adaptive system and the AI Crypto GPT layer with users from both personas." }
      ],
      metrics: null,
      reflection: "The product wasn't failing for lack of features — it was failing because it ignored the psychology of the moment users were in: uncertain, exposed, deciding under risk. Designing one system that scales with confidence served both personas better than two separate modes ever could.",
      quote: "The redesign didn't just look cleaner — it made our users braver."
    },

    "lumen-health": {
      title: "Nebula Protocol",
      client: "Nebula Protocol",
      industry: "DeFi · Lending & Borrowing",
      label: "NEBULA · DEFI LENDING",
      year: "2025",
      caseStudyLink: "https://medium.com/@chiemerieomeruta/designing-the-nebula-lending-protocol-using-the-double-diamond-framework-ux-case-study-for-defi-f5c77f22f13b",
      gallery: [
        "/assets/nebula-screen-1.jpg",
        "/assets/nebula-screen-2.jpg",
        "/assets/nebula-screen-3.jpg",
        "/assets/nebula-screen-4.jpg",
        "/assets/nebula-screen-5.jpg",
        "/assets/nebula-screen-6.jpg"
      ],
      overview: "Nebula Protocol is a DeFi lending and borrowing dApp with a distinctive proposition: it accepts DEX LP tokens as collateral, letting liquidity providers unlock capital without exiting their positions. Powerful idea — but LP collateral is unfamiliar territory even for experienced DeFi users, and unfamiliarity in finance reads as risk.",
      problem: "Users understood lending and they understood liquidity provision — but the combination was new, and the interface did little to bridge the gap. Collateral health, liquidation thresholds and LP-token valuation were presented as raw numbers with no narrative, so users either over-collateralized out of fear or stayed away entirely.",
      research: [
        { t: "Unfamiliarity reads as risk", d: "In walkthroughs, users hesitated longest on screens explaining LP collateral — not because the math was hard, but because nothing confirmed their mental model was right." },
        { t: "Liquidation anxiety", d: "The single biggest fear was silent liquidation. Users wanted to know exactly how close they were to danger, in plain language, at all times." },
        { t: "Valuation opacity", d: "LP tokens are priced from pool reserves — a derivation users couldn't inspect. Black-box numbers undermined trust in the whole position." }
      ],
      insights: [
        { t: "Show the position, not just the number", d: "A health factor of 1.8 means nothing on its own. Framing it as distance-to-liquidation, visually, converts abstraction into instinct." },
        { t: "Teach inside the flow", d: "Users don't read docs before depositing. Contextual explanation at each decision point outperformed any standalone education." },
        { t: "Reversibility builds courage", d: "Clear paths to add collateral or partially repay made users comfortable borrowing closer to their actual capacity." }
      ],
      process: [
        { t: "Protocol & mental-model audit", d: "Mapped every concept the interface assumed against what target users actually knew." },
        { t: "Risk-legibility study", d: "Tested how users interpreted health factors, LTV ratios and liquidation prices across framings." },
        { t: "Flow design", d: "Designed deposit, borrow, and manage-position flows around progressive disclosure of risk." },
        { t: "Usability validation", d: "Validated with both DeFi-native and DeFi-curious participants." }
      ],
      strategy: "Make risk legible. Every position renders as a visual health gauge with plain-language framing — how much you've borrowed, what your collateral is worth, and exactly what has to happen before liquidation. LP-token valuation became inspectable, and every borrowing decision shows its effect on position health before confirmation.",
      solutions: "The shipped dApp leads with a position dashboard built around distance-to-liquidation, contextual explainers at each decision point, and previews that show the consequence of every action before it's signed. Lending depth stayed; the dread didn't.",
      metrics: null,
      learnings: "DeFi UX is risk communication. The protocol's mechanics were sound from day one — what needed design was the user's confidence that they understood their own position. Legibility, not simplification, was the unlock.",
      reflection: "We didn't dumb down the protocol. We made its risks honest and visible, and that honesty is what made users comfortable enough to use it.",
      quote: "Nebula finally feels as trustworthy as the math behind it."
    },

    "cartwheel": {
      title: "3EX Web Exchange",
      label: "3EX · WEB EXCHANGE",
      year: "2025",
      gallery: [
        "/assets/3ex-web-screen-1.jpg",
        "/assets/3ex-web-after.png",
        "/assets/3ex-web-before.png",
        "/assets/3ex-web-strategy.png",
        "/assets/3ex-web-hero.png",
        "/assets/3ex-web-screen-2.jpg"
      ],
      problem: "The exchange wasn't broken in one big way — it was dense, visually inconsistent and overwhelming in a dozen small ways that stacked. Key metrics like price trends, order-book depth and portfolio performance were buried or hard to interpret; jargon and unclear navigation pushed cognitive load high exactly when markets moved fastest.",
      process: [
        { t: "Journey mapping", d: "Mapped both audiences' journeys to find where their needs split and where they overlapped." },
        { t: "Hierarchy audit", d: "Scored every screen for information priority — what surfaced first versus what users actually needed first." },
        { t: "Visual system rebuild", d: "Established consistent typography, spacing and a functional color logic; reworked charts for readability." },
        { t: "AI integration design", d: "Embedded AI Crypto GPT into the workflow so insight arrives at the moment of decision." }
      ],
      metrics: null,
      reflection: "The most valuable move wasn't visual — it was treating complexity as a confidence problem and engineering every decision to lower its psychological cost.",
      quote: "It went from a platform that displays data to one that explains it."
    },

    "orbit-hq": {
      title: "CPT Funded",
      label: "CPT FUNDED · PROP TRADING",
      year: "2024",
      gallery: [
        "/assets/cpt-after.png",
        "/assets/cpt-before.png",
        "/assets/cpt-strategy.png",
        "/assets/cpt-hero.png",
        "/assets/cpt-cover.jpg",
        "/assets/cpt-screen-1.jpg"
      ],
      problem: "Mismatched type sizes, uneven spacing, clashing colors and unpredictable navigation created a quiet sense of untrustworthiness — fatal for a brand asking traders to commit money. These weren't surface flaws; they were trust leaks at every touchpoint.",
      process: [
        { t: "Credibility audit", d: "Reviewed the experience through the eyes of a prospective trader deciding whether the brand was legitimate." },
        { t: "Design-system foundation", d: "Established cohesive typography, spacing and color to eliminate the inconsistencies eroding trust." },
        { t: "Navigation restructure", d: "Rebuilt site structure so users move with confidence and predictability." },
        { t: "Message sharpening", d: "Tightened the value proposition so visitors grasp what CPT Funded offers at a glance." }
      ],
      metrics: null,
      reflection: "The highest-leverage move wasn't a flashy redesign — it was bringing order, consistency and clarity to a product that needed to feel dependable. Get the fundamentals right, and trust follows.",
      quote: "The site finally looks as serious as the offer behind it.",
      navPrev: { label: "3EX Web Exchange", sub: "Crypto Trading", slug: "cartwheel" },
      navNext: { label: "Haya AI", sub: "B2B SaaS", slug: "northwind" }
    }
  };

  window.PROJECTS.forEach((p) => {
    const patch = patches[p.slug];
    if (patch) Object.assign(p, patch);
  });
})();
