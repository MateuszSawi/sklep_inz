import React, { useState, useEffect } from 'react';
import styles from './ContactNewsletter.module.scss';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';

function ContactNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    axios.post(`${apiK}/newsletter/addtosubscribtion`, {
      email: email,
    })
    .then((response) => {
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className={styles.newsletter_container}>
      <div className={styles.title_container}>
        <h1>Zapisz się na nasz Newsletter</h1>
      </div>
      <input 
        type="email"
        placeholder="Wprowadź swój email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>ZAPISZ SIĘ</button>
    </div>
  );
}

export default ContactNewsletter;