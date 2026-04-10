import type { Product } from '../context/CartContext';

// Collection 1
import item1_1 from '../assets/products/item_1.png';
import item1_2 from '../assets/products/item_2.png';
import item1_3 from '../assets/products/item_3.png';
import item1_4 from '../assets/products/item_4.png';
import item1_5 from '../assets/products/item_5.png';
import item1_6 from '../assets/products/item_6.png';
import item1_7 from '../assets/products/item_7.png';
import item1_8 from '../assets/products/item_8.png';

// Collection 2 Imports (1-42)
import c2_01 from '../assets/collections/collection2/item2_01.jpg';
import c2_02 from '../assets/collections/collection2/item2_02.jpg';
import c2_03 from '../assets/collections/collection2/item2_03.jpg';
import c2_04 from '../assets/collections/collection2/item2_04.jpg';
import c2_05 from '../assets/collections/collection2/item2_05.jpg';
import c2_06 from '../assets/collections/collection2/item2_06.jpg';
import c2_07 from '../assets/collections/collection2/item2_07.jpg';
import c2_08 from '../assets/collections/collection2/item2_08.jpg';
import c2_09 from '../assets/collections/collection2/item2_09.jpg';
import c2_10 from '../assets/collections/collection2/item2_10.jpg';
import c2_11 from '../assets/collections/collection2/item2_11.jpg';
import c2_12 from '../assets/collections/collection2/item2_12.jpg';
import c2_13 from '../assets/collections/collection2/item2_13.jpg';
import c2_14 from '../assets/collections/collection2/item2_14.jpg';
import c2_15 from '../assets/collections/collection2/item2_15.jpg';
import c2_16 from '../assets/collections/collection2/item2_16.jpg';
import c2_17 from '../assets/collections/collection2/item2_17.jpg';
import c2_18 from '../assets/collections/collection2/item2_18.jpg';
import c2_19 from '../assets/collections/collection2/item2_19.jpg';
import c2_20 from '../assets/collections/collection2/item2_20.jpg';
import c2_21 from '../assets/collections/collection2/item2_21.jpg';
import c2_22 from '../assets/collections/collection2/item2_22.jpg';
import c2_23 from '../assets/collections/collection2/item2_23.jpg';
import c2_24 from '../assets/collections/collection2/item2_24.jpg';
import c2_25 from '../assets/collections/collection2/item2_25.jpg';
import c2_26 from '../assets/collections/collection2/item2_26.jpg';
import c2_27 from '../assets/collections/collection2/item2_27.jpg';
import c2_28 from '../assets/collections/collection2/item2_28.jpg';
import c2_29 from '../assets/collections/collection2/item2_29.jpg';
import c2_30 from '../assets/collections/collection2/item2_30.jpg';
import c2_31 from '../assets/collections/collection2/item2_31.jpg';
import c2_32 from '../assets/collections/collection2/item2_32.jpg';
import c2_33 from '../assets/collections/collection2/item2_33.jpg';
import c2_34 from '../assets/collections/collection2/item2_34.jpg';
import c2_35 from '../assets/collections/collection2/item2_35.jpg';
import c2_36 from '../assets/collections/collection2/item2_36.jpg';
import c2_37 from '../assets/collections/collection2/item2_37.jpg';
import c2_38 from '../assets/collections/collection2/item2_38.jpg';
import c2_39 from '../assets/collections/collection2/item2_39.jpg';
import c2_40 from '../assets/collections/collection2/item2_40.jpg';
import c2_41 from '../assets/collections/collection2/item2_41.jpg';
import c2_42 from '../assets/collections/collection2/item2_42.jpg';

export const products: Product[] = [
  // Collection 1
  {
    id: 'c1-1',
    name: 'Abaya Énigmatique "Masquée"',
    price: 185000,
    description: 'Une pièce d\'exception en soie plissée blanche, accompagnée d\'un masque artisanal délicat.',
    image: item1_1,
    category: 'Haute Couture',
    collection: 'Première Collection'
  },
  {
    id: 'c1-2',
    name: 'Tunique "Nid d\'Abeille" Pureté',
    price: 145000,
    description: 'Tunique structurée aux jeux de textures complexes.',
    image: item1_4,
    category: 'Haute Couture',
    collection: 'Première Collection'
  },
  {
    id: 'c1-3',
    name: 'Abaya "Cascade" de Soie',
    price: 165000,
    description: 'Un mouvement fluide et gracieux capturé dans une soie immaculée.',
    image: item1_5,
    category: 'Haute Couture',
    collection: 'Première Collection'
  },
  {
    id: 'c1-4',
    name: 'Ensemble "Jardin de Coton"',
    price: 125000,
    description: 'Une explosion de couleurs florales sur une base blanche.',
    image: item1_6,
    category: 'Pret-à-Porter Luxe',
    collection: 'Première Collection'
  },
  {
    id: 'c1-5',
    name: 'Robe "Sérénité" Ivoire',
    price: 195000,
    description: 'Confort absolu et raffinement extrême. Une robe longue en jacquard de soie.',
    image: item1_7,
    category: 'Lounge Couture',
    collection: 'Première Collection'
  },
  {
    id: 'c1-6',
    name: 'Kaftan "Rivage" en Jacquard',
    price: 175000,
    description: 'Une coupe impériale avec des motifs tissés ton sur ton.',
    image: item1_8,
    category: 'Lounge Couture',
    collection: 'Première Collection'
  },
  {
    id: 'c1-7',
    name: 'Collection "Héritage Artisanal"',
    price: 210000,
    description: 'Un ensemble de pièces célébrant le savoir-faire ancestral.',
    image: item1_3,
    category: 'Héritage',
    collection: 'Première Collection'
  },
  {
    id: 'c1-8',
    name: 'L\'Esprit de la Maison',
    price: 250000,
    description: 'La pièce signature portée par la créatrice elle-même.',
    image: item1_2,
    category: 'Signature',
    collection: 'Première Collection'
  },

  // Collection 2 - Elegant Names (1-42)
  ...[
    { name: 'Robe de Gala "Mistral"', price: 215000, desc: 'Splendeur nocturne avec des détails en dentelle perlée.' },
    { name: 'Ensemble "Aurore" Boréale', price: 185000, desc: 'Une fusion de couleurs chatoyantes sur soie sauvage.' },
    { name: 'Tunique "Zénith" Azur', price: 135000, desc: 'Épure et modernité en lin teinté à la main.' },
    { name: 'Kaftan "Oasis" Doré', price: 245000, desc: 'Une pièce majestueuse ornée de broderies fines.' },
    { name: 'Robe "Éclat" Stellaire', price: 225000, desc: 'Illuminez vos soirées avec cette coupe asymétrique.' },
    { name: 'Tunique "Sirocco" Pourpre', price: 145000, desc: 'Un vent de fraîcheur et de passion.' },
    { name: 'Ensemble "Dune" Impériale', price: 265000, desc: 'Le luxe absolu dans des tons de sable et d\'or.' },
    { name: 'Abaya "Mira" Céleste', price: 195000, desc: 'Douceur infinie et tombé impeccable.' },
    { name: 'Robe "Vibration" Ébène', price: 175000, desc: 'Le noir réinventé avec des textures contrastées.' },
    { name: 'Kaftan "Sillage" de Perles', price: 285000, desc: 'Une œuvre d\'art façonnée à la main.' },
    { name: 'Ensemble "Éveil" de Printemps', price: 155000, desc: 'Fraîcheur et légèreté pour la saison.' },
    { name: 'Tunique "Horizon" Corail', price: 125000, desc: 'Une touche de pep\'s pour votre garde-robe.' },
    { name: 'Robe "Captivante" Indigo', price: 210000, desc: 'L\'intensité du bleu profond dans une coupe moderne.' },
    { name: 'Abaya "Lueur" du Désert', price: 205000, desc: 'L\'élégance sobre inspirée des paysages sahariens.' },
    { name: 'Ensemble "Harmonie" Pastel', price: 165000, desc: 'Douceur des tons et fluidité des formes.' },
    { name: 'Kaftan "Majesté" Rubis', price: 275000, desc: 'Une présence royale et indémodable.' },
    { name: 'Tunique "Souffle" d\'Argent', price: 140000, desc: 'Reflets métalliques discrets sur coton fin.' },
    { name: 'Robe "Évanescence" Blanche', price: 190000, desc: 'Pureté absolue et détails de guipure.' },
    { name: 'Ensemble "Rythme" de la Ville', price: 170000, desc: 'Chic urbain et confort sans compromis.' },
    { name: 'Kaftan "Orée" Forestière', price: 235000, desc: 'Profondeur des verts et broderies végétales.' },
    { name: 'Tunique "Lisière" de Soie', price: 150000, desc: 'Un toucher incomparable.' },
    { name: 'Robe "Aura" de Lumière', price: 195000, desc: 'Une silhouette lumineuse pour briller.' },
    { name: 'Abaya "Reflet" du Nil', price: 185000, desc: 'Inspirations antiques pour une allure contemporaine.' },
    { name: 'Ensemble "Odyssée" Marine', price: 175000, desc: 'Le classique revisité par la Maison.' },
    { name: 'Kaftan "Souveraine" Or', price: 295000, desc: 'L\'excellence suprême de GY Maison Couture.' },
    { name: 'Tunique "Zéphir" Étheré', price: 130000, desc: 'La légèreté d\'une brise d\'été.' },
    { name: 'Robe "Pluie" de Diamants', price: 310000, desc: 'Cristaux Swarovski appliqués main.' },
    { name: 'Ensemble "Cosmos" Velours', price: 220000, desc: 'Profondeur et mystère du velours de soie.' },
    { name: 'Kaftan "Étoile" du Matin', price: 215000, desc: 'Pour un réveil empreint de distinction.' },
    { name: 'Tunique "Murmure" de Lin', price: 115000, desc: 'Simplicité volontaire et noble.' },
    { name: 'Robe "Alliance" de Cultures', price: 240000, desc: 'Le métissage des styles avec élégance.' },
    { name: 'Abaya "Nacre" Précieuse', price: 190000, desc: 'Reflets irisés et soie changeante.' },
    { name: 'Ensemble "Éclat" du Sud', price: 180000, desc: 'Couleurs chaudes et motifs solaires.' },
    { name: 'Kaftan "Rêverie" de Nuit', price: 255000, desc: 'Une invitation au voyage imaginaire.' },
    { name: 'Tunique "Essence" Minimaliste', price: 125000, desc: 'L\'essentiel, tout simplement.' },
    { name: 'Robe "Splendeur" d\'Orient', price: 280000, desc: 'L\'opulence des palais réinterprétée.' },
    { name: 'Ensemble "Signature" GY', price: 300000, desc: 'Le manifeste créatif de la saison.' },
    { name: 'Kaftan "Délice" Mandarine', price: 145000, desc: 'Gourmandise et vitalité.' },
    { name: 'Tunique "Voile" de Brume', price: 135000, desc: 'Transparences maîtrisées et élégantes.' },
    { name: 'Robe "Éclosion" Florale', price: 205000, desc: 'Un printemps éternel sur votre peau.' },
    { name: 'Abaya "Sagesse" Infinitésimale', price: 175000, desc: 'Sobriété et détails cachés.' },
    { name: 'Kaftan "Héritage" n°02', price: 230000, desc: 'La suite de notre histoire artisanale.' }
  ].map((p, index) => ({
    id: `c2-${index + 1}`,
    name: p.name,
    price: p.price,
    description: p.desc,
    image: [
      c2_01, c2_02, c2_03, c2_04, c2_05, c2_06, c2_07, c2_08, c2_09, c2_10,
      c2_11, c2_12, c2_13, c2_14, c2_15, c2_16, c2_17, c2_18, c2_19, c2_20,
      c2_21, c2_22, c2_23, c2_24, c2_25, c2_26, c2_27, c2_28, c2_29, c2_30,
      c2_31, c2_32, c2_33, c2_34, c2_35, c2_36, c2_37, c2_38, c2_39, c2_40,
      c2_41, c2_42
    ][index],
    category: 'Haute Couture',
    collection: 'Deuxième Collection'
  }))
];
