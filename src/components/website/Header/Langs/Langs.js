import React, { useState, useEffect } from 'react';
import styles from './Langs.module.scss';

function Langs() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('pl');

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'pl';
    setSelectedLang(storedLang);
  }, []);

  const flagSrc = (lang) => `/langs/${lang}.png`;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (language) => {
    localStorage.setItem('lang', language);
    setSelectedLang(language);
    window.location.reload();
  };

  return (
    <div className={styles.languageSelector}>
      <button onClick={toggleDropdown} className={styles.flagButton}>
        <img src={flagSrc(selectedLang)} alt={selectedLang} />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div onClick={() => handleLanguageChange('pl')} className={styles.dropdownItem}>
            <img src="/langs/pl.png" alt="pl" />
          </div>
          <div onClick={() => handleLanguageChange('ua')} className={styles.dropdownItem}>
            <img src="/langs/ua.png" alt="ua" />
          </div>
          <div onClick={() => handleLanguageChange('en')} className={styles.dropdownItem}>
            <img src="/langs/en.png" alt="en" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Langs;
