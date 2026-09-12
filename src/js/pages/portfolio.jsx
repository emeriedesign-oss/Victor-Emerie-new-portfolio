/* Portfolio home — Victor Chiemerie
   Editorial, quiet & confident, warm neutrals + terracotta accent.
   Shared chrome lives in site-common.jsx; project data in data.js */

const { useState, useEffect } = React;
const { Cursor, useReveal, Magnetic, RevealLine, RevealFade, Arrow, Curtain, Nav, Footer, ThemeToggle, ScrollBar, useSiteTheme } = window;

/* ============ Hero ============ */
function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const t = () => {
      const d = new Date();
      const h = d.getUTCHours() + 1; // WAT
      const m = String(d.getUTCMinutes()).padStart(2, "0");
      setTime(`${String(h % 24).padStart(2, "0")}:${m} WAT`);
    };
    t();const i = setInterval(t, 30000);return () => clearInterval(i);
  }, []);
  return (
    <section className="hero shell" id="top" data-screen-label="Hero" data-comment-anchor="4b2e7b1960-section-21-5">
      <div className="hero-meta" data-comment-anchor="e4e40cc923-div-22-7">
        <div className="hero-meta-block">
          <span>NIGERIA / REMOTE</span>
          <span>{time || "00:00 WAT"}</span>
        </div>
        <div className="hero-meta-block" style={{ textAlign: "right" }} data-comment-anchor="d8d9368781-div-27-9"></div>
      </div>

      <div className="hero-split">
        <div className="hero-ident">
          <h1 className="hero-title hero-title-split">
            <RevealLine delay={50}>Victor Chiemerie</RevealLine>
          </h1>
          <RevealFade as="p" className="hero-role" delay={200}>A Product UX Designer</RevealFade>
        </div>
        <RevealFade as="p" className="hero-tagline hero-tagline-split" delay={350}>
          <span className="strong">A Behavioral UX Designer, turning UX insights into revenue models.</span> I specialize in behavioral UX design for SaaS and Web3, from positioning and onboarding to conversion architecture.
        </RevealFade>
      </div>

      <div className="hero-figures">
        <figure className="hero-figure">
          <div className="hero-figure-frame">
            <img src="/assets/victor-hero-portrait.webp" alt="Victor Chiemerie" width="800" height="800" fetchpriority="high" decoding="async" />
            <a href="/about/" className="hero-figure-cta" data-cursor="hover" data-cursor-label="About">
              <span>About me</span>
              <Arrow />
            </a>
          </div>
          <figcaption>About me</figcaption>
        </figure>
        <figure className="hero-figure">
          <div className="hero-figure-frame">
            <img src="/assets/haya-cover.webp" alt="Haya AI — product behavioral intelligence layer" width="2600" height="1733" fetchpriority="high" decoding="async" />
            <a href="https://usehaya.io/" target="_blank" rel="noopener noreferrer" className="hero-figure-cta" data-cursor="hover" data-cursor-label="Use Haya">
                <span>Use Haya</span>
              <Arrow />
            </a>
          </div>
          <figcaption>Haya AI — what I'm building</figcaption>
        </figure>
      </div>

      <div className="hero-bottom">
        <div className="hero-cta">
          <RevealFade delay={650}>
            <Magnetic>
              <a href="https://calendly.com/victor-chiemerie/schedule-a-meeting-with-victor-omeruta" target="_blank" rel="noopener noreferrer" className="btn" data-cursor="hover" data-cursor-label="Book">
                <span className="btn-fill"></span>
                <span>Book a Call Now</span>
                <Arrow />
              </a>
            </Magnetic>
          </RevealFade>
        </div>
      </div>
    </section>);

}

/* ============ Work — real case studies (data.js) ============ */
const WORK_ROWS = [
{ num: "01", slug: "northwind", name: "Haya AI", desc: "A product behavioral intelligence layer", year: "2026", tag: "B2B SaaS · Founder", cover: "/assets/haya-cover.webp" },
{ num: "02", slug: "vault-co", name: "3EX Mobile", desc: "Crypto trading app redesign with AI Crypto GPT — guided for beginners, dense for pros.", year: "2025", tag: "Crypto · Mobile", cover: "/assets/3ex-cover.webp" },
{ num: "03", slug: "lumen-health", name: "Nebula Protocol", desc: "DeFi lending & borrowing dApp that accepts DEX LP tokens as collateral.", year: "2025", tag: "DeFi · Product", cover: "/assets/nebula-cover.webp" },
{ num: "04", slug: "cartwheel", name: "3EX Web Exchange", desc: "Web exchange redesign — clear hierarchy, readable charts, insight at the point of decision.", year: "2025", tag: "Crypto · Web App", cover: "/assets/3ex-web-cover.webp" },
{ num: "05", slug: "orbit-hq", name: "CPT Funded", desc: "Trust-first redesign for a proprietary trading firm — visual coherence as credibility.", year: "2024", tag: "Fintech · Web", cover: "/assets/cpt-cover.webp" }];


function Work() {
  const [hover, setHover] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const move = (e) => setPos({ x: e.clientX, y: e.clientY });

  return (
    <section className="section shell" id="work" data-screen-label="Selected Work" onMouseMove={move} data-comment-anchor="8c34ed7e9e-section-79-5">
      <div className="section-head">
        <div>
          <RevealFade><div className="eyebrow">SELECTED WORKS</div></RevealFade>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            <RevealLine style={{ fontSize: "78px" }}>Featured </RevealLine>
            <RevealLine delay={100} style={{ fontSize: "78px" }}><span className="it">Designs</span></RevealLine>
          </h2>
        </div>
      </div>

      <div className="work-list">
        {WORK_ROWS.map((p, i) => {
          const isExt = p.slug === "northwind";
          return (
            <a
              key={p.num}
              className="work-row"
              href={isExt ? "https://usehaya.io/" : window.projectHref(p)}
              target={isExt ? "_blank" : undefined}
              rel={isExt ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              data-cursor="hover"
              data-cursor-label={isExt ? "Use Haya Ai" : "View case"}>
            <span className="num">{p.num}</span>
            <span className="name" style={{ fontFamily: "Helvetica", fontSize: "48px" }}>{p.name}</span>
            <span className="thumb" style={{ backgroundImage: `url("${p.cover}")` }}></span>
            <span className="desc">{p.desc}</span>
            <span className="meta">{p.tag} · {p.year}</span>
            <span className="arrow-cell"><Arrow /></span>
          </a>);
        })}
      </div>

      <div className="work-foot">
        <RevealFade>
          <Magnetic strength={0.25}>
            <a href="/work/" className="btn btn-ghost" data-cursor="hover" data-cursor-label="All work">
              <span>View all case studies</span>
              <Arrow />
            </a>
          </Magnetic>
        </RevealFade>
      </div>

      <div className={`work-preview ${hover !== null ? "is-on" : ""}`} style={{ left: pos.x, top: pos.y }}>
        {hover !== null &&
        <div className="panel" style={{ backgroundImage: `url("${WORK_ROWS[hover].cover}")` }}></div>
        }
      </div>
    </section>);

}

/* ============ Marquee ============ */
function Marquee() {
  const phrases = ["Behavioral UX", "Product Strategy", "Conversion Architecture", "Onboarding Systems", "Web3 Design", "SaaS Growth"];
  const items = [...phrases, ...phrases];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((t, i) =>
        <span className="marquee-item" key={i} style={{ fontFamily: "Helvetica" }}>
            {t}
            <Star />
          </span>
        )}
      </div>
    </div>);

}
function Star() {
  return (
    <svg className="star" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z"></path>
    </svg>);

}

/* ============ Services (teaser) ============ */
const HOME_SERVICES = [
{ num: "01", name: "Product Strategy", desc: "Positioning, audience modeling, and behavioral mapping that defines what to build before how to build it.", tags: ["Positioning", "Behavior maps", "JTBD"] },
{ num: "02", name: "UX & UI Design", desc: "End-to-end product design flows, components, and interfaces engineered for trust and clarity.", tags: ["Flows", "Design systems", "Prototyping"] },
{ num: "03", name: "Conversion Architecture", desc: "Activation, onboarding, and growth surfaces designed against measurable outcomes.", tags: ["Onboarding", "Activation", "Pricing"] },
{ num: "04", name: "Design Leadership", desc: "Embed as a Product/Design lead facilitate rituals, hire, and ship.", tags: ["Lead role", "0→1", "Scale"] }];


function Services() {
  return (
    <section className="section shell" id="services" data-screen-label="Services">
      <div className="section-head">
        <div>
          <RevealFade><div className="eyebrow">What I do</div></RevealFade>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            <RevealLine style={{ fontSize: "78px" }}>Let me help you</RevealLine>
            <RevealLine delay={100} style={{ fontSize: "78px" }}>with <span className="it">any of this.</span></RevealLine>
          </h2>
        </div>
      </div>

      <div className="svc-grid">
        {HOME_SERVICES.map((s) =>
        <RevealFade as="div" className="svc" key={s.num}>
            <div className="svc-num">{s.num}</div>
            <div>
              <h3 className="svc-name">{s.name}</h3>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </RevealFade>
        )}
      </div>

      <div className="work-foot">
        <RevealFade>
          <Magnetic strength={0.25}>
            <a href="/services/" className="btn btn-ghost" data-cursor="hover" data-cursor-label="Services">
              <span>How an engagement works</span>
              <Arrow />
            </a>
          </Magnetic>
        </RevealFade>
      </div>
    </section>);

}

/* ============ About (teaser) ============ */
function About() {
  return (
    <section className="section shell" id="about" data-screen-label="About">
      <div className="section-head">
        <div>
          <RevealFade><div className="eyebrow">About</div></RevealFade>
          <h2 className="section-title" style={{ marginTop: 16 }}>
            <RevealLine>My Design</RevealLine>
            <RevealLine delay={100}>by <span className="it" style={{ fontSize: "78px" }}> Journey</span></RevealLine>
          </h2>
        </div>
      </div>

      <div className="about-column">
        <figure className="about-figure" data-cursor="hover" data-cursor-label="Victor">
          <img src="/assets/victor-speaking.webp" alt="Victor Chiemerie speaking" width="1400" height="933" loading="lazy" decoding="async" data-comment-anchor="f1f6a10e5e-img-246-13" />
        </figure>
        <RevealFade delay={150}>
          <div className="about-body about-read" style={{ lineHeight: "1.55" }}>
            <p data-comment-anchor="a139e5567d-p-240-13" style={{ fontFamily: "Helvetica", color: "rgb(91, 85, 112)" }}>
              I started my creative journey as a graphic designer in college, driven by a natural instinct to solve problems, not just create visuals.
            </p>
            <p className="dim about-small" style={{ fontFamily: "Helvetica" }}>
              After virtually attending the Davos Conference, I saw how design shapes innovation at a global level. That moment shifted my focus from graphics to product UX.
            </p>
            <p className="dim about-small" style={{ fontFamily: "Helvetica" }}>
              As a Product UX Designer, I crafted interfaces and user flows. But over time, as innovation and AI became a big thing, I realized usability won't be the real bottleneck in most products. Behavior will. Today, I operate at the intersection of Product Strategy, Behavioral UX design, and AI-powered growth systems.
            </p>
            <p className="dim about-small" style={{ fontFamily: "Helvetica" }}>
              I help SaaS and Web3 founders transform complex products into clear, trust-driven experiences that convert. My approach combines psychology, friction mapping, and conversion architecture to turn attention into action, and action into revenue.
            </p>
            <p className="dim about-small" style={{ fontFamily: "Helvetica" }}>
              I believe the future belongs to products that understand human behavior, not just user flows. And that's the layer I help teams master.
            </p>
            <div className="work-foot" style={{ marginTop: 44, textAlign: "left" }}>
              <Magnetic strength={0.25}>
                <a href="/about/" className="btn btn-ghost" data-cursor="hover" data-cursor-label="Journey">
                  <span>My Design Journey</span>
                  <Arrow />
                </a>
              </Magnetic>
            </div>
          </div>
        </RevealFade>
      </div>
    </section>);

}

/* ============ Contact ============ */
function Contact() {
  return (
    <section className="contact shell" id="contact" data-screen-label="Contact">
      <RevealFade><div className="contact-prefix">Let's build · {new Date().getFullYear()}</div></RevealFade>
      <h2 className="contact-headline">
        <RevealLine style={{ fontSize: "78px" }}>Have a problem</RevealLine>
        <RevealLine delay={100} style={{ fontSize: "78px" }} data-comment-anchor="f712338c48-span-76-5">worth <span className="it">solving?</span></RevealLine>
        <RevealLine delay={200} style={{ fontSize: "78px" }} data-comment-anchor="71039f3be2-span-76-5">Let's <span className="underline">.</span></RevealLine>
      </h2>

      <div className="contact-cta">
        <RevealFade delay={300}>
          <a className="contact-mail" href="mailto:hello@victoremerie.com" data-cursor="hover" data-cursor-label="Email" style={{ fontFamily: "Helvetica" }}>
            hello@victoremerie.com
            <Arrow />
          </a>
        </RevealFade>
      </div>

      <Footer />
    </section>);

}

/* ============ App ============ */
function App() {
  const [theme, setTheme, vals, setVals] = useSiteTheme();
  const [curtain, setCurtain] = useState({ active: false, label: "" });

  useReveal();

  const onCurtain = (label) => setCurtain({ active: true, label });

  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakRadio = window.TweakRadio;

  return (
    <>
      <Cursor />
      <ScrollBar />
      <Curtain active={curtain.active} label={curtain.label} onDone={() => setCurtain({ active: false, label: "" })} />
      <Nav page="home" onCurtain={onCurtain} />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>

      {TweaksPanel &&
      <TweaksPanel title="Tweaks">
        </TweaksPanel>
      }
    </>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);