import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CallButton } from "@/components/shared/CallButton";
import { ServiceItem } from "@/components/home/ServiceItem";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="bg-card px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Our Services
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Professional Plumbing{" "}
            <span className="text-secondary">Services You Can Trust</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/65">
            From everyday plumbing repairs to complete re-piping, our experienced
            team provides reliable solutions for homes and businesses across Kuala Lumpur.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((service) => (
            <ServiceItem key={service.label} {...service} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 gap-2 rounded-full bg-primary px-6 text-base font-bold text-white uppercase hover:bg-primary/90"
            )}
          >
            See All Services
            <ArrowRight className="size-4" />
          </Link>
          <CallButton />
        </div>
      </div>
    </section>
  );
}
