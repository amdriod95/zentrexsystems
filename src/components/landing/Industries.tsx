import { Section } from "./Section";
import { Stethoscope, Scale, Home, Scissors, Wrench, ShoppingBag } from "lucide-react";
import { cardAccentMap } from "./cardAccents";

const items = [
  { i: Stethoscope, t: "Clinics", d: "Dental, medical, veterinary.", c: "cyan" as const },
  { i: Scale, t: "Law Firms", d: "Intake, scheduling, follow-ups.", c: "indigo" as const },
  { i: Home, t: "Real Estate", d: "Buyer & seller inquiries 24/7.", c: "emerald" as const },
  { i: Scissors, t: "Salons & Spas", d: "Bookings, reschedules, confirmations.", c: "fuchsia" as const },
  { i: Wrench, t: "Home Services", d: "HVAC, plumbing, electrical, cleaning.", c: "orange" as const },
  { i: ShoppingBag, t: "E-commerce Support", d: "Orders, returns, customer questions.", c: "blue" as const },
];

export function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title={<>Built For Businesses That <span className="text-gradient">Rely On Calls</span></>}
      subtitle="Trained on industry-specific scripts and workflows for instant relevance."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ i: Icon, t, d, c }) => {
          const a = cardAccentMap[c];
          return (
            <div
              key={t}
              className={`group relative overflow-hidden bg-slate-900/80 border-t-4 ${a.border} p-7 rounded-3xl shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-800/90`}
            >
              <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${a.wash} to-transparent pointer-events-none`} />
              <div className={`relative h-12 w-12 rounded-2xl ${a.iconBg} grid place-items-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`h-6 w-6 ${a.iconText}`} />
              </div>
              <h3 className="relative font-bold text-lg text-white mb-1">{t}</h3>
              <p className="relative text-sm text-slate-400">{d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
