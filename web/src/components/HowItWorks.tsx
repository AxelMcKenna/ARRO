import { useReveal } from '../hooks/useReveal'

const STEPS = [
  {
    title: 'Aggregate',
    description: 'We pull prices from retailers across Aotearoa — automatically, every day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
        <path d="M12 2 L2 7 L12 12 L22 7 Z" strokeLinejoin="round" />
        <path d="M2 17 L12 22 L22 17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12 L12 17 L22 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Normalise',
    description: 'Different pack sizes, unit prices, and promotions — we standardise the mess so every comparison is apples to apples.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
        <path d="M4 21V7l8-4 8 4v14" strokeLinejoin="round" />
        <path d="M4 13h16" strokeLinecap="round" />
        <path d="M12 3v18" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Compare',
    description: 'You see the real price, side by side. No tricks, no hidden fees. The best deal, surfaced.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6">
        <rect x="3" y="3" width="7" height="18" rx="1" strokeLinejoin="round" />
        <rect x="14" y="3" width="7" height="18" rx="1" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="section-reveal py-24 md:py-32 px-6"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-4 text-center">
          How it works
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground text-center mb-12 md:mb-16">
          Simple by design
        </h2>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center gap-4">
              <div className="text-foreground-muted">{step.icon}</div>
              <h3 className="text-base font-medium tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-foreground-muted font-light leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
