import { Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ServiceAreaGate } from '@/components/ServiceAreaGate'
import { RouteSeo } from '@/components/RouteSeo'
import { CartProvider } from '@/context/CartContext'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Cart from '@/pages/Cart'
import Booking from '@/pages/Booking'
import Gallery from '@/pages/Gallery'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <RouteSeo />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ServiceAreaGate />
    </CartProvider>
  )
}
