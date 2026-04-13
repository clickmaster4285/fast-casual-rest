const Footer = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/20 py-12 px-4" style={{ background: "hsl(222 47% 3%)" }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="font-heading text-2xl font-bold">
              <span className="text-primary">Click</span>
              <span className="text-foreground">masters</span>
            </a>
            <p className="text-muted-foreground text-sm font-body mt-3">
              Modern POS solutions for fast casual restaurants.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Product</h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <button onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-primary transition-colors">Features</button>
              <button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-primary transition-colors">Services</button>
              <button onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-primary transition-colors">How It Works</button>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <button onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-primary transition-colors">About Us</button>
              <button onClick={() => document.querySelector("#blog")?.scrollIntoView({ behavior: "smooth" })} className="block hover:text-primary transition-colors">Blog</button>
              <button onClick={scrollToContact} className="block hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Get Started</h4>
            <button onClick={scrollToContact} className="glow-button text-sm px-6 py-2.5">
              Free Demo
            </button>
          </div>
        </div>
        <div className="border-t border-border/20 pt-6 text-center text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Clickmasters. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
