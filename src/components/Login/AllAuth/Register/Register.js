import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.scss';
import { apiK, apiP } from '../../../../apiConfig';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstname: '',
        lastname: '',
        birthDate: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const apiUrl = `${apiK}/auth/register`;
        const requestBody = {
          ...formData,
          birthDate: new Date(formData.birthDate).toISOString().slice(0, 10),
        };
    
        const headers = {
          'Content-Type': 'application/json',
        };
    
        try {
          const response = await axios.post(apiUrl, JSON.stringify(requestBody), { headers });
    
          console.log('Użytkownik został zarejestrowany:', response.data);
    
          setFormData({
            email: '',
            firstname: '',
            lastname: '',
            birthDate: '',
            password: '',
          });
        } catch (error) {
          console.error('Wystąpił błąd podczas rejestracji:', error);
        }
      };

  return (
    <div className={styles.registrationForm}>
      <h2>Rejestracja użytkownika</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Imię:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nazwisko:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Data urodzenia:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
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
        {/* <div>
          <label>Nazwa użytkownika:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div> */}
        <button type="submit">Zarejestruj się</button>
      </form>
    </div>
  );
};

export default Register;
