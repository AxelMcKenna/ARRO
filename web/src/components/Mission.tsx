import { useReveal } from '../hooks/useReveal'

export default function Mission() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="mission"
      ref={ref}
      className="section-reveal bg-foreground py-24 md:py-32 px-6"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-background/50 mb-8">
          Our mission
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-tight text-background">
          New Zealand's a small market. A handful of retailers set the prices,
          and comparing them shouldn't be hard work.
        </h2>
        <p className="mt-8 text-base md:text-lg text-background/60 font-light leading-relaxed">
          We build tools that do the legwork — so you can spend less time
          searching and more time saving.
        </p>
      </div>
    </section>
  )
}
