import { Sparkles, Twitter, Linkedin, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-4">
          <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="h-8 w-8 rounded-full bg-foreground grid place-items-center text-background">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>Zentrex<span className="font-serif-italic text-brand-sage"> Systems</span></span>
          </a>
          <p className="text-sm text-muted-foreground max-w-md">
            The AI receptionist that answers calls, books appointments, and grows your business — 24/7.
          </p>
          <a
            href="mailto:contact@zentrexsystems.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            <span>contact@zentrexsystems.com</span>
          </a>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm">Quick Links</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground">Features</a></li>
            <li><a href="#how" className="hover:text-foreground">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-3 text-sm">Follow</p>
          <div className="flex gap-2">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 rounded-full border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Zentrex Systems. All rights reserved.</p>
          <p>Built for businesses that never miss a call.</p>
        </div>
      </div>
    </footer>
  );
}
