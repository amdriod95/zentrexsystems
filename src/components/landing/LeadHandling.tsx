import { Section } from "./Section";
import { Phone, Brain, ListChecks, UserCheck, CalendarCheck, MessageSquare, LayoutDashboard } from "lucide-react";

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
      className="bg-secondary/40"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <ol className="space-y-3">
          {flow.map(({ i: Icon, t }, idx) => (
            <li
              key={t}
              className="flex items-center gap-4 bg-white/5 rounded-2xl border border-white/10 p-4 shadow-card hover:shadow-elegant transition-all"
            >
              <span className="h-9 w-9 rounded-xl bg-gradient-hero grid place-items-center text-white text-sm font-bold shrink-0">
                {idx + 1}
              </span>
              <Icon className="h-5 w-5 text-brand-purple shrink-0" />
              <span className="font-medium">{t}</span>
            </li>
          ))}
        </ol>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-hero opacity-20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl bg-white/5 border border-white/10 shadow-elegant p-6">
            <div className="flex items-center justify-between mb-5">
              <p className="font-semibold">Live Conversation</p>
              <span className="text-xs px-2 py-1 rounded-full bg-brand-pink/10 text-brand-pink font-medium flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-pink animate-pulse" /> Recording
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
                    i % 2 ? "bg-gradient-hero text-white" : "bg-secondary"
                  }`}>{m}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-border grid grid-cols-3 text-center text-xs">
              <div><p className="text-muted-foreground">Duration</p><p className="font-semibold mt-0.5">01:12</p></div>
              <div><p className="text-muted-foreground">Outcome</p><p className="font-semibold mt-0.5 text-brand-purple">Booked</p></div>
              <div><p className="text-muted-foreground">SMS Sent</p><p className="font-semibold mt-0.5">✓</p></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
