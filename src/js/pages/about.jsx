/* About page — Victor Chiemerie */

const { useState } = React;
const { Cursor, useReveal, Magnetic, RevealLine, RevealFade, Arrow, Curtain, Nav, Footer, ThemeToggle, ScrollBar, useSiteTheme } = window;

const PRINCIPLES = [
{ num: "01", t: "Behavior over opinion", d: "Session recordings, hesitation patterns and drop-off data outrank anyone's taste — including mine. The user's behavior is the brief." },
{ num: "02", t: "Confidence is the metric", d: "Most products don't fail because users can't act — they fail because users don't feel safe acting. I design to lower the psychological cost of every decision." },
{ num: "03", t: "Restraint pays", d: "The best fix is usually smaller than the one everyone expects. Seven unglamorous corrections beat one dramatic overhaul, measurably." },
{ num: "04", t: "Ship, measure, return", d: "A redesign isn't done at handoff. It's done when the number it was meant to move has moved." }];


const TIMELINE = [
{ period: "2024 — Now", role: "Independent Product Designer", org: "SaaS · Crypto · DeFi", d: "Embedded design lead for founders and product teams — behavioral audits, product redesigns, and conversion architecture. Recent partners include Haya AI, 3EX, Nebula Protocol and CPT Funded." },
{ period: "2025", role: "UI/UX Designer", org: "CPT Market", d: "Led the 3EX exchange redesign across mobile and web, including the AI Crypto GPT layer — one adaptive system serving novice and professional traders." },
{ period: "2019 — 2024", role: "Product Designer", org: "Fintech & Web3 startups", d: "Design roles across fintech and Web3 teams in the UAE, Shanghai and remote — shipping trading platforms, dashboards and onboarding systems." }];


const TOOLBOX = ["Figma", "Behavioral audits", "Session-replay analysis", "Design systems", "Prototyping", "Usability testing", "Heuristic evaluation", "Journey mapping", "A/B testing", "Webflow / handoff"];

function AboutPage() {
  return (
    <main>
      <section className="page-hero shell" data-screen-label="About hero">
        <RevealFade><div className="eyebrow">About</div></RevealFade>
        <h1 className="section-title page-hero-title">
          <RevealLine delay={50}>Design, guided</RevealLine>
          <RevealLine delay={150}>by <span className="it">behavior.</span></RevealLine>
        </h1>
      </section>

      <section className="section shell" style={{ paddingTop: 0 }} data-screen-label="Bio">
        <div className="about-column">
          <figure className="about-figure" data-cursor="hover" data-cursor-label="Victor">
            <img src="assets/victor-speaking.jpg" alt="Victor Chiemerie speaking" width="1400" height="933" decoding="async" data-comment-anchor="7e12efaef6-img-36-15" />
          </figure>
          <RevealFade delay={150}>
            <div className="about-body about-read">
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
            </div>
          </RevealFade>
        </div>
      </section>

      <section className="section shell" data-screen-label="Principles">
        <div className="section-head">
          <div>
            <RevealFade><div className="eyebrow">How I work</div></RevealFade>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              <RevealLine>Four <span className="it">principles.</span></RevealLine>
            </h2>
          </div>
        </div>
        <div className="svc-grid">
          {PRINCIPLES.map((p) =>
          <RevealFade as="div" className="svc" key={p.num}>
              <div className="svc-num">{p.num}</div>
              <div>
                <h3 className="svc-name">{p.t}</h3>
                <p className="svc-desc">{p.d}</p>
              </div>
            </RevealFade>
          )}
        </div>
      </section>

      <section className="section shell" data-screen-label="Experience">
        <div className="section-head">
          <div>
            <RevealFade><div className="eyebrow">Experience</div></RevealFade>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              <RevealLine>Where I've <span className="it">been.</span></RevealLine>
            </h2>
          </div>
        </div>
        <div className="tl">
          {TIMELINE.map((t, i) =>
          <RevealFade as="div" className="tl-row" key={i}>
              <div className="tl-period">{t.period}</div>
              <div>
                <h3 className="tl-role">{t.role} <span className="tl-org">· {t.org}</span></h3>
                <p className="tl-desc">{t.d}</p>
              </div>
            </RevealFade>
          )}
        </div>

        <RevealFade>
          <div className="toolbox">
            <div className="eyebrow" style={{ marginBottom: 20 }}>Toolbox</div>
            <div className="toolbox-tags">
              {TOOLBOX.map((t) => <span key={t}>{t}</span>)}
            </div>
          </div>
        </RevealFade>
      </section>

      <section className="contact shell" id="contact" data-screen-label="Contact strip">
        <RevealFade><div className="contact-prefix">Say hello</div></RevealFade>
        <h2 className="contact-headline" style={{ fontSize: "clamp(40px, 6.5vw, 100px)" }}>
          <RevealLine>Let's work <span className="it">together.</span></RevealLine>
        </h2>
        <div className="contact-cta" style={{ marginTop: 40 }}>
          <RevealFade delay={150} style={{ fontFamily: "Helvetica" }}>
            <a className="contact-mail" href="mailto:hello@victoremerie.com" data-cursor="hover" data-cursor-label="Email">
              hello@victoremerie.com
              <Arrow />
            </a>
          </RevealFade>
        </div>
        <Footer />
      </section>
    </main>);

}

function App() {
  const [theme, setTheme, vals] = useSiteTheme();
  const [curtain, setCurtain] = useState({ active: false, label: "" });
  useReveal();

  const TweaksPanel = window.TweaksPanel;
  const TweakSection = window.TweakSection;
  const TweakRadio = window.TweakRadio;

  return (
    <>
      <Cursor />
      <ScrollBar />
      <Curtain active={curtain.active} label={curtain.label} onDone={() => setCurtain({ active: false, label: "" })} />
      <Nav page="about" onCurtain={(label) => setCurtain({ active: true, label })} />
      <AboutPage />
      {TweaksPanel &&
      <TweaksPanel title="Tweaks">
          <TweakSection title="Theme" subtitle="Light or dark mode">
            <TweakRadio
            label="Mode"
            value={vals.theme}
            options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }]}
            onChange={(v) => setTheme(v)} />
          </TweakSection>
        </TweaksPanel>
      }
    </>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);