import React, { useState, useEffect, useRef } from 'react';
import styles from './AddToCartButton.module.scss';

function AddToCartButton(props) {


  // props.product_id

  return (
    <div className={styles.wrapper}>
      <button><h3>DO KOSZYKA</h3></button>
    </div>
  );
}

export default AddToCartButton;
