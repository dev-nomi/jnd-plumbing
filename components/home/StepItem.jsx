import Image from "next/image";

export function StepItem({ number, icon: Icon, title, description, image }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-primary/10" />
        )}
        <span className="absolute left-3 top-3 flex size-8 items-center justify-center rounded-full bg-secondary font-heading text-sm font-bold text-white shadow">
          {String(number).padStart(2, "0")}
        </span>
      </div>

      {/* Icon */}
      <div className="flex justify-center -mt-6 relative z-10">
        <div className="flex size-12 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-md transition-colors duration-300 group-hover:bg-secondary">
          <Icon aria-hidden="true" className="size-6" />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-3 text-center">
        <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-primary">
          {title}
        </h3>
        <p className="mt-2 text-base leading-6 text-black/65">{description}</p>
      </div>
    </li>
  );
}
