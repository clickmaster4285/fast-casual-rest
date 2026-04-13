import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Shield, Smile, Headphones } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: Zap, title: "Blazing Speed", value: 200, suffix: "ms", desc: "Average transaction time" },
  { icon: Shield, title: "99.9% Uptime", value: 99.9, suffix: "%", desc: "Reliability you can count on" },
  { icon: Smile, title: "Easy Setup", value: 15, suffix: "min", desc: "From install to first order" },
  { icon: Headphones, title: "24/7 Support", value: 24, suffix: "/7", desc: "We're always here for you" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 2, ease: "power2.out",
          onUpdate: () => setCount(Number(obj.val.toFixed(target % 1 ? 1 : 0))),
        });
      },
    });
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll(".why-card"), { opacity: 0, scale: 0.9 }, {
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero1} alt="" className="w-full h-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-surface-1/90" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-glow-purple font-heading text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Built for <span className="text-glow-purple">Performance</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="why-card stat-card">
              <r.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-heading font-bold text-primary mb-1">
                <AnimatedCounter target={r.value} suffix={r.suffix} />
              </div>
              <h3 className="font-heading font-semibold mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
