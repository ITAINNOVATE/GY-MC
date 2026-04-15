import React, { useState } from 'react';
import './Contact.css';

const WHATSAPP_NUMBER = '2290166743493';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message text
    const text = `📩 *Nouveau message depuis le site GY Maison Couture*\n\n👤 *Nom :* ${name}\n📞 *Tél :* ${phone}\n📧 *Email :* ${email}\n\n💬 *Message :*\n${message}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank');

    // Show confirmation
    setSent(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSent(false);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="subtitle">Nous Joindre</span>
          <h1>Contactez-nous</h1>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="contact-method">
              <span className="subtitle">Appelez-nous</span>
              <p>
                <a href="tel:002290166743493" className="tel-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  00229 01 66 74 34 93
                </a>
              </p>
            </div>
            
            <div className="contact-method">
              <span className="subtitle">Écrivez-nous</span>
              <p>
                <a href="https://wa.me/2290166743493" target="_blank" rel="noopener noreferrer" className="wa-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  00229 01 66 74 34 93
                </a>
              </p>
              <p>
                <a href="mailto:gymaisoncouture@gmail.com" className="email-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  gymaisoncouture@gmail.com
                </a>
              </p>
            </div>
            
            <div className="contact-method">
              <span className="subtitle">Suivez-nous</span>
              <p>
                <a href="https://web.facebook.com/profile.php?id=61572042684627" target="_blank" rel="noopener noreferrer" className="fb-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  GY Maison Couture
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/gymaisoncouture/" target="_blank" rel="noopener noreferrer" className="ig-link">
                  <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  gymaisoncouture
                </a>
              </p>
            </div>

            <div className="contact-method">
              <span className="subtitle">Localisation</span>
              <p>Cotonou, Bénin</p>
            </div>
          </div>

          <div className="contact-form-container">
            <span className="subtitle">Envoyez un message</span>
            <h2>Une demande particulière ?</h2>

            {!sent ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Votre Nom Complet"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    placeholder="Numéro de Téléphone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Votre E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Votre Message"
                    rows={6}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer via WhatsApp</button>
              </form>
            ) : (
              <div className="sent-confirmation">
                <div className="sent-icon">✅</div>
                <h3>Message prêt à envoyer !</h3>
                <div className="sent-recap">
                  <p><strong>Nom :</strong> {name}</p>
                  <p><strong>Tél :</strong> {phone}</p>
                  <p><strong>Email :</strong> {email}</p>
                  <p><strong>Message :</strong></p>
                  <p className="recap-message">{message}</p>
                </div>
                <p className="sent-note">WhatsApp s'est ouvert avec votre message pré-rempli. Appuyez sur "Envoyer" dans WhatsApp pour finaliser.</p>
                <button className="btn btn-secondary" onClick={handleReset}>Envoyer un autre message</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
