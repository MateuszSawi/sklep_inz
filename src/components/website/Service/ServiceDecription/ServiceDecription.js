import React, { useState, useEffect } from 'react';
import styles from './ServiceDecription.module.scss';

function ServiceDecription() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_left}>
        <p>
          Wiemy jak klienci cenią sobie bezawaryjność pracy maszyn, 
          oraz jakim czasami wyzwaniem może się to okazać. 
          Naprzeciw czemu staje nasz serwis. Posiadamy rozwiązania, 
          aby utrzymać maszynę w użytku – czy chodzi tu o regularne 
          przeglądy serwisowe w stałych cenach, czy serwis szybkiej reakcji Renox 
          jest gotowy sprostać wyzwaniu.
        </p>

        <p><strong>Serwis maszyn budowlanych</strong></p>

        <p>
          Nasz serwis maszyn posiada wyspecjalizowanych mechaników, 
          którzy są w stanie uporać się różnymi problemami. 
          Serwis prowadzimy zarówno lokalnie oraz mobilnie, 
          aby móc reagować jak najszybciej i bezpośrednio u klienta.
        </p>

        <p>
          Naszą przewagą jest również fakt, że jesteśmy jednym z największych 
          dystrybutorów części zamiennych w Polsce. Posiadamy swój własny magazyn części, 
          a doskonała znajomość rynku pozwala nam na ewentualne błyskawiczne sprowadzenie 
          potrzebnych części do siebie. 
          Posiadamy wyspecjalizowaną maszynę do tulejowania i regeneracji otworów.
        </p>
      </div>

      <div className={styles.wrapper_right}>
        <img 
          src={process.env.PUBLIC_URL + '/website/Service/Renox_Olsztyn_serwis (3).jpg'} 
          alt="Renox logo" 
        />
      </div>
    </div>
  );
}

export default ServiceDecription;