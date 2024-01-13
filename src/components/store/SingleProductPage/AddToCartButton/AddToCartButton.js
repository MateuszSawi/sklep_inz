import React, { useState } from 'react';
import styles from './AddToCartButton.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams  } from 'react-router-dom';

function AddToCartButton({selectedColour, selectedSize, brand, productName, mainImage, price, quantity, amount, category, productCode}) {

  // const { categoryLink, productCodeLink } = useParams();
  const [showWarning, setShowWarning] = useState(false);

  const toastId = React.useRef(null); 

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
    if (!selectedColour || !selectedSize) {
      setShowWarning(true); 
      return;
    }

    setShowWarning(false);
    notify();
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = currentCart.findIndex(item => item.productCode === productCode && selectedSize === selectedSize && selectedColour === selectedColour);
    
    if (existingProductIndex > -1) {
      let updatedQuantity = currentCart[existingProductIndex].quantity + quantity;
      updatedQuantity = updatedQuantity > amount ? amount : updatedQuantity;
      currentCart[existingProductIndex].quantity = updatedQuantity;
    } else {
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
      {amount !== 0 &&
        <button onClick={handleAddToCart}><h3>DO KOSZYKA</h3></button>
      }
      
      {amount === 0 &&
        <button><h3>Produkt niedostępny</h3></button>
      }

      {showWarning && <p style={{color: 'red', marginTop: '30px'}}>Wybierz kolor i rozmiar!</p>}
    </div>
  );
}

export default AddToCartButton;
