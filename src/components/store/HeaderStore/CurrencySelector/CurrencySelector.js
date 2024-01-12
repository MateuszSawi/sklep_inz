import React, { useState, useEffect } from 'react';
import styles from './CurrencySelector.module.scss';

function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(
    localStorage.getItem('selectedCurrency') || 'PLN'
  );
  const [exchangeRate, setExchangeRate] = useState(
    parseFloat(localStorage.getItem('exchangeRate')) || 1
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencyChange = (currency, rate) => {
    setSelectedCurrency(currency);
    setExchangeRate(rate);
    setIsOpen(false);
    
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem('selectedCurrency', selectedCurrency);
    localStorage.setItem('exchangeRate', exchangeRate.toString());
  }, [selectedCurrency, exchangeRate]);

  let currencyToDisplay;
  if (selectedCurrency === 'zł') {
    currencyToDisplay = 'PLN';
  } else if (selectedCurrency === '€') {
    currencyToDisplay = 'EUR';
  } else if (selectedCurrency === '$') {
    currencyToDisplay = 'USD';
  }

  return (
    <div className={styles.currencySelector}>
      <button className={styles.currencyToggleButton} onClick={toggleMenu}>
        {currencyToDisplay}
      </button>
      {isOpen && (
        <ul className={styles.currencyOptions}>
          <li onClick={() => handleCurrencyChange('zł', 1)}>PLN</li>
          <li onClick={() => handleCurrencyChange('€', 0.2203)}>EUR</li>
          <li onClick={() => handleCurrencyChange('$', 0.2632)}>USD</li>
        </ul>
      )}
    </div>
  );
}

export default CurrencySelector;
