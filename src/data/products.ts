export type ProductLine = 'SA Safety' | 'Walk Kit' | 'Overnight & Travel' | 'Treats & Cozy' | 'Brand'

export interface Product {
  id: string
  name: string
  blurb: string
  price: number
  line: ProductLine
  unit?: string
  tag?: string
  stock?: string
}

export const productLines: ProductLine[] = [
  'SA Safety',
  'Walk Kit',
  'Overnight & Travel',
  'Treats & Cozy',
  'Brand',
]

export const products: Product[] = [
  {
    id: 'biliary-kit',
    name: 'Biliary Defense Kit',
    blurb:
      "Tick key, fine-tip tweezers and a biliary-fever info card. Gauteng's #1 dog killer — keep this on the walk belt.",
    price: 120,
    line: 'SA Safety',
    tag: 'Essential',
    stock: 'In stock',
  },
  {
    id: 'led-collar',
    name: 'Load-Shedding LED Collar Band',
    blurb:
      'USB-rechargeable silicone light band. Walks after dark are normal here — this makes your dog visible from both ends.',
    price: 150,
    line: 'SA Safety',
    unit: 'USB-rechargeable',
    stock: 'In stock',
  },
  {
    id: 'hi-vis-vest',
    name: 'Hi-Vis Owner Vest',
    blurb:
      'Lightweight reflective vest for the human on the other end of the lead. Pair with the LED collar band.',
    price: 180,
    line: 'SA Safety',
    stock: 'In stock',
  },
  {
    id: 'cooling-bandana',
    name: 'Cooling Bandana',
    blurb:
      'Soak, wring, wear. Evaporative cooling for Highveld Dec–Feb heat on walks and patio naps.',
    price: 95,
    line: 'SA Safety',
    stock: 'In stock',
  },
  {
    id: 'walk-belt',
    name: "Butler's Walk Belt",
    blurb:
      "Hands-free waist belt with a treat pocket and poop-bag slot. The butler's apron, built for walking.",
    price: 320,
    line: 'Walk Kit',
    unit: 'Adjustable',
    tag: 'Signature',
    stock: '2 weeks',
  },
  {
    id: 'hands-free-lead',
    name: '2.4m Hands-Free Lead',
    blurb:
      'Bungee-buffered 2.4 m lead that clips to the walk belt. Hands free for keys, coffee and the gate remote.',
    price: 180,
    line: 'Walk Kit',
    unit: '2.4 m',
    stock: 'In stock',
  },
  {
    id: 'traffic-lead',
    name: '1.5m Traffic Lead',
    blurb:
      'Short, sturdy 1.5 m lead for vet queues, The Grove parking and crowded pavements.',
    price: 120,
    line: 'Walk Kit',
    unit: '1.5 m',
    stock: 'In stock',
  },
  {
    id: 'poop-bags',
    name: 'Compostable Poop Bags (60)',
    blurb:
      'Corn-starch bags that break down in 90 days. Sized for the walk-belt slot and standard dispensers.',
    price: 75,
    line: 'Walk Kit',
    unit: '4 rolls',
    stock: 'In stock',
  },
  {
    id: 'overnight-bag',
    name: 'The Overnight Bag',
    blurb:
      'Branded canvas tote sized for a boarding drop-off: bowls, meds, lead and a change of bedding.',
    price: 260,
    line: 'Overnight & Travel',
    tag: 'Boarding',
    stock: 'In stock',
  },
  {
    id: 'seatbelt-tether',
    name: 'Pet Seatbelt Tether',
    blurb:
      'Clips a harness to the car seatbelt. For vet trips, the N14 run and weekend getaways.',
    price: 95,
    line: 'Overnight & Travel',
    stock: 'In stock',
  },
  {
    id: 'travel-bowl',
    name: 'Collapsible Silicone Travel Bowl',
    blurb:
      'Folds flat in the overnight bag or a walk pocket. Water on walks and road trips.',
    price: 75,
    line: 'Overnight & Travel',
    stock: 'In stock',
  },
  {
    id: 'car-hammock',
    name: 'Car Hammock Seat Cover',
    blurb:
      'Waterproof hammock cover for the back seat. Holiday trips without the hair and scratches.',
    price: 420,
    line: 'Overnight & Travel',
    stock: 'In stock',
  },
  {
    id: 'paw-bandana',
    name: 'Butler-Paw Dog Bandana',
    blurb:
      'Embroidered paw bandana. A gift-counter impulse buy that still looks like the butler dressed them.',
    price: 85,
    line: 'Brand',
    tag: 'Gift',
    stock: 'In stock',
  },
  {
    id: 'pet-logbook',
    name: 'The Pet Logbook',
    blurb:
      'Meds, walks, vet visits and feeding — a butler-style record book for sitters and owners.',
    price: 180,
    line: 'Brand',
    stock: 'In stock',
  },
  {
    id: 'butler-apron',
    name: "Butler's Apron",
    blurb:
      'Branded canvas apron for the owner. The pun, made physical.',
    price: 320,
    line: 'Brand',
    unit: 'One size',
    tag: 'Made-to-order',
    stock: '2 weeks',
  },
  {
    id: 'id-tube',
    name: 'Engraved Stainless ID Tube',
    blurb:
      'Screw-top ID tube for the collar. Name, number and your vet — no tags that rattle off.',
    price: 85,
    line: 'Brand',
    tag: 'Made-to-order',
    stock: '2 weeks',
  },
  {
    id: 'dog-blanket',
    name: 'Cosy Sitter Sherpa Dog Blanket',
    blurb:
      'Double-layer ultra-soft fleece blanket, perfect for keeping dogs warm and settled during sits or travel.',
    price: 180,
    line: 'Treats & Cozy',
    tag: 'Cozy Add-on',
    stock: 'In stock',
  },
  {
    id: 'gourmet-box-dog',
    name: 'Gourmet Dog Snack Box',
    blurb:
      'Handcrafted locally made peanut-butter and liver biscuits. Clean ingredients only.',
    price: 85,
    line: 'Treats & Cozy',
    tag: 'Treats',
    stock: 'In stock',
  },
  {
    id: 'dental-chews-dog',
    name: 'Premium Dental Chews Pack',
    blurb:
      'Set of 3 long-lasting dental stick chews to clean teeth and keep them busy.',
    price: 45,
    line: 'Treats & Cozy',
    tag: 'Treats',
    stock: 'In stock',
  },
  {
    id: 'gourmet-box-cat',
    name: 'Gourmet Cat Treat Box',
    blurb:
      'Salmon bites, organic catnip spray, and a handmade felt toy mouse for luxury sits.',
    price: 85,
    line: 'Treats & Cozy',
    tag: 'Treats',
    stock: 'In stock',
  },
  {
    id: 'catnip-cat',
    name: 'Organic Catnip & Salmon Bites',
    blurb:
      'Locally sourced Gauteng catnip spray and dehydrated salmon bites.',
    price: 55,
    line: 'Treats & Cozy',
    tag: 'Treats',
    stock: 'In stock',
  },
  {
    id: 'seed-bar-bird',
    name: 'Seed & Fruit Hanging Bar',
    blurb:
      'A nutritious seed, nut, and dried fruit hanging bar for caged or garden birds.',
    price: 25,
    line: 'Treats & Cozy',
    tag: 'Treats',
    stock: 'In stock',
  },
  {
    id: 'seed-honey-bird',
    name: 'Hanging Seed & Honey Stick',
    blurb:
      'Sweet honey-baked seed bells for small birds.',
    price: 15,
    line: 'Treats & Cozy',
    tag: 'Treats',
    stock: 'In stock',
  },
  {
    id: 'greens-box-other',
    name: 'Fresh Greens & Herb Box',
    blurb:
      'Organic celery, parsley, mint, and carrots, fresh from local Centurion farms.',
    price: 65,
    line: 'Treats & Cozy',
    tag: 'Treats',
    stock: 'In stock',
  },
]

export const featuredProductIds = [
  'biliary-kit',
  'walk-belt',
  'overnight-bag',
  'paw-bandana',
] as const

export const featuredProducts: Product[] = featuredProductIds.map((id) => {
  const product = products.find((p) => p.id === id)
  if (!product) {
    throw new Error(`Missing featured product: ${id}`)
  }
  return product
})

export const shopFromPrice = Math.min(...products.map((p) => p.price))
