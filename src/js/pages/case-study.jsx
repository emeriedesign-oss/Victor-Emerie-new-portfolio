/* Case Study page — renders one project from data.js.

   Each project has its own URL (/cpt-funded/), and that page's shell declares
   which project it is via window.PROJECT_SLUG. The ?p=<slug> query parameter is
   still honoured as a fallback so old links keep working. */

const { useState, useEffect, useRef } = React;
const { Cursor, useReveal, Magnetic, RevealLine, RevealFade, Arrow, Curtain, Nav, Footer, ThemeToggle, ScrollBar, useSiteTheme } = window;

function getProject() {
  const fromShell = window.PROJECT_SLUG;
  const fromQuery = new URLSearchParams(window.location.search).get("p");
  const slug = fromShell || fromQuery;
  const list = window.PROJECTS || [];
  const idx = list.findIndex((p) => p.slug === slug);
  const i = idx >= 0 ? idx : Math.max(0, list.findIndex((p) => !p.external));
  return { p: list[i] || list[0], i, list };
}

function CardGrid({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="cs-cards">
      {items.map((c, i) =>
      <div className="card" key={i}>
          <h3>{c.t}</h3>
          <p>{c.d}</p>
        </div>
      )}
    </div>);

}

function Steps({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="cs-steps">
      {items.map((s, i) =>
      <div className="step" key={i}>
          <span className="n">0{i + 1}</span>
          <div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        </div>
      )}
    </div>);

}

function Section({ eyebrow, label, children, ...rest }) {
  return (
    <section className="cs-section shell" data-screen-label={label || eyebrow} {...rest}>
      <div className="cs-grid">
        <RevealFade><div className="eyebrow">{eyebrow}</div></RevealFade>
        <RevealFade delay={100} data-comment-anchor="9e28dce6f8-div-83-10"><div className="cs-body">{children}</div></RevealFade>
      </div>
    </section>);

}

/* Manually controlled solution gallery — 6 cells, prev/next buttons.
   Fills with the project's real images first, then drag-and-drop slots. */
function SolutionGallery({ p }) {
  const ref = useRef(null);

  const imgs = (p.gallery && p.gallery.length ?
  p.gallery :
  [p.afterImg, p.beforeImg, p.strategyImg, p.heroImg, p.cover]).
  filter(Boolean).
  filter((v, i, a) => a.indexOf(v) === i).
  slice(0, 6);
  const slots = Math.max(0, 6 - imgs.length);

  const scrollByDir = (dir) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.max(320, el.clientWidth * 0.7);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <>
      <div className="cs-gallery" ref={ref} data-comment-anchor="1c3441aaf7-div-127-11" data-cursor="hover" data-cursor-label="Drag">
        {imgs.map((src) =>
        <div className="cell" key={src}>
            <img loading="lazy" decoding="async" src={src} alt={`${p.title} — solution`} loading="lazy" data-comment-anchor="dd6f64877b-img-81-13" />
          </div>
        )}
        {Array.from({ length: slots }).map((_, i) =>
        <image-slot
          key={`slot-${i}`}
          id={`${p.slug}-solution-${i + 1}`}
          shape="rounded"
          radius="8"
          placeholder="Drop a product screen" data-comment-anchor="717af59e64-image-slot-85-9"></image-slot>
        )}
      </div>
      <div className="cs-gallery-nav shell">
        <button className="cs-gallery-btn" onClick={() => scrollByDir(-1)} data-cursor="hover" data-cursor-label="Prev" aria-label="Previous">
          <Arrow style={{ transform: "rotate(180deg)" }} />
        </button>
        <button className="cs-gallery-btn" onClick={() => scrollByDir(1)} data-cursor="hover" data-cursor-label="Next" aria-label="Next">
          <Arrow />
        </button>
      </div>
    </>);

}

function CaseStudy() {
  const { p, i, list } = getProject();
  const navList = list.filter((x) => !x.external);
  const ni = navList.findIndex((x) => x.slug === p.slug);
  const prev = navList[(ni - 1 + navList.length) % navList.length];
  const next = navList[(ni + 1) % navList.length];

  /* Pages that declare their own slug ship a static, SEO-complete <title>;
     don't clobber it. Only the ?p= fallback needs a title set at runtime. */
  useEffect(() => {
    if (!window.PROJECT_SLUG) document.title = `${p.title} — Victor Chiemerie`;
  }, [p]);
  useEffect(() => {
    if (p.external && p.link) window.location.replace(p.link);
  }, [p]);

  if (p.external) return null;

  return (
    <main>
      <header className="cs-header shell" data-screen-label={`Case study: ${p.title}`} data-comment-anchor="98f9704c67-header-64-7">
        <RevealFade data-comment-anchor="d02e1acce5-div-83-10">
          <a href="/work/" className="cs-crumb" data-cursor="hover" data-cursor-label="Back">
            <Arrow /> All work
          </a>
        </RevealFade>
        <h1 className="cs-title">
          <RevealLine delay={50}>{p.title}</RevealLine>
        </h1>
        <RevealFade as="p" className="cs-summary" delay={250}>{p.summary}</RevealFade>
        {p.caseStudyLink &&
        <RevealFade delay={300}>
            <div className="cs-live">
              <Magnetic strength={0.25}>
                <a
                href={p.caseStudyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                data-cursor="hover"
                data-cursor-label="Read">
                  <span className="btn-fill"></span>
                  <span>Read CaseStudy</span>
                  <Arrow />
                </a>
              </Magnetic>
            </div>
          </RevealFade>
        }
        {p.link &&
        <RevealFade delay={320}>
            <div className="cs-live">
              <Magnetic strength={0.25}>
                <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                data-cursor="hover"
                data-cursor-label="Open">
                  <span className="btn-fill"></span>
                  <span>View Project</span>
                  <Arrow />
                </a>
              </Magnetic>
            </div>
          </RevealFade>
        }
        <RevealFade delay={350}>
          <div className="cs-facts">
            <div><div className="l">Role</div><div className="v">{p.role}</div></div>
            <div><div className="l">Industry</div><div className="v">{p.industry}</div></div>
            <div><div className="l">Duration</div><div className="v">{p.duration}</div></div>
            <div><div className="l">Year</div><div className="v">{p.year || "2025"}</div></div>
          </div>
        </RevealFade>
      </header>

      <section className="shell" data-screen-label="Hero image">
        <RevealFade>
          <div className="cs-hero-img">
            {p.heroVideo ?
            <video
              src={p.heroVideo}
              poster={p.heroImg || p.cover}
              autoPlay
              muted
              loop
              playsInline
              data-comment-anchor="cbdbdfccf8-img-167-13" /> :

            <img loading="lazy" decoding="async" src={p.heroImg || p.cover} alt={`${p.title} — hero`} data-comment-anchor="cbdbdfccf8-img-167-13" />}
          </div>
        </RevealFade>
      </section>

      <Section eyebrow="Overview">
        <p>{p.overview}</p>
      </Section>

      <Section eyebrow="The problem">
        <p>{p.problem}</p>
      </Section>

      <Section eyebrow="Research">
        {p.researchIntro && <p className="intro">{p.researchIntro}</p>}
        <CardGrid items={p.research} />
      </Section>

      <Section eyebrow="Insights">
        {p.insightsIntro && <p className="intro">{p.insightsIntro}</p>}
        <CardGrid items={p.insights} />
      </Section>

      <Section eyebrow="Process">
        <Steps items={p.process} />
      </Section>

      <Section eyebrow="Strategy">
        <p>{p.strategy}</p>
        {p.strategyImg &&
        <figure style={{ margin: 0 }}>
            <div className="cs-img"><img loading="lazy" decoding="async" src={p.strategyImg} alt={`${p.title} — strategy`} data-comment-anchor="3bb877bda9-img-196-37" /></div>
            {p.strategyCap && <div className="cs-img-caption">{p.strategyCap}</div>}
          </figure>
        }
      </Section>

      <Section eyebrow="The solution" data-comment-anchor="3428288dcc-div-47-7">
        <p>{p.solutions}</p>
      </Section>

      <section className="cs-gallery-band" data-screen-label="Solution gallery">
        <SolutionGallery p={p} />
        {p.solutionCap && <div className="cs-img-caption shell">{p.solutionCap}</div>}
      </section>

      <Section eyebrow="Learnings">
        <p data-comment-anchor="f432772c2e-p-239-9" style={{ width: "1242px" }}>{p.learnings}</p>
        {p.reflection && <p className="dim">{p.reflection}</p>}
      </Section>

      <nav className="cs-pagenav shell" data-screen-label="Prev / next case">
        <a href={window.projectHref(prev)} data-cursor="hover" data-cursor-label="Previous">
          <div className="dir">← Previous</div>
          <div className="t">{prev.title}</div>
        </a>
        <a className="next" href={window.projectHref(next)} data-cursor="hover" data-cursor-label="Next">
          <div className="dir">Next →</div>
          <div className="t">{next.title}</div>
        </a>
      </nav>

      <section className="contact shell" id="contact" style={{ paddingTop: 96 }} data-screen-label="Contact strip">
        <RevealFade><div className="contact-prefix">Next project</div></RevealFade>
        <h2 className="contact-headline" style={{ fontSize: "clamp(40px, 6.5vw, 100px)" }}>
          <RevealLine>Yours, <span className="it">maybe?</span></RevealLine>
        </h2>
        <div className="contact-cta" style={{ marginTop: 40 }}>
          <RevealFade delay={150}>
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
      <Nav page="work" onCurtain={(label) => setCurtain({ active: true, label })} />
      <CaseStudy />
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