import React, { useState, useEffect } from 'react';
import styles from './OfferCards.module.scss';
import { Link, useNavigate } from 'react-router-dom';

function OfferCards() {
  const data = [
    {
      image: "/website/Offer/categories/czesci_do_kruszarek/stożek.jpg ",
      title: "Części do kruszarek i przesiewaczy",
      title_ua: "Запчастини для дробарок i грохотів",
      title_en: "Parts for crushers and screeners",
      category: 'Czesci_do_kruszarek_i_przesiewaczy',
      description: "Oferujemy zaawansowane technologicznie części do kruszarek, które zapewniają niezawodność i efektywność Twoich urządzeń. Nasze komponenty są projektowane, aby wytrzymać najcięższe warunki pracy, gwarantując długotrwałą wydajność i minimalne przestoje.",
      description_ua: "Ми пропонуємо технологічно вдосконалені запчастини для дробарок, які забезпечують надійність і ефективність вашого обладнання. Наші компоненти розроблені таким чином, щоб витримувати найсуворіші умови експлуатації, забезпечуючи тривалу роботу та мінімальний час простою.",
      description_en: "We offer technologically advanced crusher parts that ensure the reliability and efficiency of your equipment. Our components are designed to withstand the harshest operating conditions, ensuring long-lasting performance and minimal downtime.",
    },
    {
      image: "/website/Offer/categories/gasienice_gumowe/gasienica.jpg",
      title: "Gąsienice gumowe",
      title_ua: "Гумові гусениці",
      title_en: "Rubber tracks",
      category: 'Gasienice_do_minikoparek',
      description: "Specjalizujemy się w dostarczaniu wysokiej jakości gąsienic gumowych do różnorodnych maszyn budowlanych. Nasze gąsienice są odporna na ścieranie i przystosowane do ciężkich warunków, zapewniając optymalną przyczepność i mobilność na każdym terenie.",
      description_ua: "Ми спеціалізуємося на постачанні високоякісних гумових гусениць для різних будівельних машин. Наші гусениці стійкі до стирання та розроблені для складних умов, забезпечуючи оптимальне зчеплення та мобільність на будь-якій місцевості.",
      description_en: "We specialize in providing high-quality rubber tracks for various construction machines. Our tracks are abrasion-resistant and designed for difficult conditions, ensuring optimal traction and mobility on any terrain.",
    },
    {
      image: "/website/Offer/categories/lemiesze/lemiesz dwufazowy 1.jpg",
      title: "Lemiesze",
      title_ua: "Лемеші",
      title_en: "Plowshares",
      category: 'Lemiesze',
      description: "Nasze lemiesze są kluczowe dla wydajności Twojego sprzętu. Wykonane z najwyższej jakości stali, są idealne do intensywnych prac budowlanych, oferując trwałość i niezawodność w każdych warunkach.",
      description_ua: "Наші ножі мають вирішальне значення для продуктивності вашого обладнання. Виготовлені зі сталі найвищої якості, вони ідеально підходять для інтенсивних будівельних робіт, пропонуючи довговічність і надійність у будь-яких умовах.",
      description_en: "Our blades are crucial to the performance of your equipment. Made of the highest quality steel, they are ideal for intensive construction work, offering durability and reliability in all conditions.",
    },
    {
      image: "/website/Offer/categories/napinacze/NAPINACZ-GĄSIENICY-KOMATSU-PC200-5210240-renox.jpg",
      title: "Sprężyny i Napinacze",
      title_ua: "Пружини та натягувачі",
      title_en: "Springs and Tensioners",
      category: 'Sprezyny_napinacze',
      description: "Dostarczamy wysokowydajne napinacze, które są niezbędne do utrzymania optymalnego napięcia i wydajności Twoich maszyn. Nasze produkty są zaprojektowane tak, aby zwiększyć trwałość i zmniejszyć koszty konserwacji.",
      description_ua: "Ми постачаємо високоефективні натягувачі, необхідні для підтримки оптимального натягу та продуктивності ваших машин. Наша продукція розроблена для підвищення довговічності та зниження витрат на обслуговування.",
      description_en: "We supply high-performance tensioners that are essential to maintaining optimal tension and performance of your machines. Our products are designed to increase durability and reduce maintenance costs.",
    },
    {
      image: "/store/kategorie/PODWOZIA/podwozie CAT.jpg",
      title: "Podwozia",
      title_ua: "шасі",
      title_en: "Chassis",
      category: 'Podwozia',
      description: "Zapewniamy wysokiej jakości podwozia do maszyn budowlanych, które są kluczowe dla stabilności i efektywności pracy. Nasze podwozia są wytrzymałe i zaprojektowane do pracy w najtrudniejszych warunkach, co gwarantuje niezawodność i dłuższą żywotność Twojego sprzętu.",
      description_ua: "Ми надаємо високоякісні шасі для будівельних машин, які мають вирішальне значення для стабільності та ефективності роботи. Наші шасі міцні та розроблені для роботи в найсуворіших умовах, забезпечуючи надійність і довший термін служби вашого обладнання.",
      description_en: "We provide high-quality chassis for construction machines, which are crucial for stability and work efficiency. Our chassis are durable and designed to operate in the harshest conditions, ensuring reliability and longer life of your equipment.",
    },
    {
      image: "/website/Offer/categories/sworznie/CAT7Y2348.jpg",
      title: "Sworznie",
      title_ua: "Шпильки",
      title_en: "Pins",
      category: 'Sworznie',
      description: "Zapewniamy trwałe i precyzyjne sworznie, niezbędne do zapewnienia płynnego działania Twoich maszyn. Nasze sworznie są odporna na zużycie i zapewniają wyjątkową wytrzymałość w najcięższych warunkach pracy.",
      description_ua: "Ми пропонуємо міцні та точні штифти, необхідні для забезпечення безперебійної роботи ваших машин. Наші штифти зносостійкі та забезпечують виняткову довговічність у найважчих умовах експлуатації.",
      description_en: "We provide durable and precise pins necessary to ensure the smooth operation of your machines. Our pins are wear-resistant and provide exceptional durability under the most severe operating conditions.",
    },
    {
      image: "/store/kategorie/Tuleje/tulejabeztla.png",
      title: "Tuleje",
      title_ua: "Втулки",
      title_en: "Bushings",
      category: 'Tuleje',
      description: "Nasze tuleje są wybrane do maksymalizacji wydajności i trwałości Twoich maszyn. Wykonane z najwyższej jakości materiałów, zapewniają wyjątkową wytrzymałość i odporność na ścieranie.",
      description_ua: "Наші втулки вибрано для максимального підвищення продуктивності та довговічності ваших машин. Виготовлені з матеріалів найвищої якості, вони забезпечують виняткову міцність і стійкість до стирання.",
      description_en: "Our bushings are selected to maximize the performance and durability of your machines. Made of the highest quality materials, they provide exceptional durability and abrasion resistance.",
    },
    {
      image: "/store/kategorie/Uszczelnienia/uszczelnieniebeztla.png",
      title: "Uszczelnienia",
      title_ua: "Пломби",
      title_en: "Seals",
      category: 'Uszczelnienia',
      description: "Oferujemy zaawansowane uszczelnienia, które chronią Twoje maszyny przed uszkodzeniami i zanieczyszczeniami. Nasze produkty są zaprojektowane, aby zapewnić maksymalną ochronę i długotrwałe działanie w trudnych warunkach.",
      description_ua: "Ми пропонуємо вдосконалені ущільнення, які захищають ваші машини від пошкодження та забруднення. Наша продукція розроблена для забезпечення максимального захисту та тривалої роботи в складних умовах.",
      description_en: "We offer advanced seals that protect your machines against damage and contamination. Our products are designed to provide maximum protection and long-lasting performance in difficult conditions.",
    },
    {
      image: "/website/Offer/categories/zeby/zab-esco-ahl.jpg",
      title: "Zęby i adaptery",
      title_ua: "Зуби та перехідники",
      title_en: "Teeth and adapters",
      category: 'Zeby_adaptery',
      description: "Oferujemy zęby do maszyn budowlanych, które są zaprojektowane tak, aby sprostać najtrudniejszym zadaniom. Wytrzymałe i ostre, zapewniają wydajne kopanie i ładowanie, minimalizując zużycie i zwiększając wydajność pracy.",
      description_ua: "Ми пропонуємо зуби для будівельних машин, які призначені для виконання найскладніших завдань. Міцні та гострі, вони забезпечують ефективне копання та навантаження, мінімізуючи знос і підвищуючи ефективність роботи.",
      description_en: "We offer teeth for construction machines that are designed to cope with the most difficult tasks. Durable and sharp, they ensure efficient digging and loading, minimizing wear and increasing work efficiency.",
    },
    {
      image: "/store/kategorie/Maszyny używane/Maszyny używane.jpg",
      title: "Maszyny używane",
      title_ua: "Машини б/y",
      title_en: "Used machines",
      category: 'Maszyny_uzywane',
      description: "Specjalizujemy się w sprzedaży wysokiej jakości maszyn używanych, które są dokładnie sprawdzone i gotowe do pracy. Nasza oferta to idealne rozwiązanie dla tych, którzy szukają niezawodnych maszyn budowlanych w przystępnej cenie.",
      description_ua: "Ми спеціалізуємося на продажу високоякісної б/у техніки, яка пройшла ретельний контроль і готова до роботи. Наша пропозиція є ідеальним рішенням для тих, хто шукає надійні будівельні машини за доступною ціною.",
      description_en: "We specialize in the sale of high-quality used machines that are thoroughly checked and ready for work. Our offer is an ideal solution for those who are looking for reliable construction machines at an affordable price.",
    },
    {
      image: "/store/kategorie/Części zamienne/Części zamienne.jpg",
      title: "Części zamienne",
      title_ua: "Запчастини",
      title_en: "Części zamienne",
      category: 'Czesci_zamienne',
      description: "Oferujemy starannie selekcjonowane, używane części do maszyn budowlanych, które są ekonomiczną i ekologiczną alternatywą dla nowych komponentów. Każdy element jest dokładnie sprawdzany, aby zapewnić jego wysoką jakość i niezawodność, co pozwala na oszczędności bez kompromisów w kwestii wydajności.",
      description_ua: "Ми пропонуємо ретельно відібрані вживані деталі для будівельних машин, які є економічною та екологічною альтернативою новим компонентам. Кожен компонент ретельно перевіряється, щоб забезпечити високу якість і надійність, що дозволяє заощаджувати гроші без шкоди для продуктивності.",
      description_en: "We offer carefully selected, used parts for construction machines, which are an economic and ecological alternative to new components. Each component is carefully inspected to ensure high quality and reliability, allowing you to save money without compromising on performance.",
    },
    {
      image: "/store/kategorie/Łyżki przesiewające/Łyżki przesiewające.png",
      title: "Łyżki przesiewające",
      title_ua: "Просівні відра",
      title_en: "Sifting buckets",
      category: 'Lyzki_przesiewajace',
      description: "Nasze łyżki przesiewające to idealne rozwiązanie do sortowania i przesiewania materiałów na budowie. Wykonane z trwałych materiałów, są przystosowane do ciężkiej pracy, zapewniając wysoką wydajność i dokładność w oddzielaniu frakcji materiałów.",
      description_ua: "Наші сортувальні ковші є ідеальним рішенням для сортування та просіювання матеріалів на будівельних майданчиках. Виготовлені з міцних матеріалів, вони призначені для важких робіт, забезпечуючи високу ефективність і точність розділення фракцій матеріалу.",
      description_en: "Our screening buckets are the perfect solution for sorting and screening materials on construction sites. Made of durable materials, they are designed for heavy-duty work, ensuring high efficiency and accuracy in separating material fractions.",
    }
  ];

  const navigate = useNavigate();

  const handleLinkClick = (category) => {
    navigate(`/sklep/${category}`);
  };

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.card_grid}>
      {data.map((item, index) => {

        return (
        <div key={index} className={styles.card}>
          <img 
            key={index} 
            src={process.env.PUBLIC_URL + item.image} 
            alt={`Logo ${index + 1}`} 
          />
          {lang === 'pl' &&
            <>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </>
          }
          {lang === 'ua' &&
            <>
              <h3>{item.title_ua}</h3>
              <p>{item.description_ua}</p>
            </>
          }
          {lang === 'en' &&
            <>
              <h3>{item.title_en}</h3>
              <p>{item.description_en}</p>
            </>
          }

          {lang === 'pl' &&
            <button onClick={() => handleLinkClick(item.category)}>Zobacz więcej</button>
          }
          {lang === 'ua' &&
            <button onClick={() => handleLinkClick(item.category)}>Побачити більше</button>
          }
          {lang === 'en' &&
            <button onClick={() => handleLinkClick(item.category)}>See more</button>
          }
        </div>
      )})}
    </div>
  );
}

export default OfferCards;