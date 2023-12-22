import React, { useState, useEffect, useRef } from 'react';
import styles from '../HeaderStore.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

function SearchBar() {

  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const resultsRef = useRef(null);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (inputValue) {
        searching();
      }
    }, 500); // Opóźnienie 500ms

    return () => clearTimeout(delayDebounce);
  }, [inputValue]);

  useEffect(() => {
    // Funkcja do sprawdzania, czy kliknięcie było poza kontenerem wyników
    function handleClickOutside(event) {
      if (resultsRef.current && !resultsRef.current.contains(event.target)) {
        setInputValue('');  
        setProducts([]);    
      }
    }

    // Dodaj nasłuchiwanie kliknięć
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Usuń nasłuchiwanie przy demontowaniu komponentu
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [resultsRef]);

  const searching = () => {
    setIsLoading(true);

    axios.post(`${apiP}/products/search_products/`, {
      params: { 
        query: inputValue
      },
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setProducts(response.data.products)
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  const navigate = useNavigate();

  const handleLinkClick = (id, category) => {
    navigate(`/sklep/${category}/${category}/${id}`);
    setInputValue('');  
    setProducts([]);
  };

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.header_center}>
      <div className={styles.inputContainer}>
        {lang === 'pl' &&
          <input 
            type="text" 
            className={styles.input} 
            placeholder="Nazwa lub numer katalogowy"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
          />
        }
        {lang === 'ua' &&
          <input 
            type="text" 
            className={styles.input} 
            placeholder="Назва або каталожний номер"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
          />
        }
        {lang === 'en' &&
          <input 
            type="text" 
            className={styles.input} 
            placeholder="Name or catalog number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
          />
        }
        {isLoading && 
          <div className={styles.loadingWrapper}>
            <div className={styles.loadingScreen}>
              <div className={styles.loader}></div>
            </div>
          </div>
        }
        <button type="button" className={styles.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className={`${styles.resultsContainer} ${products.length > 0 ? styles.showResults : ''}`}
        ref={resultsRef}
      >
        {products.map(product => (
          <div key={product.id} className={styles.product} onClick={() => handleLinkClick(product.product_id, product.category)}>
            <img 
              src={product.primary_link} 
              alt={product.product_name} 
              className={styles.img}
            />
            <div className={styles.name}>
              <p>{product.product_name}</p>
            </div>
            <div className={styles.price}>
              <p>{product.price_brutto}zł</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;

