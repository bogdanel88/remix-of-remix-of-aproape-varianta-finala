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
      {/* Background Decorativ - Neschimbat */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block z-0" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl animate-blob-drift" />
        <div className="absolute -bottom-32 -left-24 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-accent/15 via-primary/10 to-transparent blur-3xl animate-blob-drift-slow" />
        
        {/* Silueta Nasului - Neschimbat */}
        <div className="absolute top-8 right-10 xl:right-16 w-44 h-44 xl:w-52 xl:h-52">
          <svg viewBox="0 0 200 200" className="w-full h-full text-primary/70" fill="none">
             {/* ... (codul original pentru silueta nasului) */}
          </svg>
        </div>
      </div>

      {/* NOUA ANIMAȚIE DINAMICĂ: LIGHT FLOW PATH */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full hidden lg:block z-[5]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Traseul invizibil pe care merg particulele */}
        <path
          id="flow-path"
          d="M 230 110 
             C 40 110, 30 400, 100 600 
             C 180 850, 450 880, 720 880 
             C 1000 880, 1300 850, 1380 600 
             C 1420 400, 1350 110, 1100 110"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-primary/5"
        />

        {/* Particula 1 - "Cometa" de lumină */}
        <circle r="4" fill="hsl(var(--accent))" filter="url(#glow)">
          <animateMotion dur="8s" repeatCount="indefinite" path="M 230 110 C 40 110, 30 400, 100 600 C 180 850, 450 880, 720 880 C 1000 880, 1300 850, 1380 600 C 1420 400, 1350 110, 1100 110" />
        </circle>

        {/* Particula 2 - Secundară, cu delay */}
        <circle r="3" fill="hsl(var(--primary))" filter="url(#glow)">
          <animateMotion dur="8s" begin="4s" repeatCount="indefinite" path="M 230 110 C 40 110, 30 400, 100 600 C 180 850, 450 880, 720 880 C 1000 880, 1300 850, 1380 600 C 1420 400, 1350 110, 1100 110" />
        </circle>

        {/* Linia punctată animată (Flow line) */}
        <path
          d="M 230 110 C 40 110, 30 400, 100 600 C 180 850, 450 880, 720 880 C 1000 880, 1300 850, 1380 600 C 1420 400, 1350 110, 1100 110"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          strokeDasharray="10 20"
          strokeOpacity="0.3"
        >
          <animate attributeName="stroke-dashoffset" from="300" to="0" dur="20s" repeatCount="indefinite" />
        </path>
      </svg>

      <div className="container relative z-10">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-accent mb-5">
            — Proceduri
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Intervenții realizate cu <span className="italic">măiestrie</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fiecare procedură este planificată individual, după o consultație
            atentă și o discuție deschisă cu pacientul.
          </p>
        </div>

        {/* Grid-ul de Carduri - Am adăugat max-w ca să fie mai înguste și să respire animația pe margini */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {procedures.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                to={`/proceduri#${p.slug}`}
                className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/60 hover:border-primary/25 hover:shadow-elegant transition-all duration-500 block h-full hover:-translate-y-1 z-10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-soft group-hover:rotate-6 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm text-primary font-medium group-hover:bg-secondary transition-colors">
                  <span>Detalii</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative mt-24 flex flex-col items-center text-center z-10">
          <Link
            to="/proceduri"
            className="group inline-flex items-center gap-2 px-8 h-12 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            Apasă pentru mai mulți clienți fericiți
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
