import React, { useState } from 'react';
// import styles from './EditProduct.module.scss';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

function EditProduct(props) {



  axios.post(`${apiK}/staff/editproduct`, { id: '0' })
  .then(response => {
  })
  .catch(error => {
  });




  
  const handleClick = () => {

  };

  return (
    <div>
      <button onClick={handleClick}>Edytuj produkt</button>
    </div>
  );
}

export default EditProduct;

