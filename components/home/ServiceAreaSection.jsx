import Image from "next/image";

import { CallButton } from "@/components/shared/CallButton";

export function ServiceAreaSection() {
  return (
    <section className="bg-primary px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <Image
            src="/images/kl-map.webp"
            alt="Map of Klang Valley, Kuala Lumpur"
            width={1664}
            height={2095}
            sizes="(max-width: 400px) 100vw, 400px"
            className="h-auto w-full"
          />
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Service Area
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Professional Plumbing Services{" "}
            <span className="text-secondary">Across Kuala Lumpur</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            From quick repairs to larger plumbing jobs, our experienced team proudly
            serves homes and businesses throughout Kuala Lumpur and surrounding areas.
          </p>

          <div className="mt-14 text-center">
            <CallButton />
          </div>
        </div>
      </div>
    </section>
  );
}
