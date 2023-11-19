import React, { useState, useEffect } from 'react';
import styles from './OfferCards.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function OfferCards() {
  const data = [
    {
      image: "/website/Offer/categories/czesci_do_kruszarek/stożek.jpg ",
      title: "Części do kruszareki przesiewaczy",
      category: 'Czesci_do_kruszarek_i_przesiewaczy',
      description: "Oferujemy zaawansowane technologicznie części do kruszarek, które zapewniają niezawodność i efektywność Twoich urządzeń. Nasze komponenty są projektowane, aby wytrzymać najcięższe warunki pracy, gwarantując długotrwałą wydajność i minimalne przestoje."
    },
    {
      image: "/website/Offer/categories/gasienice_gumowe/gasienica.jpg",
      title: "Gąsienice gumowe",
      category: 'Gasienice_do_minikoparek',
      description: "Specjalizujemy się w dostarczaniu wysokiej jakości gąsienic gumowych do różnorodnych maszyn budowlanych. Nasze gąsienice są odporna na ścieranie i przystosowane do ciężkich warunków, zapewniając optymalną przyczepność i mobilność na każdym terenie."
    },
    {
      image: "/website/Offer/categories/lemiesze/lemiesz dwufazowy 1.jpg",
      title: "Lemiesze",
      category: 'Lemiesze',
      description: "Nasze lemiesze są kluczowe dla wydajności Twojego sprzętu. Wykonane z najwyższej jakości stali, są idealne do intensywnych prac budowlanych, oferując trwałość i niezawodność w każdych warunkach."
    },
    {
      image: "/website/Offer/categories/napinacze/NAPINACZ-GĄSIENICY-KOMATSU-PC200-5210240-renox.jpg",
      title: "Sprężyny i Napinacze",
      category: 'Sprezyny_napinacze',
      description: "Dostarczamy wysokowydajne napinacze, które są niezbędne do utrzymania optymalnego napięcia i wydajności Twoich maszyn. Nasze produkty są zaprojektowane tak, aby zwiększyć trwałość i zmniejszyć koszty konserwacji."
    },
    {
      image: "/store/kategorie/PODWOZIA/podwozie CAT.jpg",
      title: "Podwozia",
      category: 'Podwozia',
      description: "Zapewniamy wysokiej jakości podwozia do maszyn budowlanych, które są kluczowe dla stabilności i efektywności pracy. Nasze podwozia są wytrzymałe i zaprojektowane do pracy w najtrudniejszych warunkach, co gwarantuje niezawodność i dłuższą żywotność Twojego sprzętu."
    },
    {
      image: "/website/Offer/categories/sworznie/CAT7Y2348.jpg",
      title: "Sworznie",
      category: 'Sworznie',
      description: "Zapewniamy trwałe i precyzyjne sworznie, niezbędne do zapewnienia płynnego działania Twoich maszyn. Nasze sworznie są odporna na zużycie i zapewniają wyjątkową wytrzymałość w najcięższych warunkach pracy."
    },
    {
      image: "/store/kategorie/Tuleje/tulejabeztla.png",
      title: "Tuleje",
      category: 'Tuleje',
      description: "Nasze tuleje są wybrane do maksymalizacji wydajności i trwałości Twoich maszyn. Wykonane z najwyższej jakości materiałów, zapewniają wyjątkową wytrzymałość i odporność na ścieranie."
    },
    {
      image: "/store/kategorie/Uszczelnienia/uszczelnieniebeztla.png",
      title: "Uszczelnienia",
      category: 'Uszczelnienia',
      description: "Oferujemy zaawansowane uszczelnienia, które chronią Twoje maszyny przed uszkodzeniami i zanieczyszczeniami. Nasze produkty są zaprojektowane, aby zapewnić maksymalną ochronę i długotrwałe działanie w trudnych warunkach."
    },
    {
      image: "/website/Offer/categories/zeby/zab-esco-ahl.jpg",
      title: "Zęby i adaptery",
      category: 'Zeby_adaptery',
      description: "Oferujemy zęby do maszyn budowlanych, które są zaprojektowane tak, aby sprostać najtrudniejszym zadaniom. Wytrzymałe i ostre, zapewniają wydajne kopanie i ładowanie, minimalizując zużycie i zwiększając wydajność pracy."
    },
    {
      image: "/store/kategorie/Maszyny używane/Maszyny używane.jpg",
      title: "Maszyny używane",
      category: 'Maszyny_uzywane',
      description: "Specjalizujemy się w sprzedaży wysokiej jakości maszyn używanych, które są dokładnie sprawdzone i gotowe do pracy. Nasza oferta to idealne rozwiązanie dla tych, którzy szukają niezawodnych maszyn budowlanych w przystępnej cenie."
    },
    {
      image: "/store/kategorie/Części zamienne/Części zamienne.jpg",
      title: "Części zamienne",
      category: 'Czesci_zamienne',
      description: "Oferujemy starannie selekcjonowane, używane części do maszyn budowlanych, które są ekonomiczną i ekologiczną alternatywą dla nowych komponentów. Każdy element jest dokładnie sprawdzany, aby zapewnić jego wysoką jakość i niezawodność, co pozwala na oszczędności bez kompromisów w kwestii wydajności."
    },
    {
      image: "/store/kategorie/Łyżki przesiewające/Łyżki przesiewające.png",
      title: "Łyżki przesiewające",
      category: 'Lyzki_przesiewajace',
      description: "Nasze łyżki przesiewające to idealne rozwiązanie do sortowania i przesiewania materiałów na budowie. Wykonane z trwałych materiałów, są przystosowane do ciężkiej pracy, zapewniając wysoką wydajność i dokładność w oddzielaniu frakcji materiałów."
    }
  ];

  const navigate = useNavigate();

  const handleLinkClick = (category) => {
    navigate(`/sklep/${category}`);
  };

  return (
    <div className={styles.card_grid}>
      {data.map((item, index) => {

        console.log(process.env.PUBLIC_URL + item.image)

        return (
        <div key={index} className={styles.card}>
          <img 
            key={index} 
            src={process.env.PUBLIC_URL + item.image} 
            alt={`Logo ${index + 1}`} 
          />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={() => handleLinkClick(item.category)}>Zobacz więcej</button>
        </div>
      )})}
    </div>
  );
}

export default OfferCards;