import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Cloud,
  Database,
  GitBranch,
  LayoutTemplate,
  LockKeyhole,
  Pause,
  Play,
  Radio,
  Layers3,
} from "lucide-react";

import { systemLayers as layers, deliverySteps } from "./system-data";
const layerIcons = {
  layout: LayoutTemplate,
  services: Braces,
  cloud: Cloud,
  data: Database,
};

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
      data-in-view={inView}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="console-orbit console-orbit-one" aria-hidden="true" />
      <div className="console-orbit console-orbit-two" aria-hidden="true" />
      <span className="ambient-cube cube-one" aria-hidden="true" />
      <span className="ambient-cube cube-two" aria-hidden="true" />
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
              role="tablist"
              aria-label="System explorer view"
              onKeyDown={(event) => {
                if (
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                    event.key,
                  )
                )
                  return;
                event.preventDefault();
                const next =
                  event.key === "Home"
                    ? "architecture"
                    : event.key === "End"
                      ? "delivery"
                      : view === "architecture"
                        ? "delivery"
                        : "architecture";
                setView(next);
                event.currentTarget.querySelector(`#view-${next}`)?.focus();
              }}
            >
              <button
                id="view-architecture"
                role="tab"
                aria-selected={view === "architecture"}
                aria-controls="system-view-panel"
                tabIndex={view === "architecture" ? 0 : -1}
                onClick={() => setView("architecture")}
              >
                Architecture
              </button>
              <button
                id="view-delivery"
                role="tab"
                aria-selected={view === "delivery"}
                aria-controls="system-view-panel"
                tabIndex={view === "delivery" ? 0 : -1}
                onClick={() => setView("delivery")}
              >
                Delivery
              </button>
            </div>
          </div>
          <div
            id="system-view-panel"
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`view-${view}`}
          >
            {view === "architecture" ? (
              <div className="console-architecture">
                <div className="console-guide">
                  <span>SELECT A LAYER TO EXPLORE</span>
                  <ArrowDown size={12} />
                </div>
                <div className="console-layers">
                  {layers.map((layer) => {
                    const Icon = layerIcons[layer.icon];
                    return (
                      <div className="console-layer-wrap" key={layer.id}>
                        <button
                          className="console-layer"
                          aria-controls="system-inspector"
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
                          <div
                            className="console-connectors"
                            aria-hidden="true"
                          >
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
                  <span>ILLUSTRATIVE DELIVERY PRACTICE</span>
                  <GitBranch size={13} />
                </div>
                {deliverySteps.map((step, index) => (
                  <div className="delivery-step" key={step.title}>
                    <span className="delivery-index">0{index + 1}</span>
                    <div>
                      <strong>{step.title}</strong>
                      <small>{step.detail}</small>
                      <p>{step.description}</p>
                    </div>
                    <ArrowUpRight size={15} aria-hidden="true" />
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
          </div>
          <div
            id="system-inspector"
            className="console-inspector"
            aria-live="polite"
            aria-atomic="true"
          >
            <p>
              <Layers3 size={14} aria-hidden="true" />
              <span>
                {view === "architecture" ? active.title : "Delivery practices"}
              </span>
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
        <span className="console-footnote-line" /> A capability illustration,
        not a production system or live telemetry.
      </div>
    </div>
  );
}
