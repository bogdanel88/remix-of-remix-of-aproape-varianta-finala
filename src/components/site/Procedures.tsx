import { Sparkles, Scissors, Wind, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const procedures = [
  {
    icon: Sparkles,
    title: "Rinoplastie",
    desc: "Remodelarea estetică a piramidei nazale, în armonie cu trăsăturile naturale ale feței.",
    slug: "rinoplastie",
  },
  {
    icon: Scissors,
    title: "Rinoseptoplastie",
    desc: "Combinație între chirurgia estetică și funcțională — formă echilibrată și respirație optimă.",
    slug: "rinoseptoplastie",
  },
  {
    icon: Wind,
    title: "Deviație de sept",
    desc: "Corectarea septului nazal pentru a îmbunătăți respirația și calitatea somnului.",
    slug: "deviatie-de-sept",
  },
];

export const Procedures = () => {
  return (
    <section id="proceduri" className="scroll-reveal py-24 lg:py-32 bg-cream/40 relative overflow-hidden">
      {/* Decorative animated background — floating orbs + drifting gradient blobs.
          Positioned in corners/edges only, never under the heading or paragraph text. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block z-0" aria-hidden="true">
        {/* Soft drifting gradient blobs */}
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl animate-blob-drift" />
        <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent blur-3xl animate-blob-drift-slow" />

        {/* Floating blue orbs — varied blue shades, kept away from heading text (right column + bottom strip) */}
        {/* Top-right cluster */}
        <span className="absolute top-[10%] right-[6%] w-2.5 h-2.5 rounded-full animate-float-y" style={{ background: "hsl(200 85% 55%)", boxShadow: "0 0 18px hsl(200 85% 60% / 0.7)" }} />
        <span className="absolute top-[22%] right-[14%] w-2 h-2 rounded-full animate-float-y-slow" style={{ background: "hsl(212 75% 45%)", animationDelay: "0.5s" }} />
        <span className="absolute top-[6%] right-[22%] w-1.5 h-1.5 rounded-full animate-float-y" style={{ background: "hsl(188 70% 50%)", animationDelay: "1.1s" }} />
        <span className="absolute top-[34%] right-[8%] w-2 h-2 rounded-full animate-float-y-slow" style={{ background: "hsl(220 80% 60%)", animationDelay: "1.8s" }} />
        <span className="absolute top-[16%] right-[26%] w-1.5 h-1.5 rounded-full animate-float-y" style={{ background: "hsl(195 90% 65%)", animationDelay: "0.3s" }} />
        <span className="absolute top-[44%] right-[18%] w-2.5 h-2.5 rounded-full animate-float-y-slow" style={{ background: "hsl(210 70% 40%)", boxShadow: "0 0 14px hsl(200 85% 55% / 0.5)", animationDelay: "1.4s" }} />
        <span className="absolute top-[2%] right-[14%] w-1 h-1 rounded-full animate-float-y" style={{ background: "hsl(205 80% 55%)", animationDelay: "2.2s" }} />

        {/* Bottom-left cluster */}
        <span className="absolute bottom-[10%] left-[8%] w-2 h-2 rounded-full animate-float-y-slow" style={{ background: "hsl(188 70% 45%)", animationDelay: "0.4s" }} />
        <span className="absolute bottom-[22%] left-[18%] w-1.5 h-1.5 rounded-full animate-float-y" style={{ background: "hsl(212 75% 35%)", animationDelay: "1.6s" }} />
        <span className="absolute bottom-[4%] left-[22%] w-2.5 h-2.5 rounded-full animate-float-y-slow" style={{ background: "hsl(200 85% 60%)", boxShadow: "0 0 16px hsl(200 85% 60% / 0.6)", animationDelay: "0.9s" }} />
        <span className="absolute bottom-[28%] left-[4%] w-2 h-2 rounded-full animate-float-y" style={{ background: "hsl(220 70% 50%)", animationDelay: "2.0s" }} />
        <span className="absolute bottom-[14%] left-[28%] w-1 h-1 rounded-full animate-float-y-slow" style={{ background: "hsl(195 80% 60%)", animationDelay: "0.7s" }} />

        {/* Bottom-right cluster */}
        <span className="absolute bottom-[8%] right-[12%] w-2.5 h-2.5 rounded-full animate-float-y-slow" style={{ background: "hsl(200 85% 55%)", boxShadow: "0 0 14px hsl(200 85% 60% / 0.6)", animationDelay: "1.0s" }} />
        <span className="absolute bottom-[20%] right-[6%] w-1.5 h-1.5 rounded-full animate-float-y" style={{ background: "hsl(188 70% 45%)", animationDelay: "1.7s" }} />
        <span className="absolute bottom-[34%] right-[14%] w-2 h-2 rounded-full animate-float-y-slow" style={{ background: "hsl(212 75% 40%)", animationDelay: "0.6s" }} />

        {/* Subtle animated rings */}
        <span className="absolute top-[18%] right-[4%] w-24 h-24 rounded-full border border-primary/15 animate-pulse-ring" />
        <span className="absolute bottom-[22%] right-[6%] w-16 h-16 rounded-full border border-accent/20 animate-pulse-ring" style={{ animationDelay: "1.4s" }} />

        {/* Animated nose silhouette — top-right empty corner.
            Two paths cross-fade: a "before" profile (with bump) morphs into a refined "after" profile. */}
        <div className="absolute top-8 right-10 xl:right-16 w-44 h-44 xl:w-52 xl:h-52">
          <svg viewBox="0 0 200 200" className="w-full h-full text-primary/70" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="nose-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(212 75% 35%)" />
                <stop offset="100%" stopColor="hsl(200 85% 55%)" />
              </linearGradient>
              <radialGradient id="nose-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(200 85% 60%)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(200 85% 60%)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Soft glow halo behind the nose */}
            <circle cx="100" cy="100" r="80" fill="url(#nose-glow)" className="animate-pulse-ring origin-center" />

            {/* "Before" profile — with a slight bump on the bridge */}
            <path
              d="M 70 30 C 78 55, 70 75, 95 95 C 115 110, 130 118, 128 135 C 126 150, 110 160, 90 158"
              stroke="url(#nose-stroke)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="animate-nose-before"
            />
            {/* "After" profile — clean, refined line */}
            <path
              d="M 72 32 C 82 60, 78 82, 100 100 C 118 114, 130 122, 126 138 C 122 152, 108 160, 90 158"
              stroke="url(#nose-stroke)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="animate-nose-after"
            />

            {/* Sparkle dots that swirl around the nose */}
            <circle cx="140" cy="60" r="2.5" fill="hsl(200 85% 60%)" className="animate-float-y" />
            <circle cx="155" cy="100" r="2" fill="hsl(188 70% 50%)" className="animate-float-y-slow" style={{ animationDelay: "0.6s" }} />
            <circle cx="135" cy="160" r="2.5" fill="hsl(195 90% 65%)" className="animate-float-y" style={{ animationDelay: "1.2s" }} />
            <circle cx="50" cy="80" r="2" fill="hsl(212 75% 50%)" className="animate-float-y-slow" style={{ animationDelay: "0.9s" }} />
          </svg>
        </div>
      </div>

      {/* Dashed red journey line — follows the exact path drawn on the reference image:
          starts to the right of the "PROCEDURI" label, sweeps down the left side past card 1,
          loops under all three cards, climbs up the right side around card 3, then curves
          down and points UP toward the CTA button. Uses dash-flow draw-on animation. */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full hidden lg:block z-[5]"
        viewBox="0 0 1490 1000"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="journey-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.85" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Faint full-path guide */}
        <path
          d="M 430 145
             C 320 160, 200 200, 165 280
             C 130 360, 140 440, 175 500
             C 210 560, 240 630, 230 700
             C 220 770, 280 830, 380 850
             C 500 870, 650 870, 800 855
             C 950 840, 1100 830, 1230 815
             C 1340 800, 1410 720, 1395 600
             C 1380 480, 1330 380, 1240 340
             C 1160 305, 1090 320, 1050 360
             C 1010 400, 1010 460, 1060 500
             C 1130 555, 1240 580, 1310 640
             C 1380 700, 1390 800, 1300 870
             C 1210 920, 1050 935, 900 920
             C 830 912, 790 905, 770 895"
          stroke="hsl(var(--accent))"
          strokeOpacity="0.12"
          strokeWidth="2"
          strokeDasharray="6 8"
          strokeLinecap="round"
        />

        {/* Animated draw-on path (same geometry) */}
        <path
          d="M 430 145
             C 320 160, 200 200, 165 280
             C 130 360, 140 440, 175 500
             C 210 560, 240 630, 230 700
             C 220 770, 280 830, 380 850
             C 500 870, 650 870, 800 855
             C 950 840, 1100 830, 1230 815
             C 1340 800, 1410 720, 1395 600
             C 1380 480, 1330 380, 1240 340
             C 1160 305, 1090 320, 1050 360
             C 1010 400, 1010 460, 1060 500
             C 1130 555, 1240 580, 1310 640
             C 1380 700, 1390 800, 1300 870
             C 1210 920, 1050 935, 900 920
             C 830 912, 790 905, 770 895"
          stroke="url(#journey-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="8 10"
          className="animate-dash-flow"
        />

        {/* Arrow head pointing UP toward the CTA button (positioned at end of path) */}
        <g className="animate-arrow-pulse origin-center">
          <path
            d="M 758 905 L 770 893 L 782 905"
            stroke="hsl(var(--primary))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>

      <div className="container relative z-10">
        <div className="max-w-2xl mb-16 relative">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
            — Proceduri
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight text-balance">
            Intervenții realizate cu <span className="italic">măiestrie</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fiecare procedură este planificată individual, după o consultație
            atentă și o discuție deschisă cu pacientul.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto">
          {procedures.map((p, i) => {
            const Icon = p.icon;
            const cardClasses =
              "group relative p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/25 hover:shadow-elegant transition-all duration-500 block h-full hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

            const inner = (
              <>
                <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {p.desc}
                </p>
                <div className="mt-6 inline-flex max-w-full items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-primary font-medium transition-all duration-300 group-hover:border-primary/25 group-hover:bg-secondary">
                  <span className="leading-snug">Detalii</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </>
            );

            return (
              <Link
                key={p.title}
                to={`/proceduri#${p.slug}`}
                className={cardClasses + " relative z-10"}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {inner}
              </Link>
            );
          })}
        </div>

        <div className="relative mt-20 flex flex-col items-center text-center z-10">
          {/* Compact arrow for tablet & mobile */}
          <svg
            width="120"
            height="70"
            viewBox="0 0 120 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-accent mb-2 opacity-80 lg:hidden w-20 h-12 sm:w-28 sm:h-16"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="arrow-shimmer-mobile" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="45%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--primary-glow))" stopOpacity="1" />
                <stop offset="55%" stopColor="currentColor" stopOpacity="0" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                <animate attributeName="x1" values="-1;1" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="x2" values="0;2" dur="2.4s" repeatCount="indefinite" />
              </linearGradient>
            </defs>
            <path
              d="M5 10 Q 25 35, 45 18 T 90 30 L 90 55"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="3 4"
            />
            <path
              d="M5 10 Q 25 35, 45 18 T 90 30 L 90 55"
              stroke="url(#arrow-shimmer-mobile)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M83 48 L 90 58 L 97 48"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <Link
            to="/proceduri"
            className="group inline-flex items-center gap-2 px-7 h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-elegant hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            Apasă pentru mai mulți clienți fericiți
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
