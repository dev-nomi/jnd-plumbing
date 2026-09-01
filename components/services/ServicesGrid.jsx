import { ScrollArea } from "@/components/ui/scroll-area";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES_PAGE } from "@/data/servicesPage";

export function ServicesGrid() {
  return (
    <section className="bg-card px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Our Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Everything Plumbing —{" "}
            <span className="text-secondary">One Call</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-card-foreground/70">
            From emergency repairs to planned installations — we handle every
            plumbing need in Kuala Lumpur with licensed professionals and
            guaranteed work.
          </p>
        </div>

        <ScrollArea className="mt-16 h-[1050px] rounded-md border border-black/5 p-2 bg-background/40">
          <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_PAGE.map((service) => (
              <ServiceCard key={service.label} {...service} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
