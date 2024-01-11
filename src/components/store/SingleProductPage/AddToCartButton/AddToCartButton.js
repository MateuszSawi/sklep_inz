import React, { useState, useEffect, useRef } from 'react';
import styles from './AddToCartButton.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useParams  } from 'react-router-dom';

function AddToCartButton({selectedColour, selectedSize, brand, productName, mainImage, price, quantity, amount, category, productCode}) {

  const { categoryLink, productCodeLink } = useParams();

  // const quantity = props.quantity;

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
    // const { productCode, name, brand, gender, price, imageUrls } = props.product;

    // Pobranie aktualnej listy produktów z localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Znalezienie produktu w koszyku
    const existingProductIndex = currentCart.findIndex(item => item.productCode === productCode && selectedSize === selectedSize && selectedColour === selectedColour);
    
    if (existingProductIndex > -1) {
      // Obliczenie nowej ilości, uwzględniając maksymalną ilość 9999
      let updatedQuantity = currentCart[existingProductIndex].quantity + quantity;
      updatedQuantity = updatedQuantity > amount ? amount : updatedQuantity;
      
      currentCart[existingProductIndex].quantity = updatedQuantity;
    } else {
      // Jeśli produkt nie istnieje, dodaj go do koszyka z uwzględnieniem maksymalnej ilości 9999
      const newProductQuantity = quantity > amount ? amount : quantity;
      const newProduct = {
        selectedColour,
        quantity: newProductQuantity,
        selectedSize,
        brand,
        productName,
        mainImage,
        price,
        category,
        amount,
        productCode
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
