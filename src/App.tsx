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

export default function App() {
  return (
    <BookDemoProvider>
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
    </BookDemoProvider>
  );
}
