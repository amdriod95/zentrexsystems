import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useBookDemo } from "./BookDemoDialog";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#industries", label: "Industries" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openBookDemo } = useBookDemo();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/85 transition-all duration-300 ${
        scrolled ? "border-b border-border shadow-card" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-[oklch(0.55_0.22_275)] to-[oklch(0.78_0.14_210)] grid place-items-center text-white shadow-[0_0_16px_-2px_oklch(0.55_0.22_275/0.6)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>Zentrex<span className="text-gradient"> Systems</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="hero" size="default" onClick={openBookDemo} className="hidden sm:inline-flex">
            Book Demo
          </Button>
          <button
            className="lg:hidden h-10 w-10 grid place-items-center rounded-lg border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" asChild>
            <a href="#contact" onClick={() => setOpen(false)}>Book Demo</a>
          </Button>
        </div>
      )}
    </header>
  );
}
