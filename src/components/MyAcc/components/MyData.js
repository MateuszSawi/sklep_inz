import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import styles from './MyData.module.scss'; // Importuj style z odpowiedniego pliku SCSS
import MyAccHeader from '../MyAccHeader';
import { apiK } from '../../../apiConfig';
import axios from 'axios';

const MyData = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Pobierz token dostępu z localStorage
    const token = localStorage.getItem('accessToken');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Dodaj token jako nagłówek Authorization
    };

    const apiUrl = `${apiK}/users`;

    // Wykonaj żądanie GET z nagłówkiem Authorization
    axios.get(apiUrl, { headers })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych użytkownika:', error);
      });
  }, []);

  return (
    <div className={styles.myAccount}>
      <MyAccHeader
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />

      <div className={styles.userDataWrapper}>
        <div className={styles.userData}>
            <h2>Moje dane</h2>
            <p>Email: {data.email}</p>
            <p>Imię: {data.firstname}</p>
            <p>Nazwisko: {data.lastname}</p>
            <p>Data urodzenia: {data.birthDate}</p>
        </div>
      </div>
    </div>
  );
};

export default MyData;
