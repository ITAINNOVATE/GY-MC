import React from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-actions">
          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Ajouter au panier
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
