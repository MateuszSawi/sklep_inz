import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Register.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [registerConfirmation, setRegisterConfirmation] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  const passwordsMatch = (pass1, pass2) => {
    return pass1 === pass2;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email) || !validatePassword(pass1) || !passwordsMatch(pass1, pass2)) {
      setError('Błędne dane');
    } else { // Register successful
      setError('');
      RegisterApi(email, pass1, name, surname);
    }
  };

  const redirectToAfterRegister = () => {
    navigate(`/zarejestrowano`);
  };

  // --------------------------------- API ---------------------------------

  const navigate = useNavigate();
  
  const RegisterApi = (email, pass1, name, surname) => {
    axios.post('http://localhost:8000/auth/register/', {
      name: name,
      surname: surname,
      email: email,
      pass1: pass1,
      pass2: pass1
    }, 
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      const headers = response.headers;
      // const cookies = headers.get('set-cookie');
      // console.log(response.data.message)
      setMessage("");
      setRegisterConfirmation(response.data.message);
      redirectToAfterRegister(response.data.message);
    })
    .catch((error) => {
      console.error("Błąd rejestracji:", error.response.data.message);
      setMessage(error.response.data.message);
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Rejestracja</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles.wrapper}>
              <label>Imię:</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />

              <label>Nazwisko:</label>
              <input 
                type="text" 
                value={surname} 
                onChange={(e) => setSurname(e.target.value)} 
              />

              <label>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            
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
            <button type="submit">Zarejestruj się</button>
        </form>
        <div className={styles.errorWrapper}>
          {error && <div className={styles.error}>{error}</div>}
          {message !== '' && <div className={styles.error}>{message}</div>}
          {registerConfirmation !== '' && <div className={styles.registerConfirmation}>{registerConfirmation}</div>}
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
};

export default Register;