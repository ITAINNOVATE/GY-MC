import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductModal.css';

const ProductModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart();

  if (!selectedProduct) return null;

  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="modal-content glass-effect" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={() => setSelectedProduct(null)}>&times;</button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
          </div>
          
          <div className="modal-details">
            <span className="subtitle">{selectedProduct.category}</span>
            <h2>{selectedProduct.name}</h2>
            
            <div className="modal-description">
              <p>{selectedProduct.description}</p>
              <p>
                Toutes nos créations sont réalisées sur-mesure dans notre atelier à Cotonou. 
                Nous apportons un soin particulier à chaque couture pour vous garantir une élégance inégalée.
              </p>
            </div>

            <div className="modal-price">
              {selectedProduct.price.toLocaleString()} F CFA
            </div>

            <div className="modal-actions">
              <button 
                className="btn btn-primary btn-add-to-cart"
                onClick={() => {
                  addToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
              >
                Ajouter au panier
              </button>
              
              <a 
                href={`https://wa.me/2290166743493?text=Bonjour, je souhaite en savoir plus sur l'article : ${selectedProduct.name}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                S'informer via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
