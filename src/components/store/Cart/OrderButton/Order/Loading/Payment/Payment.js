import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import styles from './Payment.module.scss';
import { Link, useNavigate, useParams  } from 'react-router-dom';

function Payment({ clientSecret, selectedPaymentMethod, emailP24 }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [blikCode, setBlikCode] = useState('');
  const [showReturnButton, setShowReturnButton] = useState(false);

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      setMessage('Stripe.js nie załadowało się prawidłowo');
      setIsProcessing(false);
      return;
    }

    let paymentResult;
    if (selectedPaymentMethod === 'card') {
      const cardElement = elements.getElement(CardElement);
      paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
    } // ... (inne części komponentu)

    else if (selectedPaymentMethod === 'p24') {
      const p24MethodResult = await stripe.createPaymentMethod({
        type: 'p24',
        billing_details: {
          email: emailP24,
        },
      });
    
      if (p24MethodResult.error) {
        setMessage(`Błąd utworzenia metody płatności: ${p24MethodResult.error.message}`);
        setIsProcessing(false);
        return;
      }
    
      const { error, paymentIntent } = await stripe.confirmP24Payment(clientSecret, {
        payment_method: p24MethodResult.paymentMethod.id,
        return_url: 'http://localhost:3000/sklep/', // Dodaj tutaj odpowiedni URL powrotny
      });
    
      if (error) {
        setMessage(`Błąd płatności: ${error.message}`);
        setIsProcessing(false);
        setShowReturnButton(false)
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        setMessage('Płatność zakończona sukcesem.');
        // Tutaj możesz wykonać dodatkowe akcje, np. przekierować użytkownika lub zaktualizować stan aplikacji
        setShowReturnButton(true)
      }
    }
    
    // ... (dalsze części komponentu)
     else if (selectedPaymentMethod === 'blik') {
      const { error, paymentIntent } = await stripe.confirmBlikPayment(clientSecret, {
        payment_method: {
          blik: {},
        },
        payment_method_options: {
          blik: {
            code: blikCode,
          },
        },
      });
    
      if (error) {
        setMessage(`Błąd płatności: ${error.message}`);
        setIsProcessing(false);
        setShowReturnButton(false)
        return;
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        setMessage('Płatność zakończona sukcesem.');
        // Tutaj możesz wykonać dodatkowe akcje, np. przekierować użytkownika lub zaktualizować stan aplikacji
        setShowReturnButton(true)
      }
    }
    

    if (paymentResult && paymentResult.error) {
      setMessage(`Błąd płatności: ${paymentResult.error.message}`);
      setIsProcessing(false);
    } else if (paymentResult && paymentResult.paymentIntent.status === 'succeeded') {
      setMessage('Płatność zakończona sukcesem.');
    }
  };

  const renderPaymentMethodInput = () => {
    switch (selectedPaymentMethod) {
      case 'card':
        return <CardElement className={styles.stripeInput} />;
      case 'blik':
        return (
          <input
            type="text"
            value={blikCode}
            onChange={(e) => setBlikCode(e.target.value)}
            placeholder="Wpisz kod Blik"
            maxLength="6"
            className={styles.inputField}
          />
        );
      case 'p24':
        // Tu można dodać input dla Przelewy24
        return <div className={styles.inputField}>Przejdź do Przelewy24</div>;
      default:
        return null;
    }
  };

  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/sklep/');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Płatność</h2>
      <form onSubmit={handlePaymentSubmit}>
        {renderPaymentMethodInput()}
        <button type="submit" disabled={isProcessing || (selectedPaymentMethod === 'blik' && blikCode.length !== 6)} className={styles.button}>
          {isProcessing ? 'Przetwarzanie...' : 'Zapłać'}
        </button>
        
        {message && <div className={styles.message}>{message}</div>}

        {showReturnButton && <button onClick={handleReturnClick} className={styles.button}>Powrót do sklepu</button>}
      </form>
    </div>
  );
}

export default Payment;