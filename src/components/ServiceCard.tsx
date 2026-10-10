import { Link } from 'react-router-dom'
import type { Service } from '@/data/services'
import { formatZar } from '@/data/business'

export function ServiceCard({ service }: { service: Service }) {
  const price = formatZar(service.priceFrom)
  const fullyBooked = service.id === 'dog-walking' || service.id === 'overnight'

  return (
    <article className="card">
      <div className="card__media">
        <img src={service.image} alt={service.name} />
      </div>
      <div className="card__body">
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: 'rgba(42,157,143,0.14)',
            display: 'grid',
            placeItems: 'center',
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
          }}
          aria-hidden="true"
        >
          {service.icon}
        </div>
        <h3 className="card__title">{service.name}</h3>
        <p className="card__desc">{service.desc}</p>
        <div className="card__footer">
          <span>
            <strong style={{ fontFamily: 'var(--font-head)' }}>from {price}</strong>
            <br />
            <small className="muted">{service.duration}</small>
          </span>
          <Link className={`btn ${fullyBooked ? 'btn--sand' : 'btn--primary'}`} to={`/booking?service=${service.id}`}>
            {fullyBooked ? 'Check status' : 'Book Sitter'}
          </Link>
        </div>
      </div>
    </article>
  )
}
