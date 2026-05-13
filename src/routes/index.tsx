import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LeadHandling } from "@/components/landing/LeadHandling";
import { Industries } from "@/components/landing/Industries";
import { Reviews } from "@/components/landing/Reviews";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { BookDemoProvider } from "@/components/landing/BookDemoDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zentrex Systems — AI Receptionist That Never Misses a Call" },
      {
        name: "description",
        content:
          "Zentrex Systems is an AI receptionist that answers calls 24/7, books appointments, qualifies leads, and sends SMS confirmations — automatically.",
      },
      { property: "og:title", content: "Zentrex Systems — AI Receptionist 24/7" },
      {
        property: "og:description",
        content:
          "Never miss another customer call. Human-like AI voice, instant booking, multi-language support.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <LeadHandling />
        <Industries />
        <Reviews />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
