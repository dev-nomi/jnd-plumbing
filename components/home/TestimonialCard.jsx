import { StarIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function FacebookGlyph({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.459h-1.26c-1.243 0-1.63.773-1.63 1.564v1.887h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
    </svg>
  );
}

export function TestimonialCard({ name, location, quote, timeAgo }) {
  return (
    <Card className="border border-primary/10 bg-card/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg">
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback className="bg-primary/10 font-semibold text-primary">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-black">{name}</p>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>

        <div className="flex gap-0.5 text-accent">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} className="size-4 fill-accent" />
          ))}
        </div>

        <p className="text-sm text-black">{quote}</p>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <FacebookGlyph className="size-3.5 text-[#1877F2]" />
          {timeAgo}
        </div>
      </CardContent>
    </Card>
  );
}
