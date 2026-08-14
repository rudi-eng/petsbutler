import { useState, type FormEvent } from 'react'
import { services } from '@/data/services'
import { business, formatZar } from '@/data/business'
import { whatsappLink } from '@/lib/whatsapp'

interface FormState {
  service: string
  date: string
  time: string
  petName: string
  petType: string
  petAge: string
  ownerName: string
  phone: string
  email: string
  notes: string
}

const initial: FormState = {
  service: services[0].id,
  date: '',
  time: '',
  petName: '',
  petType: 'Dog',
  petAge: '',
  ownerName: '',
  phone: '',
  email: '',
  notes: '',
}

export default function Booking() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)

  const selected = services.find((s) => s.id === form.service)!

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [
      `Hi The Pet's Butler! I'd like to book a service.`,
      '',
      `Service: ${selected.name} (from ${formatZar(selected.priceFrom)})`,
      form.date && `Date: ${form.date}`,
      form.time && `Preferred time: ${form.time}`,
      '',
      'Pet:',
      `  Name: ${form.petName}`,
      `  Type: ${form.petType}`,
      form.petAge && `  Age: ${form.petAge}`,
      '',
      'Owner:',
      `  Name: ${form.ownerName}`,
      `  Phone: ${form.phone}`,
      form.email && `  Email: ${form.email}`,
      form.notes && '',
      form.notes && `Notes: ${form.notes}`,
    ].filter(Boolean)

    window.location.href = whatsappLink(lines.join('\n'))
    setSubmitted(true)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">Booking</div>
          <h1>Book a service</h1>
          <p>
            Fill this in and we'll open WhatsApp with everything pre-written.
            We usually reply within the hour during opening hours.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            {/* Service chooser */}
            <div className="field">
              <label>Service</label>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {services.map((s) => (
                  <label
                    key={s.id}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '24px 1fr auto',
                      gap: '0.75rem',
                      alignItems: 'center',
                      padding: '0.75rem 1rem',
                      border:
                        form.service === s.id
                          ? '2px solid var(--teal)'
                          : '1px solid rgba(35,33,31,0.14)',
                      borderRadius: 'var(--radius-sm)',
                      background: form.service === s.id ? 'rgba(42,157,143,0.08)' : 'var(--sand-light)',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={s.id}
                      checked={form.service === s.id}
                      onChange={(e) => update('service', e.target.value)}
                      style={{ accentColor: 'var(--teal)' }}
                    />
                    <span>
                      <strong style={{ fontFamily: 'var(--font-head)' }}>{s.name}</strong>
                      <br />
                      <small className="muted">{s.short} · {s.duration}</small>
                    </span>
                    <span style={{ fontWeight: 700, fontFamily: 'var(--font-head)' }}>
                      from {formatZar(s.priceFrom)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field--row">
              <div className="field">
                <label htmlFor="date">Preferred date</label>
                <input
                  id="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="time">Preferred time</label>
                <input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={(e) => update('time', e.target.value)}
                  required
                />
              </div>
            </div>

            <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'grid', gap: '1.1rem' }}>
              <legend style={{ fontWeight: 700, fontFamily: 'var(--font-head)', marginBottom: '0.25rem' }}>
                About your pet
              </legend>
              <div className="field--row">
                <div className="field">
                  <label htmlFor="petName">Pet's name</label>
                  <input
                    id="petName"
                    type="text"
                    placeholder="e.g. Milo"
                    value={form.petName}
                    onChange={(e) => update('petName', e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="petType">Pet type</label>
                  <select
                    id="petType"
                    value={form.petType}
                    onChange={(e) => update('petType', e.target.value)}
                  >
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Rabbit</option>
                    <option>Bird</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="petAge">Age / breed (optional)</label>
                <input
                  id="petAge"
                  type="text"
                  placeholder="e.g. 3 years, border collie"
                  value={form.petAge}
                  onChange={(e) => update('petAge', e.target.value)}
                />
              </div>
            </fieldset>

            <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'grid', gap: '1.1rem' }}>
              <legend style={{ fontWeight: 700, fontFamily: 'var(--font-head)', marginBottom: '0.25rem' }}>
                Your contact details
              </legend>
              <div className="field">
                <label htmlFor="ownerName">Your name</label>
                <input
                  id="ownerName"
                  type="text"
                  value={form.ownerName}
                  onChange={(e) => update('ownerName', e.target.value)}
                  required
                />
              </div>
              <div className="field--row">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="082 000 0000"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email (optional)</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
              </div>
            </fieldset>

            <div className="field">
              <label htmlFor="notes">Anything we should know? (vet, meds, anxiety, etc.)</label>
              <textarea
                id="notes"
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                placeholder="e.g. Milo is nervous around loud motorbikes and needs medication at 8am."
              />
            </div>

            <button className="btn btn--primary btn--block" type="submit">
              Send booking via WhatsApp →
            </button>
            <p className="form__hint">
              Submitting opens WhatsApp to {business.phonePrimary} with your
              booking pre-filled. Hit send there to confirm.
            </p>
            {submitted && (
              <div className="form__success">
                ✓ Opening WhatsApp… if it didn't open, tap the button again.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}