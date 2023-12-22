import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../MyAccount.module.scss';

import ChangeStatus from './ChangeStatus/ChangeStatus'

function AllOrders() {

  const [user, setUser] = useState('');
  const [orders, setOrders] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('Opłacone')

  const handleSortChange = (event) => {
    setStatus(event.target.value);
  };

  useEffect(() => {      // wyszukiwanie konkretnego użytkownika + wszysktich jesli email = '' --- wartosc jednego uzytk. musi isc z inputa , jesli wszystkich to ''
    setIsLoading(true);

    axios.post(`${apiK}/staff/getallorders`, {
      email: user,
      page: currentPage,
      status: status
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data);
      setOrders(response.data.orders)
      setTotalPages(response.data.total_pages)
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setIsLoading(false); // Zakończenie ładowania
    });
  }, [currentPage, user, status]);

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

  const refreshOrders = () => {
    axios.post(`${apiK}/staff/getallorders`, {
      email: user,
      page: currentPage,
      status: status
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setOrders(response.data.orders);
      setTotalPages(response.data.total_pages);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    refreshOrders();
  }, [currentPage, user, status]);



  return (
    <div className={styles.container}>
      <input 
        type="text" 
        value={user} 
        onChange={handleChange} 
        placeholder="E-mail użytkownika" 
      />

      <select
        value={status}
        onChange={handleSortChange}
        className={styles.dropdownFirst}
      >
        <option value="Wysłane">Wysłane</option>
        <option value="Opłacone">Opłacone</option>
        <option value="Przetwarzanie płatnosci">Przetwarzanie płatnosci</option>
        <option value="Oczekuje na płatność">Oczekuje na płatność</option>
        <option value="Anulowane">Anulowane</option>
      </select>

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
          // console.log(order)

          return (
          <div key={order.id} className={styles.wrapper}>
            <p>E-mail: {order.email}</p>
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
            <p>Metoda płatności: {order.payment_method}</p>
            <p>Dostawa: {order.shippingMethod}</p>
            <p>Status zamówienia: {order.status}</p>
            <ul>
              {products.map((product) => (
                <li>
                  <p>{product.product_name} x {product.amount}</p>
                  <p>Nr. ref.: {product.reference_number}</p>
                </li>
              ))}
            </ul>

            {order.status === 'Opłacone' &&
              <ChangeStatus id={order.id} onStatusChange={refreshOrders} />
            }
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

export default AllOrders;


