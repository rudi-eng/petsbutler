import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: "The Pet's Butler | Pet Sitting & Dog Walking in Centurion, Gauteng",
    description: "The Pet's Butler has cared for pets since 1997. Book pet sitting, dog walking and house visits in Centurion, Pretoria and Johannesburg, Gauteng. Call +27 82 853 4385.",
  },
  '/booking': {
    title: 'Book a Pet Sitter or Dog Walker in Centurion | The Pet’s Butler',
    description: 'Request home-style pet sitting, house visits and dog walking in Centurion and across Gauteng. Add each pet and share care instructions with The Pet’s Butler.',
  },
  '/gallery': {
    title: 'Happy Pet Guests in Centurion | The Pet’s Butler Gallery',
    description: 'Meet some of the dogs, cats and other much-loved pets cared for by The Pet’s Butler in Centurion, Gauteng.',
  },
  '/shop': {
    title: 'Pet Treats, Walking Gear & Toys Coming Soon | The Pet’s Butler',
    description: 'The Pet’s Butler boutique shop in Centurion is being rebuilt. Explore the planned range of dog treats, enrichment toys, walking gear and cosy pet comforts.',
  },
  '/cart': {
    title: 'Your Cart | The Pet’s Butler',
    description: 'Review your selected items from The Pet’s Butler boutique shop.',
  },
}

export function RouteSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = routeMetadata[pathname] ?? {
      title: 'Page not found | The Pet’s Butler',
      description: 'The requested page could not be found. Visit The Pet’s Butler for pet sitting and dog walking in Centurion, Gauteng.',
    }
    document.title = metadata.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    description?.setAttribute('content', metadata.description)
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = `https://thepetsbutler.com${pathname}`
  }, [pathname])

  return null
}
