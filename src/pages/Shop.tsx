import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/products';
import './Shop.css';

const Shop: React.FC = () => {
  const [activeCollection, setActiveCollection] = useState('Deuxième Collection');
  const collections = ['Toutes', 'Première Collection', 'Deuxième Collection'];

  const filteredProducts = activeCollection === 'Toutes' 
    ? products 
    : products.filter(p => p.collection === activeCollection);

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div className="container">
          <span className="subtitle">Collections Exclusives</span>
          <h1>La Boutique</h1>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="shop-filters">
            {collections.map(coll => (
              <button 
                key={coll} 
                className={`filter-btn ${activeCollection === coll ? 'active' : ''}`}
                onClick={() => setActiveCollection(coll)}
              >
                {coll}
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
