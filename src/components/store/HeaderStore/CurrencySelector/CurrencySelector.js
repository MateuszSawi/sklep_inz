import React, { useState, useEffect } from 'react';
import styles from './CurrencySelector.module.scss';
import currencyRates from '../../../../currencyData.js';

function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(
    localStorage.getItem('selectedCurrency') || 'zł'
  );
  const [exchangeRate, setExchangeRate] = useState(
    parseFloat(localStorage.getItem('exchangeRate')) || 1
  );
  const [currency, setCurrency] = useState(
    localStorage.getItem('currencyToDisplay') || 'PLN'
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencyChange = (selectedCurrency, exchangeRate, currencyToDisplay) => {
    setSelectedCurrency(selectedCurrency);
    setExchangeRate(exchangeRate);
    setCurrency(currencyToDisplay)
    setIsOpen(false);
    sessionStorage.setItem('priceMin', 1);
    sessionStorage.setItem('priceMax', 999);
    
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem('selectedCurrency', selectedCurrency);
    localStorage.setItem('exchangeRate', exchangeRate.toString());
    localStorage.setItem('currencyToDisplay', currency);
  }, [selectedCurrency, exchangeRate]);

  // let currencyToDisplay;
  // if (selectedCurrency === 'zł') {
  //   currencyToDisplay = 'PLN';
  // } else if (selectedCurrency === '€') {
  //   currencyToDisplay = 'EUR';
  // } else if (selectedCurrency === '$') {
  //   currencyToDisplay = 'USD';
  // }

  return (
    <div className={styles.currencySelector}>
      <button className={styles.currencyToggleButton} onClick={toggleMenu}>
        {currency}
      </button>
      {isOpen && (
        <ul className={styles.currencyOptions}>
          {Object.entries(currencyRates).map(([key, { exchangeRate, selectedCurrency, currencyToDisplay }]) => (
            <li key={key} onClick={() => handleCurrencyChange(selectedCurrency, exchangeRate, currencyToDisplay)}>
              {key}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CurrencySelector;
