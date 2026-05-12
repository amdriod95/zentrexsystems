import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarCheck, ArrowRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-28 overflow-hidden bg-background">
      {/* Soft warm wash */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, oklch(0.92 0.025 165 / 0.55), transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-sage animate-pulse" />
          AI Receptionist • Live in 5 days
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight font-semibold">
          AI that <span className="font-serif-italic text-brand-sage">answers</span> calls
          <br className="hidden md:block" />
          and <span className="font-serif-italic text-brand-sage">books</span> appointments.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A human-like AI receptionist that picks up 24/7, qualifies leads, and fills your
          calendar — so you never miss another customer call.
        </p>

        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Book a demo <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button variant="soft" size="xl" asChild>
            <a href="#pricing">View pricing</a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center pt-4 text-sm text-muted-foreground">
          {["No long-term contracts", "Live in 5 days", "Cancel anytime"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-sage" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* Conversation mockup */}
      <div className="max-w-3xl mx-auto px-6 mt-16 animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <div className="relative rounded-3xl bg-card border border-border shadow-elegant p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-foreground grid place-items-center text-background">
                <PhoneCall className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Incoming call</p>
                <p className="text-xs text-muted-foreground">+1 (415) 555-0142</p>
              </div>
            </div>
            <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-brand-sage/15 text-brand-sage">
              AI Active
            </span>
          </div>

          <div className="space-y-3 text-left">
            <Bubble who="ai">Hi! Thanks for calling Bright Smile Dental. How can I help today?</Bubble>
            <Bubble who="user">I'd like to book a cleaning for next week.</Bubble>
            <Bubble who="ai">Of course — I have Tuesday at 2pm or Thursday at 10am. Which works?</Bubble>
            <Bubble who="user">Tuesday at 2 sounds great.</Bubble>
            <Bubble who="ai">Booked. I just sent a confirmation by SMS. See you then!</Bubble>
          </div>

          <div className="flex items-center justify-between pt-5 mt-5 border-t border-border text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <CalendarCheck className="h-3.5 w-3.5 text-brand-sage" /> Appointment booked
            </span>
            <span className="font-mono">00:42</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({ who, children }: { who: "ai" | "user"; children: React.ReactNode }) {
  return (
    <div className={`flex ${who === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] text-sm px-4 py-2.5 rounded-2xl ${
          who === "ai"
            ? "bg-secondary text-foreground rounded-bl-md"
            : "bg-foreground text-background rounded-br-md"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
