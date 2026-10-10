import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { business } from '@/data/business'

type AccessChoice = 'gauteng' | 'client' | 'outside' | null
const storageKey = 'pets-butler-service-area-choice'

export function ServiceAreaGate() {
  const [choice, setChoice] = useState<AccessChoice>(() => {
    const saved = window.localStorage.getItem(storageKey)
    return saved === 'outside' ? 'outside' : saved === 'gauteng' || saved === 'client' ? saved : null
  })

  useEffect(() => {
    const allowClientAccess = () => {
      window.localStorage.setItem(storageKey, 'client')
      setChoice('client')
    }
    window.addEventListener('pets-butler-client-access', allowClientAccess)
    return () => window.removeEventListener('pets-butler-client-access', allowClientAccess)
  }, [])

  if (choice === 'gauteng' || choice === 'client') return null

  const selectArea = (next: Exclude<AccessChoice, null>) => {
    window.localStorage.setItem(storageKey, next)
    setChoice(next)
  }

  return (
    <div className="area-gate" role="dialog" aria-modal="true" aria-labelledby="area-gate-title">
      <div className="area-gate__card">
        <div className="area-gate__paw" aria-hidden="true">🐾</div>
        {choice === 'outside' ? (
          <>
            <div className="eyebrow">A note from The Pet's Butler</div>
            <h1 id="area-gate-title">We're sorry — we're only available in the Centurion area.</h1>
            <p>Our pet-sitting services are currently for clients in Gauteng. For more information, please call us on <a href={`tel:${business.phonePrimary.replace(/\s/g, '')}`}>{business.phonePrimary}</a>.</p>
            <button className="btn btn--primary" onClick={() => selectArea('client')}>I'm a client — continue to the site</button>
            <button className="area-gate__back" onClick={() => setChoice(null)}>Back to area options</button>
          </>
        ) : (
          <>
            <div className="eyebrow">Serving pet families in Gauteng</div>
            <h1 id="area-gate-title">Welcome to The Pet's Butler</h1>
            <p>We're based in Centurion and welcome new bookings from Pretoria, Johannesburg and other Gauteng communities. Are you visiting us from Gauteng?</p>
            <button className="btn btn--primary area-gate__choice" onClick={() => selectArea('gauteng')}>I'm in Gauteng — continue to the site</button>
            <button className="btn btn--ghost area-gate__choice" onClick={() => selectArea('outside')}>I'm outside Gauteng</button>
            <button className="area-gate__client" onClick={() => selectArea('client')}>I'm a client — continue to the site</button>
          </>
        )}
        <Link className="area-gate__home" to="/" onClick={() => selectArea('client')}>The Pet's Butler · Centurion, South Africa</Link>
      </div>
    </div>
  )
}
