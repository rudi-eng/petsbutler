export interface Service {
  id: string
  name: string
  short: string
  duration: string
  priceFrom: number
  icon: string
  desc: string
  image: string
}

export const services: Service[] = [
  {
    id: 'day-sit',
    name: 'Day Pet-Sitting',
    short: 'Drop-off or in-home day care',
    duration: 'Up to 8 hours',
    priceFrom: 180,
    icon: '🐾',
    image: '/photos/garden-play.jpg',
    desc: 'Day care for dogs that need company, structure, and a middle-of-the-day walk while you are at work. Cage-free, force-free, small groups only.',
  },
  {
    id: 'dog-walking',
    name: 'Dog Walking',
    short: 'Solo or small-group walks',
    duration: '30 / 45 / 60 min',
    priceFrom: 60,
    icon: '🚶',
    image: '/photos/german-shepherd.jpg',
    desc: 'Solo or small-group walks on leash in The Reeds, Rooihuiskraal and Centurion surrounds. Regular photo/video updates and message check-ins with every visit.',
  },
  {
    id: 'house-visit',
    name: 'House Visits',
    short: 'Sitter visits your pet at home',
    duration: '30 min visit',
    priceFrom: 90,
    icon: '🏠',
    image: '/photos/kitchen-tabby.jpg',
    desc: 'Drop-in visits for cats, small pets and senior dogs who prefer their own space. Feeding, litter, cuddles, water and a quick check-in. Medication included.',
  },
  {
    id: 'overnight',
    name: 'Overnight Boarding',
    short: 'Multi-day stays in a home setting',
    duration: '24h cycle',
    priceFrom: 350,
    icon: '🌙',
    image: '/photos/rainbow-burrito.jpg',
    desc: 'Sleepovers in a real home, not a kennel. Your dog lives as part of the family — couch privileges, evening walks and a photo diary every morning.',
  },
]