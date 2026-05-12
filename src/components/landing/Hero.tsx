import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarCheck, ArrowRight, Check, Sparkles, TrendingUp, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden bg-background">
      {/* Layered ambient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 10%, oklch(0.92 0.03 165 / 0.55), transparent 60%), radial-gradient(ellipse 50% 45% at 90% 30%, oklch(0.9 0.04 35 / 0.35), transparent 65%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.18 0.005 60 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.18 0.005 60 / 0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-card/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium text-foreground/75 shadow-card">
            <Sparkles className="h-3.5 w-3.5 text-brand-sage" />
            New · GPT-4o voice engine now live
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight font-semibold">
            Never miss a call.
            <br />
            Never miss a <span className="font-serif-italic text-brand-sage">customer</span>.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Zentrex is the AI receptionist that picks up 24/7, qualifies leads,
            and books appointments straight into your calendar — sounding
            indistinguishable from a human.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Book a demo <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="#pricing">See pricing</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
            {["Live in 5 days", "No long-term contracts", "Cancel anytime"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-brand-sage" /> {t}
              </span>
            ))}
          </div>

          {/* Trust bar */}
          <div className="pt-6 border-t border-border/70 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="h-7 w-7 rounded-full border-2 border-background bg-secondary grid place-items-center text-[10px] font-semibold text-foreground/70">
                    {["JM","SK","AR","TL"][i]}
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">
                <div className="flex items-center gap-1 text-foreground">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-3 w-3 fill-brand-sage text-brand-sage" />)}
                  <span className="ml-1 font-semibold">4.9/5</span>
                </div>
                Trusted by 400+ local businesses
              </div>
            </div>
          </div>
        </div>

        {/* Right: conversation mockup with floating cards */}
        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {/* Floating stat — top */}
          <div className="hidden md:flex absolute -top-4 -left-6 z-10 items-center gap-3 rounded-2xl bg-card border border-border shadow-elegant px-4 py-3">
            <div className="h-9 w-9 rounded-xl bg-brand-sage/15 grid place-items-center">
              <TrendingUp className="h-4 w-4 text-brand-sage" />
            </div>
            <div>
              <div className="text-base font-semibold leading-none">+38%</div>
              <div className="text-[11px] text-muted-foreground mt-1">booked appointments</div>
            </div>
          </div>

          {/* Floating stat — bottom right */}
          <div className="hidden md:flex absolute -bottom-5 -right-4 z-10 items-center gap-3 rounded-2xl bg-foreground text-background shadow-elegant px-4 py-3">
            <div className="h-9 w-9 rounded-xl bg-background/10 grid place-items-center">
              <PhoneCall className="h-4 w-4" />
            </div>
            <div>
              <div className="text-base font-semibold leading-none">2,341</div>
              <div className="text-[11px] text-background/70 mt-1">calls answered today</div>
            </div>
          </div>

          <div className="relative rounded-3xl bg-card border border-border shadow-elegant p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full bg-foreground grid place-items-center text-background">
                  <PhoneCall className="h-4 w-4" />
                  <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-brand-sage border-2 border-card animate-pulse" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold leading-tight">Incoming call</p>
                  <p className="text-xs text-muted-foreground">+1 (415) 555-0142</p>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-brand-sage/15 text-brand-sage">
                AI Live
              </span>
            </div>

            <div className="space-y-2.5 text-left">
              <Bubble who="ai">Hi! Thanks for calling Bright Smile Dental. How can I help?</Bubble>
              <Bubble who="user">I'd like to book a cleaning next week.</Bubble>
              <Bubble who="ai">I have Tuesday at 2pm or Thursday at 10am. Which works?</Bubble>
              <Bubble who="user">Tuesday at 2 — perfect.</Bubble>
              <Bubble who="ai">Booked. Confirmation sent by SMS. See you then!</Bubble>
            </div>

            <div className="flex items-center justify-between pt-4 mt-4 border-t border-border text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarCheck className="h-3.5 w-3.5 text-brand-sage" /> Appointment booked
              </span>
              <span className="font-mono tabular-nums">00:42</span>
            </div>
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
