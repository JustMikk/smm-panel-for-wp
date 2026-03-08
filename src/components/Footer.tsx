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
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-200" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-200" aria-label="X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-6.5L6.2 22H3.1l7.3-8.3L.8 2H7l4.6 6.1L18.9 2zm-1.1 18h1.7L6.1 3.9H4.3L17.8 20z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-200" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
