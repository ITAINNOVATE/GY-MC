import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <span className="hero-subtitle">Haute Couture Béninoise</span>
          <h1>L'Élégance <br /> Redéfinie</h1>
          <p>
            Découvrez des créations uniques, conçues avec passion et précision 
            pour sublimer votre allure.
          </p>
          <div className="hero-btns">
            <a href="/shop" className="btn btn-primary">Explorer la Collection</a>
            <a href="/about" className="btn btn-secondary">À Propos de Nous</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
