import { business } from '@/data/business'

export function ReviewBadge() {
  const stars = '★'.repeat(Math.round(business.rating))
  return (
    <span className="review-badge">
      <span className="stars" aria-hidden="true">{stars}</span>
      <span>{business.rating.toFixed(1)}</span>
      <small>
        ({business.reviewCount} Google reviews)
      </small>
    </span>
  )
}