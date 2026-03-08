import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This theme saved me months of development. Got my panel live in 2 days!",
    name: "Alex M.",
    role: "SMM Panel Owner",
    rating: 5,
  },
  {
    quote: "The plugin handles all my API connections. No more manual orders.",
    name: "Sarah K.",
    role: "Digital Marketer",
    rating: 5,
  },
  {
    quote: "Best investment for my SMM business. Clean, fast, and reliable.",
    name: "James R.",
    role: "Entrepreneur",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          What Our Users
          <span className="text-highlight"> Say</span>
        </h2>
        <p className="text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">
          Join hundreds of successful SMM panel owners.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="glow-card rounded-2xl p-8 hover-lift"
          >
            <Quote size={28} className="text-primary/40 mb-4" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 text-sm italic">"{t.quote}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
