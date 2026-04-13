import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import painQueue from "@/assets/pain-queue.jpg";
import { AlertTriangle, Clock, XCircle, Timer } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pains = [
  { icon: Clock, title: "Long Queues", desc: "Customers leave before ordering. Every minute of wait time costs you revenue.", color: "text-destructive" },
  { icon: XCircle, title: "Order Mistakes", desc: "Manual entry errors frustrate customers and increase food waste.", color: "text-accent" },
  { icon: AlertTriangle, title: "Slow Billing", desc: "Outdated registers create bottlenecks during peak hours.", color: "text-glow-purple" },
  { icon: Timer, title: "Kitchen Delays", desc: "Poor communication between counter and kitchen slows everything down.", color: "text-primary" },
];

const PainPoints = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll(".pain-card");
    gsap.fromTo(cards, { opacity: 0, x: -40 }, {
      opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });
    gsap.fromTo(sectionRef.current.querySelector(".pain-image"), { opacity: 0, scale: 1.05 }, {
      opacity: 1, scale: 1, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(222 47% 4%) 0%, hsl(222 40% 6%) 100%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase">The Problem</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Is Your Restaurant <span className="text-destructive">Losing Money</span> Every Day?
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {pains.map((pain) => (
              <div key={pain.title} className="pain-card glass-card p-6 flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-muted text-destructive`}>
                  <pain.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{pain.title}</h3>
                  <p className="text-muted-foreground font-body text-sm">{pain.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pain-image relative rounded-2xl overflow-hidden glow-border">
            <img src={painQueue} alt="Long queues at restaurant" className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-1/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-card p-4">
                <p className="text-destructive font-heading font-bold text-lg">68% of customers</p>
                <p className="text-muted-foreground text-sm font-body">won't return after a bad ordering experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
