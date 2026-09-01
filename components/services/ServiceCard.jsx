import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServiceCard({ label, icon: Icon, description, image }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border-2 border-transparent bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg">
      {image ? (
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={label}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-full bg-primary" />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white">
          <Icon className="size-6" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-extrabold tracking-tight text-primary uppercase">
          {label}
        </h3>
        <p className="mt-2 flex-1 text-sm text-black/70">{description}</p>
      </div>
    </div>
  );
}
