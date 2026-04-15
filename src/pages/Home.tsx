import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import { useProducts } from '../context/ProductContext';
const essenceImg = 'https://xncrrgxnyqgekmfhipen.supabase.co/storage/v1/object/public/products/c2/item2_25.jpg';
import './Home.css';

const Home: React.FC = () => {
  const { products, loading } = useProducts();
  // Show up to 20 featured products across two carousel bands
  const featuredProducts = products.slice(0, 20);

  if (loading) return null;

  return (
    <main className="home-page">
      <Hero />
      
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
