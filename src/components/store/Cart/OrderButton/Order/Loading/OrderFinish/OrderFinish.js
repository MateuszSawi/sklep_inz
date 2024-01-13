import React, { useState, useEffect } from 'react';
import styles from './OrderFinish.module.scss';
import { useNavigate } from 'react-router-dom';

function OrderFinish() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify([]));

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleReturnClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.loader}>
      {isLoading ? (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Ładowanie...</p>
        </div>
      ) : (
        <>
          <h3>Zamówienie zostało złożone, możesz wrócić do sklepu</h3>
          <button onClick={handleReturnClick} style={{marginTop:'20px'}}>Wróć do sklepu</button>
        </>
      )}
    </div>
  );
}

export default OrderFinish;
