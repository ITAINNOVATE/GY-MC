import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';
import './CartDrawer.css';

type PaymentMethod = 'mobilemoney' | 'card' | 'cash';

interface PaymentOption {
  id: PaymentMethod;
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: 'mobilemoney',
    icon: '📱',
    title: 'Mobile Money',
    description: 'Payer via MTN, Moov ou Orange',
    badge: 'Recommandé',
  },
  {
    id: 'card',
    icon: '💳',
    title: 'Carte bancaire',
    description: 'Visa, Mastercard acceptés',
  },
  {
    id: 'cash',
    icon: '🏠',
    title: 'Paiement à la livraison',
    description: 'Payer à la réception de votre commande',
  },
];

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, total, isOpen, setIsOpen } = useCart();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('mobilemoney');
  const [confirmed, setConfirmed] = useState(false);

  const validateEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleClose = () => {
    setIsOpen(false);
    setStep('cart');
    setEmail('');
    setName('');
    setEmailError('');
    setPaymentMethod('mobilemoney');
    setConfirmed(false);
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Veuillez saisir une adresse email valide.');
      return;
    }
    setEmailError('');
    setLoading(true);

    try {
      const redirectBase = window.location.origin;

      const { data, error } = await supabase.functions.invoke('payment-handler', {
        body: {
          email,
          name,
          amount: total,
          payment_method: paymentMethod,
          redirect_url: `${redirectBase}/payment-success`,
          items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      });

      if (error) throw error;

      if (paymentMethod === 'cash') {
        // Cash on delivery: no redirect, just show confirmation
        setConfirmed(true);
        setLoading(false);
        return;
      }

      if (data?.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        throw new Error('Lien de paiement non généré');
      }
    } catch (err: any) {
      console.error('Erreur de paiement:', err);
      alert("Une erreur est survenue lors de l'initialisation du paiement. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const isCash = paymentMethod === 'cash';
  const buttonLabel = isCash ? 'Confirmer la commande' : `Payer ${total.toLocaleString()} F CFA`;
  const infoMessage =
    paymentMethod === 'mobilemoney'
      ? '📲 Vous serez redirigé pour finaliser le paiement mobile.'
      : paymentMethod === 'card'
      ? '🔒 Vous serez redirigé vers l\'interface de paiement sécurisé.'
      : '🏠 Vous paierez en espèces à la réception de votre commande.';

  if (!isOpen) return null;

  return (
    <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={handleClose}>
      <div className="cart-drawer glass-effect" onClick={e => e.stopPropagation()}>

        {/* ── CASH CONFIRMED ── */}
        {confirmed && (
          <>
            <div className="cart-header">
              <h2>Commande confirmée</h2>
              <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>
            <div className="cart-items confirmed-wrapper">
              <div className="confirmed-icon">✅</div>
              <h3>Merci pour votre commande !</h3>
              <p>Vous paierez <strong>{total.toLocaleString()} F CFA</strong> à la réception.</p>
              <p className="confirmed-note">Nous vous contacterons pour organiser la livraison.</p>
              <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={handleClose}>
                Fermer
              </button>
            </div>
          </>
        )}

        {/* ── CART STEP ── */}
        {!confirmed && step === 'cart' && (
          <>
            <div className="cart-header">
              <h2>Votre Panier</h2>
              <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>

            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <p>Votre panier est vide.</p>
                  <button className="btn btn-secondary" onClick={handleClose}>
                    Continuer vos achats
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-price">{item.price.toLocaleString()} F CFA</p>
                      <div className="item-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="total-row">
                  <span>Total</span>
                  <span className="total-price">{total.toLocaleString()} F CFA</span>
                </div>
                <button className="btn btn-primary checkout-btn" onClick={() => setStep('checkout')}>
                  Procéder au paiement
                </button>
              </div>
            )}
          </>
        )}

        {/* ── CHECKOUT STEP ── */}
        {!confirmed && step === 'checkout' && (
          <>
            <div className="cart-header">
              <button className="back-btn" onClick={() => setStep('cart')}>← Retour</button>
              <h2>Finaliser la commande</h2>
              <button className="close-btn" onClick={handleClose}>&times;</button>
            </div>

            <div className="cart-items checkout-form-wrapper">

              {/* Order summary */}
              <div className="checkout-summary">
                {cart.map(item => (
                  <div key={item.id} className="summary-line">
                    <span>{item.name} × {item.quantity}</span>
                    <span>{(item.price * item.quantity).toLocaleString()} F CFA</span>
                  </div>
                ))}
                <div className="summary-total">
                  <span>Total</span>
                  <span>{total.toLocaleString()} F CFA</span>
                </div>
              </div>

              {/* Contact form + payment selector */}
              <form id="checkout-form" onSubmit={handleCheckout} className="checkout-form">

                {/* Contact info */}
                <p className="form-label">Vos informations</p>
                <div className="field-group">
                  <label htmlFor="checkout-name">Nom complet</label>
                  <input
                    id="checkout-name"
                    type="text"
                    placeholder="Jean Dupont"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="field-group">
                  <label htmlFor="checkout-email">Adresse email</label>
                  <input
                    id="checkout-email"
                    type="email"
                    placeholder="email@exemple.com"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    required
                  />
                  {emailError && <span className="field-error">{emailError}</span>}
                </div>

                {/* Payment method selection */}
                <p className="form-label" style={{ marginTop: '0.5rem' }}>Moyen de paiement</p>
                <div className="payment-options">
                  {PAYMENT_OPTIONS.map(opt => (
                    <label
                      key={opt.id}
                      className={`payment-card ${paymentMethod === opt.id ? 'selected' : ''} ${opt.id === 'mobilemoney' ? 'featured' : ''}`}
                      htmlFor={`pay-${opt.id}`}
                    >
                      <input
                        type="radio"
                        id={`pay-${opt.id}`}
                        name="paymentMethod"
                        value={opt.id}
                        checked={paymentMethod === opt.id}
                        onChange={() => setPaymentMethod(opt.id)}
                      />
                      <span className="pay-icon">{opt.icon}</span>
                      <div className="pay-info">
                        <span className="pay-title">
                          {opt.title}
                          {opt.badge && <span className="pay-badge">{opt.badge}</span>}
                        </span>
                        <span className="pay-desc">{opt.description}</span>
                      </div>
                      <span className="pay-check">{paymentMethod === opt.id ? '✓' : ''}</span>
                    </label>
                  ))}
                </div>

                {/* Contextual info message */}
                <p className="payment-info-msg">{infoMessage}</p>

              </form>
            </div>

            <div className="cart-footer">
              <button
                type="submit"
                form="checkout-form"
                className={`btn checkout-btn ${isCash ? 'btn-secondary' : 'btn-primary'}`}
                disabled={loading}
              >
                {loading ? 'Traitement en cours...' : buttonLabel}
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default CartDrawer;
