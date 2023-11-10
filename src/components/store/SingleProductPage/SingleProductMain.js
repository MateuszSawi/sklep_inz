import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import axios from 'axios';

function SingleProductMain() {

  const product_id = localStorage.getItem('product_id');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/products/get_product/", { 
      params: {
        product_id : product_id
      }
    })
    .then(response => {
      console.log(response.data.products);
      
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>      
      {product_id}
    </div>
  );
}

export default SingleProductMain;