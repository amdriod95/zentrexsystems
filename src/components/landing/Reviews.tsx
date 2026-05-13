import { Section } from "./Section";
import { Star } from "lucide-react";
import { cardAccentMap } from "./cardAccents";

const reviews = [
  { name: "Sarah Mitchell", role: "Dental Clinic Owner", initials: "SM", c: "cyan" as const,
    text: "Before Zentrex Systems, we missed calls every evening. Now every lead gets answered instantly and appointments are automatically booked." },
  { name: "Daniel Carter", role: "Law Firm Owner", initials: "DC", c: "indigo" as const,
    text: "The AI sounds incredibly human. Clients thought they were speaking with my receptionist." },
  { name: "Melissa Grant", role: "Med Spa Owner", initials: "MG", c: "fuchsia" as const,
    text: "Our response time became instant overnight. We're booking more appointments without hiring extra staff." },
  { name: "Ryan Lopez", role: "Home Services Company", initials: "RL", c: "emerald" as const,
    text: "The setup was surprisingly easy. Within days, our AI receptionist was handling calls better than expected." },
];

export function Reviews() {
  return (
    <Section
      id="reviews"
      eyebrow="Reviews"
      title={<>Businesses Love Their <span className="text-gradient">AI Receptionist</span></>}
      subtitle="Real outcomes from real business owners using Zentrex Systems every day."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r) => {
          const a = cardAccentMap[r.c];
          return (
            <div
              key={r.name}
              className={`group relative overflow-hidden rounded-3xl bg-slate-900/80 border-t-4 ${a.border} p-7 shadow-2xl shadow-black/40 hover:-translate-y-1.5 hover:bg-slate-800/90 transition-all duration-300`}
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${a.wash} to-transparent pointer-events-none`} />
              <div className="relative flex gap-1 mb-4 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="relative text-slate-200 leading-relaxed mb-5">"{r.text}"</p>
              <div className="relative flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`h-11 w-11 rounded-full ${a.iconBg} ${a.iconText} grid place-items-center font-bold text-sm border ${a.border}`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
