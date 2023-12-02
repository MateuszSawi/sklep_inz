import React, { useState, useEffect, useRef } from 'react';
import styles from './AddToCartButton.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddToCartButton(props) {

  const toastId = React.useRef(null); // Używamy useRef, aby zachować stały identyfikator powiadomienia

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast("Dodano do koszyka!", {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000,
        toastId: toastId.current
      });
    } else {
      toast.update(toastId.current, {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000
      });
    }
  };

  const handleAddToCart = () => {
    notify();
    const { product_id, quantity, product_name, price_netto, price_brutto, by_length, category, subcategory, primary_link } = props;

    // Pobranie aktualnej listy produktów z localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Znalezienie produktu w koszyku
    const existingProductIndex = currentCart.findIndex(item => item.product_id === product_id);
    
    if (existingProductIndex > -1) {
      // Obliczenie nowej ilości, uwzględniając maksymalną ilość 9999
      let updatedQuantity = currentCart[existingProductIndex].quantity + quantity;
      updatedQuantity = updatedQuantity > 9999 ? 9999 : updatedQuantity;
      
      currentCart[existingProductIndex].quantity = updatedQuantity;
    } else {
      // Jeśli produkt nie istnieje, dodaj go do koszyka z uwzględnieniem maksymalnej ilości 9999
      const newProductQuantity = quantity > 9999 ? 9999 : quantity;
      const newProduct = {
        product_id,
        quantity: newProductQuantity,
        product_name,
        price_netto,
        price_brutto,
        category,
        subcategory,
        primary_link,
        // by_length
      };
      currentCart.push(newProduct);
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart));
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleAddToCart}><h3>DO KOSZYKA</h3></button>
    </div>
  );
}

export default AddToCartButton;
