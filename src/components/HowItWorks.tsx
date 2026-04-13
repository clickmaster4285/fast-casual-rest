import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, Monitor, ChefHat, CheckCircle } from "lucide-react";
import featureQr from "@/assets/feature-qr.jpg";
import hero2 from "@/assets/hero-2.jpg";
import solutionKitchen from "@/assets/solution-kitchen.jpg";
import hero1 from "@/assets/hero-1.jpg";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: ShoppingCart, title: "Order Placed", desc: "Customer orders via POS, QR code, or self-service kiosk.", img: featureQr },
  { icon: Monitor, title: "POS Processes", desc: "Order is instantly validated, priced, and sent to the system.", img: hero2 },
  { icon: ChefHat, title: "Kitchen Updates", desc: "Kitchen display shows the order in real-time with prep details.", img: solutionKitchen },
  { icon: CheckCircle, title: "Order Ready", desc: "Customer is notified. Pickup or table delivery, fast and accurate.", img: hero1 },
];

const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".step-item");
    gsap.fromTo(items, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
    });
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="section-padding relative" style={{ background: "linear-gradient(180deg, hsl(222 47% 4%) 0%, hsl(222 40% 6%) 100%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase">How It Works</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            From Order to <span className="text-primary">Ready</span> in Minutes
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="step-item relative">
              <div className="feature-card overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" loading="lazy" width={1200} height={800} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-sm">
                    {i + 1}
                  </div>
                </div>
                <div className="p-5">
                  <step.icon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-heading font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm font-body">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-primary/50 text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
