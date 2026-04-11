import styles from "./MovingBusScene.module.css";

const routeStops = [
  { label: "Home pickup", left: "16%", delay: "0s" },
  { label: "Clinic visit", left: "48%", delay: "0.45s" },
  { label: "Center dropoff", left: "78%", delay: "0.9s" },
] as const;

export default function MovingBusScene() {
  return (
    <div className="rounded-[1.75rem] border border-slate-200/90 bg-white p-4 shadow-[0_22px_46px_-26px_rgba(7,61,122,0.42)] md:p-6">
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        {routeStops.map((stop, index) => (
          <article
            key={stop.label}
            className="rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-3 text-center shadow-sm"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)]">Stop {index + 1}</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">{stop.label}</p>
          </article>
        ))}
      </div>

      <div className={styles.scene} aria-hidden>
        <div className={styles.route} />

        {routeStops.map((stop) => (
          <div
            key={stop.label}
            className={styles.stop}
            style={{ left: stop.left, ["--delay" as string]: stop.delay }}
          >
            <span className={styles.stopPin} />
            <span className={styles.stopLabel}>{stop.label}</span>
          </div>
        ))}

        <div className={styles.cityBand} />

        <div className={styles.busWrap}>
          <div className={styles.busShadow} />
          <div className={styles.bus}>
            <div className={styles.busAccent} />
            <div className={styles.windowRow}>
              <span className={styles.window} />
              <span className={styles.window} />
              <span className={styles.window} />
              <span className={styles.window} />
            </div>
            <span className={`${styles.wheel} ${styles.wheelFront}`} />
            <span className={`${styles.wheel} ${styles.wheelRear}`} />
            <span className={styles.busText}>Hayat Transit</span>
          </div>
        </div>

        <div className={styles.road}>
          <div className={styles.lane} />
        </div>
      </div>
    </div>
  );
}
