"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "@/components/shared/NavLink";
import { CallButton } from "@/components/shared/CallButton";
import { PHONE_NUMBER } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full animate-in fade-in slide-in-from-top-4 border-b border-black/5 bg-white backdrop-blur-md duration-700">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="relative h-10 w-36 shrink-0 transition-opacity hover:opacity-80 md:h-12 md:w-44"
        >
          <Image
            src="/images/logo.png"
            alt="JND Plumber"
            fill
            sizes="176px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <CallButton className="gap-2">
          <Phone className="size-4" />
          {PHONE_NUMBER}
        </CallButton>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-card-foreground hover:bg-black/5 hover:text-card-foreground md:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-8 px-6 py-8">
            <SheetHeader className="p-0">
              <SheetTitle className="relative h-9 w-32 text-popover-foreground">
                <Image
                  src="/images/logo.png"
                  alt="JND Plumber"
                  fill
                  sizes="128px"
                  className="object-contain object-left"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-heading text-2xl transition-colors hover:text-primary ${
                      isActive ? "text-primary" : "text-popover-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <CallButton className="gap-2">
              <Phone className="size-4" />
              {PHONE_NUMBER}
            </CallButton>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
