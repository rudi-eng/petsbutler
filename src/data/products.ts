export interface Product {
  id: string
  name: string
  blurb: string
  price: number
  unit?: string
  tag?: string
  stock?: string
}

export const products: Product[] = [
  {
    id: 'turkey-bites',
    name: 'Turkey & Sweet Potato Bites',
    blurb:
      'Slow-baked grain-free training treats. Single-protein, made from free-run turkey.',
    price: 85,
    unit: '120g',
    tag: 'Bestseller',
    stock: 'In stock',
  },
  {
    id: 'beef-jerky',
    name: 'Grass-Fed Beef Jerky',
    blurb:
      'Air-dried strips with no additives. High-value reward for recall and loose-leash work.',
    price: 120,
    unit: '100g',
    stock: 'In stock',
  },
  {
    id: 'paw-balm',
    name: 'Paw & Nose Balm',
    blurb:
      'Beeswax + shea paw balm for cracked pads. Safe to lick, sinks in fast.',
    price: 95,
    unit: '50ml',
    stock: 'In stock',
  },
  {
    id: 'calming-spray',
    name: 'Calming Room Spray',
    blurb:
      'Lavender & chamomile mist for anxious dogs. Use in the car or before bedtime.',
    price: 110,
    unit: '150ml',
    tag: 'New',
    stock: 'In stock',
  },
  {
    id: 'rope-tug',
    name: 'Cotton Rope Tug',
    blurb:
      'Hand-knotted 3-strand tug. Great for engagement games and teething pups.',
    price: 75,
    unit: '35cm',
    stock: '8 left',
  },
  {
    id: 'lick-mat',
    name: 'Slow-Feed Lick Mat',
    blurb:
      'Suction lick mat for calm nail trims and baths. Freezes with yogurt & peanut butter.',
    price: 90,
    stock: 'In stock',
  },
  {
    id: 'bio-bag-pack',
    name: 'Compostable Poop Bags (60)',
    blurb:
      'Corn-starch bags that break down in 90 days. Fits standard dispensers.',
    price: 65,
    unit: '4 rolls',
    stock: 'In stock',
  },
  {
    id: 'id-collar',
    name: 'Engraved ID Collar',
    blurb:
      'Soft padded collar with engraved name plate. Hand-stitched in Centurion.',
    price: 220,
    unit: 'Adjustable',
    tag: 'Made-to-order',
    stock: '2 weeks',
  },
]