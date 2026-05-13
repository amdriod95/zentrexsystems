import { Section } from "./Section";
import { Phone, Brain, ListChecks, UserCheck, CalendarCheck, MessageSquare, LayoutDashboard } from "lucide-react";
import { cardAccentMap, accentCycle } from "./cardAccents";

const flow = [
  { i: Phone, t: "AI answers instantly" },
  { i: Brain, t: "Understands caller needs" },
  { i: ListChecks, t: "Collects customer info" },
  { i: UserCheck, t: "Qualifies the lead" },
  { i: CalendarCheck, t: "Books the appointment" },
  { i: MessageSquare, t: "Sends SMS confirmation" },
  { i: LayoutDashboard, t: "Saves everything in dashboard" },
];

export function LeadHandling() {
  return (
    <Section
      eyebrow="Lead Handling"
      title={<>Your AI Handles <span className="text-gradient">The Entire Conversation</span></>}
      subtitle="From hello to confirmation — every step happens automatically without human intervention."
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <ol className="space-y-3">
          {flow.map(({ i: Icon, t }, idx) => {
            const a = cardAccentMap[accentCycle[idx % accentCycle.length]];
            return (
              <li
                key={t}
                className={`group relative flex items-center gap-4 bg-slate-900/80 rounded-2xl border-l-4 ${a.border} p-4 shadow-xl shadow-black/30 hover:bg-slate-800/90 transition-all`}
              >
                <span className={`h-10 w-10 rounded-xl ${a.iconBg} ${a.iconText} grid place-items-center text-sm font-bold shrink-0`}>
                  {idx + 1}
                </span>
                <Icon className={`h-5 w-5 ${a.iconText} shrink-0`} />
                <span className="font-medium text-white">{t}</span>
              </li>
            );
          })}
        </ol>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 opacity-50 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl shadow-black/50 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-5">
              <p className="font-semibold text-white">Live Conversation</p>
              <span className="text-xs px-2 py-1 rounded-full bg-rose-500/15 text-rose-300 font-medium flex items-center gap-1.5 border border-rose-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" /> Recording
              </span>
            </div>
            <div className="space-y-3">
              {["Hi, this is Maya from Sunset Med Spa. How can I help?",
                "I'd like to book a facial for Friday afternoon.",
                "Got it. I have 3pm or 4:30pm — which works best?",
                "3pm please.",
                "Booked. May I have your name and phone for the confirmation?"
              ].map((m, i) => (
                <div key={i} className={`flex ${i % 2 ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] text-sm px-4 py-2.5 rounded-2xl ${
                    i % 2
                      ? "bg-indigo-500/25 border border-indigo-500/40 text-white"
                      : "bg-white/5 border border-white/10 text-slate-200"
                  }`}>{m}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 text-center text-xs">
              <div><p className="text-slate-500">Duration</p><p className="font-semibold mt-0.5 text-white">01:12</p></div>
              <div><p className="text-slate-500">Outcome</p><p className="font-semibold mt-0.5 text-emerald-400">Booked</p></div>
              <div><p className="text-slate-500">SMS Sent</p><p className="font-semibold mt-0.5 text-white">✓</p></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
