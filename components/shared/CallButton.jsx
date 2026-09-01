import { buttonVariants } from "@/components/ui/button";
import { PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CallButton({ className, children = "Call Us Now!", ...props }) {
  return (
    <a
      href={PHONE_HREF}
      className={cn(
        buttonVariants({ size: "lg" }),
        "h-12 gap-2 rounded-full bg-secondary px-6 text-base font-bold text-white uppercase hover:bg-secondary/90",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
