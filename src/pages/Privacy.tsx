import { Link } from 'react-router-dom'
import { business } from '@/data/business'

export default function Privacy() {
  return (
    <>
      <section className="page-head"><div className="container"><div className="eyebrow">Your information, handled with care</div><h1>Privacy & browser storage</h1><p>A clear guide to what this website uses and what happens when you contact us.</p></div></section>
      <section className="section"><article className="container policy-page">
        <p><strong>Last reviewed: 10 October 2026.</strong> This notice describes The Pet’s Butler website and booking contact process in line with South Africa’s <a href="https://www.gov.za/documents/protection-personal-information-act" target="_blank" rel="noreferrer">Protection of Personal Information Act (POPIA)</a>. Please contact us if something is unclear or you want to exercise a privacy right.</p>

        <h2>Who handles your information?</h2>
        <p>The Pet’s Butler is part of <strong>Aslana Intelligence (Pty) Ltd</strong>, the company behind this service. The company is owned by Rudi Beukes. The business is based in Rooihuiskraal, Centurion. For privacy requests, contact us at <a href={`mailto:${business.email}`}>{business.email}</a> or call <a href={`tel:${business.phonePrimary.replace(/\s/g, '')}`}>{business.phonePrimary}</a>. The website is hosted by Cloudflare Pages.</p>

        <h2>What we collect and why</h2>
        <ul>
          <li><strong>Booking details:</strong> owner name, phone number, optional email, suburb, dates and times, selected service, pet names and types, care notes, and selected add-ons. We use these details to respond to your request, check suitability and availability, calculate an estimate, and arrange care.</li>
          <li><strong>Cart:</strong> selected product names, quantities and prices are saved in your browser. Cart contents expire 30 days after the last change; expired entries are discarded the next time the site loads. The shop is currently being rebuilt; a saved cart is not an order or payment.</li>
          <li><strong>Area choice:</strong> your Gauteng, outside-area or existing-client choice is kept in session storage until the browser tab/session ends. It controls the welcome prompt only and does not determine your physical location.</li>
          <li><strong>Technical request data:</strong> our hosting provider may process connection and security information, such as IP address, browser details and requested pages, to deliver and protect the website.</li>
        </ul>

        <h2>Booking messages and service providers</h2>
        <p>The booking form does not submit its contents to a database on this website. When you submit it, your device opens WhatsApp with a prepared message; you choose whether to send it to The Pet’s Butler business account used by Aslana Intelligence (Pty) Ltd. WhatsApp/Meta then processes the message under its own terms and privacy practices, which may involve processing outside South Africa. Do not include information you do not want to share through WhatsApp. Booking conversations may remain in that account while needed to arrange and deliver care, maintain appropriate business records, address safety issues or resolve legal claims. They should be deleted or anonymised when no longer needed, subject to legal retention duties.</p>
        <p>The Google Map is not loaded until you select “Load Google Map”. If you choose to load it, Google may receive connection or device information from your browser. The directions button also opens Google Maps when selected. We removed externally hosted web fonts and this site does not intentionally use advertising or analytics cookies.</p>

        <h2>Lawful use, sharing and security</h2>
        <p>We use personal information only for the purposes explained above, to take steps you request before a possible booking, to perform agreed services, to meet legal obligations, or where another lawful basis under POPIA applies. We limit access to people who need it to manage enquiries and care. We do not sell personal information. We use reasonable safeguards, but no internet transmission or storage method can be guaranteed completely secure.</p>

        <h2>Your choices and rights</h2>
        <p>You can decline to load the Google Map, clear saved cart data in your browser, or close the tab to clear your area choice. If you do not provide the required booking name and phone number, we may be unable to respond to a booking request. Subject to POPIA and other applicable law, you may ask to access or correct personal information, object to certain processing, request deletion where we no longer have a lawful reason to retain it, or withdraw consent where processing relies on consent. Contact us using the details above. You may also complain to the <a href="https://inforegulator.org.za/" target="_blank" rel="noreferrer">Information Regulator of South Africa</a>.</p>

        <h2>Children and pet information</h2>
        <p>This website is intended for adults arranging animal care. Please do not submit a child’s personal information. Pet details can identify or relate to an owner when linked to a booking, so we handle them as carefully as the owner’s contact details.</p>

        <h2>Pet photos and videos</h2>
        <p>We share care updates with a pet’s owner using the channel and preferences agreed for that booking. We do not reuse care-update photos or videos for promotion by default. Before putting a client pet’s photo or video on this website or in other marketing, we ask that pet’s owner separately for permission over WhatsApp and use it only if they agree. The owners of pets currently pictured in our gallery have agreed to their photos being shown. An owner can withdraw permission for future use by contacting us; we will remove the relevant image from channels we control as soon as reasonably practical.</p>

        <h2>Updates</h2>
        <p>We may update this notice when the website or our practices change. The latest version will be published on this page.</p>
        <p><Link to="/refunds">Read our cancellation and refund information</Link> or <Link to="/booking">request a booking</Link>.</p>
      </article></section>
    </>
  )
}
