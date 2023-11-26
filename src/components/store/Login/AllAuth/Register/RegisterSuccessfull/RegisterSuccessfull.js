import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './RegisterSuccessfull.module.scss';

const RegisterSuccessfull = () => {
  const { userId, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/sklep/logowanie`);
  }, [userId, token, navigate]);

  return (
  <div className={styles.container}>
    <h2>
      Twoje konto zostało aktywowane!
      <br></br>
      Za chwilę nastąpi przekierowanie
    </h2>
  </div>
  )
};

export default RegisterSuccessfull;