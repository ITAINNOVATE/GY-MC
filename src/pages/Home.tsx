import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import { useProducts } from '../context/ProductContext';
import flashVideo from '../assets/Vidéo.mp4';
const essenceImg = 'https://eqqdjqdbbwmshllqesdt.supabase.co/storage/v1/object/public/products/c2/item2_25.jpg';
import './Home.css';

const Home: React.FC = () => {
  const { products, loading } = useProducts();
  // Show up to 20 featured products across two carousel bands
  const featuredProducts = products.slice(0, 20);

  if (loading) return null;

  return (
    <main className="home-page">
      <Hero />
      
      <section className="flash-sale-section fade-in">
        <div className="container flash-sale-grid">
          <div className="flash-sale-video">
            <div className="video-wrapper">
              <video 
                autoPlay 
                loop 
                playsInline 
                controls 
                preload="auto"
                className="sale-video"
              >
                <source src={flashVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <div className="video-badge">Vente Flash</div>
            </div>
          </div>
          
          <div className="flash-sale-content">
            <span className="promo-badge">Événement Exclusif</span>
            <h2 className="flash-title">VENTE FLASH EXCEPTIONNELLE</h2>
            <h3 className="brand-name">GY MAISON COUTURE</h3>
            
            <div className="event-details">
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <p><strong>Ce dimanche 19 avril 2026</strong></p>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <p>Noom Hôtel (ex Radisson), Chambre 010, <strong>Dakar</strong></p>
              </div>
              <div className="detail-item">
                <span className="detail-icon">🕙</span>
                <p>De 11h à 20h</p>
              </div>
            </div>

            <div className="promo-body">
              <p>Une journée unique pour découvrir et shopper nos pièces signature : élégance, savoir-faire et style intemporel réunis en une seule expérience.</p>
              <div className="highlight-box">
                <p><strong>Offres spéciales – Quantités limitées</strong></p>
                <p className="urgency">Premiers arrivés, premiers servis…</p>
              </div>
            </div>

            <p className="final-call">Ne manquez pas cette parenthèse mode exceptionnelle. On vous attend.</p>
            
            <div className="flash-footer">
              <span className="hashtag">#gymaisoncouture</span>
              <a href="https://wa.me/2290166743493" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Nous contacter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-collection">
        <div className="section-header container fade-in">
          <span className="subtitle">Collection Exclusive</span>
          <h2>Nos Pièces Maîtresses</h2>
          <div className="accent-line"></div>
        </div>

        <ProductCarousel products={featuredProducts} />

        <div className="view-all container fade-in">
          <a href="/shop" className="btn btn-secondary">Voir toute la collection</a>
        </div>
      </section>

      <section className="section brand-philosophy">
        <div className="container philosophy-grid">
          <div className="philosophy-content fade-in">
            <span className="subtitle">Notre Essence</span>
            <h2>Là où la matière devient signature</h2>
            <p>
              Chaque fil chez GY Maison Couture raconte une histoire. Depuis notre fondation, nous nous efforçons de 
              redéfinir l'élégance en fusionnant les techniques ancestrales avec une vision contemporaine.
            </p>
            <p>
              Nous croyons que chaque vêtement doit être une extension de la personnalité de celle qui le porte.
            </p>
            <a href="/about" className="btn btn-primary">Notre Histoire</a>
          </div>
          <div className="philosophy-image fade-in">
            <div className="image-wrapper">
              <img src={essenceImg} alt="Studio GY Maison Couture" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
