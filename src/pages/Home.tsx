import { Link } from 'react-router-dom'
import { ReviewBadge } from '@/components/ReviewBadge'
import { ServiceCard } from '@/components/ServiceCard'
import { ProductCardMini } from '@/components/ProductCard'
import { services } from '@/data/services'
import { products } from '@/data/products'
import { reviews } from '@/data/reviews'
import { business } from '@/data/business'
import { formatZar } from '@/data/business'
import { whatsappLink } from '@/lib/whatsapp'
import { Placeholder } from '@/components/Placeholder'

export default function Home() {
  const featured = products.slice(0, 4)
  const heroBookLink = whatsappLink(
    `Hi The Pet's Butler! I'd like to book a service. Could you tell me what's available?`,
  )

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <ReviewBadge />
            </div>
            <h1>Your dog's home away from home — in Centurion.</h1>
            <p className="muted" style={{ fontSize: '1.15rem', maxWidth: 540 }}>
              Pet sitting, dog walking & house visits run by a head-butler-of-pets.
              Cage-free, force-free, photo-updates-included — plus our own range of
              small-batch treats & gear.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href={heroBookLink} target="_blank" rel="noreferrer">
                Book on WhatsApp →
              </a>
              <Link className="btn btn--ghost" to="/booking">
                Full booking form
              </Link>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--muted)' }}>
              <li>✓ Same-day replies</li>
              <li>✓ GPS-tracked walks</li>
              <li>✓ Free meet-and-greet</li>
            </ul>
          </div>

          <div className="hero__media">
            <Placeholder label="The Pet's Butler" variant="hero" seed={3} />
            <div className="hero__rating">
              <span className="stars">★★★★★</span>
              <span>5.0</span>
              <small style={{ color: 'var(--muted)' }}>· Google</small>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">What we do</div>
            <h2>Pet care, done properly</h2>
            <p>Four ways we look after your best friend — pick one and we'll handle the rest over WhatsApp.</p>
          </div>
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
            <article className="card">
              <div className="card__body">
                <div
                  style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(42,157,143,0.14)', display: 'grid',
                    placeItems: 'center', fontSize: '1.5rem', marginBottom: '0.5rem',
                  }}
                  aria-hidden="true"
                >🎁</div>
                <h3 className="card__title">Not sure?</h3>
                <p className="card__desc">Tell us about your pet and we'll suggest the right service. Free 15-minute meet-and-greet on every first booking.</p>
                <div className="card__footer">
                  <a className="btn btn--sand" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">
                    Ask us
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section--tight" style={{ background: 'var(--sand)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why owners choose us</div>
            <h2>5-star care, every visit</h2>
          </div>
          <div className="grid grid--3">
            <div className="card"><div className="card__body">
              <h3 className="card__title">Cage-free, force-free</h3>
              <p className="card__desc">No kennels, no shouting. Your dog lives as part of the family — couch privileges included.</p>
            </div></div>
            <div className="card"><div className="card__body">
              <h3 className="card__title">Photo & GPS updates</h3>
              <p className="card__desc">A morning photo diary and a tracked walk map with every booking. Peace of mind as standard.</p>
            </div></div>
            <div className="card"><div className="card__body">
              <h3 className="card__title">Small-batch products</h3>
              <p className="card__desc">We make our own treats, paw balm and gear — the same stuff we use on the dogs we care for.</p>
            </div></div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">From our shop</div>
            <h2>Tried & tested by the butler</h2>
            <p>The same treats and gear we use on every pet we look after.</p>
          </div>
          <div className="grid grid--4">
            {featured.map((p) => (
              <ProductCardMini key={p.id} product={p} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link className="btn btn--ghost" to="/shop">Browse the full shop →</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section--tight" style={{ background: 'var(--sand)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Reviews</div>
            <h2>What Gauteng pet parents say</h2>
            <ReviewBadge />
          </div>
          <div className="grid grid--3">
            {reviews.slice(0, 3).map((r) => (
              <article key={r.author} className="card">
                <div className="card__body">
                  <div className="stars" style={{ color: '#F4A33A', letterSpacing: '2px' }}>
                    {'★'.repeat(r.stars)}
                  </div>
                  <p className="card__desc" style={{ fontStyle: 'italic' }}>"{r.text}"</p>
                  <div style={{ marginTop: 'auto' }}>
                    <strong>{r.author}</strong>
                    <br />
                    <small className="muted">{r.pet} · {r.date}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="section">
        <div className="container">
          <div className="contact-strip">
            <div>
              <h2>Ready to book?</h2>
              <p>Message us on WhatsApp for the fastest reply — usually within the hour during opening hours.</p>
              <ul className="contact-strip__list">
                <li>📍 {business.address.line1}, {business.address.line2}, {business.address.city}</li>
                <li>📞 {business.phonePrimary}</li>
                <li>🕑 Mon–Fri 7AM–6PM · Sat 8AM–4PM · Sun closed</li>
              </ul>
            </div>
            <div className="contact-strip__cta">
              <a className="btn btn--sand" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
              <Link className="btn btn--sand" to="/booking" style={{ color: 'var(--charcoal)', borderColor: 'var(--sand)' }}>
                Full booking form
              </Link>
              <Link className="btn btn--sand" to="/shop" style={{ color: 'var(--charcoal)' }}>
                Shop products from {formatZar(65)}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}