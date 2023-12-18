import React from 'react';
import styles from '../HeaderStore.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

function SearchBar() {

  return (
    <div className={styles.header_center}>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} placeholder="Nazwa lub numer katalogowy" />
        <button type="button" className={styles.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

