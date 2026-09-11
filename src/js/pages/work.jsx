/* Work page — full case-study index. Data from data.js (window.PROJECTS). */

const { useState } = React;
const { Cursor, useReveal, Magnetic, RevealLine, RevealFade, Arrow, Curtain, Nav, Footer, ThemeToggle, ScrollBar, useSiteTheme } = window;

const WORK_META = {
  "northwind":   { num: "01", display: "Haya AI",          tag: "B2B SaaS · Founder" },
  "vault-co":    { num: "02", display: "3EX Mobile",        tag: "Crypto · Mobile" },
  "lumen-health":{ num: "03", display: "Nebula Protocol",   tag: "DeFi · Product" },
  "cartwheel":   { num: "04", display: "3EX Web Exchange",  tag: "Crypto · Web App" },
  "orbit-hq":    { num: "05", display: "CPT Funded",        tag: "Fintech · Web" }
};

function WorkCard({ p, i }) {
  const meta = WORK_META[p.slug] || {};
  const feature = i === 0;
  const isExt = p.external && p.link;
  return (
    <RevealFade as="div" className={`wp-card ${feature ? "is-feature" : ""}`} delay={(i % 2) * 100}>
      <a href={isExt ? p.link : `case-study.html?p=${p.slug}`} target={isExt ? "_blank" : undefined} rel={isExt ? "noopener noreferrer" : undefined} data-cursor="hover" data-cursor-label={isExt ? "Use Haya Ai" : "Read case"} data-screen-label={meta.display || p.title}>
        <div className="wp-cover">
          <img src={p.cover} alt={`${meta.display || p.title} — cover`} loading="lazy" />
        </div>
        <div className="wp-body">
          <div className="wp-top">
            <span className="num">{meta.num}</span>
            <span className="wp-tag">{meta.tag}</span>
          </div>
          <h2 className="wp-name">{meta.display || p.title}</h2>
          <p className="wp-summary">{p.summary}</p>
          <div className="wp-meta">
            <span>{p.role}</span>
            <span>{p.duration}</span>
            <span className="wp-read">{isExt ? "Use Haya Ai" : "Read case study"} <Arrow /></span>
          </div>
        </div>
      </a>
    </RevealFade>
  );
}

function WorkPage() {
  const projects = window.PROJECTS || [];
  return (
    <main>
      <section className="page-hero shell" data-screen-label="Work hero">
        <RevealFade><div className="eyebrow">Selected work · 2024—2026</div></RevealFade>
        <h1 className="section-title page-hero-title">
          <RevealLine delay={50}>Behavior,</RevealLine>
          <RevealLine delay={150}><span className="it">measured.</span></RevealLine>
        </h1>
        <RevealFade as="p" className="page-hero-lead" delay={300}>
          Five behavioral UX audits and product redesigns — each one starting with how real users behave, and ending with a number that moved.
        </RevealFade>
      </section>

      <section className="section shell" style={{ paddingTop: 0 }} data-screen-label="Case study index">
        <div className="wp-grid">
          {projects.map((p, i) => <WorkCard key={p.slug} p={p} i={i} />)}
        </div>
      </section>

      <section className="contact shell" id="contact" style={{ paddingTop: 40 }} data-screen-label="Contact strip">
        <RevealFade><div className="contact-prefix">Have a project in mind?</div></RevealFade>
        <h2 className="contact-headline" style={{ fontSize: "clamp(44px, 7.5vw, 120px)" }}>
          <RevealLine>Let's find the <span className="it">why</span></RevealLine>
          <RevealLine delay={100}>behind your numbers.</RevealLine>
        </h2>
        <div className="contact-cta" style={{ marginTop: 48 }}>
          <RevealFade delay={200}>
            <Magnetic>
              <a href="mailto:hello@victoremerie.com" className="btn" data-cursor="hover" data-cursor-label="Email">
                <span className="btn-fill"></span>
                <span>Start a conversation</span>
                <Arrow />
              </a>
            </Magnetic>
          </RevealFade>
        </div>
        <Footer />
      </section>
    </main>
  );
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
      <Nav page="work" onCurtain={(label) => setCurtain({ active: true, label })} />
      <WorkPage />
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
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
