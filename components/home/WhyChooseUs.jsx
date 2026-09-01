import { FeatureCard } from "@/components/home/FeatureCard";
import { FEATURES } from "@/data/features";

export function WhyChooseUs() {
  return (
    <section className="bg-background px-6 pt-10 pb-28 lg:px-8 lg:pt-12 lg:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Why Choose Us
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Plumbing You Can{" "}
            <span className="text-secondary">Count On</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/65">
            With decades of experience and a commitment to quality, we provide
            reliable plumbing solutions and professional service you can trust.
          </p>
        </div>


        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
