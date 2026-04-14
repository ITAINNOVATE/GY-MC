import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 className="logo">GY <span className="logo-accent">MAISON COUTURE</span></h2>
          <p className="brand-story">
            L'excellence de la haute couture. Des créations uniques alliant tradition et modernité.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/shop">Boutique</a></li>
            <li><a href="/about">À Propos</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:002290166743493" className="tel-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                00229 01 66 74 34 93
              </a>
            </li>
            <li>
              <a href="https://wa.me/2290166743493" target="_blank" rel="noopener noreferrer" className="wa-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                00229 01 66 74 34 93
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/profile.php?id=61572042684627" target="_blank" rel="noopener noreferrer" className="fb-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://vm.tiktok.com/ZS9LFBftyDyHL-Bmv1x/" target="_blank" rel="noopener noreferrer" className="tt-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.98a8.26 8.26 0 0 0 4.83 1.55V7.07a4.85 4.85 0 0 1-1.06-.38z"/>
                </svg>
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} GY Maison Couture. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
