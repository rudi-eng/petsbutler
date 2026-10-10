import { Link } from 'react-router-dom'
import { business } from '@/data/business'
import { makroBowlFind } from '@/data/shopSourcing'

export default function Shop() {
  return (
    <>
      <section className="shop-rebuild">
        <div className="shop-rebuild__card">
          <div className="shop-rebuild__illustration" aria-hidden="true">🐶</div>
          <div className="eyebrow">The Sitter's Boutique · Centurion, Gauteng</div>
          <h1>Our little shop is getting a makeover</h1>
          <p className="shop-rebuild__lead">The Pet's Butler shop is currently under reconstruction. We're taking time to put together a thoughtful collection for pets and the people who care for them.</p>
          <p>When we reopen, look out for reward-sized training bites, single-ingredient treats, dental chews, lick mats, puzzle and sniff toys, treat pouches, poo bags, reflective walk gear, food and water bowls, car safety tethers and washable blankets. We'll choose items with each pet's needs and their owner's preferences in mind.</p>
          <div className="shop-rebuild__categories" aria-label="Planned shop categories">
            {['Training treats', 'Enrichment toys', 'Walk essentials', 'Food & water bowls', 'Travel gear', 'Cosy comforts'].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="shop-rebuild__source">
            <strong>A little bowl we're considering</strong>
            <p>{makroBowlFind.name} · {makroBowlFind.capacity} · Makro listed it at R{makroBowlFind.listedPrice} when checked on {makroBowlFind.checkedOn}.</p>
            <p>It can hold food or drinking water; two bowls keep both available. This is a sourcing reference while our shop is being rebuilt, not our selling price. Makro's price and stock can change.</p>
            <a href={makroBowlFind.url} target="_blank" rel="noreferrer">See Makro's pet bowl listings ↗</a>
          </div>
          <p className="shop-rebuild__note">For now, please bring your pet's usual food and treats to every sit. We only give treats with your permission and according to your instructions.</p>
          <div className="shop-rebuild__actions">
            <Link to="/booking" className="btn btn--primary">Explore pet sitting</Link>
            <a href={`tel:${business.phonePrimary.replace(/\s/g, '')}`} className="btn btn--ghost">Call {business.phonePrimary}</a>
          </div>
          <span className="shop-rebuild__paw" aria-hidden="true">🐾</span>
        </div>
      </section>
    </>
  )
}
