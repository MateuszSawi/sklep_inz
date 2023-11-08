import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

import StoreProductsPath from './StoreProductsPath/StoreProductsPath';
import StoreProductsRestCategories from './StoreProductsRestCategories/StoreProductsRestCategories';
import StoreProducts from './StoreProducts/StoreProducts';
import StoreProductsFilters from './StoreProductsFilters/StoreProductsFilters';
import StoreStartPageInfo from './StoreStartPageInfo/StoreStartPageInfo';

function StoreProductsPage(props) {

  return (
    <div>      
      sssss
      <StoreProductsPath 
        categoryPath={props.categoryPath} 
        setCategoryPath={props.setCategoryPath}
      />

      <StoreProductsRestCategories />

      <StoreProductsFilters />

      <StoreProducts 
        category={props.category} 
        setCategory={props.setCategory}
      />

      <StoreStartPageInfo />
    </div>
  );
}

export default StoreProductsPage;