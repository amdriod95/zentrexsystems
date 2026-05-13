import { Button } from "@/components/ui/button";
import { ArrowRight, Check, TrendingUp, PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-28 overflow-hidden bg-background"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[oklch(0.55_0.22_275)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[oklch(0.78_0.14_210)]/15 blur-[150px]" />
      {/* Faint grid */}
      <div
        className="absolute inset-0 -z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div className="flex flex-col space-y-8 animate-fade-up">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[oklch(0.55_0.22_275)]/10 border border-[oklch(0.55_0.22_275)]/30 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-[oklch(0.72_0.18_275)] mr-2 animate-pulse" />
            <span className="text-xs font-semibold text-[oklch(0.78_0.14_275)] tracking-wider uppercase">
              GPT-4o Voice Engine Live
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
            Never miss a call.
            <br />
            Never miss a{" "}
            <span className="text-gradient">customer.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Zentrex is the AI receptionist that picks up 24/7, qualifies leads,
            and books appointments straight into your calendar — sounding
            indistinguishable from a human.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Book a demo <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="#pricing">See pricing</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/10">
            {["Live in 5 days", "No long-term contracts", "Cancel anytime"].map(
              (t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 text-[oklch(0.78_0.14_160)]" /> {t}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Right visual mockup */}
        <div
          className="relative animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-7 shadow-elegant overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.55_0.22_275)]/10 via-transparent to-[oklch(0.78_0.14_210)]/10 pointer-events-none" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[oklch(0.55_0.22_275)]/20 grid place-items-center border border-[oklch(0.55_0.22_275)]/40">
                  <div className="w-3.5 h-3.5 rounded-full bg-[oklch(0.72_0.18_275)] animate-pulse" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">
                    Bright Smile Dental
                  </p>
                  <p className="text-xs text-[oklch(0.78_0.14_210)]">
                    AI Agent · +1 (415) 555-0142
                  </p>
                </div>
              </div>
              <span className="px-2 py-1 rounded bg-[oklch(0.78_0.18_160)]/10 border border-[oklch(0.78_0.18_160)]/30 text-[10px] font-bold text-[oklch(0.82_0.18_160)] uppercase tracking-tighter">
                AI Live
              </span>
            </div>

            <div className="space-y-4 relative">
              <Bubble who="ai">
                Hi! Thanks for calling Bright Smile Dental. How can I help you
                today?
              </Bubble>
              <Bubble who="user">
                I'd like to book a cleaning next week.
              </Bubble>
              <Bubble who="ai">
                I have Tuesday at 2pm or Thursday at 10am. Which works best?
              </Bubble>
              <Bubble who="user">Tuesday at 2 — perfect.</Bubble>
            </div>

            <div className="flex items-center gap-2 pt-5 mt-5 border-t border-white/5 relative">
              <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_210)] animate-pulse" />
              <p className="text-xs text-[oklch(0.78_0.14_210)] font-medium tracking-wide">
                Appointment scheduled · Tuesday 2:00 PM
              </p>
            </div>
          </div>

          {/* Floating stats */}
          <div className="absolute -top-6 -right-4 bg-white/8 backdrop-blur-xl border border-white/15 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-float">
            <div className="p-2 rounded-lg bg-[oklch(0.78_0.18_160)]/15 text-[oklch(0.82_0.18_160)]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-[oklch(0.82_0.18_160)] uppercase font-bold tracking-tighter">
                Bookings
              </p>
              <p className="text-lg font-extrabold text-foreground leading-none">
                +38%
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white/8 backdrop-blur-xl border border-white/15 px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[oklch(0.55_0.22_275)]/20 text-[oklch(0.78_0.18_275)]">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground leading-none">
                2,341
              </p>
              <p className="text-[11px] text-muted-foreground font-medium mt-1">
                Calls answered today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bubble({
  who,
  children,
}: {
  who: "ai" | "user";
  children: React.ReactNode;
}) {
  if (who === "ai") {
    return (
      <div className="flex justify-start">
        <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-3.5 max-w-[85%]">
          <p className="text-sm text-foreground/90 leading-relaxed">{children}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-end">
      <div className="bg-[oklch(0.55_0.22_275)]/25 border border-[oklch(0.55_0.22_275)]/40 rounded-2xl rounded-tr-none p-3.5 max-w-[85%]">
        <p className="text-sm text-foreground leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
