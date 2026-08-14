import type { Service } from '@/data/services'
import { formatZar, business } from '@/data/business'
import { whatsappLink } from '@/lib/whatsapp'

export function ServiceCard({ service }: { service: Service }) {
  const price = formatZar(service.priceFrom)
  const message = `Hi The Pet's Butler! I'd like to book ${service.name} (from ${price}).`
  const link = whatsappLink(message)

  return (
    <article className="card">
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
          <a
            className="btn btn--primary"
            href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => link}
          >
            Book
          </a>
        </div>
      </div>
    </article>
  )
}