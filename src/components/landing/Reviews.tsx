import { Section } from "./Section";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah Mitchell", role: "Dental Clinic Owner", initials: "SM",
    text: "Before Zentrex Systems, we missed calls every evening. Now every lead gets answered instantly and appointments are automatically booked." },
  { name: "Daniel Carter", role: "Law Firm Owner", initials: "DC",
    text: "The AI sounds incredibly human. Clients thought they were speaking with my receptionist." },
  { name: "Melissa Grant", role: "Med Spa Owner", initials: "MG",
    text: "Our response time became instant overnight. We're booking more appointments without hiring extra staff." },
  { name: "Ryan Lopez", role: "Home Services Company", initials: "RL",
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
      <div className="grid md:grid-cols-2 gap-5">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="rounded-2xl bg-white/5 border border-white/10 p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex gap-1 mb-4 text-brand-orange">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-foreground/90 leading-relaxed mb-5">"{r.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="h-11 w-11 rounded-full bg-gradient-hero grid place-items-center text-white font-semibold text-sm">
                {r.initials}
              </div>
              <div>
                <p className="font-semibold text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
