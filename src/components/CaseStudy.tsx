import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import caseStudyImg from "@/assets/case-study.jpg";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Faster Service", value: "40%", color: "text-primary" },
  { label: "Fewer Mistakes", value: "85%", color: "text-glow-purple" },
  { label: "Revenue Increase", value: "32%", color: "text-accent" },
];

const CaseStudy = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelector(".case-img"), { opacity: 0, x: -50 }, {
      opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
    gsap.fromTo(ref.current.querySelector(".case-content"), { opacity: 0, x: 50 }, {
      opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  return (
    <section ref={ref} className="section-padding" style={{ background: "linear-gradient(180deg, hsl(222 40% 6%) 0%, hsl(222 35% 9%) 100%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">Case Study</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Real Results, <span className="text-accent">Real Growth</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="case-img relative rounded-2xl overflow-hidden glow-border">
            <img src={caseStudyImg} alt="Case study analytics" className="w-full object-cover" loading="lazy" width={1200} height={800} />
          </div>
          <div className="case-content space-y-8">
            <h3 className="font-heading text-2xl font-bold">
              How a 3-Branch Café Chain Transformed Operations with Clickmasters
            </h3>
            <p className="text-muted-foreground font-body">
              Within 3 months of switching to Clickmasters POS, this fast casual chain saw dramatic improvements
              across all key metrics — from order speed to revenue growth.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="stat-card">
                  <div className={`text-3xl font-heading font-bold ${m.color} flex items-center justify-center gap-1`}>
                    {m.value} <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-body">{m.label}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glow-button-orange"
            >
              Get Similar Results →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
