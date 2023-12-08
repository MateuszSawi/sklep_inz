import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

function Payment({ clientSecret, selectedPaymentMethod }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [blikCode, setBlikCode] = useState('');

  console.log(clientSecret, selectedPaymentMethod)

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      console.log('Stripe.js jeszcze się nie załadowało');
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

    // else if (selectedPaymentMethod === 'p24') {
    //   const p24MethodResult = await stripe.createPaymentMethod({
    //     type: 'p24',
    //     billing_details: {
    //       email: "email@example.com",
    //     },
    //   });
    
    //   if (p24MethodResult.error) {
    //     setMessage(`Błąd utworzenia metody płatności: ${p24MethodResult.error.message}`);
    //     setIsProcessing(false);
    //     return;
    //   }
    
    //   const { error, paymentIntent } = await stripe.confirmP24Payment(clientSecret, {
    //     payment_method: p24MethodResult.paymentMethod.id,
    //     return_url: 'http://localhost:3000/sklep/', // Dodaj tutaj odpowiedni URL powrotny
    //   });
    
    //   if (error) {
    //     setMessage(`Błąd płatności: ${error.message}`);
    //     setIsProcessing(false);
    //   } else if (paymentIntent && paymentIntent.status === 'succeeded') {
    //     setMessage('Płatność zakończona sukcesem.');
    //     // Tutaj możesz wykonać dodatkowe akcje, np. przekierować użytkownika lub zaktualizować stan aplikacji
    //   }
    // }
    
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
        console.log(error.message);
        setMessage(`Błąd płatności: ${error.message}`);
        setIsProcessing(false);
        return;
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        setMessage('Płatność zakończona sukcesem.');
        // Tutaj możesz wykonać dodatkowe akcje, np. przekierować użytkownika lub zaktualizować stan aplikacji
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
        return <CardElement />;
      case 'blik':
        return (
          <>
            <input
              type="text"
              value={blikCode}
              onChange={(e) => setBlikCode(e.target.value)}
              placeholder="Wpisz kod Blik"
            />
          </>
        );
      case 'p24':
        // Tu można dodać input dla Przelewy24
        return <div>Formularz dla Przelewy24</div>;
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handlePaymentSubmit}>
      {renderPaymentMethodInput()}
      <button type="submit" disabled={isProcessing}>
        {isProcessing ? 'Przetwarzanie...' : 'Zapłać'}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
}

export default Payment;
