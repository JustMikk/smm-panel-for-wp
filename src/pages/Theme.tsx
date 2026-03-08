import * as React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Gem,
  MonitorSmartphone,
  Paintbrush,
  Rocket,
  ShoppingCart,
  WandSparkles,
} from "lucide-react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link, NavLink } from "react-router-dom";

const whyUseCards = [
  {
    icon: MonitorSmartphone,
    title: "Responsive",
    desc: "Looks perfect on every device. No need to worry about mobile or tablet view - everything adjusts automatically.",
  },
  {
    icon: Paintbrush,
    title: "Customizable",
    desc: "Easily change colors, fonts, and sections to match your own style. The live customizer lets you see every change instantly.",
  },
  {
    icon: Gem,
    title: "Powerfull",
    desc: "Fast, SEO-ready, and built to handle large product lists without slowing down your site.",
  },
];

const specialPoints = [
  "Dedicated to SMM Panels only — Perfectly designed for panels, order pages, and user dashboards.",
  "No extra plugins needed — You can run your panel site with only this theme and the SMM Panel Manager Plugin.",
  "Easy setup and clean design — Comes with pre-built homepage sections for quick setup.",
  "WooCommerce ready — Prefer using WooCommerce for payments, it’s already supported.",
  "Optimized for SEO — Clean structure helps your site rank faster on Google.",
];

const compatibilityTools = [
  {
    title: "Google PageSpeed Insights",
    image: "/google-search-insight.webp",
  },
  {
    title: "WooCommerce",
    image: "/woocommerce.png",
  },
  {
    title: "SEO Ready",
    image: "/seo.png",
  },
];

const pagesYouGet = [
  {
    title: "Blog Page",
    image: "/Blog.png",
  },
  {
    title: "Home Page",
    image: "/home.png",
  },
  {
    title: "Shop Page",
    image: "/shop.png",
  },
  {
    title: "Cart/Checkout Page",
    image: "/cart.png",
  },
  {
    title: "Contact Page",
    image: "/contact.png",
  },
  {
    title: "404 Page",
    image: "/404.png",
  },
];

const freePlanItems = [
  "Installation Guide",
  "Full Customization Access",
  "404 and Contact Page",
  "WooCommerce page Customed with Theme",
  "Advanced homepage sections (Testimonials, Services, FAQ, etc.)",
  "More color schemes and typography controls",
  "Dedicated support & lifetime updates",
];

const proPlanItems = [
  "Installation Guide",
  "Full Customization Access",
  "404 and Contact Page",
  "WooCommerce Customized with Theme",
  "Advanced homepage sections (Testimonials, Services, FAQ, etc.)",
  "More color schemes and typography controls",
  "Dedicated support & lifetime updates",
];

const setupSteps = [
  {
    title: "Install the theme",
    desc: "Download it from our website and upload it in WordPress.",
  },
  {
    title: "Activate it",
    desc: "Connect it with your SMM Panel Manager Plugin.",
  },
  {
    title: "Customize as you like",
    desc: "Change colors, layout, and fonts from the theme customizer and make it look like your brand.",
  },
];

const SectionDivider = () => (
  <div className="max-w-[1200px] mx-auto px-4">
    <div className="h-px bg-border/80" />
  </div>
);

const Theme = () => {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [slideCount, setSlideCount] = React.useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = React.useState(false);

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
    };

    setSlideCount(carouselApi.scrollSnapList().length);
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onSelect);
    };
  }, [carouselApi]);

  React.useEffect(() => {
    if (!carouselApi || isCarouselPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 4200);

    return () => window.clearInterval(timer);
  }, [carouselApi, isCarouselPaused]);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border/50 backdrop-blur-xl bg-background/80">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg overflow-hidden bg-card border border-primary/20">
              <img
                src="/smm panel wordpress logo.png"
                alt="SMM Panel logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-lg">SMM Panel<span className="text-highlight"> For WP</span></span>
          </Link>

          <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
            <NavLink to="/theme" className="text-primary">Theme</NavLink>
            <NavLink to="/plugin" className="text-muted-foreground hover:text-foreground transition-colors">Plugin</NavLink>
          </nav>
        </div>
      </header>

      <section id="content" className="relative overflow-hidden bg-card/40 pt-16 pb-20 border-b border-border/60">
        <div className="absolute inset-0 dot-pattern opacity-25" />
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl floating-slow" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl floating" />
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4 animate-fade-up">
                Premium WordPress Theme
              </p>
              <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-tight text-foreground animate-fade-up-delay-1">
                The Power of WordPress gets Combined with SMM Panels
              </h1>
              <div className="mt-6 space-y-4 text-foreground/90 text-base leading-relaxed animate-fade-up-delay-2">
                <p>
                  Ever wanted to run your own SMM panel with a clean and modern design?
                </p>
                <p>
                  This theme is made just for that. It gives your SMM panel a professional look while keeping everything simple to manage inside WordPress.
                </p>
                <p>
                  You don’t need to hire a designer or edit a single line of code.
                  Just install the theme, connect your SMM plugin, and your panel site is ready to launch.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up-delay-3">
                <a
                  href="#plans"
                  className="px-6 py-3 rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary/20 font-semibold"
                >
                  Get Theme Now
                </a>
                <a
                  href="#setup"
                  className="px-6 py-3 rounded-xl border border-primary/35 bg-background/70 hover:bg-background transition-colors font-semibold"
                >
                  Watch Setup
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                <div className="glow-card rounded-xl p-3 text-center">
                  <p className="font-heading text-lg font-bold">SEO</p>
                  <p className="text-xs text-muted-foreground">Ready</p>
                </div>
                <div className="glow-card rounded-xl p-3 text-center">
                  <p className="font-heading text-lg font-bold">Woo</p>
                  <p className="text-xs text-muted-foreground">Supported</p>
                </div>
                <div className="glow-card rounded-xl p-3 text-center">
                  <p className="font-heading text-lg font-bold">Fast</p>
                  <p className="text-xs text-muted-foreground">Optimized</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-[2rem]" />
              <div className="relative glow-card rounded-2xl p-3 md:p-4">
                <img
                  src="/home.png"
                  alt="Pure Panel Theme preview"
                  className="w-full rounded-xl"
                />
              </div>

              <div className="absolute -top-4 left-4 rounded-xl bg-background/90 backdrop-blur border border-primary/25 px-3 py-2 shadow-lg floating-slow">
                <p className="text-[11px] text-muted-foreground">Designed For</p>
                <p className="text-sm font-semibold text-foreground">SMM Panel Owners</p>
              </div>

              <div className="absolute -bottom-4 right-4 rounded-xl bg-background/90 backdrop-blur border border-primary/25 px-3 py-2 shadow-lg floating">
                <p className="text-[11px] text-muted-foreground">Launch Speed</p>
                <p className="text-sm font-semibold text-foreground">Setup in Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">The Pure Panel WordPress Theme</h2>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Pure Panel is built for SMM business owners who want to give their WordPress site a panel-style interface. It works perfectly with the SMM Panel Manager Plugin and brings a modern, clean layout to showcase your services, orders, and customer area.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-card/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Why Use Pure Panel Theme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUseCards.map((card) => (
              <article key={card.title} className="glow-card rounded-xl p-6 hover-lift group transition-transform duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <card.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 space-y-2">
            <p className="text-muted-foreground">Pure Panel is tested and works great with:</p>
            <p className="text-foreground/90">WordPress, WooCommerce, Google SEO tools, and PageSpeed Insights.</p>
            <p className="text-muted-foreground">It’s lightweight, fast, and built using best practices for modern WordPress themes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {compatibilityTools.map((tool) => (
              <article key={tool.title} className="glow-card rounded-2xl p-6 hover-lift group">
                <div className="h-28 md:h-32 rounded-xl bg-background/50 border border-primary/20 p-4 mb-4 flex items-center justify-center overflow-hidden">
                  <img src={tool.image} alt={tool.title} className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <p className="font-heading text-lg font-semibold text-center">{tool.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">What makes Pure Panel Theme Special</h2>
            <div className="space-y-4">
              {specialPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={18} />
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glow-card rounded-2xl p-3 group">
            <img
              src="pure-panel.png"
              alt="Pure Panel Theme special section preview"
              className="w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-card/20">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Different Pages You Get</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The theme comes with pre-designed pages like Home, Services, Order Page, Dashboard, and Checkout.
            You can also add more pages or edit existing ones using Elementor or the WordPress Customizer.
          </p>

          <div className="mt-10 relative left-1/2 -translate-x-1/2 w-screen max-w-none px-4 md:px-8 lg:px-12" onMouseEnter={() => setIsCarouselPaused(true)} onMouseLeave={() => setIsCarouselPaused(false)}>
            <Carousel setApi={setCarouselApi} opts={{ align: "start", loop: true }} className="w-full max-w-[1400px] mx-auto">
              <CarouselContent>
                {pagesYouGet.map((item) => (
                  <CarouselItem key={item.title} className="basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                    <article className="glow-card rounded-2xl p-3 md:p-4 text-left group">
                      <div className="rounded-xl border border-primary/20 bg-black/30 p-1.5 md:p-2">
                        <img src={item.image} alt={item.title} className="w-full rounded-lg aspect-[16/10] object-contain transition-transform duration-500 group-hover:scale-[1.01]" />
                      </div>
                      <h3 className="font-heading font-semibold mt-4 text-xl">{item.title}</h3>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 border-primary/40 bg-background/90 hover:bg-background h-10 w-10" />
              <CarouselNext className="right-3 top-1/2 -translate-y-1/2 border-primary/40 bg-background/90 hover:bg-background h-10 w-10" />
            </Carousel>

            <div className="flex justify-center mt-5 gap-2">
              {Array.from({ length: slideCount }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 rounded-full transition-all ${currentSlide === index + 1 ? "w-6 bg-primary" : "w-2 bg-primary/30"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-background">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Our Plans</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Pick a plan that fits your goals. Start free if you’re just testing, or get the Pro version for full control and customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="glow-card rounded-2xl p-7">
              <h3 className="font-heading font-bold text-2xl">Free</h3>
              <p className="text-muted-foreground mb-5">with Limited access</p>
              <ul className="space-y-3 text-sm">
                {freePlanItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary/20 font-semibold">
                Get Now
              </button>
            </article>

            <article className="glow-card rounded-2xl p-7 border-primary/40">
              <h3 className="font-heading font-bold text-2xl">Pro</h3>
              <p className="text-muted-foreground">
                <span className="line-through mr-2">$45</span>
                <span className="text-primary font-bold text-xl">$20</span>
              </p>
              <p className="text-muted-foreground mb-5">for full access</p>
              <ul className="space-y-3 text-sm">
                {proPlanItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-primary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary/20 font-semibold">
                Buy Now
              </button>
            </article>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-card/20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">Watch How to setup Pure Panel Theme</h2>
          </div>

          <div className="glow-card rounded-2xl p-3 md:p-4 mb-10 max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-primary/20 bg-black/40">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/XHOmBV4js_E"
                  title="Watch How to setup Pure Panel Theme"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setupSteps.map((step, index) => (
              <article key={step.title} className="glow-card rounded-xl p-6 hover-lift group">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  {index === 0 ? <ShoppingCart size={20} className="text-primary" /> : index === 1 ? <Rocket size={20} className="text-primary" /> : <WandSparkles size={20} className="text-primary" />}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h3 className="font-heading font-bold text-xl mb-6">SMM Panel for Wordpress</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-5">
            <a href="#" className="hover:text-foreground transition-colors">About Us</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policies</a>
            <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms and Conditions</a>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 SMM Panel for WordPress. All Rights Reserved.</p>
          <a href="#content" className="inline-flex items-center gap-2 text-primary mt-4 text-sm">
            Back to top <ArrowRight size={14} />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Theme;