import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";

const slides = [hero1, hero2, hero3];

const stats = [
  { icon: TrendingUp, value: "3x", label: "Faster Service", color: "text-primary" },
  { icon: Users, value: "10K+", label: "Restaurants", color: "text-glow-purple" },
  { icon: Clock, value: "45s", label: "Avg Order Time", color: "text-accent" },
  { icon: DollarSign, value: "32%", label: "Revenue Boost", color: "text-primary" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!textRef.current || !statsRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
    tl.fromTo(
      statsRef.current.children,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.3"
    );
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt="Restaurant POS"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/70 via-surface-1/80 to-surface-1" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-1/60 to-transparent" />

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
        <div ref={textRef} className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-primary text-sm font-heading font-medium">
              🚀 #1 POS for Fast Casual Restaurants
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Serve Faster.{" "}
            <span className="gradient-text">Sell Smarter.</span>
            <br />
            Run Your Restaurant{" "}
            <span className="text-accent">Effortlessly.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 font-body">
            The all-in-one POS platform built for modern fast casual restaurants.
            Streamline orders, delight customers, and grow your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={scrollToContact} className="glow-button text-lg">
              Get Free Demo
            </button>
            <button
              onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-lg border border-border/50 text-foreground font-heading font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              See Features
            </button>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
              <stat.icon className={`w-5 h-5 ${stat.color} mb-2 mx-auto`} />
              <div className={`text-2xl md:text-3xl font-heading font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary" : "bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
