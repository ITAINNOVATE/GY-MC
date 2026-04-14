import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductContext';
import './Collections.css';

const Collections: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [activeCollection, setActiveCollection] = useState('Deuxième Collection');
  const collections = ['Toutes', 'Première Collection', 'Deuxième Collection'];

  const filteredProducts = activeCollection === 'Toutes' 
    ? products 
    : products.filter(p => p.collection === activeCollection);

  if (loading) return (
    <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
      <p className="loading-text">Chargement des collections...</p>
    </div>
  );

  if (error) return (
    <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
      <p>Une erreur est survenue lors du chargement des produits.</p>
    </div>
  );

  return (
    <main className="collections-page">
      <section className="shop-hero">
        <div className="container">
          <span className="subtitle">L'Excellence Éditoriale</span>
          <h1>Nos Collections</h1>
        </div>
      </section>

      <section className="section collections-section">
        <div className="container">
          <div className="shop-filters fade-in">
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

          <div className="products-grid fade-in">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} showPrice={false} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-results">
              <p>Aucune pièce trouvée dans cette collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Collections;
