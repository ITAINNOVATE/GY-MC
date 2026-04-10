import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import './Shop.css';

const Shop: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [activeCollection, setActiveCollection] = useState('Deuxième Collection');
  const collections = ['Toutes', 'Première Collection', 'Deuxième Collection'];

  const filteredProducts = activeCollection === 'Toutes' 
    ? products 
    : products.filter(p => p.collection === activeCollection);

  if (loading) return (
    <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <p>Chargement des collections...</p>
    </div>
  );

  if (error) return (
    <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <p>Une erreur est survenue lors du chargement des produits.</p>
    </div>
  );

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
