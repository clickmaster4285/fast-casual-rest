// @ts-nocheck
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonial1 from "@/assets/testimonial-1.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Owner, Urban Bites Café",
    text: "Clickmasters cut our order time in half. Our customers are happier, and our kitchen runs smoother than ever. Best investment we've made.",
    img: testimonial1,
    stars: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Manager, Fresh & Fast",
    text: "The QR ordering feature was a game-changer. We reduced staff workload by 30% while serving more customers during lunch rush.",
    img: aboutTeam,
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Franchise Director, WokBox",
    text: "Managing 12 locations used to be a nightmare. Clickmasters analytics give me real-time visibility across all branches.",
    img: testimonial1,
    stars: 5,
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { opacity: 0 }, {
      opacity: 1, duration: 0.8, scrollTrigger: { trigger: ref.current, start: "top 85%" },
    });
  }, []);

  return (
    <section ref={ref} className="section-padding" style={{ background: "linear-gradient(180deg, hsl(222 35% 9%) 0%, hsl(222 47% 4%) 100%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Loved by <span className="gradient-text">Restaurant Owners</span>
          </h2>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="glass-card p-6 h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground font-body mb-6 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-heading font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs font-body">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
