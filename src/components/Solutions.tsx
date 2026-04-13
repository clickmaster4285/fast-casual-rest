import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import painQueue from "@/assets/pain-queue.jpg";
import solutionKitchen from "@/assets/solution-kitchen.jpg";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(sectionRef.current.querySelector(".sol-content"), { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(5, Math.min(95, x)));
  };

  return (
    <section ref={sectionRef} className="section-padding relative" style={{ background: "linear-gradient(180deg, hsl(222 40% 6%) 0%, hsl(222 35% 9%) 100%)" }}>
      <div className="container mx-auto">
        <div className="sol-content text-center mb-16">
          <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase">The Solution</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            From <span className="text-destructive">Chaos</span> to <span className="text-primary">Control</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 font-body">
            Drag the slider to see the difference ServeX makes
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden glow-border h-[400px] md:h-[500px] cursor-col-resize select-none"
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchStart={() => (isDragging.current = true)}
          onTouchEnd={() => (isDragging.current = false)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          <img src={solutionKitchen} alt="After - organized" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1200} height={800} />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
            <img src={painQueue} alt="Before - chaotic" className="w-full h-full object-cover" style={{ width: `${(100 / sliderPos) * 100}%`, maxWidth: "none" }} loading="lazy" />
          </div>

          <div className="absolute top-0 bottom-0 z-10" style={{ left: `${sliderPos}%` }}>
            <div className="w-1 h-full bg-primary shadow-lg shadow-primary/50" />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/50 animate-pulse-glow">
              <span className="text-primary-foreground font-bold text-xs">⟷</span>
            </div>
          </div>

          <div className="absolute top-4 left-4 glass-card px-3 py-1.5 z-10">
            <span className="text-destructive font-heading text-xs font-bold">BEFORE</span>
          </div>
          <div className="absolute top-4 right-4 glass-card px-3 py-1.5 z-10">
            <span className="text-primary font-heading text-xs font-bold">AFTER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
