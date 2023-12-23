import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageTitle.module.scss'

function StoreStartPageTitle() {

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.wrapper}>
      <h1>O nas</h1>

      <p>
      Naszą pasją jest łączenie najnowszych trendów mody z wygodą zakupów online. 
      Jesteśmy dumni, że możemy zaoferować naszym klientom wyjątkowe doświadczenie zakupowe, 
      dostarczając starannie wyselekcjonowaną kolekcję odzieży, 
      która podkreśla indywidualny styl każdej osoby.

      Nasza misja to dostarczanie wysokiej jakości odzieży, która jest nie tylko stylowa, 
      ale i wygodna. Wierzymy, że moda powinna być dostępna dla każdego, 
      dlatego nasz asortyment obejmuje różnorodne rozmiary, 
      style i kolory, aby każdy mógł znaleźć coś dla siebie.
      </p>
    </div>
  );
}

export default StoreStartPageTitle;