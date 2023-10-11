import React, { useState, useEffect } from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';

import Login from './Login/Login';
import Register from './Login/Register';
import ResetPassword from './Login/ResetPassword';
import ChangePassword from './Login/ChangePassword';

import Store from './Store/Store';
import HeaderStore from './HeaderStore/HeaderStore';

function MainPageStore() {

  // let { path } = useMatch();

  return (
    <div>      
      <Routes>
        <Route path="/" element={<HeaderStore />} />

        <Route path="logowanie" element={<Login />} />
        <Route path="rejestracja" element={<Register />} />
        <Route path="reset-hasła" element={<ResetPassword />} />
        <Route path="zmiana-hasła" element={<ChangePassword />} />

        <Route path="sklep-internetowy" element={<Store />} />
      </Routes>
    </div>
  );
}

export default MainPageStore;