import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/products';
import './Shop.css';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const categories = ['Tous', 'Couture', 'Traditional', 'Modern'];

  const filteredProducts = activeCategory === 'Tous' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div className="container">
          <span className="subtitle">Notre Collection</span>
          <h1>La Boutique</h1>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="shop-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-results">
              <p>Aucun produit trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;
