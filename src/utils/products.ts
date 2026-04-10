import type { Product } from '../context/CartContext';
import dress1 from '../assets/dress_1.png';
import dress2 from '../assets/dress_2.png';

export const products: Product[] = [
  {
    id: '1',
    name: 'Robe Emeraude Royale',
    price: 150000,
    description: 'Une robe de soirée somptueuse en soie et dentelle fine, parfaite pour les grands événements.',
    image: dress1,
    category: 'Couture'
  },
  {
    id: '2',
    name: 'Ensemble Heritage',
    price: 85000,
    description: 'Une fusion moderne de motifs traditionnels africains et de coupes contemporaines.',
    image: dress2,
    category: 'Traditional'
  },
  {
    id: '3',
    name: 'Robe de Bal Pearl',
    price: 200000,
    description: 'Élégance pure avec des finitions à la main et une silhouette gracieuse.',
    image: dress1, // Reusing for now or I could generate more
    category: 'Couture'
  },
  {
    id: '4',
    name: 'Collection Sahara',
    price: 65000,
    description: 'Légèreté et style pour un look quotidien sophistiqué.',
    image: dress2,
    category: 'Modern'
  }
];
