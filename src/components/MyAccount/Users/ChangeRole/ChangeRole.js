import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ChangeRole.module.scss';

function ChangeRole() {




  

  return (
    <button className={styles.buttonRole}>zmień uprawnienia</button>
  );
}

export default ChangeRole;


