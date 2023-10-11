import React from 'react';
import styles from './MainPageOffer.module.scss';

function MainPageOffer() {

  const content = [
    {
      title: 'Części/nzamienne',
      cardImgId: 'icon1',
      desc: 'Nasza oferta zawiera elementy podwoziowe do wszystkich maszyn gąsienicowych. Oferujemy wszystkie części do CAT, VOLVO, KOMATSU, JCB, LIEBHERR i CASE.'
    },
    {
      title: 'Serwis',
      cardImgId: 'icon1',
      desc: 'Wykonujemy naprawy urządzeń w zakresie remontów kapitalnych, napraw bieżących i awaryjnych. Regenerowanie otworów – tulejowanie.'
    },
    {
      title: 'Wynajem',
      cardImgId: 'icon1',
      desc: 'Świadczymy usługi wynajmu specjalistycznych maszyn do kopalni, żwirowni na korzystnych warunkach takich jak Przesiewacze i Kruszarki.'
    },
    {
      title: 'Sprzedaż',
      cardImgId: 'icon1',
      desc: 'Kompleksowa obsługa spycharek, koparek i ładowarek, sprzedaż części do maszyn budowlanych.'
    },
  ]

  return (
    <div className={styles.wrapper}>
      {content.map((item, index) => (
        <div key={index} className={styles.a}> 
          <div className={styles.b}> 

            <div className={styles.d}>
              <h1>
                {item.title.split('/n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex !== item.title.split('/n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </div>

            <div className={styles.c}>
              <div className={styles.e}>
                <img alt="icon" src={process.env.PUBLIC_URL + '/icons/' + item.cardImgId + '.png'} />
              </div>
              <p>
                {item.desc}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default MainPageOffer;


// import React, { useState, useEffect } from 'react';
// import styles from './MainPageOffer.module.scss';

// function MainPageOffer() {

//   const content = [
//     {
//       title: 'Części/nzamienne',
//       cardImgId: 'icon1',
//       desc: 'Nasza oferta zawiera elementy podwoziowe do wszystkich maszyn gąsienicowych. Oferujemy wszystkie części do CAT, VOLVO, KOMATSU, JCB, LIEBHERR i CASE.'
//     },
//     {
//       title: 'Serwis',
//       cardImgId: 'icon1',
//       desc: 'Wykonujemy naprawy urządzeń w zakresie remontów kapitalnych, napraw bieżących i awaryjnych. Regenerowanie otworów – tulejowanie.'
//     },
//     {
//       title: 'Wynajem',
//       cardImgId: 'icon1',
//       desc: 'Świadczymy usługi wynajmu specjalistycznych maszyn do kopalni, żwirowni  na korzystnych warunkach takich jak Przesiewacze i Kruszarki.'
//     },
//     {
//       title: 'Sprzedaż',
//       cardImgId: 'icon1',
//       desc: 'Kompleksowa obsługa spycharek, koparek i ładowarek, sprzedaż części do maszyn budowlanych.'
//     },
//   ]

//   return (
//     <div className={styles.wrapper}>
//       {content.map((item, index) => (
//         <div className={styles.a}> 
//           <div className={styles.b}> 

//             <div className={styles.d}>
//               <h1>{item.title}</h1>
//             </div>

//             <div className={styles.c}>
//               <div className={styles.e}>
//                 <img alt="icon" src={process.env.PUBLIC_URL + '/icons/' + item.cardImgId + '.png'} />
//               </div>
//               <p>
//                 {item.desc}
//               </p>
//             </div>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MainPageOffer;