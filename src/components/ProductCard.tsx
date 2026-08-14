import { Link } from 'react-router-dom'
import type { Product } from '@/data/products'
import { formatZar } from '@/data/business'
import { useCart } from '@/context/useCart'
import { Placeholder } from './Placeholder'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { add } = useCart()

  return (
    <article className="card">
      <div className="card__media">
        <Placeholder label={product.name} variant="product" seed={product.name.length} />
      </div>
      <div className="card__body">
        {product.tag && <span className="tag tag--teal">{product.tag}</span>}
        <h3 className="card__title">{product.name}</h3>
        <p className="card__desc">{product.blurb}</p>
        <div className="card__footer">
          <span className="price">
            {formatZar(product.price)}
            {product.unit && (
              <>
                {' '}
                <small>/ {product.unit}</small>
              </>
            )}
          </span>
          <button
            className="btn btn--primary"
            onClick={() => add(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            Add +
          </button>
        </div>
        {product.stock && (
          <span className="tag tag--done" style={{ alignSelf: 'flex-start' }}>
            {product.stock}
          </span>
        )}
      </div>
    </article>
  )
}

export function ProductCardMini({ product }: ProductCardProps) {
  return (
    <Link to="/shop" className="card" style={{ textDecoration: 'none' }}>
      <div className="card__media">
        <Placeholder label={product.name} variant="product" seed={product.name.length} />
      </div>
      <div className="card__body">
        <h3 className="card__title">{product.name}</h3>
        <p className="card__desc">{product.blurb}</p>
      </div>
    </Link>
  )
}