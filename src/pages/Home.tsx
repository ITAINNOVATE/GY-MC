import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/products';
import studioImg from '../assets/studio.png';
import './Home.css';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="home-page">
      <Hero />
      
      <section className="section featured-collection">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Collection Exclusive</span>
            <h2>Nos Pièces Maîtresses</h2>
            <div className="accent-line"></div>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="view-all">
            <a href="/shop" className="btn btn-secondary">Voir toute la collection</a>
          </div>
        </div>
      </section>

      <section className="section brand-philosophy glass-effect">
        <div className="container philosophy-grid">
          <div className="philosophy-content">
            <span className="subtitle">Notre Essence</span>
            <h2>Où l'Art rencontre la Couture</h2>
            <p>
              Chaque fil chez GY Maison Couture raconte une histoire. Depuis notre fondation, nous nous efforçons de 
              redéfinir l'élégance béninoise en fusionnant les techniques ancestrales avec une vision contemporaine.
            </p>
            <p>
              Nous croyons que chaque vêtement doit être une extension de la personnalité de celle qui le porte.
            </p>
            <a href="/about" className="btn btn-primary">Notre Histoire</a>
          </div>
          <div className="philosophy-image">
            <div className="image-wrapper">
              <img src={studioImg} alt="Studio GY Maison Couture" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
