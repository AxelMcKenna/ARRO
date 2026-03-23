import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className="section-reveal"
    >
      {/* Split Tension — 60/40 division, light treatment to sit between charcoal sections */}
      <div className="grid md:grid-cols-[3fr_2fr] min-h-[60vh]">
        <div className="px-6 md:px-12 lg:px-20 py-20 md:py-24 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-4">
            Get in touch
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground mb-6 max-w-md">
            Partner with us
          </h2>
          <p className="text-base text-foreground-muted font-light leading-relaxed max-w-sm">
            If you're a retailer, brand, or just curious about what we're
            building — we'd like to hear from you.
          </p>
        </div>

        <div className="px-6 md:px-12 py-20 md:py-24 flex flex-col justify-center items-start md:items-center border-t md:border-t-0 md:border-l border-border">
          <div className="flex flex-col gap-6">
            <div className="w-8 h-px bg-foreground/30" />
            <p className="text-sm text-foreground-muted font-light">
              Drop us a line
            </p>
            <a
              href="mailto:arrotechnology@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-foreground px-6 py-3 rounded-md hover:bg-foreground/80 transition-colors duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="14" height="10" rx="1" />
                <path d="M1 3 L8 9 L15 3" />
              </svg>
              arrotechnology@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
