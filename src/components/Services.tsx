import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, Smartphone, Puzzle, BarChart3 } from "lucide-react";
import featureDashboard from "@/assets/feature-dashboard.jpg";
import featureQr from "@/assets/feature-qr.jpg";
import featureInventory from "@/assets/feature-inventory.jpg";
import caseStudy from "@/assets/case-study.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Monitor, title: "POS Systems", desc: "Complete point-of-sale hardware and software tailored for fast casual.", img: featureDashboard },
  { icon: Smartphone, title: "Mobile Ordering", desc: "Let customers order ahead via app or QR — reduce queues instantly.", img: featureQr },
  { icon: Puzzle, title: "Integrations", desc: "Connect with delivery apps, payment gateways, and accounting tools.", img: featureInventory },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Actionable insights across all your branches in real-time.", img: caseStudy },
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll(".svc-card"), { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="services" ref={ref} className="section-padding" style={{ background: "linear-gradient(180deg, hsl(222 40% 6%) 0%, hsl(222 35% 9%) 100%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase">Services</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            End-to-End <span className="text-primary">POS Solutions</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="svc-card feature-card flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <s.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
