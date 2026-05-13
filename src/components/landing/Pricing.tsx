import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter", price: 397, tagline: "Perfect for small businesses",
    features: [
      "500 AI voice minutes/month",
      "Call logs & transcripts",
      "Appointment management",
      "SMS notifications",
      "Auto top-up at 20% remaining",
      "Email support",
    ],
  },
  {
    name: "Growth", price: 597, tagline: "For growing businesses", popular: true,
    features: [
      "1,000 AI voice minutes/month",
      "Everything in Starter",
      "Auto top-up at 20% remaining",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    name: "Pro", price: 997, tagline: "For high-volume operations",
    features: [
      "2,000 AI voice minutes/month",
      "Everything in Growth",
      "Auto top-up at 20% remaining",
      "Custom integrations",
      "Dedicated support",
    ],
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={<>Simple, <span className="text-gradient">Transparent Pricing</span></>}
      subtitle="One-time setup fee of $999 on all plans. No long-term contracts. Cancel anytime."
    >
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 flex flex-col ${
              p.popular
                ? "bg-gradient-to-br from-[oklch(0.55_0.22_275)] to-[oklch(0.45_0.18_245)] text-white border-transparent shadow-elegant scale-[1.02]"
                : "bg-card border-border shadow-card hover:shadow-elegant"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-sage text-background text-xs font-bold shadow-card">
                MOST POPULAR
              </span>
            )}
            <h3 className="text-2xl font-bold">{p.name}</h3>
            <p className={`text-sm mt-1 ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>
              {p.tagline}
            </p>
            <div className="mt-6 mb-6">
              <span className="text-5xl font-bold">${p.price}</span>
              <span className={`text-sm ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.popular ? "text-white" : "text-brand-sage"}`} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={p.popular ? "soft" : "hero"}
              size="lg"
              asChild
              className={`w-full ${p.popular ? "bg-white text-[oklch(0.45_0.18_270)] border-white hover:bg-white/90" : ""}`}
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
