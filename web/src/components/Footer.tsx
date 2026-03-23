import ArroLogo from './ArroLogo'
import { products } from '../data/products'

export default function Footer() {
  return (
    <footer className="bg-foreground py-12 px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-3">
          <ArroLogo className="h-5 w-auto text-background" />
          <p className="text-xs text-background/40 font-light">
            Built in New Zealand
          </p>
        </div>

        <div className="flex gap-8 text-sm">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.15em] text-background/40 mb-1">
              Products
            </p>
            {products.map((p) => (
              <a
                key={p.name}
                href={p.status === 'live' ? p.url : undefined}
                target={p.status === 'live' ? '_blank' : undefined}
                rel={p.status === 'live' ? 'noopener noreferrer' : undefined}
                className={`text-background/60 font-light transition-colors ${
                  p.status === 'live'
                    ? 'hover:text-background'
                    : 'cursor-default'
                }`}
              >
                {p.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.15em] text-background/40 mb-1">
              Legal
            </p>
            <a
              href="#privacy"
              className="text-background/60 font-light hover:text-background transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-10 pt-6 border-t border-background/10">
        <p className="text-xs text-background/30 text-center font-light">
          &copy; {new Date().getFullYear()} ARRO. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
