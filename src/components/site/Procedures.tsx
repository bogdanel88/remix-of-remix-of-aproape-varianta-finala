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
      {/* BACKGROUND DECORATIV COMPLET */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block z-0" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl animate-blob-drift" />
        <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent blur-3xl animate-blob-drift-slow" />

        {/* Orbi albaștri originali */}
        <span className="absolute top-[10%] right-[6%] w-2.5 h-2.5 rounded-full animate-float-y" style={{ background: "hsl(200 85% 55%)", boxShadow: "0 0 18px hsl(200 85% 60% / 0.7)" }} />
        <span className="absolute top-[22%] right-[14%] w-2 h-2 rounded-full animate-float-y-slow" style={{ background: "hsl(212 75% 45%)", animationDelay: "0.5s" }} />
        <span className="absolute bottom-[10%] left-[8%] w-2 h-2 rounded-full animate-float-y-slow" style={{ background: "hsl(188 70% 45%)", animationDelay: "0.4s" }} />

        {/* ANIMATIA CU NASUL (REPUSĂ) */}
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
          </svg>
        </div>
      </div>

      {/* ANIMAȚIA DINAMICĂ: CERC COMPACT + 5 BILE */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full hidden lg:block z-[5]"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow-effect">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Traseu subțire/ghidaj */}
        <path
          id="orbit-path"
          d="M 450 140 
             C 100 140, 100 820, 720 820 
             C 1340 820, 1340 140, 990 140"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          strokeOpacity="0.1"
          strokeDasharray="5 5"
        />

        {/* Cele 5 Bile (Comete) cu delay-uri diferite */}
        {[0, 1.6, 3.2, 4.8, 6.4].map((delay, index) => (
          <circle key={index} r={index % 2 === 0 ? "3.5" : "2.5"} fill={index % 2 === 0 ? "hsl(var(--accent))" : "hsl(var(--primary))"} filter="url(#glow-effect)">
            <animateMotion
              dur="8s"
              begin={`${delay}s`}
              repeatCount="indefinite"
              path="M 450 140 C 100 140, 100 820, 720 820 C 1340 820, 1340 140, 990 140"
            />
          </circle>
        ))}
      </svg>

      <div className="container relative z-10">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">— Proceduri</div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Intervenții realizate cu <span className="italic">măiestrie</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fiecare procedură este planificată individual, după o consultație atentă și o discuție deschisă cu pacientul.
          </p>
        </div>

        {/* Grid Carduri - max-w-6xl pentru a fi mai compacte */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {procedures.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                to={`/proceduri#${p.slug}`}
                className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 hover:border-primary/25 hover:shadow-elegant transition-all duration-500 block h-full hover:-translate-y-1 z-10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-primary font-medium group-hover:bg-secondary transition-all">
                  <span>Detalii</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative mt-20 flex flex-col items-center text-center z-10">
          <Link
            to="/proceduri"
            className="group inline-flex items-center gap-2 px-8 h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            Apasă pentru mai mulți clienți fericiți
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
