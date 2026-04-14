import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';
import './CartDrawer.css';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, total, isOpen, setIsOpen } = useCart();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleProceedToCheckout = () => {
    if (cart.length === 0) return;
    setStep('checkout');
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

  const handleClose = () => {
    setIsOpen(false);
    setStep('cart');
    setEmail('');
    setName('');
    setEmailError('');
  };

  if (!isOpen) return null;

  return (
    <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={handleClose}>
      <div className="cart-drawer glass-effect" onClick={e => e.stopPropagation()}>

        {/* ── CART STEP ── */}
        {step === 'cart' && (
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
                <button
                  className="btn btn-primary checkout-btn"
                  onClick={handleProceedToCheckout}
                >
                  Procéder au paiement
                </button>
              </div>
            )}
          </>
        )}

        {/* ── CHECKOUT STEP ── */}
        {step === 'checkout' && (
          <>
            <div className="cart-header">
              <button className="back-btn" onClick={() => setStep('cart')}>
                ← Retour
              </button>
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

              {/* Contact info form */}
              <form id="checkout-form" onSubmit={handleCheckout} className="checkout-form">
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

                <p className="secure-note">
                  🔒 Paiement sécurisé via Flutterwave. Cartes &amp; Mobile Money acceptés.
                </p>
              </form>
            </div>

            <div className="cart-footer">
              <button
                type="submit"
                form="checkout-form"
                className="btn btn-primary checkout-btn"
                disabled={loading}
              >
                {loading ? 'Traitement en cours...' : `Payer ${total.toLocaleString()} F CFA`}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
