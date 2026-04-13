import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero1 from "@/assets/hero-1.jpg";
import { Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelector(".contact-form"), { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you soon for your free demo.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero1} alt="" className="w-full h-full object-cover opacity-10" loading="lazy" />
        <div className="absolute inset-0 bg-surface-1/95" />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-accent font-heading text-sm font-semibold tracking-wider uppercase">Contact Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Get Your Free POS <span className="text-accent">Demo Today</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-body">
            Fill in your details and our team will reach out within 24 hours.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form max-w-xl mx-auto glass-card p-8 space-y-5">
          {[
            { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
            { name: "email", label: "Email", type: "email", placeholder: "john@restaurant.com" },
            { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 123-4567" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-heading font-medium mb-1.5">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                required
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="block text-sm font-heading font-medium mb-1.5">Message</label>
            <textarea
              placeholder="Tell us about your restaurant..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground/50 font-body focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
          </div>
          <button type="submit" className="glow-button w-full flex items-center justify-center gap-2 text-lg">
            <Send className="w-5 h-5" /> Get Free Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
