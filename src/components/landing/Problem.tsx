import { Section } from "./Section";
import { PhoneOff, UserX, Clock, MessageSquareOff, VoicemailIcon, CheckCircle2 } from "lucide-react";
import { cardAccentMap } from "./cardAccents";

const pains = [
  { i: PhoneOff, t: "Missed calls after hours", d: "Customers call when you're closed — and never call back.", c: "rose" as const },
  { i: UserX, t: "Staff unavailable", d: "Your front desk is busy, on break, or out sick.", c: "orange" as const },
  { i: MessageSquareOff, t: "Leads forgotten", d: "Inquiries slip through the cracks every single week.", c: "fuchsia" as const },
  { i: Clock, t: "Slow response times", d: "By the time you reply, the lead has booked elsewhere.", c: "blue" as const },
  { i: VoicemailIcon, t: "Voicemails never returned", d: "Voicemail is a graveyard. Everyone hates leaving them.", c: "violet" as const },
  { i: CheckCircle2, t: "Solved automatically", d: "Zentrex answers, qualifies, books, and confirms — instantly.", c: "emerald" as const, solution: true },
];

export function Problem() {
  return (
    <Section
      eyebrow="The Problem"
      title={<>Your Business Is Losing <span className="text-gradient">Customers Every Day</span></>}
      subtitle="Every missed call is a lost customer. Most businesses lose 30%+ of inbound leads to slow or no response."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pains.map(({ i: Icon, t, d, c, solution }) => {
          const a = cardAccentMap[c];
          return (
            <div
              key={t}
              className={`group relative overflow-hidden border-t-4 ${a.border} p-7 rounded-3xl shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 ${
                solution
                  ? "bg-gradient-to-br from-emerald-600 to-emerald-700"
                  : "bg-slate-900/80 hover:bg-slate-800/90"
              }`}
            >
              {!solution && (
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${a.wash} to-transparent pointer-events-none`} />
              )}
              <div
                className={`relative h-12 w-12 rounded-2xl grid place-items-center mb-5 group-hover:scale-110 transition-transform ${
                  solution ? "bg-white/20 text-white" : `${a.iconBg} ${a.iconText}`
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className={`relative font-bold text-lg mb-2 ${solution ? "text-white" : "text-white"}`}>{t}</h3>
              <p className={`relative text-sm leading-relaxed ${solution ? "text-white/85" : "text-slate-400"}`}>{d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
