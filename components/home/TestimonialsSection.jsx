import { CallButton } from "@/components/shared/CallButton";
import { TestimonialCard } from "@/components/home/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Testimonials
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            What Our Customers{" "}
            <span className="text-secondary">Have to Say</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/65">
            See why homeowners and businesses across Kuala Lumpur trust JND Plumber
            for reliable, professional service.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <CallButton />
        </div>
      </div>
    </section>
  );
}
