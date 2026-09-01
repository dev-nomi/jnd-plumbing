export function StepItem({ number, icon: Icon, title, description, isLast }) {
  return (
    <li className="group relative flex items-start lg:flex-col lg:items-center lg:text-center">
      {/* Connector line to the next step */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="
            absolute
            left-10
            top-20
            bottom-[-2.5rem]
            w-0.5
            -translate-x-1/2
            bg-primary/15
            lg:left-1/2
            lg:top-10
            lg:bottom-auto
            lg:h-1
            lg:w-[calc(100%+1.5rem)]
            lg:-translate-y-1/2
            lg:translate-x-0
          "
        />
      )}

      {/* Step Number + Icon */}
      <div
        className="
          relative
          z-10
          flex
          size-20
          shrink-0
          items-center
          justify-center
          rounded-full
          border-[6px]
          border-background
          bg-primary
          text-white
          shadow-lg
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:bg-secondary
          group-hover:shadow-xl
        "
      >
        <Icon
          aria-hidden="true"
          className="
            size-8
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />

        {/* Number Badge */}
        <span
          className="
            absolute
            -right-2
            -top-2
            flex
            size-8
            items-center
            justify-center
            rounded-full
            bg-secondary
            font-heading
            text-sm
            font-bold
            text-primary
            ring-4
            ring-background
            transition-transform
            duration-300
            group-hover:scale-110
          "
        >
          {String(number).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="ml-6 pt-1 lg:ml-0 lg:pt-0">
        <h3
          className="
            mt-0
            font-heading
            text-xl
            font-bold
            uppercase
            tracking-wide
            text-primary
            lg:mt-7
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            max-w-xs
            text-base
            leading-6
            text-black/65
            lg:mx-auto
          "
        >
          {description}
        </p>
      </div>
    </li>
  );
}
