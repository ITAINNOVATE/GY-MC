import React from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setSelectedProduct } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-actions">
          <button className="btn-small btn-secondary-light" onClick={() => setSelectedProduct(product)}>
            Détails
          </button>
          <button className="btn-small btn-primary" onClick={() => addToCart(product)}>
            Commander
          </button>
        </div>
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="price">{product.price.toLocaleString()} F CFA</p>
      </div>
    </div>
  );
};

export default ProductCard;
