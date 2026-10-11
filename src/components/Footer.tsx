import { Link } from 'react-router-dom'
import { business } from '@/data/business'
import { LogoMark } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <LogoMark size={72} light />
            <h4>The Pet's Butler</h4>
            <p style={{ maxWidth: 320, margin: 0 }}>
              Premium pet sitting, dog walking and pet products in Centurion, Gauteng.
              Care — curated like a head butler would.
            </p>
          </div>

          <div>
            <h4>Visit</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/booking">Book a service</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/gallery">Client gallery</Link></li>
              <li><Link to="/pup-arazzi">Pup-arazzi community</Link></li>
              <li><Link to="/privacy">Privacy & browser storage</Link></li>
              <li><Link to="/refunds">Cancellations & refunds</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>{business.address.line1}, {business.address.line2}</li>
              <li>{business.address.city}, {business.address.postalCode}</li>
              <li><a href={`tel:${business.phonePrimary.replace(/\s/g, '')}`}>{business.phonePrimary}</a></li>
              <li><a href={`mailto:${business.email}`}>{business.email}</a></li>
              <li>
                <a href={business.social.pets24} target="_blank" rel="noreferrer">
                  Pets24 listing ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} The Pet's Butler · Part of <a href="https://aslanaintelligence.com/" target="_blank" rel="noreferrer">Aslana Intelligence (Pty) Ltd</a> · Centurion, South Africa</span>
          <span>Made with 🐾 in Gauteng</span>
        </div>
      </div>
    </footer>
  )
}
