import Image from "next/image";
import { Phone } from "lucide-react";
import { CallButton } from "@/components/shared/CallButton";
import { PHONE_DISPLAY } from "@/lib/constants";


const HERO_STATS = [
  { value: "20+", label: "Yrs Local" },
  { value: "4.7★", label: "Google" },
  { value: "24/7", label: "Available" },
  { value: "1-Hr", label: "Guarantee" },
  { value: "FREE", label: "Estimates" },
];

export function HeroSection() {
  return (
    <section className="bg-primary px-6 pt-10 pb-10 text-white lg:px-8 lg:pt-12 lg:pb-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700 md:grid-cols-2 md:gap-16">
        <div>
          <h1 className="font-heading text-6xl font-extrabold uppercase leading-[1.2]">
            JND{" "}
            <span className="text-secondary">PLUMBER</span>
            <br/>
            YOUR LOCAL PLUMBER
          </h1>
          <p className="mt-6 text-base text-white/80 md:text-lg">
            Licensed, insured & background-checked plumbers serving in Kuala Lumpur. Emergency service, water heaters, leak detection, drain cleaning & more — 
            <strong>24/7, 365 days a year.</strong>
          </p>

           <div className="mt-6 flex flex-wrap gap-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] border border-white/20 bg-white/10 px-3.5 py-2.5 text-center"
              >
                <strong className="block font-heading text-2xl font-bold leading-tight">
                  {stat.value}
                </strong>
                <span className="block text-xs font-medium tracking-wide text-white/70 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <CallButton className="mt-8 h-auto gap-2.5 rounded-[8px] bg-secondary px-7 py-4 font-heading text-[21px] leading-[33.6px] font-bold tracking-[1px] uppercase shadow-[0_4px_24px_0_rgba(193,96,42,0.6)] hover:bg-secondary/90 animate-pulse-glow">
            <Phone className="size-5" />
            Call {PHONE_DISPLAY}
          </CallButton>
        </div>

        <div className="relative mx-auto aspect-[3/2] w-full max-w-xl overflow-hidden rounded-2xl shadow-xl md:max-w-none">
          <Image
            src="/images/services/general-plumbing.jpeg"
            alt="Woman calling an emergency plumber after a leaking pipe"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* <WaveDivider /> */}
    </section>
  );
}
