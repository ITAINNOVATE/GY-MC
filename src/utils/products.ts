import type { Product } from '../context/CartContext';
import item1 from '../assets/products/item_1.png';
import item2 from '../assets/products/item_2.png';
import item3 from '../assets/products/item_3.png';
import item4 from '../assets/products/item_4.png';
import item5 from '../assets/products/item_5.png';
import item6 from '../assets/products/item_6.png';
import item7 from '../assets/products/item_7.png';
import item8 from '../assets/products/item_8.png';

export const products: Product[] = [
  {
    id: '1',
    name: 'Abaya Énigmatique "Masquée"',
    price: 185000,
    description: 'Une pièce d\'exception en soie plissée blanche, accompagnée d\'un masque artisanal délicat. L\'élégance du mystère.',
    image: item1,
    category: 'Haute Couture',
    collection: 'Première Collection'
  },
  {
    id: '2',
    name: 'Tunique "Nid d\'Abeille" Pureté',
    price: 145000,
    description: 'Tunique structurée aux jeux de textures complexes. Une silhouette architecturale pour une présence affirmée.',
    image: item4,
    category: 'Haute Couture',
    collection: 'Première Collection'
  },
  {
    id: '3',
    name: 'Abaya "Cascade" de Soie',
    price: 165000,
    description: 'Un mouvement fluide et gracieux capturé dans une soie immaculée. Idéal pour les réceptions prestigieuses.',
    image: item5,
    category: 'Haute Couture',
    collection: 'Première Collection'
  },
  {
    id: '4',
    name: 'Ensemble "Jardin de Coton"',
    price: 125000,
    description: 'Une explosion de couleurs florales sur une base blanche, accompagnée d\'un pantalon fuchsia vibrant en lin.',
    image: item6,
    category: 'Pret-à-Porter Luxe',
    collection: 'Première Collection'
  },
  {
    id: '5',
    name: 'Robe "Sérénité" Ivoire',
    price: 195000,
    description: 'Confort absolu et raffinement extrême. Une robe longue en jacquard de soie pour une élégance sans effort.',
    image: item7,
    category: 'Lounge Couture',
    collection: 'Première Collection'
  },
  {
    id: '6',
    name: 'Kaftan "Rivage" en Jacquard',
    price: 175000,
    description: 'Une coupe impériale avec des motifs tissés ton sur ton. La quintessence du chic décontracté de la Maison.',
    image: item8,
    category: 'Lounge Couture',
    collection: 'Première Collection'
  },
  {
    id: '7',
    name: 'Collection "Héritage Artisanal"',
    price: 210000,
    description: 'Un ensemble de pièces célébrant le savoir-faire ancestral. Broderies main et tissus nobles.',
    image: item3,
    category: 'Héritage',
    collection: 'Première Collection'
  },
  {
    id: '8',
    name: 'L\'Esprit de la Maison',
    price: 250000,
    description: 'La pièce signature portée par la créatrice elle-même. Un équilibre parfait entre tradition et avant-garde.',
    image: item2,
    category: 'Signature',
    collection: 'Première Collection'
  }
];
