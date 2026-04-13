import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, Clock, Navigation, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const LOCATION = {
  fullAddress:
    "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
};

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATION.fullAddress
)}&output=embed`;

export default function ContactSection() {
  const ref = useScrollAnimation();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email marketing@clickmasters.pk");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Get in <span className="gradient-text">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 glass-card p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center gap-3 pb-2 border-b border-border">
              <div className="p-2 rounded-lg bg-primary/10">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-xl font-bold">Send us a message</h1>
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full"
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Phone Number <span className="text-muted-foreground text-xs">(Optional)</span>
              </label>
              <Input
                placeholder="+92 123 4567890"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-1">
                Message <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 transition-all duration-300"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending Message..." : "Send Message"}
            </Button>
          </form>

          {/* CONTACT + MAP */}
          <div className="space-y-6">
            {/* 2 Cards per row - Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="glass-card p-6 flex gap-4">
                <MapPin className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-sm text-muted-foreground">
                    {LOCATION.fullAddress}
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-card p-6 flex gap-4">
                <Mail className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-sm">marketing@clickmasters.pk</p>
                  <p className="text-sm">info@clickmasters.pk</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card p-6 flex gap-4">
                <Phone className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-sm">+92 333-1116842</p>
                  <p className="text-sm">+92 332-5394285</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="glass-card p-6 flex gap-4">
                <Clock className="text-primary flex-shrink-0" />
                <div>
                  <p className="font-bold">Hours</p>
                  <p className="text-sm">Mon - Sat: 9AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="250"
                loading="lazy"
                className="w-full"
                title="Office Location Map"
              />
            </div>

            {/* DIRECTIONS LINK */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                LOCATION.fullAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}