import { Link } from 'react-router-dom'
import { useCart } from '@/context/useCart'
import { formatZar, business } from '@/data/business'
import { whatsappLink } from '@/lib/whatsapp'
import { Placeholder } from '@/components/Placeholder'
import { PayOnlineButton } from '@/components/PayOnlineButton'

export default function Cart() {
  const { lines, count, total, setQty, remove, clear } = useCart()

  if (count === 0) {
    return (
      <>
        <section className="page-head">
          <div className="container">
            <h1>Your cart</h1>
            <p>Nothing here yet — pick up a tick kit, walk belt or overnight bag.</p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container cart-empty">
            <p>Your cart is empty.</p>
            <Link className="btn btn--primary" to="/shop">Browse the shop →</Link>
          </div>
        </section>
      </>
    )
  }

  const message = [
    `Hi The Pet's Butler! I'd like to place an order:`,
    '',
    ...lines.map((l) => `• ${l.product.name} ×${l.qty} — ${formatZar(l.qty * l.product.price)}`),
    '',
    `Total: ${formatZar(total)}`,
    '',
    'Please confirm availability and delivery/pickup. Thank you!',
  ].join('\n')

  const checkout = whatsappLink(message)

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Your cart</h1>
          <p>{count} item{count !== 1 ? 's' : ''} · {formatZar(total)} total</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container cart-layout">
          <div className="cart-list">
            {lines.map((l) => (
              <div className="cart-item" key={l.product.id}>
                <div className="cart-item__media">
                  <Placeholder label={l.product.name.slice(0, 8)} variant="product" seed={l.product.name.length} />
                </div>
                <div>
                  <strong>{l.product.name}</strong>
                  <div className="muted" style={{ fontSize: '0.88rem' }}>
                    {l.product.unit && <>{l.product.unit} · </>}{formatZar(l.product.price)} each
                  </div>
                </div>
                <div className="cart-item__qty">
                  <button className="qty-btn" onClick={() => setQty(l.product.id, l.qty - 1)} aria-label="Decrease">−</button>
                  <span style={{ minWidth: '1.5rem', textAlign: 'center' }}>{l.qty}</span>
                  <button className="qty-btn" onClick={() => setQty(l.product.id, l.qty + 1)} aria-label="Increase">+</button>
                </div>
                <div className="price">{formatZar(l.qty * l.product.price)}</div>
                <button className="remove-btn" onClick={() => remove(l.product.id)}>Remove</button>
              </div>
            ))}
            <div>
              <button className="btn btn--ghost" onClick={clear}>Clear cart</button>
              <Link className="btn btn--sand" to="/shop" style={{ marginLeft: '0.5rem' }}>Keep shopping</Link>
            </div>
          </div>

          <aside className="cart-summary">
            <h3>Order summary</h3>
            {lines.map((l) => (
              <div className="cart-summary__row" key={l.product.id}>
                <span>{l.product.name} ×{l.qty}</span>
                <span>{formatZar(l.qty * l.product.price)}</span>
              </div>
            ))}
            <div className="cart-summary__row cart-summary__total">
              <span>Total</span>
              <span>{formatZar(total)}</span>
            </div>
            <p className="form__hint">
              Checkout opens WhatsApp to {business.phonePrimary} with your order
              pre-filled. We'll confirm availability and arrange pickup in Centurion
              or delivery.
            </p>
            <a className="btn btn--primary btn--block" href={checkout} target="_blank" rel="noreferrer">
              Checkout via WhatsApp →
            </a>
            <PayOnlineButton />
          </aside>
        </div>
      </section>
    </>
  )
}
