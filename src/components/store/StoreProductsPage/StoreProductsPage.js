import React, { useState } from 'react';

import StoreProducts from './StoreProducts/StoreProducts';
import StoreProductsFilters from './StoreProductsFilters/StoreProductsFilters';
import StoreStartPageInfo from './StoreStartPageInfo/StoreStartPageInfo';

function StoreProductsPage() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //total_pages

  return (
    <div>      
      <StoreProductsFilters 
        isLoading={isLoading}
        setIsLoading={setIsLoading}

        products={products} 
        setProducts={setProducts}
      />

      <StoreProducts 
        products={products} 
        setProducts={setProducts}

        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />

      <StoreStartPageInfo />
    </div>
  );
}

export default StoreProductsPage;