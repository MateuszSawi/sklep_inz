import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { apiK, apiP } from '../../../../../apiConfig';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) {
      setError('Błędne dane logowania');
    } 
    else { // Login successful
      setError('');
      LoginApi(email, password);
    }
  };

  // --------------------------------- API ---------------------------------

  const navigate = useNavigate();
  
  const LoginApi = (email, password) => {
    axios.post(`${apiK}/auth/login/`, {
        email: email,
        password: password
    },
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
        console.log(response.data);
        setMessage("")
        localStorage.setItem('token', response.data.key); // zapisanie tokena do localStorage
    })
    .catch(error => {
        console.error("Błąd logowania:", error);
        // setMessage("Błędne dane logowania")
        setMessage(error.response.data.message);
    });
  };

  return (
    <div className={styles.container}>
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit}>
          <div className={styles.wrapper}>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          
            <label>Hasło:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit">Zaloguj się</button>
      </form>
      <div className={styles.errorWrapper}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {message !== '' && <div style={{ color: 'red' }}>{message}</div>}
      </div>
    </div>
  );
}

export default Login;
