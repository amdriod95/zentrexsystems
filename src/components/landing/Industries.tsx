import { Section } from "./Section";
import { Stethoscope, Scale, Home, Scissors, Wrench, ShoppingBag } from "lucide-react";

const items = [
  { i: Stethoscope, t: "Clinics", d: "Dental, medical, veterinary." },
  { i: Scale, t: "Law Firms", d: "Intake, scheduling, follow-ups." },
  { i: Home, t: "Real Estate", d: "Buyer & seller inquiries 24/7." },
  { i: Scissors, t: "Salons & Spas", d: "Bookings, reschedules, confirmations." },
  { i: Wrench, t: "Home Services", d: "HVAC, plumbing, electrical, cleaning." },
  { i: ShoppingBag, t: "E-commerce Support", d: "Orders, returns, customer questions." },
];

export function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title={<>Built For Businesses That <span className="text-gradient">Rely On Calls</span></>}
      subtitle="Trained on industry-specific scripts and workflows for instant relevance."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ i: Icon, t, d }) => (
          <div
            key={t}
            className="group rounded-2xl bg-white/5 border border-white/10 p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-brand-purple/10 grid place-items-center text-brand-purple mb-4 group-hover:bg-gradient-hero group-hover:text-white transition-all">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg mb-1">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
