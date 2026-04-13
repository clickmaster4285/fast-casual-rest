import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  { title: "5 Ways POS Technology Is Transforming Fast Casual Dining", category: "Technology", img: blog1 },
  { title: "How to Reduce Food Waste with Smart Inventory Management", category: "Operations", img: blog2 },
  { title: "Scaling Your Restaurant: Data-Driven Growth Strategies", category: "Growth", img: blog3 },
];

const BlogSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll(".blog-card"), { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  return (
    <section id="blog" ref={ref} className="section-padding" style={{ background: "linear-gradient(180deg, hsl(222 35% 9%) 0%, hsl(222 47% 4%) 100%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase">Blog</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Insights & <span className="gradient-text">Resources</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <div key={b.title} className="blog-card feature-card cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute top-3 left-3 glass-card px-3 py-1 text-xs font-heading font-semibold text-primary">
                  {b.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold mb-3 leading-tight">{b.title}</h3>
                <span className="text-primary text-sm font-heading flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
