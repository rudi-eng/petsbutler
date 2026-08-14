import { business } from '@/data/business'

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${business.whatsapp}?text=${text}`
}