import { Section } from "./Section";
import {
  PhoneCall, CalendarCheck, MessageSquare, Mic, Languages, Database,
} from "lucide-react";

const features = [
  { i: PhoneCall, t: "24/7 Call Answering", d: "Every call is answered instantly — day, night, weekends, holidays." },
  { i: CalendarCheck, t: "Appointment Booking", d: "Books directly into your calendar in real time, no double-bookings." },
  { i: MessageSquare, t: "SMS Follow-Ups", d: "Automated confirmations, reminders, and follow-ups by text." },
  { i: Mic, t: "AI Voice Conversations", d: "Natural, human-like voice that adapts to each caller's tone." },
  { i: Languages, t: "Multi-Language Support", d: "Speak English, Spanish, French, and more — automatically." },
  { i: Database, t: "CRM & Calendar Sync", d: "Plugs into HubSpot, Salesforce, Google, Outlook, Calendly + 30 more." },
];

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title={<>Everything Your Front Desk Needs — <span className="text-gradient">Automated</span></>}
      subtitle="A complete AI receptionist stack designed to handle every customer interaction with precision."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ i: Icon, t, d }) => (
          <div
            key={t}
            className="group rounded-2xl bg-white/5 border border-white/10 p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-hero grid place-items-center text-white shadow-elegant mb-5 group-hover:scale-110 transition-transform">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
