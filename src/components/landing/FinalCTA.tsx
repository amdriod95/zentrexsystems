import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useBookDemo } from "./BookDemoDialog";

export function FinalCTA() {
  const { open } = useBookDemo();
  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-20 text-center text-white shadow-elegant">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.05]">
            Stop Missing Calls. Start Booking More Customers.
          </h2>
          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
            Your AI receptionist works 24/7 so you never lose another lead.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button variant="soft" size="xl" onClick={open}>
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="xl"
              asChild
              className="bg-white/15 backdrop-blur text-white border border-white/30 hover:bg-white/25 rounded-2xl"
            >
              <a href="#pricing">See pricing</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
