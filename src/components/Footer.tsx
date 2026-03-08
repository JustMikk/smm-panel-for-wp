const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="max-w-md text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
            <div className="h-9 w-9 rounded-lg overflow-hidden bg-card border border-primary/20">
              <img
                src="/smm panel wordpress logo.png"
                alt="SMM Panel logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-lg text-foreground">
              SMM Panel<span className="text-highlight"> For WordPress</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We provide the SMM Panel themes and plugins for WordPress. We proudly deliver premium WordPress themes and plugins designed for SMM Panel owners. Built for speed, security, and seamless integration, our products help you launch and scale with confidence.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Quick Links</h4>
          <a href="#theme" className="text-muted-foreground text-sm hover:text-primary transition-colors">Theme</a>
          <a href="#plugin" className="text-muted-foreground text-sm hover:text-primary transition-colors">Plugin</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
