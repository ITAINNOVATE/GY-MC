import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';

// Lazy loading pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Collections = lazy(() => import('./pages/Collections'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
  <div style={{ 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: '#FFFFFF',
    color: '#C5A059',
    fontSize: '1.2rem',
    fontWeight: '600',
    letterSpacing: '0.2em',
    textTransform: 'uppercase'
  }}>
    GY Maison Couture...
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <ProductProvider>
          <div className="app">
            <Navbar />
            <CartDrawer />
            <ProductModal />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </ProductProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
