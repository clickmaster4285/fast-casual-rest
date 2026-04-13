import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import featureDashboard from "@/assets/feature-dashboard.jpg";
import featureQr from "@/assets/feature-qr.jpg";
import solutionKitchen from "@/assets/solution-kitchen.jpg";
import featureInventory from "@/assets/feature-inventory.jpg";
import caseStudy from "@/assets/case-study.jpg";
import { BarChart3, QrCode, Monitor, Package, LineChart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: BarChart3, title: "POS Dashboard", desc: "Real-time sales, orders, and performance at your fingertips.", img: featureDashboard },
  { icon: QrCode, title: "QR Ordering", desc: "Customers scan, order, and pay from their table — no waiting.", img: featureQr },
  { icon: Monitor, title: "Kitchen Display", desc: "Live order queue keeps your kitchen in sync and on time.", img: solutionKitchen },
  { icon: Package, title: "Inventory Mgmt", desc: "Track stock levels, get alerts, reduce waste automatically.", img: featureInventory },
  { icon: LineChart, title: "Smart Analytics", desc: "Deep insights into sales trends, peak hours, and top items.", img: caseStudy },
];

const Features = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".feat-card");
    gsap.fromTo(cards, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="features" ref={ref} className="section-padding relative" style={{ background: "linear-gradient(180deg, hsl(222 35% 9%) 0%, hsl(222 47% 4%) 100%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase">Features</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Everything You Need to <span className="gradient-text">Run Smarter</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="feat-card feature-card">
              <div className="relative h-48 overflow-hidden">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={1200} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{f.title}</h3>
                </div>
                <p className="text-muted-foreground font-body text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
