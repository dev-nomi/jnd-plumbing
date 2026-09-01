import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CallButton } from "@/components/shared/CallButton";
import { FAQS } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            FAQs
          </p>

          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            JND Plumber{" "}
            <span className="text-secondary">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <Accordion className="mt-16 space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-2xl border border-primary/10 bg-primary shadow-sm transition-all duration-300 data-open:border-accent/40 data-open:shadow-md"
            >
              <AccordionTrigger className="items-center px-5 py-4 text-left font-semibold text-white hover:bg-card/15 hover:no-underline focus-visible:bg-secondary/10 sm:px-6 sm:py-5 md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pt-1 pb-6 bg-white text-[15px] font-normal leading-relaxed text-black sm:px-6 sm:pt-2 sm:pb-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <CallButton />
        </div>
      </div>
    </section>
  );
}
