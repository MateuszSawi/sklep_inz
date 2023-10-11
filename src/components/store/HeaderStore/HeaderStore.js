import React from 'react';
import { Link } from 'react-router-dom';

function HeaderStore() {
  return (
    <div className='container'>
      HeaderStore

      <Link to="/sklep/logowanie">
        <div>
          <span>Logowanie</span>
          <span></span>
        </div>
      </Link>

      <Link to="/sklep/rejestracja">
        <div>
          <span>rejestracja</span>
          <span></span>
        </div>
      </Link>

      <Link to="/sklep/reset-hasła">
        <div>
          <span>reset hasła</span>
          <span></span>
        </div>
      </Link>

      <Link to="/sklep/zmiana-hasła">
        <div>
          <span>zmiana hasła</span>
          <span></span>
        </div>
      </Link>
    </div>
  );
}

export default HeaderStore;
