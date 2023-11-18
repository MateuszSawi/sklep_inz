import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

import StoreProductsPath from './StoreProductsPath/StoreProductsPath';
import StoreProducts from './StoreProducts/StoreProducts';
import StoreProductsFilters from './StoreProductsFilters/StoreProductsFilters';
import StoreStartPageInfo from './StoreStartPageInfo/StoreStartPageInfo';

function StoreProductsPage(props) {

  const [products, setProducts] = useState([]);

  return (
    <div>      
      <StoreProductsPath 
        products={products} 
        setProducts={setProducts}
      />

      <StoreProductsFilters />

      <StoreProducts 
        products={products} 
        setProducts={setProducts}
        
        subcategory={props.subcategory} 
        setSubcategory={props.setSubcategory}  

        category={props.category} 
        setCategory={props.setCategory}
      />

      <StoreStartPageInfo />
    </div>
  );
}

export default StoreProductsPage;