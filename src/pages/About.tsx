import React from 'react';
import './About.css';
import managerImg from '../assets/manager.png';

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
            <img src={managerImg} alt="La Responsable de GY Maison Couture" loading="lazy" />
          </div>
          <div className="manager-content">
            <span className="subtitle">Mot de la Responsable</span>
            <h2>Ghislaine Y.</h2>
            <p className="quote">
              "La couture n'est pas seulement l'assemblage de tissus, c'est l'expression d'une âme et d'une culture."
            </p>
            <p>
              Bienvenue dans l'univers de GY Maison Couture. Ma passion pour la mode est née de la volonté de 
              valoriser le savoir-faire africain tout en l'inscrivant dans la modernité internationale.
            </p>
            <p>
              Chaque pièce qui sort de notre atelier est le fruit d'un travail méticuleux et d'une quête 
              incessante de perfection. Nous travaillons pour que chaque femme se sente unique, puissante et élégante.
            </p>
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
