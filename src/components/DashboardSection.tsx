import { Palette, Zap, Puzzle } from "lucide-react";

const features = [
  { icon: Palette, title: "Customize Your Theme", desc: "Full control over colors, layouts, and branding to match your vision." },
  { icon: Zap, title: "Lightning-Fast Performance", desc: "Optimized codebase ensures your panel loads instantly for every user." },
  { icon: Puzzle, title: "Easy Plugin Compatibility", desc: "Works seamlessly with WooCommerce, payment gateways, and more." },
];

const DashboardSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-4">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
          It's easy to make your own SMM panel
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-16">
          Control Everything from Your
          <span className="text-highlight"> Dashboard</span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-primary/5 blur-[60px] rounded-3xl" />
          <img
            src="https://smmpanelwp.com/wp-content/uploads/2026/03/dashboard-preview.jpg"
            alt="Dashboard Preview"
            className="relative rounded-2xl glow-border w-full shadow-2xl"
          />
        </div>
        <div className="flex-1 space-y-6">
          {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start group hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <f.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DashboardSection;
