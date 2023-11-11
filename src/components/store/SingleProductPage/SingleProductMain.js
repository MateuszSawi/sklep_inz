import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import axios from 'axios';
import TextEdit from './TextEdit';

function SingleProductMain() {

  const product_id = localStorage.getItem('product_id');

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/products/get_product/", { 
      params: {
        product_id : product_id
      }
    })
    .then(response => {
      console.log(response.data.product);
      setProduct(response.data.product);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div>      
      {product_id}
      <p>{product.price_netto}</p>
      <p>{product.price_brutto}</p>
      <p>{product.quantity}</p>
      <p>{product.primary_link}</p>
      <p>{product.product_description}</p>
      <p>{product.quantitproduct_description_shorty}</p>
      <p>{product.product_id}</p>
      <p>{product.product_name}</p>
      <p>{product.reference_number}</p>

      


      <TextEdit product_description_html={product.product_description_html}/>
    </div>
  );
}

export default SingleProductMain;