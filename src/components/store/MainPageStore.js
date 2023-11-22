import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

import Login from './Login/Login';
import Register from './Login/Register';
import ResetPassword from './Login/ResetPassword';
import ResetSetNewPassword from './Login/ResetSetNewPassword'
import ChangePassword from './Login/ChangePassword';

import HeaderStore from './HeaderStore/HeaderStore';
import StoreStartPage from './StoreStartPage/StoreStartPage';
import StoreProductsPage from './StoreProductsPage/StoreProductsPage';
import SingleProductMain from './SingleProductPage/SingleProductMain';

function MainPageStore() {

  // let { path } = useMatch();
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [singleProduct, setSingleProduct] = useState('');

  // const [categoryPath, setCategoryPath] = useState('');

  return (
    <div>      
      <HeaderStore />
      
      <Routes>
        <Route path="/" element={<StoreStartPage 
          category={category} 
          setCategory={setCategory} 
        />} />

        <Route path="/:category" element={<StoreProductsPage 
          category={category}
          setCategory={setCategory}  
          
          subcategory={subcategory}
          setSubcategory={setSubcategory}
          
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />} />

        <Route path="/:category/:subcategory" element={<StoreProductsPage 
          category={category} 
          setCategory={setCategory}  
          
          subcategory={subcategory} 
          setSubcategory={setSubcategory}  
          
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />} />

        <Route path=":category/:subcategory/:singleProduct" element={<SingleProductMain 
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />} />

        <Route path=":category/:category/:singleProduct" element={<SingleProductMain 
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />} />

        <Route path="logowanie" element={<Login />} />
        <Route path="rejestracja" element={<Register />} />
        <Route path="reset-hasła" element={<ResetPassword />} />
        <Route path="zmiana-hasła" element={<ChangePassword />} />
        <Route path="reset-nowe-hasło" element={<ResetSetNewPassword />} />
      </Routes>
    </div>
  );
}

export default MainPageStore;