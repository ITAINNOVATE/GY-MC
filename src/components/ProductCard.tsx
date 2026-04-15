import React from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../context/CartContext';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  showPrice?: boolean;
  buttonText?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showPrice = false, buttonText = "Détails" }) => {
  const { addToCart, setSelectedProduct } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-actions">
          <button className="btn-small btn-primary" onClick={() => setSelectedProduct(product)}>
            {buttonText}
          </button>
        </div>
      </div>
      <div className="product-info">
        <span className="category">{product.category}</span>
        <h3>{product.name}</h3>
        {showPrice && <p className="price">{product.price.toLocaleString()} F CFA</p>}
      </div>
    </div>
  );
};

export default ProductCard;
