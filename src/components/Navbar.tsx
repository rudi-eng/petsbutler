import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '@/context/useCart'
import { Logo } from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/booking', label: 'Booking' },
  { to: '/shop', label: 'Shop' },
  { to: '/gallery', label: 'Gallery' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" onClick={close} aria-label="The Pet's Butler home">
          <Logo />
        </Link>

        <nav>
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={close}
                  end={l.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/cart" className="nav-cart" onClick={close}>
                Cart
                <span className="nav-cart__count">{count}</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}