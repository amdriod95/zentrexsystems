import { Section } from "./Section";
import { PhoneOff, UserX, Clock, MessageSquareOff, VoicemailIcon, CheckCircle2 } from "lucide-react";

const pains = [
  { i: PhoneOff, t: "Missed calls after hours", d: "Customers call when you're closed — and never call back." },
  { i: UserX, t: "Staff unavailable", d: "Your front desk is busy, on break, or out sick." },
  { i: MessageSquareOff, t: "Leads forgotten", d: "Inquiries slip through the cracks every single week." },
  { i: Clock, t: "Slow response times", d: "By the time you reply, the lead has booked elsewhere." },
  { i: VoicemailIcon, t: "Voicemails never returned", d: "Voicemail is a graveyard. Everyone hates leaving them." },
  { i: CheckCircle2, t: "Solved automatically", d: "Zentrex answers, qualifies, books, and confirms — instantly." },
];

export function Problem() {
  return (
    <Section
      eyebrow="The Problem"
      title={<>Your Business Is Losing <span className="text-gradient">Customers Every Day</span></>}
      subtitle="Every missed call is a lost customer. Most businesses lose 30%+ of inbound leads to slow or no response."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {pains.map(({ i: Icon, t, d }, idx) => {
          const isSolution = idx === pains.length - 1;
          return (
            <div
              key={t}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                isSolution
                  ? "bg-gradient-hero text-white border-transparent shadow-elegant"
                  : "bg-white border-border shadow-card hover:shadow-elegant"
              }`}
            >
              <div
                className={`h-11 w-11 rounded-xl grid place-items-center mb-4 ${
                  isSolution ? "bg-white/20 text-white" : "bg-brand-purple/10 text-brand-purple"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg mb-1.5">{t}</h3>
              <p className={`text-sm ${isSolution ? "text-white/85" : "text-muted-foreground"}`}>{d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
