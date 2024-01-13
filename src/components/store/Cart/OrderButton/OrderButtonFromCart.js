import React, { useState } from 'react';
import styles from './OrderButtonFromCart.module.scss';
import { useNavigate } from 'react-router-dom';

function OrderButtonFromCart(props) {
  const [warning, setWarning] = useState(false);

  const navigate = useNavigate();
  
  const navigateHandler = () => {
    if (props.cartItems.length !== 0) {
      setWarning(false)
      navigate(`/zamówienie`);
    } else {
      setWarning(true)
    }
  }

  return (
    <>
      <button onClick={navigateHandler}>Złóż zamówienie</button>
      {warning && 
        <p className={styles.warning}>Twój koszyk jest pusty</p>
      }
    </>
  );
}

export default OrderButtonFromCart;
