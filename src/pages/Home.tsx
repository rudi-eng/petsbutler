import { Link } from 'react-router-dom'
import { ReviewBadge } from '@/components/ReviewBadge'
import { ServiceCard } from '@/components/ServiceCard'
import { ProductCardMini } from '@/components/ProductCard'
import { services } from '@/data/services'
import { featuredProducts } from '@/data/products'
import { reviews } from '@/data/reviews'
import { business } from '@/data/business'
import { gallery, heroPhoto } from '@/data/gallery'

export default function Home() {
  const featured = featuredProducts

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
              Premium pet sitting, dog walking & house visits run by a head-butler-of-pets.
              Cage-free, force-free care, with custom gourmet treats and cosy blankets, plus a boutique store for trendy pet gear.
            </p>
            <div className="hero__cta">
              <Link className="btn btn--primary" to="/booking">
                Book a Sitter →
              </Link>
              <Link className="btn btn--ghost" to="/shop">
                Shop Pet Gear
              </Link>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--muted)' }}>
              <li>✓ Same-day replies</li>
              <li>✓ Daily photo/video updates</li>
              <li>✓ Free meet-and-greet</li>
            </ul>
          </div>

          <div className="hero__media">
            <img src={heroPhoto.src} alt={heroPhoto.alt} />
            <div className="hero__rating">
              <span className="stars">★★★★★</span>
              <span>5.0</span>
              <small style={{ color: 'var(--muted)' }}>· Google Reviews</small>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">What we do</div>
            <h2>Premium Pet Care, Tailored for Centurion</h2>
            <p>Four ways we look after your best friend — select one to build your custom sitter package and add tasty treats.</p>
          </div>
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
            <article className="card">
              <div className="card__media">
                <img src="/photos/golden-sit.jpg" alt="Pet sitting discussion" />
              </div>
              <div className="card__body">
                <div
                  style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(42,157,143,0.14)', display: 'grid',
                    placeItems: 'center', fontSize: '1.5rem', marginBottom: '0.5rem',
                  }}
                  aria-hidden="true"
                >🎁</div>
                <h3 className="card__title">Custom Request?</h3>
                <p className="card__desc">Tell us about your pet's routine, medication, or diet. Free 15-minute meet-and-greet included with every first booking.</p>
                <div className="card__footer" style={{ marginTop: 'auto' }}>
                  <Link className="btn btn--sand" to="/booking">
                    Request Booking
                  </Link>
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
            <h2>Professional, 5-Star Pet Sittings</h2>
          </div>
          <div className="grid grid--3">
            <div className="card"><div className="card__body">
              <h3 className="card__title">Cage-free, force-free</h3>
              <p className="card__desc">No kennels, no cold floors. Your dog lives as part of our loving family — couch privileges and comfortable blankets included.</p>
            </div></div>
            <div className="card"><div className="card__body">
              <h3 className="card__title">Daily Photo/Video Diaries</h3>
              <p className="card__desc">Morning updates, afternoon play videos, and meal check-ins with every single booking. Peace of mind guaranteed.</p>
            </div></div>
            <div className="card"><div className="card__body">
              <h3 className="card__title">Bespoke Treats & Comfort</h3>
              <p className="card__desc">Customize their stay with peanut-butter treats, salmon bites, fresh greens, or a cozy fleece blanket to keep.</p>
            </div></div>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Gallery</div>
            <h2>Life at the butler's</h2>
            <p>Real guests, happy tails — a peek at walks, sleepovers, and house visits in Centurion.</p>
          </div>
          <div className="photo-strip">
            {gallery.slice(0, 8).map((item) => (
              <Link key={item.id} to="/gallery" className="photo-strip__item" aria-label={item.caption}>
                <img src={item.src} alt={item.caption} />
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link className="btn btn--ghost" to="/gallery">See the full gallery →</Link>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Our Boutique Shop</div>
            <h2>Tried & Tested Trendy Gear</h2>
            <p>Biliary tick defense, load-shedding walk lights, hands-free leads, and cozy custom dog blankets.</p>
          </div>
          <div className="grid grid--4">
            {featured.map((p) => (
              <ProductCardMini key={p.id} product={p} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link className="btn btn--ghost" to="/shop">Browse the full shop →</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section section--tight" style={{ background: 'var(--sand)' }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Client Love</div>
            <h2>What Gauteng pet parents say</h2>
            <div style={{ marginTop: '0.5rem' }}>
              <ReviewBadge />
            </div>
          </div>
          <div className="grid grid--3">
            {reviews.slice(0, 3).map((r) => (
              <article key={r.author} className="card">
                <div className="card__body">
                  <div className="stars" style={{ color: '#F4A33A', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                    {'★'.repeat(r.stars)}
                  </div>
                  <p className="card__desc" style={{ fontStyle: 'italic', fontSize: '0.94rem' }}>"{r.text}"</p>
                  <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
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

      {/* INTERACTIVE CONTACT & GOOGLE MAPS */}
      <section className="section">
        <div className="container">
          <div className="maps-section">
            <div className="maps-info">
              <span className="eyebrow">Find the Butler</span>
              <h2>Located in Centurion</h2>
              <p>
                Our premium pet care services operate throughout Centurion, Gauteng, with our main boarding home nestled in the peaceful suburb of <strong>The Reeds</strong>.
              </p>
              
              <ul className="maps-details-list">
                <li>
                  <span className="icon">📍</span>
                  <span>{business.address.line1}, {business.address.line2}, {business.address.city}, {business.address.postalCode}</span>
                </li>
                <li>
                  <span className="icon">🕑</span>
                  <span>Mon–Fri 7:00 AM – 6:00 PM · Sat 8:00 AM – 4:00 PM · Sun Closed</span>
                </li>
                <li>
                  <span className="icon">📞</span>
                  <span><a href={`tel:${business.phonePrimary.replace(/\s/g, '')}`}>{business.phonePrimary}</a> (Primary Sitter)</span>
                </li>
                <li>
                  <span className="icon">💬</span>
                  <span><a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">Chat immediately on WhatsApp</a></span>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
                <a
                  className="btn btn--primary"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${business.address.coords.lat},${business.address.coords.lng}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Driving Directions 🗺️
                </a>
                <Link className="btn btn--ghost" to="/booking">
                  Go to Booking Portal
                </Link>
              </div>
            </div>

            <div className="maps-embed-card">
              <iframe
                src="https://maps.google.com/maps?q=-25.9057969,28.1504777&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px', borderRadius: 'var(--radius)' }}
                allowFullScreen
                loading="lazy"
                title="The Pet's Butler Centurion Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}