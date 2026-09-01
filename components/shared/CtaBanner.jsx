import { Phone } from "lucide-react";

import { CallButton } from "@/components/shared/CallButton";
import { PHONE_NUMBER } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="border-b border-white/10 bg-primary px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/60">
            Ready to get started?
          </p>
          <h2 className="mt-2 font-heading text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl">
            Call JND&rsquo;s Most Trusted{" "}
            <span className="text-secondary">Plumber</span>
          </h2>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
          <CallButton className="h-auto gap-2.5 rounded-[8px] bg-secondary px-7 py-4 font-heading text-[21px] leading-[33.6px] font-bold tracking-[1px] uppercase shadow-[0_4px_24px_0_rgba(193,96,42,0.6)] hover:bg-secondary/90 animate-pulse-glow">
            <Phone className="size-5" />
            Call {PHONE_NUMBER}
          </CallButton>
        </div>
      </div>
    </section>
  );
}
