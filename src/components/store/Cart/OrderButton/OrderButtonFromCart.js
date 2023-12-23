import React, { useState, useEffect } from 'react';
import styles from './OrderButtonFromCart.module.scss';
import { Link, useNavigate, useParams  } from 'react-router-dom';

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
      {/* <button onClick={fetchStripeKeyAndClientSecret}>złóż zamówienie</button> */}
      <button onClick={navigateHandler}>Złóż zamówienie</button>
      {/* {stripeElements} */}
      {warning && 
        <p className={styles.warning}>Twój koszyk jest pusty</p>
      }
    </>
  );
}

export default OrderButtonFromCart;
