import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../context/CartContext';
import './ProductCarousel.css';

interface Props {
  products: Product[];
}

interface BandProps {
  items: Product[];
  direction: 'left' | 'right';
  speed?: number;
  addToCart: (p: Product) => void;
  setSelectedProduct: (p: Product) => void;
}

const CarouselBand: React.FC<BandProps> = ({ items, direction, speed = 0.5, addToCart, setSelectedProduct }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  // Duplicate for seamless loop
  const duplicated = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 260 + 20; // card width + gap
    const totalWidth = items.length * cardWidth;

    // Start right-moving band from negative so it loops correctly
    if (direction === 'right') {
      posRef.current = -totalWidth;
    }

    const animate = () => {
      if (!isPaused) {
        if (direction === 'left') {
          posRef.current -= speed;
          if (posRef.current <= -totalWidth) posRef.current = 0;
        } else {
          posRef.current += speed;
          if (posRef.current >= 0) posRef.current = -totalWidth;
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
  }, [isPaused, items.length, direction, speed]);

  return (
    <div
      className="carousel-band"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-track" ref={trackRef}>
        {duplicated.map((product, index) => (
          <div className="carousel-card" key={`${product.id}-${direction}-${index}`}>
            <div className="carousel-card-image">
              <img src={product.image} alt={product.name} loading="lazy" />
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
              {/* <p className="price">{product.price.toLocaleString()} F CFA</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCarousel: React.FC<Props> = ({ products }) => {
  const { addToCart, setSelectedProduct } = useCart();

  // Split products into two rows
  const mid = Math.ceil(products.length / 2);
  const row1 = products.slice(0, mid);
  const row2 = products.slice(mid);

  return (
    <div className="carousel-viewport">
      <CarouselBand
        items={row1}
        direction="left"
        speed={0.5}
        addToCart={addToCart}
        setSelectedProduct={setSelectedProduct}
      />
      <CarouselBand
        items={row2}
        direction="right"
        speed={0.4}
        addToCart={addToCart}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default ProductCarousel;
