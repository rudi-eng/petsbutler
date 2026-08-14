export const business = {
  name: "The Pet's Butler",
  tagline: 'Premium pet care, head-butler style.',
  rating: 5.0,
  reviewCount: 10,
  phonePrimary: '+27 82 853 4385',
  phoneSecondary: '+27 66 247 9079',
  whatsapp: '27828534385',
  email: 'hello@thepetsbutler.co.za',
  address: {
    line1: '28 Langtoon Ave',
    line2: 'The Reeds',
    city: 'Centurion',
    province: 'Gauteng',
    postalCode: '0157',
    country: 'South Africa',
    coords: { lat: -25.9057969, lng: 28.1504777 },
  },
  hours: [
    { day: 'Monday', time: '7:00 AM – 6:00 PM' },
    { day: 'Tuesday', time: '7:00 AM – 6:00 PM' },
    { day: 'Wednesday', time: '7:00 AM – 6:00 PM' },
    { day: 'Thursday', time: '7:00 AM – 6:00 PM' },
    { day: 'Friday', time: '7:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  social: {
    google:
      'https://www.google.com/search?q=The+Pet%27s+Butler+Centurion+pet+sitter',
    pets24: 'https://pets24.co.za/services/listing/the-pets-butler/',
  },
} as const

export const formatZar = (n: number) =>
  'R' + n.toLocaleString('en-ZA', { minimumFractionDigits: 0, maximumFractionDigits: 2 })