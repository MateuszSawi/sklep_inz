import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

import StoreProductsPath from './StoreProductsPath/StoreProductsPath';
import StoreProducts from './StoreProducts/StoreProducts';
import StoreProductsFilters from './StoreProductsFilters/StoreProductsFilters';
import StoreStartPageInfo from './StoreStartPageInfo/StoreStartPageInfo';

function StoreProductsPage(props) {

  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('alphabetic_asc');
  const [productsPerPage, setProductsPerPage] = useState(30);
  const [pageNumber, setPageNumber] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  //total_pages

  return (
    <div>      
      <StoreProductsPath 
        products={products} 
        setProducts={setProducts}
      />

      <StoreProductsFilters 
        sortBy={sortBy} 
        setSortBy={setSortBy}

        totalPages={totalPages}
        setTotalPages={setTotalPages}

        productsPerPage={productsPerPage} 
        setProductsPerPage={setProductsPerPage}

        pageNumber={pageNumber} 
        setPageNumber={setPageNumber}
      />

      <StoreProducts 
        products={products} 
        setProducts={setProducts}

        sortBy={sortBy}

        productsPerPage={productsPerPage}

        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        
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