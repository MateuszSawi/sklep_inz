import React, { useState, useEffect } from 'react';
import styles from '../Cart.module.scss';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';

function OrderButton() {

  return (
    <button><p>Złóż zamówienie</p></button>
  );
}

export default OrderButton;
