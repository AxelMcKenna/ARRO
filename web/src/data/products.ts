export type Product = {
  name: string
  tagline: string
  description: string
  url: string
  color: 'liquorfy' | 'trolle'
  status: 'live' | 'coming-soon'
}

export const products: Product[] = [
  {
    name: 'Liquorfy',
    tagline: 'Compare liquor prices across NZ',
    description:
      'Price comparison and deal tracking across New Zealand liquor retailers. Find the cheapest beer, wine, and spirits without visiting multiple stores.',
    url: 'https://liquorfy.co.nz',
    color: 'liquorfy',
    status: 'live',
  },
  {
    name: 'Trolle',
    tagline: 'Track grocery prices and find savings',
    description:
      'Cross-supermarket grocery price tracking for New Zealand. See which store has the best price on everyday items.',
    url: '#',
    color: 'trolle',
    status: 'coming-soon',
  },
]
