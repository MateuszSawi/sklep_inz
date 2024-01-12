import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Login.module.scss';
import { apiK, apiP } from '../../../../apiConfig';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  props.setActiveTab('Adres')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSuccess = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    navigate('/moje-konto');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `${apiK}/auth/login`;
    const requestBody = {
      ...formData,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post(apiUrl, JSON.stringify(requestBody), { headers });

      console.log('Zalogowano użytkownika:', response.data);

      handleLoginSuccess(response.data);

      setFormData({
        username: '',
        password: '',
      });
    } catch (error) {
      console.error('Błąd logowania:', error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // Jeśli accessToken istnieje, przekieruj użytkownika na /moje-konto
      navigate('/moje-konto');
    }
  }, []);

  const register = () => {
    navigate('/rejestracja');
  }

  return (
    <div className={styles.loginForm}>
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Zaloguj się</button>
      </form>


      <button className={styles.button} onClick={register}>Rejestracja</button>
    </div>
  );
};

export default Login;
