export interface Review {
  author: string
  pet: string
  text: string
  stars: number
  date: string
}

export const reviews: Review[] = [
  {
    author: 'Anel van Wyk',
    pet: 'Milo, border collie',
    text: 'Milo comes home genuinely tired and happy. Daily update photos and a GPS map of the walk are a small thing that means everything.',
    stars: 5,
    date: 'Jun 2025',
  },
  {
    author: 'Tshepo M.',
    pet: 'Pearl & Dash, cats',
    text: 'The only sitter Pearl (the anxious one) actually comes out for. Medication given on time every visit — vet noticed how settled they both are.',
    stars: 5,
    date: 'May 2025',
  },
  {
    author: 'Samantha Botha',
    pet: 'Rocco, boerboel',
    text: 'Rocco stayed 10 nights while we were overseas. Got a photo diary every morning and the turkey-bites treats as a welcome gift — classy touch.',
    stars: 5,
    date: 'Apr 2025',
  },
  {
    author: 'Lerato Nkosi',
    pet: 'Simba, gsdpup',
    text: 'Took Simba from a pulling disaster to loose-leash walking in three weeks. The treats genuinely work as a training reward, will reorder.',
    stars: 5,
    date: 'Mar 2025',
  },
  {
    author: 'Jaco P.',
    pet: 'Snoopy & Bella',
    text: 'Reliable, on time, communicates clearly. The compostable bags feel like a thoughtful detail — it is the kind of owner who respects your pets.',
    stars: 5,
    date: 'Feb 2025',
  },
  {
    author: 'Naledi K.',
    pet: 'Mochi, pomsky',
    text: 'Booked straight through WhatsApp and had a same-day visit. Calming spray sorted her car anxiety within two uses.',
    stars: 5,
    date: 'Jan 2025',
  },
]