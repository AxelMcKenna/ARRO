import { products } from '../data/products'
import ProductCard from './ProductCard'
import { useReveal } from '../hooks/useReveal'

export default function Products() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="products"
      ref={ref}
      className="section-reveal py-24 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section label — left-aligned to match asymmetric flow */}
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-4">
          Our products
        </p>
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-12 md:mb-16 max-w-md">
          Price intelligence for everyday life
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
