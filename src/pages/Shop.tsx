import { useMemo, useState } from 'react'
import { products, productLines, type ProductLine } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'
import { useCart } from '@/context/useCart'
import { Link } from 'react-router-dom'
import { formatZar } from '@/data/business'

type LineFilter = 'All' | ProductLine

export default function Shop() {
  const [line, setLine] = useState<LineFilter>('All')
  const { count, total } = useCart()

  const grouped = useMemo(() => {
    const lines = line === 'All' ? productLines : [line]
    return lines.map((name) => ({
      name,
      items: products.filter((p) => p.line === name),
    }))
  }, [line])

  return (
    <>
      <section className="page-head shop-header">
        <div className="container">
          <div className="eyebrow">The Sitter's Boutique</div>
          <h1>Trendy Gear & Treats for Centurion Pets</h1>
          <p>
            Shop Gauteng-local gourmet snacks, premium dental chews, warm sherpa blankets, tick defense keys, load-shedding walk lights, and hands-free leads. Added items can be checked out instantly via WhatsApp.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          
          {/* MINI STICKY CART BAR (Shopify style) */}
          <div className="shop-utility-bar">
            <div className="filter-wrapper">
              <span className="filter-label">Filter by Category:</span>
              <div className="line-filter" role="group" aria-label="Filter by product line">
                {(['All', ...productLines] as const).map((name) => (
                  <button
                    key={name}
                    type="button"
                    className={line === name ? 'is-active' : undefined}
                    aria-pressed={line === name}
                    onClick={() => setLine(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {count > 0 && (
              <Link to="/cart" className="shop-cart-bubble">
                <span className="cart-bubble-icon">🛒</span>
                <span className="cart-bubble-text">
                  View Cart <strong>({count})</strong> · {formatZar(total)}
                </span>
                <span className="cart-bubble-arrow">→</span>
              </Link>
            )}
          </div>

          {/* PRODUCTS GRID */}
          {grouped.map((group) => {
            if (group.items.length === 0) return null
            return (
              <div key={group.name} className="shop-line">
                <h2 className="shop-line__title">
                  {group.name} <span className="item-count">({group.items.length} items)</span>
                </h2>
                <div className="grid grid--4">
                  {group.items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
