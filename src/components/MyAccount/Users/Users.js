import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../MyAccount.module.scss';
import { FaCheck, FaTimes } from 'react-icons/fa';

import Staff from './ChangeRole/Staff'
import Admin from './ChangeRole/Admin'
import DeleteRoles from './ChangeRole/DeleteRoles'

function Users() {

  const [user, setUser] = useState('');
  const [usersData, setUsersData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {        // wyszukiwanie konkretnego użytkownika + wszysktich jesli email = '' --- wartosc jednego usera musi isc z inputa , jesli wszystkich to ''
    setIsLoading(true);
    
    axios.post(`${apiK}/staff/browseallusers`, {
      email: user,
      page: currentPage
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setUsersData(response.data.users)
      setTotalPages(response.data.total_pages)
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false); // Zakończenie ładowania
    });
  }, [user, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    let pages = [];
    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button 
          className={styles.buttonPagination}
          key={i} 
          onClick={() => handlePageChange(i)} 
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const userRefresh = () => {
    axios.post(`${apiK}/staff/browseallusers`, {
      email: user,
      page: currentPage
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      // console.log(response.data);
      setUsersData(response.data.users)
      setTotalPages(response.data.total_pages)
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    userRefresh();
  }, [currentPage, user]);

  return (
    <div className={styles.container}>
      <input 
        type="text" 
        value={user} 
        onChange={handleChange} 
        placeholder="E-mail użytkownika" 
      />

      {user && 
        <div className={styles.infoMyAccount}>
          <h3>Moje dane:</h3>
          <p>{user.name} {user.surname}</p>
          <p>{user.email}</p>
        </div>
      }

      <h3>Użytkownicy:</h3>
      {usersData && isLoading ? 
        <div className={styles.loadingWrapper}>
          <div className={styles.loadingScreen}>
            <div className={styles.loader}></div>
          </div>
        </div> 
        :
        usersData.map((user) => {

          let superUser;
          if (user.is_superuser) {
            superUser = <FaCheck className={styles.icon} />
          } else {
            superUser = <FaTimes className={styles.icon} />
          }

          let staff;
          if (user.is_staff) {
            staff = <FaCheck className={styles.icon} />
          } else {
            staff = <FaTimes className={styles.icon} />
          }

          let isActive;
          if (user.is_active) {
            isActive = <FaCheck className={styles.icon} />
          } else {
            isActive = <FaTimes className={styles.icon} />
          }

          return (
          <div className={styles.wrapper}>
            <p>E-mail: {user.email}</p>
            <p>Imię i nazwisko: {user.name} {user.surname}</p>
            <p>Konto aktywowane: {isActive}</p>
            <p>Pracownik sklepu: {staff}</p>
            <p>Admin {superUser}</p>

            {!user.is_staff &&
              <Staff email={user.email} userRefresh={userRefresh} />
            }

            {!user.is_superuser &&
              <Admin email={user.email} userRefresh={userRefresh} />
            }

            {(user.is_staff || user.is_superuser) &&
              <DeleteRoles email={user.email} userRefresh={userRefresh} />
            }
          </div>
          )
        })
      }

      {user === '' &&
        <div className={styles.paginationWrapper}>
          {renderPagination()}
        </div>
      }
    </div>
  );
}

export default Users;


