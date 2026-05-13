import { Section } from "./Section";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How does the AI receptionist work?", a: "It answers your business phone using a human-like voice, follows custom scripts trained on your business, books appointments, sends SMS confirmations, and logs everything to your dashboard." },
  { q: "Can it transfer calls to a human?", a: "Yes. You can set rules for when calls should be transferred to a team member or department." },
  { q: "Does the AI sound human?", a: "Yes — most callers can't tell. We use the latest voice AI with natural pacing, tone, and pauses." },
  { q: "Can I customize the AI?", a: "Absolutely. Voice, greeting, scripts, escalation rules, FAQs, and brand tone are all configurable." },
  { q: "What industries do you support?", a: "Clinics, law firms, real estate, salons & spas, home services, e-commerce — and most call-driven businesses." },
  { q: "How long does setup take?", a: "Your AI receptionist goes live within 5 days of completing your onboarding form." },
  { q: "Do you offer support?", a: "Yes. Every plan includes support — email on Starter, priority on Growth, and dedicated on Pro." },
  { q: "Is there a contract?", a: "No long-term contracts. You're billed monthly and can cancel anytime." },
  { q: "Can I cancel anytime?", a: "Yes — cancel from your dashboard with a single click." },
  { q: "Do you integrate with CRMs?", a: "We integrate with HubSpot, GoHighLevel, Salesforce, Pipedrive, and 30+ tools via Zapier and native APIs." },
  { q: "What happens after signup?", a: "You'll receive an onboarding form, a kickoff call, and within 5 days your AI receptionist will be live and answering calls." },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
      subtitle="Everything you need to know before getting started."
    >
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-slate-900/80 border-l-4 border-indigo-500 rounded-2xl px-6 shadow-xl shadow-black/30 hover:bg-slate-800/90 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-white hover:no-underline py-5 [&[data-state=open]>svg]:text-cyan-400">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
