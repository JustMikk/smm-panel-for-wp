import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Theme", to: "/theme" },
  { label: "Plugin", to: "/plugin" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg overflow-hidden bg-card border border-primary/20">
            <img
              src="/smm panel wordpress logo.png"
              alt="SMM Panel logo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            SMM Panel<span className="text-highlight"> For WP</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"} transition-colors text-sm font-semibold uppercase tracking-wider`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"} py-2 text-sm font-semibold uppercase tracking-wider`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
