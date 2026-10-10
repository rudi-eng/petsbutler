import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '@/data/products'

export interface CartLine {
  product: Product
  qty: number
}

export interface CartContextValue {
  lines: CartLine[]
  count: number
  total: number
  add: (product: Product, qty?: number) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
export { CartContext }

const STORAGE_KEY = 'petsbutler-cart'
const CART_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000

function readSavedCart(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const saved: unknown = JSON.parse(raw)
    if (Array.isArray(saved)) return saved as CartLine[]
    if (!saved || typeof saved !== 'object' || !('lines' in saved) || !('savedAt' in saved)) return []
    const cart = saved as { lines: CartLine[]; savedAt: number }
    return Date.now() - cart.savedAt <= CART_MAX_AGE_MS ? cart.lines : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      return readSavedCart()
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lines, savedAt: Date.now() }))
    } catch {
      /* ignore quota errors */
    }
  }, [lines])

  const value = useMemo<CartContextValue>(() => {
    const add = (product: Product, qty = 1) => {
      setLines((prev) => {
        const existing = prev.find((l) => l.product.id === product.id)
        if (existing) {
          return prev.map((l) =>
            l.product.id === product.id ? { ...l, qty: l.qty + qty } : l,
          )
        }
        return [...prev, { product, qty }]
      })
    }
    const remove = (id: string) =>
      setLines((prev) => prev.filter((l) => l.product.id !== id))
    const setQty = (id: string, qty: number) =>
      setLines((prev) =>
        prev
          .map((l) => (l.product.id === id ? { ...l, qty: Math.max(0, qty) } : l))
          .filter((l) => l.qty > 0),
      )
    const clear = () => setLines([])

    const count = lines.reduce((sum, l) => sum + l.qty, 0)
    const total = lines.reduce((sum, l) => sum + l.qty * l.product.price, 0)

    return { lines, count, total, add, remove, setQty, clear }
  }, [lines])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
