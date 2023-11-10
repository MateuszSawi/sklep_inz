import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import styles from './StoreProductsPath.module.scss';

function StoreProductsPath(props) {

  const savedCategory = localStorage.getItem('category');

  console.log(savedCategory);

  return (
    <div>      
      StoreProductsPath - {props.categoryPath}
    </div>
  );
}

export default StoreProductsPath;