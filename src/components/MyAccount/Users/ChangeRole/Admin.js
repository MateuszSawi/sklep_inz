import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ChangeRole.module.scss';

function Admin(props) {

  const setRole = () => {
    axios.post(`${apiK}/staff/givesuperuser`, {email: props.email}, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (props.userRefresh) {
        props.userRefresh();
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <button onClick={() => {
      setRole();
    }} className={styles.buttonRole}>Ustaw jako admina</button>
  );
}

export default Admin;


