import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutTeam from "@/assets/about-team.jpg";
import hero1 from "@/assets/hero-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelector(".about-img"), { opacity: 0, x: -60 }, {
      opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
    gsap.fromTo(ref.current.querySelector(".about-text"), { opacity: 0, x: 60 }, {
      opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="about" ref={ref} className="section-padding" style={{ background: "linear-gradient(180deg, hsl(222 47% 4%) 0%, hsl(222 40% 6%) 100%)" }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="about-img relative">
            <div className="rounded-2xl overflow-hidden glow-border">
              <img src={aboutTeam} alt="Clickmasters team" className="w-full object-cover" loading="lazy" width={1200} height={800} />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl overflow-hidden w-48 h-32 glow-border hidden md:block">
              <img src={hero1} alt="Restaurant" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="about-text">
            <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              Building the Future of <span className="text-accent">Fast Casual</span> Dining
            </h2>
            <p className="text-muted-foreground font-body mb-4 leading-relaxed">
              Clickmasters builds modern POS systems designed specifically for fast casual restaurants, helping brands deliver faster service and smoother customer experiences.
            </p>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              From busy counters to multi-branch operations, our solutions streamline ordering, improve kitchen coordination, and give restaurant owners full control through smart, scalable technology.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "500+", label: "Restaurants" },
                { val: "15M+", label: "Orders Processed" },
                { val: "12", label: "Countries" },
              ].map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="text-xl font-heading font-bold text-accent">{s.val}</div>
                  <div className="text-xs text-muted-foreground font-body">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
