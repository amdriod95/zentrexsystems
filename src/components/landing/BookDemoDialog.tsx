import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

type Ctx = { open: () => void };
const BookDemoCtx = createContext<Ctx>({ open: () => {} });
export const useBookDemo = () => useContext(BookDemoCtx);

export function BookDemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookDemoCtx.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg bg-slate-950 border border-white/10 text-white max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium">
              <Sparkles className="h-4 w-4" /> Book your demo
            </div>
            <DialogTitle className="text-2xl">See Zentrex in action</DialogTitle>
            <DialogDescription className="text-white/70">
              Tell us a bit about your business and we'll set up a personalized demo.
            </DialogDescription>
          </DialogHeader>

          <form action="/send.php" method="POST" className="space-y-4 mt-2">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Full name" name="name" required placeholder="Jane Doe" />
              <Field label="Work email" name="email" type="email" required placeholder="jane@company.com" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Phone" name="phone" type="tel" required placeholder="+1 555 123 4567" />
              <Field label="Business name" name="business" required placeholder="Acme Dental" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-white/80 text-sm">Industry</Label>
                <select
                  name="businessType"
                  required
                  defaultValue=""
                  className="flex h-9 w-full rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-400"
                >
                  <option value="" disabled className="bg-slate-900">Select…</option>
                  {["Dental","Medical","Salon & Spa","Home Services","Legal","Real Estate","Auto","Other"].map((o) => (
                    <option key={o} value={o} className="bg-slate-900">{o}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-white/80 text-sm">Monthly calls</Label>
                <select
                  name="callVolume"
                  required
                  defaultValue=""
                  className="flex h-9 w-full rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-400"
                >
                  <option value="" disabled className="bg-slate-900">Select…</option>
                  {["< 100","100–500","500–1,000","1,000–5,000","5,000+"].map((o) => (
                    <option key={o} value={o} className="bg-slate-900">{o}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-white/80 text-sm">What would you like to achieve?</Label>
              <Textarea
                name="message"
                rows={3}
                required
                placeholder="e.g. We miss 30% of calls after hours and need 24/7 booking."
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Request demo
            </Button>
            <p className="text-[11px] text-white/50 text-center">
              By submitting, you agree to be contacted about Zentrex Systems.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </BookDemoCtx.Provider>
  );
}

function Field({ label, name, type = "text", required, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-white/80 text-sm">{label}</Label>
      <Input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-white/5 border-white/15 text-white placeholder:text-white/40"
      />
    </div>
  );
}
