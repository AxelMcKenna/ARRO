import ArroLogo from './ArroLogo'

export default function Hero() {
  return (
    <section className="relative min-h-svh grid grid-cols-12 grid-rows-[repeat(8,1fr)] px-6 md:px-12 lg:px-20">
      {/* Content island — upper-left quadrant, negative space does the heavy lifting */}
      <div className="animate-fade-up col-start-1 col-end-13 row-start-3 row-end-5 md:col-start-1 md:col-end-7 md:row-start-2 md:row-end-5 lg:col-start-2 lg:col-end-7 flex flex-col gap-6">
        <ArroLogo className="h-12 md:h-16 lg:h-20 w-auto text-foreground self-start" />

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground text-left leading-[0.95]">
          ARRO
        </h1>

        <p className="text-lg md:text-xl text-foreground-muted font-light tracking-wide leading-relaxed max-w-sm text-left">
          Helping Kiwis find the best deal
        </p>
      </div>

      {/* Subtle counterweight — small accent element in the lower-right to balance the content island */}
      <div className="hidden md:flex col-start-9 col-end-12 row-start-6 row-end-7 lg:col-start-10 lg:col-end-12 items-end justify-end">
        <div className="flex flex-col items-end gap-3 text-right">
          <div className="w-12 h-px bg-foreground/20" />
          <p className="text-xs tracking-[0.2em] uppercase text-foreground-muted/60 font-light">
            Price intelligence
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground-muted/60 font-light">
            New Zealand
          </p>
        </div>
      </div>

      {/* Scroll indicator — offset left on desktop to follow the content island's axis */}
      <a
        href="#mission"
        className="absolute bottom-10 left-6 md:left-12 lg:left-[calc(8.333%+1.25rem)] animate-bounce-gentle text-foreground-muted hover:text-foreground transition-colors"
        aria-label="Scroll to content"
      >
        <svg
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 1 L10 10 L19 1" />
        </svg>
      </a>
    </section>
  )
}
