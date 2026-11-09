import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Braces, Check,
  ChevronRight, Code2, Command, Download, ExternalLink, Github, GraduationCap,
  Laptop2, Linkedin, Mail, MapPin, Menu, Moon, MoveUpRight, Send,
  Sparkles, Sun, TerminalSquare, X,
} from 'lucide-react';
import { portfolio } from './data/portfolio';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Reveal({ children, className = '', delay = 0, y = 25 }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ number, eyebrow, title, subtitle }) {
  return (
    <Reveal className="section-heading">
      <div className="eyebrow"><span className="section-number">{number}</span><span className="eyebrow-divider" />{eyebrow}</div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}

function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-27% 0px -52% 0px', threshold: [0, 0.15, 0.45, 1] }
    );
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = event => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);
  return (
    <header className={`nav-shell ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="Sk Sarfaraj Ali - Home" onClick={closeMenu}>
          <span className="brand-mark">S<span>.</span>A</span>
          <span className="brand-copy">SARFARAJ<span> / DEV</span></span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(item => <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'nav-active' : ''}>{item.label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} title="Toggle theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-availability" href="#contact"><span className="status-dot" />Let's connect <ArrowUpRight size={15}/></a>
          <button className="icon-button mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" className="mobile-panel" aria-label="Mobile navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18 }}>
            {navItems.map((item, index) => <a href={`#${item.id}`} key={item.id} onClick={closeMenu}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={18}/></a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function TypeRole() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(() => setIndex(value => (value + 1) % portfolio.roles.length), 3400);
    return () => window.clearInterval(interval);
  }, [reducedMotion]);
  return (
    <span className="role-switcher">
      <AnimatePresence mode="wait">
        <motion.span key={index} initial={reducedMotion ? false : { opacity: 0, y: 9 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? {} : { opacity: 0, y: -9 }} transition={{ duration: 0.25 }}>
          {portfolio.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CodeVisual() {
  return (
    <div className="hero-visual" aria-label="Decorative illustration of a developer workspace">
      <div className="hero-visual-ring ring-one"/><div className="hero-visual-ring ring-two"/>
      <div className="code-window">
        <div className="code-window-bar"><span className="traffic"><i/><i/><i/></span><span className="code-file"><Code2 size={13}/> developer.js</span><span className="window-dots">•••</span></div>
        <div className="code-lines" aria-hidden="true">
          <div><span className="line-num">01</span><span className="code-purple">const </span><span className="code-blue">developer </span><span className="code-faded">= {'{'}</span></div>
          <div><span className="line-num">02</span><span className="code-space"/><span className="code-cyan">name</span><span className="code-faded">: </span><span className="code-yellow">'Sarfaraj Ali'</span><span className="code-faded">,</span></div>
          <div><span className="line-num">03</span><span className="code-space"/><span className="code-cyan">focus</span><span className="code-faded">: </span><span className="code-yellow">'Frontend'</span><span className="code-faded">,</span></div>
          <div><span className="line-num">04</span><span className="code-space"/><span className="code-cyan">passion</span><span className="code-faded">: [</span></div>
          <div><span className="line-num">05</span><span className="code-space code-space-wide"/><span className="code-yellow">'Design'</span><span className="code-faded">, </span><span className="code-yellow">'Code'</span></div>
          <div><span className="line-num">06</span><span className="code-space"/><span className="code-faded">],</span></div>
          <div><span className="line-num">07</span><span className="code-space"/><span className="code-cyan">building</span><span className="code-faded">: </span><span className="code-purple">true</span></div>
          <div><span className="line-num">08</span><span className="code-faded">{'}'};</span></div>
          <div><span className="line-num">09</span><span className="code-cursor"/></div>
        </div>
        <div className="code-status"><span><span className="status-dot"/> All systems ready</span><span>JavaScript <Braces size={13}/></span></div>
      </div>
      <div className="float-note note-top"><span className="float-icon"><Sparkles size={18}/></span><span><b>Creative thinking</b><small>Meets clean code</small></span></div>
      <div className="float-note note-bottom"><span className="float-icon icon-blue"><TerminalSquare size={18}/></span><span><b>Building for the web</b><small>One project at a time</small></span></div>
      <div className="hero-visual-label">DESIGN <span>×</span> DEVELOPMENT</div>
    </div>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const onPointerMove = (event) => {
    if (reducedMotion || !heroRef.current || event.pointerType === 'touch') return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    heroRef.current.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  };
  return (
    <section id="home" className="hero-section" ref={heroRef} onPointerMove={onPointerMove}>
      <div className="hero-grid-overlay"/><div className="hero-glow"/><div className="hero-orb"/>
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal delay={0.04}><p className="hero-eyebrow"><span className="status-dot"/> OPEN TO LEARNING & COLLABORATION <span className="hero-eyebrow-line"/></p></Reveal>
          <Reveal delay={0.1}><p className="hero-hello">Hello, I'm</p></Reveal>
          <Reveal delay={0.16}><h1>Sk Sarfaraj<br/><span>Ali<span className="period">.</span></span></h1></Reveal>
          <Reveal delay={0.23}><div className="hero-role"><span className="role-bracket">&lt;</span> <TypeRole /> <span className="role-bracket">/&gt;</span></div></Reveal>
          <Reveal delay={0.28}><p className="hero-description">{portfolio.intro} <span>Currently studying Computer Science & Engineering in Indore.</span></p></Reveal>
          <Reveal className="hero-buttons" delay={0.34}>
            <a className="button button-primary" href="#projects">Explore My Work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#contact">Contact Me <ArrowRight size={17}/></a>
            {portfolio.resumeUrl ? <a className="button button-resume" href={portfolio.resumeUrl} download><Download size={16}/> Download Resume</a> : <button className="button button-resume" type="button" disabled title="Resume will be available soon"><Download size={16}/> Resume <span className="resume-soon">SOON</span></button>}
          </Reveal>
          <Reveal delay={0.4}><div className="hero-mini-meta"><span><MapPin size={14}/> {portfolio.location}</span><span className="meta-divider"/><span><GraduationCap size={15}/> Class of {portfolio.education.graduation}</span></div></Reveal>
        </div>
        <Reveal className="hero-graphic" delay={0.26} y={32}><CodeVisual/></Reveal>
      </div>
      <div className="container hero-bottom">
        <a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDown size={16}/></span><span>SCROLL TO EXPLORE</span></a>
        <span className="hero-index">01 <span>/</span> 05</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading number="01" eyebrow="GET TO KNOW ME" title={<>A little about <span className="text-gradient">me.</span></>} subtitle="Curious by nature. Focused on learning. Always building." />
        <div className="about-grid">
          <Reveal className="portrait-col">
            <div className="portrait-card">
              {portfolio.profileImage ? <img src={portfolio.profileImage} alt="Portrait of Sk Sarfaraj Ali" className="portrait-image"/> : (
                <div className="portrait-placeholder" aria-label="Profile photo will be added soon"><div className="portrait-grid"/><span className="portrait-initials">SA<span>.</span></span><div className="portrait-accent"/></div>
              )}
              {!portfolio.profileImage && <span className="portrait-note">YOUR PHOTO HERE <ArrowUpRight size={13}/></span>}
            </div>
            <div className="portrait-caption"><span className="caption-line"/> A developer in the making</div>
          </Reveal>
          <div className="about-content">
            <Reveal><div className="eyebrow eyebrow-small">WHO I AM</div><h3>More than code.<br/><span>It's about creating.</span></h3></Reveal>
            <Reveal delay={0.08}><p>{portfolio.about}</p><p>My goal is to grow into a well-rounded software developer while building experiences that are useful, accessible and carefully designed.</p></Reveal>
            <Reveal className="about-info" delay={0.12}>
              <div className="about-info-card"><span className="about-icon"><GraduationCap size={21}/></span><div><span className="small-label">EDUCATION</span><strong>B.Tech · Computer Science</strong><small>{portfolio.education.college}</small></div></div>
              <div className="about-info-card"><span className="about-icon"><MapPin size={21}/></span><div><span className="small-label">BASED IN</span><strong>{portfolio.location}</strong><small>Graduating in {portfolio.education.graduation}</small></div></div>
            </Reveal>
            <Reveal delay={0.18}>
              {portfolio.resumeUrl ? <a href={portfolio.resumeUrl} download className="text-button">Download Resume <Download size={16}/></a> : <span className="text-button text-button-disabled" aria-label="Resume will be available soon">Resume coming soon <Download size={16}/></span>}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const skillSymbols = { 'C': 'C', 'C++': 'C++', Java: 'J', 'Python (Basic)': 'Py', HTML: '5', CSS: '3', JavaScript: 'JS', Git: 'Git', GitHub: 'GH', 'VS Code': '</>' };
const skillIcons = [Code2, Braces, Command];
function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading number="02" eyebrow="MY TOOLKIT" title={<>Skills &amp; <span className="text-gradient">technologies.</span></>} subtitle="A growing set of tools I use to turn concepts into functional interfaces." />
        <div className="skills-grid">
          {portfolio.skills.map((skill, index) => {
            const Icon = skillIcons[index];
            return <Reveal key={skill.category} className={`skill-card skill-card-${index + 1}`} delay={index * 0.08}>
              <div className="skill-card-head"><span className="skill-main-icon"><Icon size={23}/></span><span className="skill-count">0{index + 1} / 03</span></div>
              <h3>{skill.category}</h3><p>{skill.caption}</p>
              <div className="skill-items">{skill.items.map(item => <span key={item} className="skill-pill"><span className="skill-symbol">{skillSymbols[item]}</span>{item}</span>)}</div>
              <div className="skill-card-decoration" aria-hidden="true"><Icon size={120} strokeWidth={0.7}/></div>
            </Reveal>;
          })}
        </div>
        <Reveal className="skills-caption"><Sparkles size={16}/><span>Always exploring, learning and refining my craft.</span></Reveal>
      </div>
    </section>
  );
}

function PreviewConcept({ project }) {
  if (project.screenshot) return <img className="project-screen-image" src={project.screenshot} alt={`${project.name} website screenshot`} loading="lazy"/>;
  if (project.theme === 'interior') return (
    <div className="concept concept-interior" aria-label="Conceptual visual placeholder for FEALITY ITALY; not an actual website screenshot">
      <div className="concept-interior-left"><span className="concept-minilabel">FEALITY ITALY</span><div className="concept-arch"><span className="arch-window"/><span className="arch-counter"/><span className="arch-island"/></div></div>
      <div className="concept-interior-right"><span>ITALIAN-INSPIRED LIVING</span><strong>Spaces<br/>with soul<span>.</span></strong><div className="concept-line"/><small>EXPLORE COLLECTIONS <ArrowUpRight size={11}/></small></div>
      <span className="concept-corner">01 / 02</span>
    </div>
  );
  return (
    <div className="concept concept-portfolio" aria-label="Conceptual visual placeholder for personal portfolio; not an actual website screenshot">
      <div className="concept-browser"><span/><span/><span/><i>sarfaraj / portfolio</i></div>
      <div className="concept-inner"><span className="concept-minilabel"><span className="status-dot"/> PERSONAL PORTFOLIO</span><strong>Design.<br/><span>Develop.</span><br/>Deliver.</strong><span className="concept-caret">_</span><div className="concept-skeleton"><i/><i/><i/></div></div>
      <div className="concept-orbit"/>
    </div>
  );
}

function ProjectCard({ project, featured = false }) {
  return <Reveal className={`project-card ${featured ? 'project-featured' : ''}`}>
    <div className="project-preview"><PreviewConcept project={project}/>{!project.screenshot && <span className="preview-disclaimer">CONCEPT PREVIEW · SCREENSHOT PENDING</span>}</div>
    <div className="project-details">
      <div className="project-topline"><span>FEATURED PROJECT / {project.number}</span><span><ArrowUpRight size={18}/></span></div>
      <span className="project-category">{project.category}</span>
      <h3>{project.name}</h3><p>{project.description}</p>
      <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
      <div className="project-actions">
        {project.liveUrl && <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Preview <ArrowUpRight size={16}/></a>}
        {project.githubUrl && <a className="project-repo-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github size={17}/> Source Code</a>}
      </div>
    </div>
  </Reveal>;
}
function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading number="03" eyebrow="SELECTED WORK" title={<>Things I've <span className="text-gradient">built.</span></>} subtitle="A look at real projects, from elegant interfaces to personal experiments." />
        <div className="projects-list">{portfolio.projects.map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0}/>)}</div>
        <Reveal className="more-projects"><span>Interested in seeing more of my code?</span><a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer">Explore GitHub <ArrowUpRight size={17}/></a></Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [notice, setNotice] = useState('');
  const change = event => { setForm(prev => ({ ...prev, [event.target.name]: event.target.value })); setNotice(''); };
  const emailDraft = event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Sarfaraj,\n\n${form.message}\n\nFrom: ${form.name}\nReply-to: ${form.email}`);
    setNotice('Your email application will open with a prepared draft. Nothing has been sent automatically.');
    window.location.href = `mailto:${portfolio.contact.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading number="04" eyebrow="LET'S CONNECT" title={<>Let's build something <span className="text-gradient">great.</span></>} subtitle="Have an interesting idea, a project, or just want to say hello? I'd love to hear from you." />
        <div className="contact-grid">
          <Reveal className="contact-intro">
            <div className="contact-spark"><Sparkles size={22}/></div>
            <h3>Have something<br/><span>in mind?</span></h3>
            <p>I'm interested in opportunities to learn, collaborate, and contribute to meaningful projects.</p>
            <div className="contact-methods">
              <a href={`mailto:${portfolio.contact.email}`} className="contact-method"><span><Mail size={20}/></span><div><small>EMAIL ME</small><strong>{portfolio.contact.email}</strong></div><ArrowUpRight size={17}/></a>
              <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" className="contact-method"><span><Github size={20}/></span><div><small>FOLLOW MY WORK</small><strong>github.com/sarfaraj666</strong></div><ArrowUpRight size={17}/></a>
              {portfolio.contact.linkedin && <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method"><span><Linkedin size={20}/></span><div><small>CONNECT WITH ME</small><strong>LinkedIn Profile</strong></div><ArrowUpRight size={17}/></a>}
              {portfolio.contact.showPhone && portfolio.contact.phone && <a href={`tel:${portfolio.contact.phone}`} className="contact-method"><span><Laptop2 size={20}/></span><div><small>CALL ME</small><strong>{portfolio.contact.phone}</strong></div><ArrowUpRight size={17}/></a>}
            </div>
          </Reveal>
          <Reveal className="contact-form-wrapper" delay={0.12}>
            <div className="form-header"><span><Send size={17}/> START A CONVERSATION</span><span className="form-indicator"><span className="status-dot"/> Email draft</span></div>
            <form onSubmit={emailDraft} className="contact-form">
              <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="What should I call you?" value={form.name} onChange={change} maxLength={80} required />
              <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={change} maxLength={120} required />
              <label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" placeholder="Tell me a little about your idea..." rows={5} value={form.message} onChange={change} maxLength={3000} required />
              <button type="submit" className="button button-primary form-submit">Open Email Draft <ArrowUpRight size={17}/></button>
              <p className="form-disclaimer">No backend is connected. This opens your email app; it does not send a message automatically.</p>
              <p className="form-notice" role="status" aria-live="polite">{notice}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand"><a href="#home" className="footer-logo">S<span>.</span>A</a><p>Thoughtfully designed. Carefully developed.</p></div>
        <div className="footer-right"><div className="footer-socials"><a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19}/></a>{portfolio.contact.linkedin && <a href={portfolio.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>}<a href={`mailto:${portfolio.contact.email}`} aria-label="Email"><Mail size={19}/></a></div><a href="#home" className="back-top" aria-label="Back to top"><ArrowUp size={19}/></a></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Sk Sarfaraj Ali</span><span>MADE WITH PURPOSE <span className="footer-star">✳</span> INDORE, INDIA</span></div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.style.colorScheme = theme;
    try { window.localStorage.setItem('portfolio-theme', theme); } catch { /* storage optional */ }
  }, [theme]);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar theme={theme} toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
    <main id="main"><Hero/><About/><Skills/><Projects/><Contact/></main>
    <Footer/>
  </>;
}
