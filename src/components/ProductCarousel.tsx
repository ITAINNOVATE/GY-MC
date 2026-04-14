import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../context/CartContext';
import './ProductCarousel.css';

interface Props {
  products: Product[];
}

const ProductCarousel: React.FC<Props> = ({ products }) => {
  const { addToCart, setSelectedProduct } = useCart();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  // Duplicate items for seamless infinite loop
  const items = [...products, ...products];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 280 + 24; // card width + gap
    const totalWidth = products.length * cardWidth;

    const animate = () => {
      if (!isPaused) {
        posRef.current -= 0.6;
        if (posRef.current <= -totalWidth) {
          posRef.current = 0;
        }
        if (track) {
          track.style.transform = `translateX(${posRef.current}px)`;
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused, products.length]);

  return (
    <div
      className="carousel-viewport"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-track" ref={trackRef}>
        {items.map((product, index) => (
          <div className="carousel-card" key={`${product.id}-${index}`}>
            <div className="carousel-card-image">
              <img src={product.image} alt={product.name} />
              <div className="carousel-card-actions">
                <button
                  className="btn-small btn-secondary-light"
                  onClick={() => setSelectedProduct(product)}
                >
                  Détails
                </button>
                <button
                  className="btn-small btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Commander
                </button>
              </div>
            </div>
            <div className="carousel-card-info">
              <span className="category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="price">{product.price.toLocaleString()} F CFA</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
