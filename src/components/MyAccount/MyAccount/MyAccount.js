import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../MyAccount.module.scss';

function MyAccount() {

  // const [email, setEmail] = useState('');
  const [user, setUser] = useState([]);
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const clickHandler = () => {

  }

  useEffect(() => {
    axios.get(`${apiK}/auth/aboutuser`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      getUserOrder(response.data.email);
      // console.log(response.data)
      setUser(response.data)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [currentPage]);

  const getUserOrder = (email) => {
    setIsLoading(true);

    axios.post(`${apiK}/staff/showorders`, {
      email: email,
      page: currentPage
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setOrders(response.data.orders)
      setTotalPages(response.data.total_pages)
      // console.log(response.data)
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false); // Zakończenie ładowania
    });
  }

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

  return (
    <div className={styles.container}>
      {user && 
        <div className={styles.infoMyAccount}>
          <h3>Moje dane:</h3>
          <p>{user.name} {user.surname}</p>
          <p>{user.email}</p>
        </div>
      }

      <h3>Moje zamówienia:</h3>
      {orders && isLoading ? 
        <div className={styles.loadingWrapper}>
          <div className={styles.loadingScreen}>
            <div className={styles.loader}></div>
          </div>
        </div> 
        :
        orders.map((order) => {

          let dateOfOrder = order.created_at.slice(0, -14);

          let products = order.products;

          return (
          <div key={order.id} className={styles.wrapper}>
            <p>Data złożenia zamówienia: {dateOfOrder}</p>
            <p>Imię i nawisko: {order.name} {order.surname}</p>
            <p>Adres wysyłki: {order.address_to_send}</p>
            <p>Adres do faktury: {order.address_for_invoice}</p>
            <p>Firma: {order.company}</p>
            <p>NIP: {order.nip}</p>
            <p>Nr. tel.:{order.phone_number}</p>
            <p>Cena brutto: {order.price_brutto}</p>
            <p>Cena netto: {order.price_netto}</p>
            <p>Uwagi: {order.comment}</p>
            <p>Status zamówienia: {order.status}</p>
            <ul>
              {products.map((product) => (
                <li>
                  <p>{product.product_name} x {product.amount}</p>
                </li>
              ))}
            </ul>
          </div>
          )
        })
      }

      <div className={styles.paginationWrapper}>
        {renderPagination()}
      </div>
    </div>
  );
}

export default MyAccount;


