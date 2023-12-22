import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ChangeStatus.module.scss';

function ChangeStatus(props) {

  const changeStatus = () => {
    axios.post(`${apiK}/staff/setstatustosent`, {id: props.id}, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (props.onStatusChange) {
        props.onStatusChange();
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <button onClick={() => {
      changeStatus();
    }} className={styles.buttonRole}>Zmien status na 'wysłane'</button>
  );
}

export default ChangeStatus;


