import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductModal.css';

const ProductModal: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useCart();

  if (!selectedProduct) return null;

  return (
    <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={() => setSelectedProduct(null)}>X</button>
        <div className="modal-body">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <button onClick={() => setSelectedProduct(null)}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
