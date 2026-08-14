import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <h1>404 — page not found</h1>
        <p className="muted">This page ran off the lead. Let's get you back.</p>
        <Link className="btn btn--primary" to="/">Back to home</Link>
      </div>
    </section>
  )
}