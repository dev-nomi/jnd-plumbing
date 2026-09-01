export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group flex flex-col items-center rounded-xl bg-card p-8 text-center text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-white transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-6 font-heading text-xl font-semibold uppercase">{title}</h3>
      <p className="mt-2 text-base text-black">{description}</p>
    </div>
  );
}
