import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MyAcc.module.scss';
import MyAccHeader from './MyAccHeader';
import { apiK } from '../../apiConfig';
import axios from 'axios';

const MyAcc = (props) => {
  const navigate = useNavigate();
  const [userAddresses, setUserAddresses] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const [addresses, setAddresses] = useState([]);
  const [formData, setFormData] = useState({
    country: '',
    city: '',
    postCode: '',
    street: '',
    buildingNumber: 0,
    apartmentNumber: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    };

    const apiUrl = `${apiK}/users/addresses`;

    axios.get(apiUrl, { headers })
      .then((response) => {
        setUserAddresses(response.data.addresses);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania adresów:', error);
      });
  }, [buttonClicked]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    const apiUrl = `${apiK}/users/addresses`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    const requestBody = {
      ...formData,
      id: 0,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(
          requestBody
        ),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();

      } else {
        console.error('error:', response.statusText);
      }
    } catch (error) {
      console.error('errorcatch:', error);
    }

    setFormData({
      country: '',
      city: '',
      postCode: '',
      street: '',
      buildingNumber: 0,
      apartmentNumber: 0,
    });

    setButtonClicked(!buttonClicked)
  };

  const handleDeleteAddress = async (addressId) => {
    const token = localStorage.getItem('accessToken');
    const apiUrl = `${apiK}/users/addresses/${addressId}`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers,
      });

      if (response.ok) {
      } else {
        console.error('Błąd podczas usuwania adresu:', response.statusText);
      }
    } catch (error) {
      console.error('Błąd podczas usuwania adresu:', error);
    }

    const mainAddressId = localStorage.getItem('mainAddressId');
    if (addressId == mainAddressId) {
      localStorage.removeItem('mainAddressId');
    }

    setButtonClicked(!buttonClicked)
  };

  const mainAdress = (id) => {
    const mainAddressId = localStorage.getItem('mainAddressId');

    if (mainAddressId == id) {
      localStorage.removeItem('mainAddressId');
    } else {
      localStorage.setItem('mainAddressId', id);
    }
    setButtonClicked(!buttonClicked);
  }

  return (
    <div className={styles.myAccount}>
      <MyAccHeader activeTab={props.activeTab} setActiveTab={props.setActiveTab} />

      <h2>Twoje adresy</h2>
      <div className={styles.orderDetails}>
        {userAddresses.length > 0 ? (
          <>
            {userAddresses.map((address) => (
              <div className={styles.tab}>
                <div key={address.id} 
                  onClick={() => mainAdress(address.id)}
                  className={
                    `
                    ${Number(localStorage.getItem('mainAddressId')) === address.id ? 
                    styles.addressItemActive
                    : 
                    styles.addressItem
                  }`}
                >
                  <p>Kraj: {address.country}</p>
                  <p>Miasto: {address.city}</p>
                  <p>Kod pocztowy: {address.postCode}</p>
                  <p>Ulica: {address.street}</p>
                  <p>Numer budynku: {address.buildingNumber}</p>
                  <p>Numer mieszkania: {address.apartmentNumber}</p>
                  
                </div>
                <button 
                  onClick={() => handleDeleteAddress(address.id)}
                  className={styles.deleteButton}
                >Usuń adres</button>
              </div>
            ))}
          </>
        ) : (
          <p>Brak dostępnych adresów.</p>
        )}
      </div>

      <div>
        <h3>Dodaj nowy adres</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Kraj:</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Miasto:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Kod pocztowy:</label>
              <input
                type="text"
                name="postCode"
                value={formData.postCode}
                onChange={(e) => setFormData({ ...formData, postCode: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Ulica:</label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Numer budynku:</label>
              <input
                type="number"
                name="buildingNumber"
                value={formData.buildingNumber}
                onChange={(e) => setFormData({ ...formData, buildingNumber: parseInt(e.target.value, 10) })}
                required
              />
            </div>
            <div>
              <label>Numer mieszkania:</label>
              <input
                type="number"
                name="apartmentNumber"
                value={formData.apartmentNumber}
                onChange={(e) => setFormData({ ...formData, apartmentNumber: parseInt(e.target.value, 10) })}
              />
            </div>
            <button type="submit" >
              Dodaj adres
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAcc;
