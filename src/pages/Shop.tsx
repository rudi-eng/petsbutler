import { products } from '@/data/products'
import { ProductCard } from '@/components/ProductCard'

export default function Shop() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">Shop</div>
          <h1>Small-batch treats & gear</h1>
          <p>
            Everything here is used by us on the dogs we care for — single-protein
            treats, made-in-Centurion gear and low-waste essentials. Add to cart and
            check out via WhatsApp.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid grid--4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}