import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Cloud,
  Database,
  GitBranch,
  LayoutTemplate,
  LockKeyhole,
  Pause,
  Play,
  Radio,
  Terminal,
} from "lucide-react";

const layers = [
  {
    id: "interface",
    number: "01",
    title: "Experience layer",
    label: "Angular · React · Blazor",
    icon: LayoutTemplate,
    code: "interface.render()",
    detail:
      "Responsive interfaces. Reusable components. Accessibility built into the experience.",
    tags: ["TypeScript", "Component architecture", "WCAG 2.1"],
  },
  {
    id: "services",
    number: "02",
    title: "Application core",
    label: "C# · ASP.NET Core · REST",
    icon: Braces,
    code: "services.connect()",
    detail:
      "Clear contracts and maintainable service boundaries. Secure APIs built around real business workflows.",
    tags: [".NET 6", "SOLID", "Microservices"],
  },
  {
    id: "cloud",
    number: "03",
    title: "Cloud & integration",
    label: "Azure · Functions · Service Bus",
    icon: Cloud,
    code: "workflow.orchestrate()",
    detail:
      "Event-driven integrations with message correlation, retry handling, and secure cloud resource access.",
    tags: ["Managed Identities", "API Management", "Key Vault"],
  },
  {
    id: "data",
    number: "04",
    title: "Data foundations",
    label: "SQL Server · Storage · EF Core",
    icon: Database,
    code: "data.persist()",
    detail:
      "Reliable relational and document workflows, supported by query optimization and application telemetry.",
    tags: ["Azure SQL", "Blob Storage", "Application Insights"],
  },
];

function subscribeVisibility(callback) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}

export default function SystemConsole({
  paused,
  onToggleMotion,
  reducedMotion,
}) {
  const [selected, setSelected] = useState("services");
  const [view, setView] = useState("architecture");
  const [inView, setInView] = useState(true);
  const ref = useRef(null);
  const visible = useSyncExternalStore(
    subscribeVisibility,
    () => document.visibilityState === "visible",
    () => true,
  );
  const active = layers.find((layer) => layer.id === selected);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  function handlePointerMove(event) {
    if (
      paused ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    ref.current.style.setProperty(
      "--tilt-x",
      `${((event.clientY - rect.top) / rect.height - 0.5) * -5}deg`,
    );
    ref.current.style.setProperty(
      "--tilt-y",
      `${((event.clientX - rect.left) / rect.width - 0.5) * 6}deg`,
    );
  }
  function resetTilt() {
    ref.current.style.setProperty("--tilt-x", "0deg");
    ref.current.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      ref={ref}
      className="system-console"
      data-running={!paused && visible && inView}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="console-orbit console-orbit-one" aria-hidden="true" />
      <div className="console-orbit console-orbit-two" aria-hidden="true" />
      <span className="console-coordinate" aria-hidden="true">
        DESIGN / BUILD / CONNECT
      </span>
      <div className="console-float">
        <section
          className="console-window"
          aria-label="Interactive illustrative system architecture"
        >
          <div className="console-titlebar">
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span>rm / system.explorer</span>
            <LockKeyhole size={12} aria-hidden="true" />
          </div>
          <div className="console-toolbar">
            <span className="console-branch">
              <GitBranch size={12} /> portfolio
            </span>
            <div
              className="console-tabs"
              role="group"
              aria-label="System explorer view"
            >
              <button
                aria-pressed={view === "architecture"}
                onClick={() => setView("architecture")}
              >
                Architecture
              </button>
              <button
                aria-pressed={view === "delivery"}
                onClick={() => setView("delivery")}
              >
                Delivery
              </button>
            </div>
          </div>
          {view === "architecture" ? (
            <div className="console-architecture">
              <div className="console-guide">
                <span>SELECT A LAYER TO EXPLORE</span>
                <ArrowDown size={12} />
              </div>
              <div className="console-layers">
                {layers.map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <div className="console-layer-wrap" key={layer.id}>
                      <button
                        className="console-layer"
                        aria-pressed={selected === layer.id}
                        onClick={() => setSelected(layer.id)}
                      >
                        <span className="console-layer-icon">
                          <Icon size={19} strokeWidth={1.5} />
                        </span>
                        <span className="console-layer-text">
                          <strong>{layer.title}</strong>
                          <small>{layer.label}</small>
                        </span>
                        <span className="console-layer-index">
                          {layer.number}
                        </span>
                        <ArrowUpRight className="layer-explore" size={15} />
                      </button>
                      {layer.id !== "data" && (
                        <div className="console-connectors" aria-hidden="true">
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
          ) : (
            <div className="console-delivery">
              <div className="console-guide">
                <span>FROM COMMIT TO CONFIDENCE</span>
                <GitBranch size={13} />
              </div>
              {[
                { title: "Source & review", detail: "Git · Code reviews" },
                {
                  title: "Build & validate",
                  detail: "CI/CD · xUnit · Jasmine",
                },
                {
                  title: "Release & observe",
                  detail: "Azure DevOps · Application Insights",
                },
              ].map((step, index) => (
                <div className="delivery-step" key={step.title}>
                  <span className="delivery-index">0{index + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <small>{step.detail}</small>
                  </div>
                  <Check size={15} />
                </div>
              ))}
              <div className="delivery-rail" aria-hidden="true">
                <span />
              </div>
              <p className="delivery-caption">
                Repeatable releases.
                <br />
                Visibility beyond deployment.
              </p>
            </div>
          )}
          <div
            className="console-inspector"
            aria-live="polite"
            aria-atomic="true"
          >
            <p>
              <Terminal size={13} />
              <span>
                {view === "architecture" ? active.code : "release.validate()"}
              </span>
              <span className="terminal-caret" aria-hidden="true" />
            </p>
            <p className="inspector-description">
              {view === "architecture"
                ? active.detail
                : "Automated validation, controlled releases, post-deployment checks, and production observability."}
            </p>
            <div className="inspector-tags">
              {(view === "architecture"
                ? active.tags
                : ["Testing", "Release management", "Monitoring"]
              ).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="console-statusbar">
            <span>
              <Radio size={12} /> ILLUSTRATIVE SYSTEM
            </span>
            <button
              disabled={reducedMotion}
              onClick={onToggleMotion}
              aria-label={
                reducedMotion
                  ? "Reduced motion: animation disabled by device preference"
                  : paused
                    ? "Play system animation"
                    : "Pause system animation"
              }
            >
              {paused ? <Play size={11} /> : <Pause size={11} />}
              {reducedMotion ? "REDUCED MOTION" : paused ? "PLAY" : "PAUSE"}
            </button>
          </div>
        </section>
      </div>
      <div className="console-footnote">
        <span className="console-footnote-line" /> Architecture is how the
        pieces work together.
      </div>
    </div>
  );
}
