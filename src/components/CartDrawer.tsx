import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';
import './CartDrawer.css';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, total, isOpen, setIsOpen } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    
    setLoading(true);
    try {
      const email = prompt("Veuillez saisir votre email pour la confirmation de paiement :");
      if (!email) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.functions.invoke('payment-handler', {
        body: { 
          email, 
          amount: total,
          items: cart.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity }))
        }
      });

      if (error) throw error;
      if (data?.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        throw new Error("Lien de paiement non généré");
      }
    } catch (err) {
      console.error("Erreur de paiement:", err);
      alert("Une erreur est survenue lors de l'initialisation du paiement. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`cart-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
      <div className="cart-drawer glass-effect" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Votre Panier</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Votre panier est vide.</p>
              <button className="btn btn-secondary" onClick={() => setIsOpen(false)}>Continuer vos achats</button>
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
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? 'Traitement...' : 'Payer maintenant'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
