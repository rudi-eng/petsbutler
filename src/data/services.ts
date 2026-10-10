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
    short: 'Puppies & small breeds only',
    duration: 'Up to 8 hours',
    priceFrom: 180,
    icon: '🐾',
    image: '/photos/garden-play.jpg',
    desc: 'Home-style daytime care at our Rooihuiskraal home for puppies and small-breed dogs only. Our space cannot accommodate large breeds.',
  },
  {
    id: 'dog-walking',
    name: 'Dog Walking',
    short: 'Solo or small-group walks',
    duration: '30 / 45 / 60 min',
    priceFrom: 100,
    icon: '🚶',
    image: '/photos/german-shepherd.jpg',
    desc: 'Solo or small-group lead walks in Rooihuiskraal and nearby Centurion suburbs. Travel is included in the local per-visit rate. Photo/video updates can be arranged with your consent.',
  },
  {
    id: 'house-visit',
    name: 'House Visits',
    short: 'Sitter visits your pet at home',
    duration: '30 min visit',
    priceFrom: 100,
    icon: '🏠',
    image: '/photos/kitchen-tabby.jpg',
    desc: 'Drop-in visits for cats, small pets and senior dogs in Rooihuiskraal and nearby Centurion suburbs. Travel is included in the local per-visit rate. Feeding, cuddles, water and a quick check-in.',
  },
  {
    id: 'overnight',
    name: 'Overnight Pet Sitting at Your Home',
    short: 'The sitter stays overnight in your home',
    duration: '24h cycle',
    priceFrom: 350,
    icon: '🌙',
    image: '/photos/rainbow-burrito.jpg',
    desc: 'The sitter sleeps at your home, so your dog stays in familiar surroundings and keeps their usual routine. Evening walks and photo updates are arranged with you.',
  },
]
