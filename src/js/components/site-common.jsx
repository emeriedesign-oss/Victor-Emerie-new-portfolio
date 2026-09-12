/* Shared site chrome — Victor Chiemerie portfolio
   Used by every page shell in src/ */

const { useState, useEffect, useRef } = React;

/* ============ Cursor ============ */
function Cursor() {
  const dot = useRef(null);
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");

  useEffect(() => {
    let x = window.innerWidth / 2,y = window.innerHeight / 2;
    let tx = x,ty = y;
    let raf;
    const move = (e) => {tx = e.clientX;ty = e.clientY;};
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    const onOver = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (t) {setVariant(t.dataset.cursor || "hover");setLabel(t.dataset.cursorLabel || "");} else
      {setVariant("default");setLabel("");}
    };
    document.addEventListener("mouseover", onOver);
    return () => {cancelAnimationFrame(raf);window.removeEventListener("mousemove", move);document.removeEventListener("mouseover", onOver);};
  }, []);

  return (
    <div ref={dot} className={`cursor ${variant === "hover" ? "is-hover" : ""} ${variant === "text" ? "is-text" : ""}`}>
      <span className="cursor-label">{label}</span>
    </div>);

}

/* ============ Reveal hook ============ */
function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-line, .reveal-fade");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) e.target.classList.add("in");});
    }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, deps);
}

/* ============ Magnetic wrap ============ */
function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2,cy = r.top + r.height / 2;
      el.style.transform = `translate(${(e.clientX - cx) * strength}px, ${(e.clientY - cy) * strength}px)`;
    };
    const reset = () => {el.style.transform = "translate(0, 0)";};
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {el.removeEventListener("mousemove", move);el.removeEventListener("mouseleave", reset);};
  }, [strength]);
  return <div ref={ref} style={{ display: "inline-block", transition: "transform 0.5s cubic-bezier(.2,.8,.2,1)" }}>{children}</div>;
}

/* ============ Reveal helpers ============ */
function RevealLine({ children, delay = 0, as = "span", style }) {
  const Tag = as;
  return (
    <Tag className="reveal-line" style={{ "--d": `${delay}ms` }}>
      <span style={style}>{children}</span>
    </Tag>);

}
function RevealFade({ children, delay = 0, as = "div", className = "", style }) {
  const Tag = as;
  return <Tag className={`reveal-fade ${className}`} style={{ "--d": `${delay}ms`, ...style }}>{children}</Tag>;
}

/* ============ Arrow ============ */
function Arrow(props) {
  return (
    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>);

}

/* ============ Curtain (page transition) ============ */
function Curtain({ active, onDone, label }) {
  useEffect(() => {
    if (!active) return;
    const t1 = setTimeout(() => {
      const c = document.querySelector(".curtain");
      if (c) {c.classList.remove("is-in");c.classList.add("is-out");}
    }, 420);
    const t2 = setTimeout(() => {onDone();}, 800);
    return () => {clearTimeout(t1);clearTimeout(t2);};
  }, [active]);
  return (
    <div className={`curtain ${active ? "is-in" : ""}`}>
      <div className="curtain-text">{label}</div>
    </div>);

}

/* ============ Nav (page-aware) ============ */
const NAV_LINKS = [
{ id: "work", label: "Work", href: "/work/" },
{ id: "services", label: "Services", href: "/services/" },
{ id: "about", label: "About", href: "/about/" },
{ id: "contact", label: "Contact", href: "/#contact" }];


function Nav({ page = "home", onCurtain }) {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {document.documentElement.style.overflow = "";};
  }, [menuOpen]);

  const go = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    // contact on home = smooth scroll; everything else = curtain + navigate
    if (link.id === "contact" && page === "home") {
      const el = document.getElementById("contact");
      if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
      return;
    }
    if (link.id === page) return;
    if (onCurtain) {
      onCurtain(link.label);
      setTimeout(() => {window.location.href = link.href;}, 300);
    } else {
      window.location.href = link.href;
    }
  };

  const goHome = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (page === "home") {window.scrollTo({ top: 0, behavior: "smooth" });return;}
    if (onCurtain) {
      onCurtain("Home");
      setTimeout(() => {window.location.href = "/";}, 300);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <nav className={`nav ${stuck ? "is-stuck" : ""}`}>
        <div className="shell nav-inner">
          <a href="/" className="brand" onClick={goHome} data-cursor="hover" data-cursor-label="Home">
            <span className="brand-dot"></span>
            <span className="brand-first">Victor</span> <span className="brand-last">Chiemerie</span>
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((l) =>
            <a key={l.id} href={l.href} onClick={(e) => go(e, l)} className={l.id === page ? "is-current" : ""} data-cursor="hover" data-cursor-label="View">
                {l.label}
              </a>
            )}
          </div>
          <a
            href="https://calendly.com/victor-chiemerie/schedule-a-meeting-with-victor-omeruta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost nav-cta"
            data-cursor="hover"
            data-cursor-label="Book" data-comment-anchor="2094b7f69b-a-185-11">
            <span>Book a Call Now</span>
            <Arrow />
          </a>
          <button className={`nav-burger ${menuOpen ? "is-open" : ""}`} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-links">
          <a href="/" onClick={goHome}>Home</a>
          {NAV_LINKS.map((l, i) =>
          <a key={l.id} href={l.href} onClick={(e) => go(e, l)} className={l.id === page ? "is-current" : ""} style={{ "--i": i + 1 }}>
              {l.label}
            </a>
          )}
        </div>
        <div className="mobile-menu-cta">
          <a
            href="https://calendly.com/victor-chiemerie/schedule-a-meeting-with-victor-omeruta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn">
            <span className="btn-fill"></span>
            <span>Book a Call Now</span>
            <Arrow />
          </a>
        </div>
        <div className="mobile-menu-foot">
          <span>Lagos / remote</span>
          <a href="mailto:hello@victoremerie.com">hello@victoremerie.com</a>
        </div>
      </div>
    </>);

}

/* ============ Footer ============ */
function Footer() {
  return (
    <div className="footer shell" data-comment-anchor="146f562b3c-div-212-5">
      <div>© Victor Chiemerie · Designed &amp; built 2026</div>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/victoremerie/" target="_blank" rel="noopener noreferrer" data-cursor="hover" data-cursor-label="LinkedIn">LinkedIn ↗</a>
        <a href="https://x.com/Victor_emerieO" target="_blank" rel="noopener noreferrer" data-cursor="hover" data-cursor-label="Twitter">X / Twitter ↗</a>
        <a href="https://t.me/emerie_ux" target="_blank" rel="noopener noreferrer" data-cursor="hover" data-cursor-label="Telegram">TELEGRAM ↗</a>
        <a href="https://www.instagram.com/victor_emerie/" target="_blank" rel="noopener noreferrer" data-cursor="hover" data-cursor-label="Instagram">INSTAGRAM ↗</a>
      </div>
    </div>);

}

/* ============ Theme toggle ============ */
function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      data-cursor="hover"
      data-cursor-label={theme === "light" ? "Dark" : "Light"}
      aria-label="Toggle theme">
      {theme === "light" ?
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg> :
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"></path>
        </svg>
      }
    </button>);

}

/* ============ Scroll progress ============ */
function ScrollBar() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(100, Math.max(0, window.scrollY / h * 100)) : 0;
      if (ref.current) ref.current.style.width = pct + "%";
    };
    onScroll();window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={ref} className="scroll-bar"></div>;
}

/* ============ Theme state (shared persistence via tweaks host) ============ */
const SITE_TWEAK_DEFAULTS = { theme: "light" };

function useSiteTheme() {
  const tweaks = window.useTweaks ? window.useTweaks(SITE_TWEAK_DEFAULTS) : useState(SITE_TWEAK_DEFAULTS);
  const [vals, setVals] = tweaks;
  const theme = "light";
  useEffect(() => {document.documentElement.dataset.theme = "light";}, []);
  const setTheme = () => {};
  return [theme, setTheme, vals, setVals];
}

Object.assign(window, {
  Cursor, useReveal, Magnetic, RevealLine, RevealFade, Arrow,
  Curtain, Nav, Footer, ThemeToggle, ScrollBar, useSiteTheme
});
/* These used to land on `window` implicitly: Babel-standalone ran each
   <script type="text/babel"> in global scope, so a top-level `function Nav`
   became window.Nav. Under a real build every file is a module with its own
   scope, so the shared surface is published explicitly. The page modules keep
   reading it off window, which leaves their code untouched. */
Object.assign(window, {
  Cursor, useReveal, Magnetic, RevealLine, RevealFade, Arrow,
  Curtain, Nav, Footer, ThemeToggle, ScrollBar, useSiteTheme
});
