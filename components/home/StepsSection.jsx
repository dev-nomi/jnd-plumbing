import { CallButton } from "@/components/shared/CallButton";
import { StepItem } from "@/components/home/StepItem";
import { STEPS } from "@/data/steps";

export function StepsSection() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Simple & Stress-Free
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            4 Simple Steps.{" "}
            <span className="text-secondary">
              One Fixed Plumbing Problem.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/65">
            Getting your plumbing fixed doesn't have to be complicated.
            From your first call to the final repair, JND Plumber keeps the
            process simple.
          </p>
        </div>

        <ol role="list" className="relative mt-20 grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
          {STEPS.map((step, i) => (
            <StepItem
              key={step.number}
              {...step}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </ol>

        <div className="mt-14 text-center">
          <CallButton />
        </div>
      </div>
    </section>
  );
}
