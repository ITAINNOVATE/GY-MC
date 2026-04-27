import React from 'react';
import './About.css';

const managerImg = 'https://eqqdjqdbbwmshllqesdt.supabase.co/storage/v1/object/public/products/c2/item2_30.jpg';

const About: React.FC = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="subtitle">L'Histoire de la Maison</span>
          <h1>GY Maison Couture</h1>
        </div>
      </section>

      <section className="section manager-presentation">
        <div className="container manager-grid">
          <div className="manager-image">
            <img src={managerImg} alt="La Responsable de GY Maison Couture" />
          </div>
          <div className="manager-content">
            <span className="subtitle">L'Esprit de la Maison</span>
            <h2>Gina Loko Djidjoho</h2>
            <div className="manifesto-text">
              <p className="highlight">GY MAISON COUTURE — Boudoir intimiste</p>
              
              <div className="manifesto-story">
                <p>Je suis Gina Loko Djidjoho. Gy pour ceux qui savent.</p>
                <p>Gy Maison Couture est née d’une envie.</p>
                <p className="indent">Envie de faire vivre des étoffes</p>
                <p className="indent">Envie de créer pour les autres.</p>
              </div>

              <div className="manifesto-story">
                <p>Pendant longtemps, j’ai créé pour moi. Parce que m’habiller est un instinct. Une seconde peau. Puis un jour, j’ai ouvert la porte. Gy est devenue une évidence.</p>
              </div>

              <div className="manifesto-story">
                <p>Ma première obsession n’est pas la coupe. C’est la matière. Je cherche les étoffes comme d’autres cherchent l’or.</p>
                <p>Dans les marchés de Dubaï, les ruelles de Paris, les échoppes d’Istanbul, d’Abidjan, de Cotonou, de Dakar, jusqu’à Bali. Je touche. Je ressens. Je choisis. Et je reviens avec des valises pleines de possibles.</p>
              </div>

              <div className="manifesto-story">
                <p>En 2016, je crée mon atelier à Abidjan. Un lieu fermé. Un lieu choisi. Un boudoir. Ici, on ne produit pas. On révèle.</p>
                <p>Chaque pièce est unique. Ou presque. Une, deux, jamais plus.</p>
              </div>

              <div className="manifesto-story">
                <p>Gy Maison Couture ne se montre pas partout. Elle se découvre. Des ventes privées. Des femmes qui savent. Un premier défilé en 2019, au Pullman. Puis le silence à nouveau. Parce que Gy n’est pas une mode. C’est une présence.</p>
              </div>

              <div className="manifesto-story">
                <p>Mes signatures sont des essentiels réinventés : un kaftan plissé qui traverse les moments, un jogging habité de wax, entre rue et identité.</p>
              </div>

              <p className="conclusion">
                Gy Maison Couture, c’est une mode intime, libre et profondément incarnée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section house-presentation glass-effect">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Notre Atelier</span>
            <h2>L'Excellence au quotidien</h2>
          </div>
          <p className="large-text">
            Installée au cœur du Bénin, GY Maison Couture est plus qu'une marque, c'est un laboratoire de créativité. 
            Nous utilisons des tissus de première qualité, sélectionnés avec soin pour leur texture et leur durabilité.
          </p>
          <div className="values-grid">
            <div className="value-card">
              <h3>Artisanal</h3>
              <p>Chaque détail est fini à la main avec une précision chirurgicale.</p>
            </div>
            <div className="value-card">
              <h3>Sur-mesure</h3>
              <p>Nous adaptons nos créations à votre morphologie et à votre style unique.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Nous réinterprétons les classiques pour créer la mode de demain.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
