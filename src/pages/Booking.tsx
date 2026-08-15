import { useState, useMemo, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { services } from '@/data/services'
import { business, formatZar } from '@/data/business'
import { whatsappLink } from '@/lib/whatsapp'

interface SitterAddon {
  id: string
  name: string
  desc: string
  price: number
  type: 'daily' | 'flat'
  petType: 'Dog' | 'Cat' | 'Bird' | 'Other'
}

const sitterAddons: SitterAddon[] = [
  // Dogs
  {
    id: 'daily-treat-dog',
    name: '1 Treat a Day Sitter Pack',
    desc: 'A delicious daily treat hand-delivered by the butler.',
    price: 15,
    type: 'daily',
    petType: 'Dog',
  },
  {
    id: 'gourmet-box-dog',
    name: 'Gourmet Dog Snack Box',
    desc: 'Premium locally baked peanut-butter and liver biscuits.',
    price: 85,
    type: 'flat',
    petType: 'Dog',
  },
  {
    id: 'dental-chews-dog',
    name: 'Premium Dental Chews Pack',
    desc: 'Clean teeth and keep them content (3-pack).',
    price: 45,
    type: 'flat',
    petType: 'Dog',
  },
  {
    id: 'dog-blanket',
    name: 'Cosy Sitter Sherpa Dog Blanket',
    desc: 'Double-layer ultra-soft fleece blanket to keep.',
    price: 180,
    type: 'flat',
    petType: 'Dog',
  },
  // Cats
  {
    id: 'daily-treat-cat',
    name: 'Salmon Bites Daily Pack',
    desc: 'Premium daily freeze-dried salmon treats.',
    price: 15,
    type: 'daily',
    petType: 'Cat',
  },
  {
    id: 'gourmet-box-cat',
    name: 'Gourmet Cat Treat Box',
    desc: 'Luxury selection of felt toy, tuna bites, and catnip spray.',
    price: 85,
    type: 'flat',
    petType: 'Cat',
  },
  {
    id: 'catnip-cat',
    name: 'Organic Catnip & Salmon Bites Pack',
    desc: 'Fresh Gauteng organic catnip spray & salmon bites.',
    price: 55,
    type: 'flat',
    petType: 'Cat',
  },
  {
    id: 'cat-blanket',
    name: 'Cosy Sitter Sherpa Cat Blanket',
    desc: 'Extra warm fleece blanket for their nesting spot to keep.',
    price: 180,
    type: 'flat',
    petType: 'Cat',
  },
  // Birds
  {
    id: 'daily-treat-bird',
    name: 'Seed & Honey Stick Daily Pack',
    desc: 'Nutritious daily honey baked seed bell.',
    price: 12,
    type: 'daily',
    petType: 'Bird',
  },
  {
    id: 'seed-bar-bird',
    name: 'Seed & Fruit Hanging Bar',
    desc: 'A sweet, nutritious seed, nut, and fruit bar.',
    price: 25,
    type: 'flat',
    petType: 'Bird',
  },
  {
    id: 'gourmet-box-bird',
    name: 'Gourmet Bird Treat Box',
    desc: 'Assortment of seed bells, dried fruits, and millet spray.',
    price: 65,
    type: 'flat',
    petType: 'Bird',
  },
  // Other
  {
    id: 'daily-greens-other',
    name: 'Daily Fresh Greens Pack',
    desc: 'Fresh organic celery, parsley, and carrots.',
    price: 15,
    type: 'daily',
    petType: 'Other',
  },
  {
    id: 'greens-box-other',
    name: 'Gourmet Herb & Veggie Box',
    desc: 'Fresh local veggies and herb bouquet.',
    price: 65,
    type: 'flat',
    petType: 'Other',
  },
]

export default function Booking() {
  const [searchParams] = useSearchParams()
  const queryService = searchParams.get('service')
  const defaultService = services.some((s) => s.id === queryService)
    ? (queryService as string)
    : services[0].id

  // Form State
  const [serviceId, setServiceId] = useState(defaultService)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [sessionCount, setSessionCount] = useState(1) // for walks/visits
  const [time, setTime] = useState('09:00')
  const [petName, setPetName] = useState('')
  const [petType, setPetType] = useState<'Dog' | 'Cat' | 'Bird' | 'Other'>('Dog')
  const [petAge, setPetAge] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  
  // Selected Add-ons (treats, blankets)
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  // Lookups
  const selectedService = useMemo(() => {
    return services.find((s) => s.id === serviceId) || services[0]
  }, [serviceId])

  const availableAddons = useMemo(() => {
    return sitterAddons.filter((a) => a.petType === petType)
  }, [petType])

  // Clear treats that aren't matching new pet type when pet type changes
  const handlePetTypeChange = (type: 'Dog' | 'Cat' | 'Bird' | 'Other') => {
    setPetType(type)
    setSelectedAddons([])
  }

  // Calculate number of booking days
  const daysCount = useMemo(() => {
    if (!startDate || !endDate) return 1
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diff = end.getTime() - start.getTime()
    if (diff < 0) return 1
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1 // inclusive
    return days || 1
  }, [startDate, endDate])

  // Automatically adjust sessionCount when date range changes for day services
  const isMultiDayService = selectedService.id === 'overnight' || selectedService.id === 'day-sit'

  // Calculate cost breakdown
  const serviceCost = useMemo(() => {
    if (isMultiDayService) {
      return selectedService.priceFrom * daysCount
    } else {
      return selectedService.priceFrom * sessionCount
    }
  }, [selectedService, isMultiDayService, daysCount, sessionCount])

  const addonsBreakdown = useMemo(() => {
    return selectedAddons.map((id) => {
      const addon = sitterAddons.find((a) => a.id === id)!
      const duration = addon.type === 'daily' ? (isMultiDayService ? daysCount : sessionCount) : 1
      const totalCost = addon.price * duration
      return {
        ...addon,
        duration,
        totalCost,
      }
    })
  }, [selectedAddons, daysCount, sessionCount, isMultiDayService])

  const totalCost = useMemo(() => {
    const addonsTotal = addonsBreakdown.reduce((sum, item) => sum + item.totalCost, 0)
    return serviceCost + addonsTotal
  }, [serviceCost, addonsBreakdown])

  // Handle Addon toggle
  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const durationText = isMultiDayService
      ? `${daysCount} Day${daysCount > 1 ? 's' : ''} (${startDate} to ${endDate})`
      : `${sessionCount} Session${sessionCount > 1 ? 's' : ''} on ${startDate} at ${time}`

    const addonsText =
      addonsBreakdown.length > 0
        ? addonsBreakdown
            .map(
              (a) =>
                `  • ${a.name} (${formatZar(a.price)}${
                  a.type === 'daily' ? '/day' : ''
                } × ${a.duration} = ${formatZar(a.totalCost)})`
            )
            .join('\n')
        : '  • None selected (owner opted out)'

    const message = [
      `Hi The Pet's Butler! 🐾`,
      `I would like to book a service using your modern booking system.`,
      `------------------------------------------`,
      `SERVICE DETAILS:`,
      `• Service: ${selectedService.name}`,
      `• Schedule/Duration: ${durationText}`,
      `• Base Rate: ${formatZar(selectedService.priceFrom)} (Subtotal: ${formatZar(serviceCost)})`,
      ``,
      `PET DETAILS:`,
      `• Name: ${petName}`,
      `• Type: ${petType} (${petAge || 'Not specified'})`,
      ``,
      `ADD-ONS & TREATS:`,
      addonsText,
      ``,
      `ESTIMATED TOTAL: ${formatZar(totalCost)} ZAR`,
      `------------------------------------------`,
      `CONTACT DETAILS:`,
      `• Owner Name: ${ownerName}`,
      `• Phone: ${phone}`,
      email && `• Email: ${email}`,
      notes && `\nSPECIAL SITTING NOTES:\n"${notes}"`,
      ``,
      `Please confirm availability. Thank you!`,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = whatsappLink(message)
    setSubmitted(true)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">Booking Portal</div>
          <h1>State-of-the-Art Booking System</h1>
          <p>
            Build your perfect booking including daily gourmet treats, premium snacks, and cozy items.
            Submit to send your order details immediately to the Butler's WhatsApp!
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className="booking-layout">
            
            {/* BOOKING WIZARD FORM */}
            <form className="booking-form" onSubmit={handleSubmit}>
              
              {/* STEP 1: SERVICE CHOICE */}
              <div className="booking-step">
                <span className="step-badge">Step 1</span>
                <h2>Choose a Sitter Service</h2>
                <div className="services-grid-selector">
                  {services.map((s) => (
                    <label
                      key={s.id}
                      className={`service-select-card ${serviceId === s.id ? 'active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s.id}
                        checked={serviceId === s.id}
                        onChange={() => setServiceId(s.id)}
                        className="sr-only"
                      />
                      <span className="service-select-card__icon">{s.icon}</span>
                      <span className="service-select-card__info">
                        <strong>{s.name}</strong>
                        <span className="short muted">{s.short}</span>
                        <span className="price-tag">from {formatZar(s.priceFrom)}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* STEP 2: DATES & SCHEDULE */}
              <div className="booking-step">
                <span className="step-badge">Step 2</span>
                <h2>Schedule & Duration</h2>
                
                {isMultiDayService ? (
                  <div className="field--row">
                    <div className="field">
                      <label htmlFor="startDate">Start Date</label>
                      <input
                        id="startDate"
                        type="date"
                        min={today}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="endDate">End Date (Inclusive)</label>
                      <input
                        id="endDate"
                        type="date"
                        min={startDate || today}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className="field--row" style={{ gridTemplateColumns: '1.5fr 1fr 1fr' }}>
                    <div className="field">
                      <label htmlFor="startDate">Preferred Date</label>
                      <input
                        id="startDate"
                        type="date"
                        min={today}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="time">Preferred Time</label>
                      <input
                        id="time"
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="sessions">Number of Walks/Visits</label>
                      <input
                        id="sessions"
                        type="number"
                        min="1"
                        max="30"
                        value={sessionCount}
                        onChange={(e) => setSessionCount(Math.max(1, parseInt(e.target.value) || 1))}
                        required
                      />
                    </div>
                  </div>
                )}
                {isMultiDayService && startDate && endDate && (
                  <div className="duration-highlight">
                    Selected Duration: <strong>{daysCount} Days</strong>
                  </div>
                )}
              </div>

              {/* STEP 3: PET INFORMATION */}
              <div className="booking-step">
                <span className="step-badge">Step 3</span>
                <h2>Tell Us About Your Pet</h2>
                
                {/* PET TYPE SELECTOR CARD */}
                <div className="field">
                  <label>Pet Category (Loads specific treats below)</label>
                  <div className="pet-tabs">
                    {(['Dog', 'Cat', 'Bird', 'Other'] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`pet-tab-btn ${petType === type ? 'active' : ''}`}
                        onClick={() => handlePetTypeChange(type)}
                      >
                        <span style={{ fontSize: '1.4rem' }}>
                          {type === 'Dog' && '🐶'}
                          {type === 'Cat' && '🐱'}
                          {type === 'Bird' && '🐦'}
                          {type === 'Other' && '🐹'}
                        </span>
                        <span>{type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field--row">
                  <div className="field">
                    <label htmlFor="petName">Pet's Name</label>
                    <input
                      id="petName"
                      type="text"
                      placeholder="e.g. Milo or Whiskers"
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="petAge">Pet's Breed / Age / Special info</label>
                    <input
                      id="petAge"
                      type="text"
                      placeholder="e.g. 2yo Golden Retriever"
                      value={petAge}
                      onChange={(e) => setPetAge(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* STEP 4: TREATS & COZY MENU */}
              <div className="booking-step">
                <span className="step-badge">Step 4</span>
                <h2>Butler's Treats & Cozy Blanket Menu</h2>
                <p className="muted" style={{ fontSize: '0.88rem', marginTop: '-0.5rem' }}>
                  Give your pets premium comfort and tasty treats while you are gone. 
                  Tailored specifically for <strong>{petType}s</strong>!
                </p>

                <div className="treats-selection-list">
                  {availableAddons.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id)
                    const displayPrice =
                      addon.type === 'daily'
                        ? `${formatZar(addon.price)} / day`
                        : `${formatZar(addon.price)} flat`
                    return (
                      <div
                        key={addon.id}
                        className={`treat-item-card ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleAddon(addon.id)}
                      >
                        <div className="checkbox-styled">
                          <div className={`checkbox-box ${isSelected ? 'checked' : ''}`}>
                            {isSelected && '✓'}
                          </div>
                        </div>
                        <div className="treat-item-details">
                          <strong className="treat-item-name">{addon.name}</strong>
                          <span className="treat-item-desc muted">{addon.desc}</span>
                        </div>
                        <div className="treat-item-price">
                          <strong>{displayPrice}</strong>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* STEP 5: CONTACT INFORMATION */}
              <div className="booking-step">
                <span className="step-badge">Step 5</span>
                <h2>Contact Information</h2>
                <div className="field">
                  <label htmlFor="ownerName">Your Name</label>
                  <input
                    id="ownerName"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required
                  />
                </div>
                <div className="field--row">
                  <div className="field">
                    <label htmlFor="phone">WhatsApp Mobile Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 082 853 4385"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address (Optional)</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. owner@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="notes">Special Instructions (Vet, Medication, Loud noises, etc.)</label>
                  <textarea
                    id="notes"
                    placeholder="e.g. Milo is afraid of thunderstorms, and needs medication with breakfast."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>

              <button className="btn btn--primary btn--block btn--hero" type="submit">
                Book Instantly via WhatsApp 🐾
              </button>

              {submitted && (
                <div className="form__success">
                  ✓ Opening WhatsApp conversation with {business.phonePrimary}... If it did not launch, click the button again.
                </div>
              )}
            </form>

            {/* LIVE COST ESTIMATE SIDEBAR */}
            <aside className="booking-sidebar">
              <div className="booking-summary-card">
                <h3>Live Cost Breakdown</h3>
                <div className="summary-section">
                  <span className="summary-section__title">Sitter Service</span>
                  <div className="summary-row">
                    <span>
                      {selectedService.name}
                      <br />
                      <small className="muted">
                        {isMultiDayService
                          ? `${formatZar(selectedService.priceFrom)} × ${daysCount} days`
                          : `${formatZar(selectedService.priceFrom)} × ${sessionCount} walks/visits`}
                      </small>
                    </span>
                    <strong>{formatZar(serviceCost)}</strong>
                  </div>
                </div>

                {addonsBreakdown.length > 0 && (
                  <div className="summary-section">
                    <span className="summary-section__title">Add-ons & Treats ({petType})</span>
                    {addonsBreakdown.map((item) => (
                      <div className="summary-row" key={item.id}>
                        <span>
                          {item.name}
                          <br />
                          <small className="muted">
                            {item.type === 'daily'
                              ? `${formatZar(item.price)} × ${item.duration} days`
                              : `${formatZar(item.price)} flat`}
                          </small>
                        </span>
                        <strong>{formatZar(item.totalCost)}</strong>
                      </div>
                    ))}
                  </div>
                )}

                <div className="summary-section summary-total">
                  <div className="summary-row">
                    <span>Estimated Total</span>
                    <span className="total-zar">{formatZar(totalCost)}</span>
                  </div>
                  <small className="muted text-center" style={{ display: 'block', marginTop: '0.5rem' }}>
                    Prices in South African Rand (ZAR) only.
                  </small>
                </div>

                <div className="sitter-guarantee">
                  <h4>🐾 The Butler's Guarantee</h4>
                  <ul>
                    <li>✓ Cage-free, home-style environment.</li>
                    <li>✓ Fresh water, feeds & medication schedules.</li>
                    <li>✓ Highveld-adapted care & weather safety.</li>
                    <li>✓ Comprehensive, reassuring updates.</li>
                  </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}