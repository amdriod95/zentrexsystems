import { Section } from "./Section";
import { ClipboardList, FileCheck2, Rocket } from "lucide-react";

const steps = [
  { n: "01", i: ClipboardList, t: "Choose Your Plan", d: "Pick the plan that fits your call volume — Starter, Growth, or Pro." },
  { n: "02", i: FileCheck2, t: "Complete Your Onboarding Form", d: "Tell us about your business, services, hours, and FAQs." },
  { n: "03", i: Rocket, t: "Your AI Goes Live in 5 Days", d: "We build, train, test, and launch your receptionist for you." },
];

export function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How It Works"
      title={<>Go Live in <span className="text-gradient">3 Simple Steps</span></>}
      subtitle="From signup to launch in less than a week. No technical skills required."
    >
      <div className="grid md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {steps.map(({ n, i: Icon, t, d }) => (
          <div key={n} className="relative bg-white rounded-2xl border border-border p-7 shadow-card text-center">
            <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-hero grid place-items-center text-white shadow-elegant mb-5 relative">
              <Icon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-white/5 border border-white/10 text-xs font-bold grid place-items-center text-brand-purple">
                {n}
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
