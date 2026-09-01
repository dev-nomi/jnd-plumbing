"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label, className = "" }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`group relative text-base font-extrabold tracking-wide transition-colors uppercase ${
        isActive
          ? "text-card-foreground"
          : "text-card-foreground/70 hover:text-card-foreground"
      } ${className}`}
    >
      {label}
      <span
        className={`absolute -bottom-1.5 left-0 h-px bg-primary transition-all duration-300 ease-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
