import { Button } from "@/components/ui/button";
import { PhoneCall, CalendarCheck, Languages, Mic, ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="glow-orb h-[400px] w-[400px] -top-20 -left-20 bg-brand-purple/40" />
      <div className="glow-orb h-[500px] w-[500px] top-40 -right-32 bg-brand-pink/40" />
      <div className="glow-orb h-[300px] w-[300px] bottom-0 left-1/3 bg-brand-blue/30" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-brand-purple animate-pulse" />
            AI Receptionist • Live in 5 Days
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Never Miss Another <span className="text-gradient">Customer Call</span> Again
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Your AI receptionist answers calls 24/7, books appointments, qualifies leads, sends SMS
            confirmations, and handles customer conversations automatically — even while you sleep.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Book a Demo <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="#pricing"><Play className="h-4 w-4" /> View Pricing</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 text-sm text-muted-foreground">
            {[
              { i: PhoneCall, t: "24/7 AI Receptionist" },
              { i: Mic, t: "Human-Like Voice AI" },
              { i: CalendarCheck, t: "Instant Appointment Booking" },
              { i: Languages, t: "Multi-Language Support" },
            ].map(({ i: Icon, t }) => (
              <div key={t} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-brand-purple" /> {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 bg-gradient-hero opacity-20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl bg-white border border-border shadow-elegant p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-hero grid place-items-center text-white">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Incoming Call</p>
                  <p className="text-xs text-muted-foreground">+1 (415) 555-0142</p>
                </div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-brand-purple/10 text-brand-purple font-medium">
                AI Active
              </span>
            </div>

            <div className="space-y-3 pt-2">
              <Bubble who="ai">Hi! Thanks for calling Bright Smile Dental. How can I help you today?</Bubble>
              <Bubble who="user">I'd like to book a cleaning for next week.</Bubble>
              <Bubble who="ai">Of course. I have Tuesday at 2pm or Thursday at 10am — which works?</Bubble>
              <Bubble who="user">Tuesday at 2 sounds great.</Bubble>
              <Bubble who="ai">Booked. I just sent a confirmation by SMS. See you then! 🦷</Bubble>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-border text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <CalendarCheck className="h-3.5 w-3.5 text-brand-purple" /> Appointment booked
              </span>
              <span>00:42</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elegant border border-border px-4 py-3 flex items-center gap-3 animate-float">
            <div className="h-9 w-9 rounded-lg bg-brand-pink/15 grid place-items-center">
              <CalendarCheck className="h-4 w-4 text-brand-pink" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Today</p>
              <p className="text-sm font-semibold">+24 appointments</p>
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
            : "bg-gradient-hero text-white rounded-br-md"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
