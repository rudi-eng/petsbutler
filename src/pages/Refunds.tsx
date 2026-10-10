import { Link } from 'react-router-dom'
import { business } from '@/data/business'

export default function Refunds() {
  return (
    <>
      <section className="page-head"><div className="container"><div className="eyebrow">Straightforward booking terms</div><h1>Cancellations & refunds</h1><p>South African consumer rights apply to every booking and purchase.</p></div></section>
      <section className="section"><article className="container policy-page">
        <p><strong>Last reviewed: 10 October 2026.</strong> This policy follows the applicable <a href="https://www.gov.za/documents/consumer-protection-act" target="_blank" rel="noreferrer">Consumer Protection Act</a> and <a href="https://www.gov.za/documents/electronic-communications-and-transactions-act" target="_blank" rel="noreferrer">Electronic Communications and Transactions Act</a>. The shop is currently under reconstruction and online payments are not available. Booking requests submitted on this site are sent to WhatsApp for discussion; a request is not confirmed until we confirm the service, dates, scope and price with you in writing.</p>

        <h2>Changing or cancelling a booking</h2>
        <p>You may cancel an advance booking. If a booking has been confirmed, please contact us as soon as possible at <a href={`tel:${business.phonePrimary.replace(/\s/g, '')}`}>{business.phonePrimary}</a> or <a href={`mailto:${business.email}`}>{business.email}</a>. Any cancellation charge will be assessed individually and must be reasonable in the circumstances, including the kind of service, notice given, our reasonable opportunity to fill the space, and customary practice. We will tell you about any proposed charge and how it is calculated. No fixed or automatic cancellation penalty is created by this page.</p>

        <h2>Payments and refunds</h2>
        <p>No payment is taken by this website at present. If you have paid an agreed deposit or service fee directly, contact us with the booking details and proof of payment so we can review the amount due. Where a refund is due, we will return it using an agreed method and within the time required by applicable law.</p>

        <h2>Products and statutory rights</h2>
        <p>When the shop reopens, product-specific prices, delivery terms and return instructions will be shown before you place an order. Nothing in this policy limits rights you have under the Consumer Protection Act, the Electronic Communications and Transactions Act or other applicable law. Those rights can include cancellation periods for qualifying online transactions and remedies for unsafe, defective or non-compliant goods. Some statutory cooling-off rights have exceptions, including for certain dated services and goods that cannot be returned; the law and the facts of a transaction determine what applies.</p>

        <h2>How to contact us</h2>
        <p>For a cancellation, refund or complaint, please include your name, booking/order reference, service or product, relevant date and a short description. Contact The Pet’s Butler at <a href={`mailto:${business.email}`}>{business.email}</a> or <a href={`tel:${business.phonePrimary.replace(/\s/g, '')}`}>{business.phonePrimary}</a>.</p>
        <p><Link to="/privacy">Read our privacy and browser storage notice</Link> or <Link to="/booking">request a service</Link>.</p>
      </article></section>
    </>
  )
}
