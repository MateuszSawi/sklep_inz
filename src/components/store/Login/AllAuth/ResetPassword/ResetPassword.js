import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styles from './ResetPassword.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { apiK, apiP } from '../../../../../apiConfig';

function ResetPassword() {
    // const { register, handleSubmit, formState: { errors } } = useForm();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const validateEmail = (email) => {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return re.test(email);
    };

    const RegisterApi = (email) => {
      axios.post(`${apiK}/auth/password_reset/`, {
        email: email
      })
      .then(response => {
        // console.log(response.data);
        setMessage("");
        setConfirmation(response.data.message);
      })
      .catch(error => {
        console.error("Błąd podczas próby resetowania hasła:", error);
        setMessage(error.response.data.message);
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!validateEmail(email)) {
        setError('Błędny e-mail');
      } else { // Register successful
        setError('');
        RegisterApi(email);
      }
    };

    return (
      <div className={styles.container}>
      <div>
        <h2>Wpisz swój e-mail</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>	
          <button type="submit">Potwierdź</button>
        </form>
        <div className={styles.errorWrapper}>
          {error && <div className={styles.error}>{error}</div>}
          {message !== '' && <div className={styles.error}>{message}</div>}
          {confirmation !== '' && <div className={styles.confirmation}>{confirmation}</div>}
        </div>
      </div>
    </div>
    );
}

export default ResetPassword;
