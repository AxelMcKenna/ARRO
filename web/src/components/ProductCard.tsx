import type { Product } from '../data/products'

const COLOR_CLASSES = {
  liquorfy: {
    border: 'border-l-liquorfy',
    badge: 'bg-liquorfy-light text-liquorfy',
    button: 'bg-liquorfy hover:bg-liquorfy/90',
  },
  trolle: {
    border: 'border-l-trolle',
    badge: 'bg-trolle-light text-trolle',
    button: 'bg-trolle hover:bg-trolle/90',
  },
  talle: {
    border: 'border-l-talle',
    badge: 'bg-talle-light text-talle',
    button: 'bg-talle hover:bg-talle/90',
  },
} as const

export default function ProductCard({ product }: { product: Product }) {
  const colors = COLOR_CLASSES[product.color]

  return (
    <div
      className={`border-l-2 ${colors.border} bg-white/40 rounded-r-lg p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:bg-white/60 hover:shadow-sm`}
    >
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-medium tracking-tight text-foreground">
          {product.name}
        </h3>
        {product.status === 'coming-soon' && (
          <span
            className={`text-[10px] uppercase tracking-[0.15em] font-medium px-2 py-0.5 rounded-full ${colors.badge}`}
          >
            Coming soon
          </span>
        )}
        {product.status === 'beta' && (
          <span
            className={`text-[10px] uppercase tracking-[0.15em] font-medium px-2 py-0.5 rounded-full ${colors.badge}`}
          >
            Beta
          </span>
        )}
      </div>

      <p className="text-sm text-foreground-muted font-light leading-relaxed">
        {product.description}
      </p>

      {product.status === 'live' || product.status === 'beta' ? (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center gap-2 self-start text-sm font-medium text-white px-5 py-2.5 rounded-md ${colors.button} transition-colors`}
        >
          Visit {product.name}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 13 L13 1 M5 1 L13 1 L13 9" />
          </svg>
        </a>
      ) : (
        <p className="mt-auto text-sm text-foreground-muted/60 font-light italic">
          {product.comingSoonNote}
        </p>
      )}
    </div>
  )
}
