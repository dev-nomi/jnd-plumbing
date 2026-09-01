import { CheckCircle2 } from "lucide-react";

export function ServiceItem({ label, icon: Icon = CheckCircle2 }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
        <Icon className="size-5" />
      </div>
      <span className="font-medium text-card-foreground uppercase">{label}</span>
    </div>
  );
}
