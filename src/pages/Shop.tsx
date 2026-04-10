import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/products';
import './Shop.css';

const Shop: React.FC = () => {
  const filteredProducts = products;

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
          <div className="section-header">
            <span className="subtitle">Première Collection</span>
            <h2>L'Éveil des Sens</h2>
            <div className="accent-line"></div>
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
