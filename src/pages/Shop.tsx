import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import './Shop.css';

const Shop: React.FC = () => {
  const { products, loading, error } = useProducts();

  // For now, Shop shows all products as per user directive 
  // until "pièces en vente" logic is confirmed.
  const shopProducts = products;

  if (loading) return (
    <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
      <p className="loading-text">Chargement de la boutique...</p>
    </div>
  );

  if (error) return (
    <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
      <p>Une erreur est survenue lors du chargement des produits.</p>
    </div>
  );

  return (
    <main className="shop-page">
      <section className="shop-hero">
        <div className="container">
          <span className="subtitle">Prêt-à-Porter & Accessoires</span>
          <h1>La Boutique</h1>
        </div>
      </section>

      <section className="section shop-section">
        <div className="container">
          <div className="products-grid fade-in">
            {shopProducts.map(product => (
              <ProductCard key={product.id} product={product} buttonText="Commander" />
            ))}
          </div>

          {shopProducts.length === 0 && (
            <div className="no-results">
              <p>La boutique est actuellement vide. Nos nouvelles pièces arrivent bientôt.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Shop;
