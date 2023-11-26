import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './AfterRegister.module.scss';

const AfterRegister = (props) => {
  const { userId, token } = useParams();
  const navigate = useNavigate();

  return (
  <div className={styles.container}>
    <h2>
      Twoje konto zostało aktywowane!
      <br></br>
      Sprawdź swojego maila.
    </h2>
  </div>
  )
};

export default AfterRegister;