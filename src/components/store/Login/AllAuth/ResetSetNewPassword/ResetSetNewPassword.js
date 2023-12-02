import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styles from './ResetSetNewPassword.module.scss';
import { useParams , useNavigate } from 'react-router-dom';
import { apiK, apiP } from '../../../../../apiConfig';

function ResetSetNewPassword() {
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState('');

  let { userId, token } = useParams();

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  const passwordsMatch = (pass1, pass2) => {
    return pass1 === pass2;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validatePassword(pass1) || !passwordsMatch(pass1, pass2)) {
      setError('Błędne dane');
    } else { // Register successful
      setError('');
      RegisterApi(pass1, pass2);
    }
  };

  const RegisterApi = (data) => {
    axios.post(`${apiK}/auth/activate/${userId}/${token}/`, {
      newpassword1: pass1,
      newpassword2: pass2
    },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setMessage("");
      setConfirmation(response.data.message);
    })
    .catch(error => {
      console.error("Błąd logowania:", error);
      setMessage(error.response.data.message);
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Wpisz nowe hasło</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <label>Hasło:</label>
            <input 
              type="password" 
              value={pass1} 
              onChange={(e) => setPass1(e.target.value)} 
            />

            <label>Powtórz hasło:</label>
            <input 
              type="password" 
              value={pass2} 
              onChange={(e) => setPass2(e.target.value)} 
            />
          </div>
          <button type="submit">Zmień hasło</button>
        </form>
        <div className={styles.errorWrapper}>
          {error && <div className={styles.error}>{error}</div>}
          {message !== '' && <div className={styles.error}>{message}</div>}
          {confirmation !== '' && <div className={styles.confirmation}>{confirmation}</div>}
        </div>
      </div>
      <div className={styles.passRequirements}>
        <ul>
          <li>Hasło musi składać się z minimum 8 znaków i musi zawierać:</li>
          <ul>
            <li>minimum 8 znaków</li>
            <li>przynajmniej jedną mała literę</li>
            <li>przynajmniej jedną dużą literę</li>
            <li>przynajmniej jedną cyfrę</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default ResetSetNewPassword;
