import React, { useState, useEffect, useRef } from 'react';
import styles from './AddToCartButton.module.scss';

function AddToCartButton(props) {

  const handleAddToCart = () => {
    const { product_id, quantity, product_name, price_netto, price_brutto, by_length, category, subcategory } = props;

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
        by_length,
        category,
        subcategory
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
