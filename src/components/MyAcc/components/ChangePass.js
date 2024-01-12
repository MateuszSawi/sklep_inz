import React, { useState } from 'react';
import styles from '../MyAcc.module.scss';
import MyAccHeader from '../MyAccHeader';
import { apiK, apiP } from '../../../apiConfig';

const ChangePass = (props) => {
  const [formData, setFormData] = useState({
    newPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('accessToken');
    const apiUrl = `${apiK}/users/change-password`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    const newPassword = formData.newPassword;
  
    const requestBody = {
      newPassword
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: newPassword,
        headers,
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Hasło zostało zmienione:', responseData);
        // Wyczyść formularz lub podejmij odpowiednie działania po udanej zmianie hasła.
      } else {
        console.error('Błąd podczas zmiany hasła:', response.statusText);
        // Obsłuż błąd, na przykład wyświetl komunikat dla użytkownika.
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas zmiany hasła:', error);
    }
  };

  return (
    <div className={styles.myAccount}>
      <MyAccHeader activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
      <div>
        <h3>Zmień hasło</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nowe hasło:</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Zmień hasło</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
