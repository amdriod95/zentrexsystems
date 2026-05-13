import { Section } from "./Section";
import { ClipboardList, FileCheck2, Rocket } from "lucide-react";
import { cardAccentMap } from "./cardAccents";

const steps = [
  { n: "01", i: ClipboardList, t: "Choose Your Plan", d: "Pick the plan that fits your call volume — Starter, Growth, or Pro.", c: "indigo" as const },
  { n: "02", i: FileCheck2, t: "Complete Your Onboarding Form", d: "Tell us about your business, services, hours, and FAQs.", c: "cyan" as const },
  { n: "03", i: Rocket, t: "Your AI Goes Live in 5 Days", d: "We build, train, test, and launch your receptionist for you.", c: "emerald" as const },
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
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {steps.map(({ n, i: Icon, t, d, c }) => {
          const a = cardAccentMap[c];
          return (
            <div
              key={n}
              className={`group relative overflow-hidden bg-slate-900/80 border-t-4 ${a.border} p-7 rounded-3xl shadow-2xl shadow-black/40 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-800/90`}
            >
              <div className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${a.wash} to-transparent pointer-events-none`} />
              <div className={`relative h-14 w-14 mx-auto rounded-2xl ${a.iconBg} grid place-items-center mb-5`}>
                <Icon className={`h-6 w-6 ${a.iconText}`} />
                <span className={`absolute -top-2 -right-2 h-7 w-7 rounded-full bg-slate-950 border ${a.border} text-xs font-bold grid place-items-center ${a.iconText}`}>
                  {n}
                </span>
              </div>
              <h3 className="relative font-bold text-xl text-white mb-2">{t}</h3>
              <p className="relative text-sm text-slate-400">{d}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
