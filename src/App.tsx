import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import AboutPage from "./pages/AboutPage"
import TeamPage from "./pages/TeamPage"
import ContactPage from "./pages/ContactPage"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import { products } from "./data/products"
import ScrollToTop from "./components/utils/ScrollToTop"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {products.map(product => (
            <Route
              key={product.id}
              path={`/products/${product.id}`}
              element={<ProductPage productId={product.id} />}
            />
          ))}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Analytics />
      </main>
      <Footer />
    </Router>
  )
}

export default App
