import React from 'react';
import styles from './MainPageOffer.module.scss';

function MainPageOffer() {

  const lang = localStorage.getItem('lang') || 'pl';

  const content_pl = [
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

  const content_ua = [
    {
      title: 'Запчастини/запчастини',
      cardImgId: 'icon1',
      desc: 'Наша пропозиція включає елементи шасі для всіх гусеничних машин. Ми пропонуємо всі запчастини до CAT, VOLVO, KOMATSU, JCB, LIEBHERR і CASE.'
    },
    {
      title: "Сервіс",
      cardImgId: 'icon1',
      desc: 'Ремонтуємо обладнання в рамках капітального, поточного та аварійного ремонтів. Регенерація отворів - втулка.'
    },
    {
      title: "Оренда",
      cardImgId: 'icon1',
      desc: "Надаємо на вигідних умовах послуги оренди спецтехніки для шахт і гравійних кар’єрів, наприклад, грохота та дробарки."
    },
    {
      title: "Розпродаж",
      cardImgId: 'icon1',
      desc: 'Комплексне обслуговування бульдозерів, екскаваторів та навантажувачів, продаж запчастин до будівельної техніки.'
    },
  ]

  const content_en = [
    {
      title: 'Parts/spare',
      cardImgId: 'icon1',
      desc: 'Our offer includes chassis elements for all tracked machines. We offer all parts for CAT, VOLVO, KOMATSU, JCB, LIEBHERR and CASE.'
    },
    {
      title: 'Service',
      cardImgId: 'icon1',
      desc: 'We repair devices in the scope of general overhauls, current and emergency repairs. Regeneration of holes - bushing.'
    },
    {
      title: 'Rental',
      cardImgId: 'icon1',
      desc: 'We provide rental services of specialized machines for mines and gravel pits on favorable terms, such as screeners and crushers.'
    },
    {
      title: 'Sale',
      cardImgId: 'icon1',
      desc: 'Comprehensive service for bulldozers, excavators and loaders, sale of parts for construction machines.'
    },
  ]

  const contents = {
    pl: content_pl,
    ua: content_ua,
    en: content_en,
  };  

  const currentContent = contents[lang] || contents['pl'];

  return (
    <div className={styles.wrapper}>
      {currentContent.map((item, index) => (
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
              {/* <div className={styles.e}>
                <img alt="icon" src={process.env.PUBLIC_URL + '/icons/' + item.cardImgId + '.png'} />
              </div> */}
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