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
      {/* Decorative animated background — floating orbs + drifting gradient blobs. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block z-0" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl animate-blob-drift" />
        <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent blur-3xl animate-blob-drift-slow" />

        {/* Floating blue orbs cluster */}
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

        <span className="absolute top-[18%] right-[4%] w-24 h-24 rounded-full border border-primary/15 animate-pulse-ring" />
        <span className="absolute bottom-[22%] right-[6%] w-16 h-16 rounded-full border border-accent/20 animate-pulse-ring" style={{ animationDelay: "1.4s" }} />

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
            <circle cx="100" cy="100" r="80" fill="url(#nose-glow)" className="animate-pulse-ring origin-center" />
            <path d="M 70 30 C 78 55, 70 75, 95 95 C 115 110, 130 118, 128 135 C 126 150, 110 160, 90 158" stroke="url(#nose-stroke)" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-nose-before" />
            <path d="M 72 32 C 82 60, 78 82, 100 100 C 118 114, 130 122, 126 138 C 122 152, 108 160, 90 158" stroke="url(#nose-stroke)" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-nose-after" />
            <circle cx="140" cy="60" r="2.5" fill="hsl(200 85% 60%)" className="animate-float-y" />
            <circle cx="155" cy="100" r="2" fill="hsl(188 70% 50%)" className="animate-float-y-slow" style={{ animationDelay: "0.6s" }} />
            <circle cx="135" cy="160" r="2.5" fill="hsl(195 90% 65%)" className="animate-float-y" style={{ animationDelay: "1.2s" }} />
            <circle cx="50" cy="80" r="2" fill="hsl(212 75% 50%)" className="animate-float-y-slow" style={{ animationDelay: "0.9s" }} />
          </svg>
        </div>
      </div>

      {/* Dashed journey line — Refăcut conform desenului roșu */}
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

        {/* Traseul care urmează fidel linia ta roșie */}
        <path
          id="main-journey-path"
          d="M 230 95 
             C 50 95, 20 350, 80 550 
             C 120 700, 200 850, 280 780"
          stroke="url(#journey-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="8 12"
          className="animate-dash-flow"
        />

        {/* Capul de săgeată poziționat la finalul drumului, indicând spre primul card */}
        <g transform="translate(280, 780) rotate(160)">
          <path
            d="M -8 8 L 0 0 L 8 8"
            stroke="url(#journey-line)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="animate-arrow-pulse"
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

            return (
              <Link
                key={p.title}
                to={`/proceduri#${p.slug}`}
                className={cardClasses + " relative z-10"}
                style={{ animationDelay: `${i * 60}ms` }}
              >
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
              </Link>
            );
          })}
        </div>

        <div className="relative mt-20 flex flex-col items-center text-center z-10">
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
