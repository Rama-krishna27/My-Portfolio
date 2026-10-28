import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Copy,
  Database,
  GraduationCap,
  Layers3,
  LayoutTemplate,
  Linkedin,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { experience, profile, projects, skills } from "./data";

const icons = {
  code: Code2,
  layout: LayoutTemplate,
  cloud: Cloud,
  database: Database,
  sparkles: Sparkles,
  shield: ShieldCheck,
  layers: Layers3,
  activity: Activity,
  workflow: Workflow,
};
const navigation = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
];

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function useReveal() {
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("will-reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    ["home", ...navigation.map((item) => item.id), "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (
        event.type === "pointerdown" &&
        !menuRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", close);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#home"
          className="wordmark"
          aria-label="rm. — Ramakrishna Maddinapudi, home"
          onClick={() => setOpen(false)}
        >
          rm<span>.</span>
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav
          ref={menuRef}
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation open" : "navigation"}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Let’s connect <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

const systemNodes = [
  {
    title: "Interface",
    label: "01 / EXPERIENCE",
    icon: LayoutTemplate,
    detail:
      "Angular and React interfaces connect business workflows to application services. Accessible controls and responsive layouts keep the experience usable.",
    tech: "Angular · React · TypeScript",
  },
  {
    title: "API gateway",
    label: "02 / TRUST BOUNDARY",
    icon: ShieldCheck,
    detail:
      "Authentication, authorization, and explicit API contracts protect service boundaries. Related capabilities include OAuth 2.0, JWT, and Microsoft Entra ID.",
    tech: "REST · OAuth 2.0 · JWT",
  },
  {
    title: ".NET services",
    label: "03 / APPLICATION CORE",
    icon: Code2,
    detail:
      "C# and ASP.NET Core services organize business rules with dependency injection, clear boundaries, and maintainable data access.",
    tech: "C# · ASP.NET Core · EF Core",
  },
  {
    title: "Message bus",
    label: "04 / ASYNCHRONOUS FLOW",
    icon: Workflow,
    detail:
      "An illustrative asynchronous boundary: messages decouple work, while retries and monitoring help make failures understandable. This diagram demonstrates a pattern, not a delivered project.",
    tech: "Event-driven architecture · Asynchronous processing",
  },
  {
    title: "Data & documents",
    label: "05 / PERSISTENCE",
    icon: Database,
    detail:
      "Relational workflows, data validation, query optimization, and contextual retrieval connect application behavior to durable information.",
    tech: "SQL Server · ETL · Document retrieval",
  },
];

function SystemIllustration() {
  const [selected, setSelected] = useState(2);
  const [localPause, setLocalPause] = useState(false);
  const [speed, setSpeed] = useState("normal");
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.visible = String(entry.isIntersecting);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const node = systemNodes[selected];
  return (
    <div
      ref={ref}
      className="system-console"
      data-visible="true"
      data-paused={localPause}
      data-speed={speed}
      onPointerMove={(event) => {
        if (
          event.pointerType !== "mouse" ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--depth",
          `${(event.clientX - bounds.left - bounds.width / 2) / 100}deg`,
        );
      }}
      onPointerLeave={(event) =>
        event.currentTarget.style.setProperty("--depth", "0deg")
      }
    >
      <div className="console-heading">
        <span>
          <span className="status-dot" /> SYSTEM EXPLORER
        </span>
        <span>RM—01</span>
      </div>
      <div className="system-map">
        <div className="system-orbit" aria-hidden="true">
          <i />
          <i />
        </div>
        <div
          className="system-nodes"
          role="group"
          aria-label="Explore illustrative architecture layers"
        >
          {systemNodes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="node-row" key={item.title}>
                <button
                  className="system-node"
                  aria-pressed={selected === index}
                  aria-controls="node-explanation"
                  onClick={() => setSelected(index)}
                >
                  <Icon size={20} />
                  <span>
                    <small>{item.label}</small>
                    <strong>{item.title}</strong>
                  </span>
                  <span className="node-index">0{index + 1}</span>
                </button>
                {index < 4 && (
                  <div className="packet-link" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div
        id="node-explanation"
        className="node-explanation"
        aria-live="polite"
      >
        <p className="node-tech">{node.tech}</p>
        <p>{node.detail}</p>
      </div>
      <div className="console-controls">
        <button
          onClick={() => setLocalPause(!localPause)}
          aria-pressed={localPause}
        >
          {localPause ? "Play flow" : "Pause flow"}
        </button>
        <label>
          Flow{" "}
          <select
            aria-label="Flow speed"
            value={speed}
            onChange={(event) => setSpeed(event.target.value)}
          >
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
          </select>
        </label>
      </div>
      <p className="illustrative-note">
        Illustrative architecture · Select a layer to explore.
        <br />
        Capability map, not an employer or production system.
      </p>
    </div>
  );
}

function MotionControl() {
  const [paused, setPaused] = useState(() => {
    try {
      return localStorage.getItem("rm-motion") === "paused";
    } catch {
      return false;
    }
  });
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "running";
    try {
      localStorage.setItem("rm-motion", paused ? "paused" : "running");
    } catch {
      /* Storage is optional. */
    }
  }, [paused]);
  useEffect(() => {
    const sync = () => {
      document.documentElement.dataset.hidden = String(document.hidden);
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);
  return (
    <button
      className="motion-control"
      aria-pressed={paused}
      onClick={() => setPaused(!paused)}
    >
      {paused ? "Motion: paused" : "Pause motion"}
      <span aria-hidden="true">{paused ? " ▷" : " Ⅱ"}</span>
    </button>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="hero container"
      aria-labelledby="hero-heading"
    >
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">
          <span className="status-dot" /> SOFTWARE. SYSTEMS. SOLUTIONS.
        </p>
        <p className="hero-intro">Ramakrishna Maddinapudi</p>
        <h1 id="hero-heading">
          Connected systems.
          <br />
          <span>Considered engineering.</span>
        </h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-description">
          I turn complex business challenges into reliable digital experiences —
          connecting modern interfaces, resilient .NET services, and the cloud.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#projects">
            Explore my work <ArrowDownRight size={18} />
          </a>
          <a className="text-link" href="#contact">
            Let’s talk <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-note">
          <span>12+ years of experience</span>
          <span className="note-divider" />
          <span>From architecture to delivery</span>
        </div>
      </div>
      <SystemIllustration />
      <a className="scroll-cue" href="#about">
        <ArrowDown size={14} /> A LITTLE MORE ABOUT ME
      </a>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="about-grid" data-reveal>
          <div>
            <p className="eyebrow">
              <span>01 /</span> THE PERSON BEHIND THE CODE
            </p>
            <h2 id="about-heading">
              Big-picture thinking.
              <br />
              Detail-driven delivery<span className="accent">.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a full stack developer with{" "}
              <strong>12+ years of experience</strong> building and modernizing
              enterprise applications. My work spans government, healthcare,
              financial services, retail, and consulting.
            </p>
            <p>
              I work at the intersection of architecture and implementation:
              shaping maintainable .NET services, building intuitive Angular and
              React interfaces, and bringing them together on Azure and AWS.
            </p>
            <p>
              Along the way, I collaborate with business teams, architects, and
              QA to turn real requirements into dependable software. My
              technical interests also include contextual retrieval and
              AI-assisted workflows.
            </p>
          </div>
        </div>
        <div className="principles-grid" data-reveal>
          <div>
            <span className="principle-number">01</span>
            <h3>Build with intention</h3>
            <p>
              Clear boundaries, reusable components, and architecture that can
              evolve.
            </p>
          </div>
          <div>
            <span className="principle-number">02</span>
            <h3>Think beyond the code</h3>
            <p>
              Understand the workflow, connect the teams, and solve the business
              problem.
            </p>
          </div>
          <div>
            <span className="principle-number">03</span>
            <h3>Own the full journey</h3>
            <p>
              From API contracts and accessible interfaces to testing, releases,
              and production support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section
      id="expertise"
      className="section container"
      aria-label="Technical expertise"
    >
      <SectionHeading
        number="02"
        eyebrow="TOOLS WITH PURPOSE"
        title={<>A connected skill set.</>}
        description="Capabilities across the stack. Specific implementation experience is described separately in the case studies."
      />
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = icons[skill.icon];
          return (
            <article className="skill-card" key={skill.title} data-reveal>
              <div className="skill-card-top">
                <span className="icon-box">
                  <Icon size={21} strokeWidth={1.6} />
                </span>
                <span className="card-plus" aria-hidden="true">
                  +
                </span>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <details className="skill-details" open={index < 2}>
                <summary>
                  Explore technologies <ChevronDown size={15} />
                </summary>
                <ul className="skill-tags">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-label="Professional experience"
    >
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="THE JOURNEY SO FAR"
          title={<>Experience that adds up.</>}
          description="A career built on enterprise challenges, evolving technology, and learning from every domain."
        />
        <div className="timeline">
          {experience.map((job, index) => (
            <article
              className={`experience-item ${index === 0 ? "current-role" : ""}`}
              key={job.company}
              data-reveal
            >
              <div className="experience-date">
                <span>
                  {job.start} — {job.end}
                </span>
                <span className="experience-domain">{job.domain}</span>
              </div>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="experience-body">
                <div className="experience-top">
                  <h3>{job.company}</h3>
                  {index === 0 && (
                    <span className="current-badge">CURRENT ROLE</span>
                  )}
                </div>
                <p className="job-role">{job.role}</p>
                <p className="job-location">{job.location}</p>
                <p className="job-summary">{job.summary}</p>
                <details className="job-details" open={index === 0}>
                  <summary>
                    Contributions <ChevronDown size={16} />
                  </summary>
                  <ul>
                    {job.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
                <ul className="tech-tags">
                  {job.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-grid" />
      {type === "architecture" && (
        <div className="architecture-art">
          <div className="art-small-label">
            ONE PLATFORM. CONNECTED DOMAINS.
          </div>
          <div className="art-modules">
            <span>Identity</span>
            <span>Workflows</span>
            <span>Reporting</span>
          </div>
          <div className="art-lines" />
          <div className="art-api">
            <Code2 size={18} /> .NET SERVICE LAYER <span>↗</span>
          </div>
        </div>
      )}
      {type === "intelligence" && (
        <div className="ai-art">
          <div className="ai-ring ring-outer" />
          <div className="ai-ring ring-inner" />
          <div className="ai-core">
            <Sparkles size={30} strokeWidth={1.3} />
          </div>
          <span className="ai-label ai-label-one">CONTEXT</span>
          <span className="ai-label ai-label-two">RETRIEVAL</span>
          <span className="ai-label ai-label-three">INSIGHT</span>
        </div>
      )}
      {type === "healthcare" && (
        <div className="health-art">
          <div className="health-header">
            <Activity size={18} />
            <span>CONNECTED CARE</span>
            <span className="health-dots">•••</span>
          </div>
          <div className="health-flow">
            <span>Order</span>
            <ArrowRight size={14} />
            <span>Analysis</span>
            <ArrowRight size={14} />
            <span>Results</span>
          </div>
          <svg viewBox="0 0 330 55">
            <path
              d="M0 30H70L80 30L90 15L105 45L120 5L135 42L148 30H200L215 20L228 34L240 30H330"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <div className="health-bars">
            <i />
            <i />
            <i />
          </div>
        </div>
      )}
      {type === "lending" && (
        <div className="lending-art">
          <div className="art-small-label">A CONNECTED LENDING LIFECYCLE</div>
          {["Customer onboarding", "Credit evaluation", "Underwriting"].map(
            (label, i) => (
              <div className="lending-step" key={label}>
                <span>0{i + 1}</span>
                <strong>{label}</strong>
                {i === 2 ? <ArrowUpRight size={16} /> : <Check size={15} />}
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}

function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    dialog.querySelector("button")?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-content">
        <button
          className="dialog-close"
          onClick={onClose}
          aria-label="Close project details"
          autoFocus
        >
          <X size={22} />
        </button>
        <p className="eyebrow">
          {project.company} / {project.category}
        </p>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p className="dialog-subtitle">{project.subtitle}</p>
        <p className="dialog-period">{project.period}</p>
        <h3>The context</h3>
        <p>{project.context}</p>
        <h3>Engineering challenge</h3>
        <p>{project.description}</p>
        <h3>My contributions</h3>
        <ul>
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>The outcome</h3>
        <p>{project.outcome}</p>
        <ul className="tech-tags">
          {project.technologies.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <p className="project-disclosure">
          Professional work described in my resume. Illustrations are
          conceptual; employer source code and product screenshots are not
          published.
        </p>
      </div>
    </dialog>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState(null);
  const lastTrigger = useRef(null);
  const categories = [
    "All work",
    "Enterprise",
    "AI & Cloud",
    "Healthcare",
    "Financial services",
  ];
  const shown =
    filter === "All work"
      ? projects
      : projects.filter((project) => project.category === filter);
  function closeDialog() {
    setSelected(null);
    requestAnimationFrame(() => lastTrigger.current?.focus());
  }
  return (
    <section
      id="projects"
      className="section container"
      aria-label="Selected professional work"
    >
      <SectionHeading
        number="04"
        eyebrow="SELECTED PROFESSIONAL WORK"
        title={<>Complexity, made useful.</>}
        description="A closer look at the systems and workflows I’ve helped build. Drawn from my enterprise experience."
      />
      <div
        className="project-filters"
        role="group"
        aria-label="Filter projects by domain"
      >
        {categories.map((category) => (
          <button
            key={category}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {shown.length} {shown.length === 1 ? "project" : "projects"} shown
      </p>
      <div className="projects-grid">
        {shown.map((project) => (
          <article className="project-card" key={project.id}>
            <ProjectVisual type={project.visual} />
            <div className="project-card-content">
              <div className="project-meta">
                <span>{project.company}</span>
                <span>{project.number} /</span>
              </div>
              <h3>
                <button
                  className="project-open"
                  onClick={(event) => {
                    lastTrigger.current = event.currentTarget;
                    setSelected(project);
                  }}
                >
                  {project.title}
                  <ArrowUpRight size={23} />
                </button>
              </h3>
              <p>{project.description}</p>
              <ul className="tech-tags">
                {project.technologies.slice(0, 3).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="project-more">
                Explore the work <ArrowRight size={16} />
              </span>
            </div>
          </article>
        ))}
      </div>
      <p className="work-note">
        <ShieldCheck size={16} /> Anonymized professional case studies. No
        proprietary code or client data shared.
      </p>
      {selected && <ProjectDialog project={selected} onClose={closeDialog} />}
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="education-section section"
      aria-label="Education"
    >
      <div className="container education-grid" data-reveal>
        <div>
          <p className="eyebrow">
            <span>05 /</span> THE FOUNDATION
          </p>
          <h2>Learning is a constant.</h2>
          <p className="education-intro">
            A grounding in computer science.
            <br />A practice of growing with the work.
          </p>
        </div>
        <div className="education-card">
          <span className="icon-box">
            <GraduationCap size={26} strokeWidth={1.5} />
          </span>
          <div>
            <span className="education-date">JUL 2010 — MAY 2014</span>
            <h3>Bachelor of Engineering</h3>
            <p className="degree">Computer Science</p>
            <p>Sathyabama Institute of Science and Technology</p>
            <span className="education-location">India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus(
        "Copy unavailable. Select the email address or use the email link.",
      );
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyStatus(""), 4500);
  }
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className="contact-top" data-reveal>
          <div>
            <p className="eyebrow">
              <span>06 /</span> START A CONVERSATION
            </p>
            <h2 id="contact-heading">
              Good work starts
              <br />
              with a connection<span>.</span>
            </h2>
            <p>
              Have an opportunity, a technical challenge, or a shared interest
              in building better software? I’d be glad to connect.
            </p>
            <a className="button button-light" href={`mailto:${profile.email}`}>
              Say hello <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="contact-links">
            <div className="contact-item">
              <Mail size={20} />
              <div>
                <span>EMAIL</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <button
                className="copy-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copyStatus === "Email copied" ? (
                  <Check size={17} />
                ) : (
                  <Copy size={17} />
                )}
              </button>
            </div>
            <div className="contact-item">
              <Linkedin size={20} />
              <div>
                <span>LINKEDIN</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let’s connect professionally <ArrowUpRight size={16} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={20} />
              <div>
                <span>PHONE</span>
                <a href="tel:+19194214520">{profile.phone}</a>
              </div>
            </div>
            <p role="status" className="copy-status">
              {copyStatus}
            </p>
          </div>
        </div>
        <footer className="footer">
          <a href="#home" className="wordmark" aria-label="rm. — Back to home">
            rm<span>.</span>
          </a>
          <p>© {new Date().getFullYear()} Ramakrishna Maddinapudi</p>
          <a className="back-top" href="#home">
            Back to top <ArrowUp size={15} />
          </a>
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <MotionControl />
      <main id="main">
        <Hero />
        <div className="domain-strip">
          <div className="container">
            <span className="domain-caption">EXPERIENCE ACROSS</span>
            <span>Government</span>
            <span className="domain-separator">✳</span>
            <span>Healthcare</span>
            <span className="domain-separator">✳</span>
            <span>Financial services</span>
            <span className="domain-separator">✳</span>
            <span>Retail</span>
            <span className="domain-separator">✳</span>
            <span>Consulting</span>
          </div>
        </div>
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
