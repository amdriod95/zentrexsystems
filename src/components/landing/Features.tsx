import { Section } from "./Section";
import {
  PhoneCall, CalendarCheck, MessageSquare, Mic, Languages, Database,
} from "lucide-react";

const features = [
  { i: PhoneCall, t: "24/7 Call Answering", d: "Every call is answered instantly — day, night, weekends, holidays.", c: "indigo" },
  { i: CalendarCheck, t: "Appointment Booking", d: "Books directly into your calendar in real time, no double-bookings.", c: "cyan" },
  { i: MessageSquare, t: "SMS Follow-Ups", d: "Automated confirmations, reminders, and follow-ups by text.", c: "fuchsia" },
  { i: Mic, t: "AI Voice Conversations", d: "Natural, human-like voice that adapts to each caller's tone.", c: "emerald" },
  { i: Languages, t: "Multi-Language Support", d: "Speak English, Spanish, French, and more — automatically.", c: "orange" },
  { i: Database, t: "CRM & Calendar Sync", d: "Plugs into HubSpot, Salesforce, Google, Outlook, Calendly + 30 more.", c: "blue" },
] as const;

const accentMap = {
  indigo:  { border: "border-indigo-500",  wash: "from-indigo-500/20",  iconBg: "bg-indigo-500/20",  iconText: "text-indigo-300" },
  cyan:    { border: "border-cyan-500",    wash: "from-cyan-500/20",    iconBg: "bg-cyan-500/20",    iconText: "text-cyan-300" },
  fuchsia: { border: "border-fuchsia-500", wash: "from-fuchsia-500/20", iconBg: "bg-fuchsia-500/20", iconText: "text-fuchsia-300" },
  emerald: { border: "border-emerald-500", wash: "from-emerald-500/20", iconBg: "bg-emerald-500/20", iconText: "text-emerald-300" },
  orange:  { border: "border-orange-500",  wash: "from-orange-500/20",  iconBg: "bg-orange-500/20",  iconText: "text-orange-300" },
  blue:    { border: "border-blue-500",    wash: "from-blue-500/20",    iconBg: "bg-blue-500/20",    iconText: "text-blue-300" },
};

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title={<>Everything Your Front Desk Needs — <span className="text-gradient">Automated</span></>}
      subtitle="A complete AI receptionist stack designed to handle every customer interaction with precision."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ i: Icon, t, d, c }) => {
          const a = accentMap[c];
          return (
            <div
              key={t}
              className={`group relative overflow-hidden bg-slate-900/80 border-t-4 ${a.border} p-7 rounded-3xl shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-800/90`}
            >
              <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${a.wash} to-transparent pointer-events-none`} />
              <div className={`relative h-12 w-12 rounded-2xl ${a.iconBg} grid place-items-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`h-6 w-6 ${a.iconText}`} />
              </div>
              <h3 className="relative font-bold text-lg text-white mb-2">{t}</h3>
              <p className="relative text-sm text-slate-400 leading-relaxed">{d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
