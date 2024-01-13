import React, { useState } from 'react';
import axios from 'axios';
import styles from './ResetPassword.module.scss';
import { apiK } from '../../../../apiConfig';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmationPassword = (e) => {
    setConfirmationPassword(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmationPassword) {
      alert('Hasła nie pasują do siebie. Spróbuj ponownie.');
      return;
    }

    const apiUrl = `${apiK}/auth/reset-password`;
    const requestBody = {
      newPassword: newPassword,
    };

    const token = localStorage.getItem('accessToken'); 

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    };

    try {
      const response = await axios.post(apiUrl, JSON.stringify(requestBody), { headers });

      setNewPassword('');
      setConfirmationPassword('');
    } catch (error) {
      console.error('Błąd resetowania hasła:', error);
    }
  };

  return (
    <div className={styles.resetPasswordForm}>
      <h2>Zresetuj hasło</h2>
      <form onSubmit={handleResetPassword}>
        <div>
          <label>Nowe hasło:</label>
          <input
            type="password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            required
          />
        </div>
        <div>
          <label>Potwierdź nowe hasło:</label>
          <input
            type="password"
            value={confirmationPassword}
            onChange={handleChangeConfirmationPassword}
            required
          />
        </div>
        <button type="submit">Zresetuj hasło</button>
      </form>
    </div>
  );
};

export default ResetPassword;
