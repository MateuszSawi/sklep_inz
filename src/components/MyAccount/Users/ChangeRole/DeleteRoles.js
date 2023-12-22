import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ChangeRole.module.scss';

function DeleteRoles(props) {

  const DeleteRoles = () => {
    axios.post(`${apiK}/staff/removeauthorities`, {email: props.email}, {
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
      DeleteRoles();
    }} className={styles.buttonRole} style={{ color: 'red' }}>Usuń przypisane role</button>
  );
}

export default DeleteRoles;
