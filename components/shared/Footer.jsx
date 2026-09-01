import Image from "next/image";
import { Phone } from "lucide-react";

import { CallButton } from "@/components/shared/CallButton";
import { PHONE_NUMBER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary px-6 py-16 text-white lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="relative h-50 w-50 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
          <Image
            src="/images/footer.jpeg"
            alt="JND Plumber"
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-secondary uppercase">
            Address
          </p>
          <address className="mt-3 text-base not-italic text-white/80">
            JND Plumber
            <br />
            Jalan Bangsar Utama 1,
            <br />
            59000 Kuala Lumpur.
          </address>
        </div>

        <CallButton className="gap-2">
          <Phone className="size-4" />
          {PHONE_NUMBER}
        </CallButton>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-white/60">
        Copyright 2026 | All Rights Reserved
      </div>
    </footer>
  );
}
