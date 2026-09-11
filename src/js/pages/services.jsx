/* Services page — Victor Chiemerie */

const { useState } = React;
const { Cursor, useReveal, Magnetic, RevealLine, RevealFade, Arrow, Curtain, Nav, Footer, ThemeToggle, ScrollBar, useSiteTheme } = window;

const SERVICES = [
{
  num: "01", name: "Behavioral UX Audit",
  desc: "A forensic read of how users actually behave inside your product — session recordings, drop-off data, hesitation patterns — mapped to the exact screens and moments where value leaks.",
  deliver: ["Friction map & severity ranking", "Annotated audit report", "Prioritized fix list (effort vs. impact)"],
  timeline: "2–3 weeks"
},
{
  num: "02", name: "Product Redesign",
  desc: "End-to-end redesign of a product or core flow — information architecture, visual system, and interaction design — engineered around the behavior the business needs.",
  deliver: ["Flows & wireframes", "Hi-fi UI + design system", "Prototype & dev-ready handoff"],
  timeline: "4–10 weeks"
},
{
  num: "03", name: "Conversion Architecture",
  desc: "Onboarding, activation and pricing surfaces designed against a measurable outcome — fewer drop-offs, faster first value, higher trial-to-paid.",
  deliver: ["Onboarding & activation flows", "Copy & micro-interaction spec", "A/B test plan + success metrics"],
  timeline: "3–6 weeks"
},
{
  num: "04", name: "Embedded Design Lead",
  desc: "I join your team as the design lead for a season — running rituals, mentoring, shipping, and owning quality from strategy through launch.",
  deliver: ["Weekly shipped design", "Design ops & critique rituals", "Hiring & system stewardship"],
  timeline: "3+ months"
}];


const PROCESS = [
{ t: "Diagnose", d: "Audit behavior, data and context. Find the real problem — it's rarely the stated one." },
{ t: "Define", d: "Frame the outcome as a number we both agree to move, and the behavior that moves it." },
{ t: "Design", d: "Flows, systems and interfaces — tested against real users before they're called done." },
{ t: "Deliver", d: "Dev-ready handoff, then measurement. The engagement ends when the metric moves, not at the file export." }];


function ServicesPage() {
  return (
    <main>
      <section className="page-hero shell" data-screen-label="Services hero" data-comment-anchor="c787478a87-section-43-7">
        <RevealFade><div className="eyebrow">Services</div></RevealFade>
        <h1 className="section-title page-hero-title">
          <RevealLine delay={50}>Design that's</RevealLine>
          <RevealLine delay={150}><span className="it">accountable.</span></RevealLine>
        </h1>
        <RevealFade as="p" className="page-hero-lead" delay={300}>
          Every engagement starts with a behavior worth changing and ends with a number that moved. Here's what working together looks like.
        </RevealFade>
      </section>

      <section className="section shell" style={{ paddingTop: 0 }} data-screen-label="Service offerings">
        <div className="svc-detail-list">
          {SERVICES.map((s) =>
          <RevealFade as="div" className="svc-detail" key={s.num}>
              <div className="svc-num">{s.num}</div>
              <div className="svc-detail-main">
                <h2 className="svc-detail-name">{s.name}</h2>
                <p className="svc-detail-desc">{s.desc}</p>
              </div>
              <div className="svc-detail-side">
                <div className="l">You get</div>
                <ul>
                  {s.deliver.map((d) => <li key={d}>{d}</li>)}
                </ul>
                <div className="l" style={{ marginTop: 20 }}>Typical timeline</div>
                <div className="v">{s.timeline}</div>
              </div>
            </RevealFade>
          )}
        </div>
      </section>

      <section className="section shell" data-screen-label="Process">
        <div className="section-head">
          <div>
            <RevealFade><div className="eyebrow">The process</div></RevealFade>
            <h2 className="section-title" style={{ marginTop: 16 }}>
              <RevealLine>Four steps,</RevealLine>
              <RevealLine delay={100}>every <span className="it">time.</span></RevealLine>
            </h2>
          </div>
          <RevealFade delay={200}>
            <div className="section-meta">
              The same loop whether the engagement is two weeks or six months.
            </div>
          </RevealFade>
        </div>
        <div className="cs-steps" style={{ marginTop: 0 }}>
          {PROCESS.map((s, i) =>
          <RevealFade as="div" className="step" key={i}>
              <span className="n">0{i + 1}</span>
              <div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </RevealFade>
          )}
        </div>
      </section>

      <section className="contact shell" id="contact" data-screen-label="Contact strip">
        <RevealFade><div className="contact-prefix">Engagements open · Q3 2026</div></RevealFade>
        <h2 className="contact-headline" style={{ fontSize: "clamp(40px, 6.5vw, 100px)" }}>
          <RevealLine>Tell me what's <span className="it">stuck.</span></RevealLine>
        </h2>
        <div className="contact-cta" style={{ marginTop: 40 }}>
          <RevealFade delay={150}>
            <a className="contact-mail" href="mailto:hello@victoremerie.com" data-cursor="hover" data-cursor-label="Email" style={{ fontFamily: "Helvetica" }}>
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
      <Nav page="services" onCurtain={(label) => setCurtain({ active: true, label })} />
      <ServicesPage />
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