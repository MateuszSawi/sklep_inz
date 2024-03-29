import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MyAcc.module.scss';

const MyAccHeader = (props) => {
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    props.setActiveTab(tab);
    switch (tab) {
        case 'Adres':
            navigate('/moje-konto');
            break;
        case 'Zamówienia':
            navigate('/moje-konto/zamówienia');
            break;
        case 'Zmień hasło':
            navigate('/moje-konto/zmień-hasło');
            break;
        case 'Usuń konto':
            navigate('/moje-konto/usuń-konto');
            break;
        case 'Wyloguj się':
            navigate('/moje-konto/wylogowywanie');
            break;
        case 'Moje dane':
            navigate('/moje-konto/moje-dane');
            break;
        default:
            break;
    }
  };

  const logOut = () => {
    localStorage.setItem('accessToken', '');

    const token = localStorage.getItem('accessToken');
    if (token === '') {
      navigate('/logowanie');
    }
  }

  return (
    <div className={styles.myAccount}>
      <div className={styles.tabs}>
        <button
          className={props.activeTab === 'Adres' ? styles.activeTab : ''}
          onClick={() => handleTabClick('Adres')}
        >
          Zapisane adresy
        </button>
        <button
          className={props.activeTab === 'Zamówienia' ? styles.activeTab : ''}
          onClick={() => handleTabClick('Zamówienia')}
        >
          Zamówienia
        </button>
        <button
          className={props.activeTab === 'Zmień hasło' ? styles.activeTab : ''}
          onClick={() => handleTabClick('Zmień hasło')}
        >
          Zmień hasło
        </button>
        <button
          className={props.activeTab === 'Moje dane' ? styles.activeTab : ''}
          onClick={() => handleTabClick('Moje dane')}
        >
          Moje dane
        </button>
        <button
          className={props.activeTab === 'Wyloguj się' ? styles.activeTab : ''}
          onClick={() => logOut()}
        >
          Wyloguj się
        </button>
      </div>
      
    </div>
  );
};

export default MyAccHeader;
