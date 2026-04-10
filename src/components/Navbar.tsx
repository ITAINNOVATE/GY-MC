import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-effect' : ''} ${!isHome ? 'not-home' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="logo">
          GY <span className="logo-accent">MAISON COUTURE</span>
        </a>
        
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/shop">Boutique</a></li>
          <li><a href="/about">À Propos</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="nav-actions">
          <button className="cart-trigger" onClick={() => setIsOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
