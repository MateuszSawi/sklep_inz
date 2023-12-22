import React, { useState } from 'react';
import styles from './DeleteProduct.module.scss';
import axios from 'axios';
import { apiK, apiP } from '../../../../apiConfig';

function DeleteProduct(props) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleClick = () => {
    setShowConfirmDialog(true);
  };

  const handleDelete = () => {
    setShowConfirmDialog(false);

    axios.post(`${apiK}/staff/deleteproduct`, { id: '0' })
    .then(response => {
    })
    .catch(error => {
    });
  };

  const ConfirmationDialog = () => (
    showConfirmDialog && (
      <div className={styles.confirmDialog}>
        <p>Czy na pewno chcesz usunąć ten produkt?</p>
        <button onClick={handleDelete}>Tak</button>
        <button onClick={() => setShowConfirmDialog(false)}>Nie</button>
      </div>
    )
  );

  return (
    <div>
      <button onClick={handleClick}>Usuń produkt</button>
      <ConfirmationDialog />
    </div>
  );
}

export default DeleteProduct;
