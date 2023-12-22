import React, { useState, useEffect } from 'react';
import styles from './StoreStartPageDescription.module.scss'

function StoreStartPageDescription() {

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.wrapper}>
      {lang === 'pl' &&
        <p>
          RENOX to firma specjalizująca się w obsłudze ciężkich maszyn budowlanych od 1992 roku. 
          Oferujemy kompleksową obsługę, dostarczając wysokiej jakości części, 
          sprzedając maszyny używane i świadcząc fachową obsługę techniczną. 
          Nasza główna baza w Olsztynie to magazyn części do renomowanych marek, a sieć placówek w Bytomiu ułatwia dostępność. 
          Jesteśmy liderem w wprowadzaniu innowacyjnych rozwiązań, takich jak łyżki przesiewające ALLU, 
          i produkujemy tuleje i sworznie do koparek na zamówienie. Dzięki doświadczonemu personelowi logistycznemu szybko realizujemy zamówienia, 
          dostarczając je bezpośrednio do klienta. W RENOX
          dbamy o efektywną obsługę branży budowlanej, dostarczając niezbędne narzędzia i wsparcie.
        </p>
      }
      {lang === 'ua' &&
        <p>
          RENOX - компанія, що спеціалізується на експлуатації важкої будівельної техніки з 1992 року.
          Ми пропонуємо комплексне обслуговування, забезпечуючи високоякісними запчастинами,
          продаж вживаної техніки та надання професійного технічного обслуговування.
          Наша головна база в Ольштині – це склад запчастин для відомих брендів, а мережа відділень у Битомі сприяє наявності.
          Ми є лідером у впровадженні інноваційних рішень, таких як просіювальні ковші ALLU,
          та виготовляємо втулки та цапфи для екскаваторів на замовлення. Завдяки досвідченим співробітникам логістики ми швидко обробляємо замовлення,
          доставку їх безпосередньо замовнику. У RENOX
          ми забезпечуємо ефективне обслуговування будівельної галузі, надаючи необхідні інструменти та підтримку.
        </p>
      }
      {lang === 'en' &&
        <p>
          RENOX is a company specializing in the operation of heavy construction machines since 1992.
          We offer comprehensive service, providing high-quality parts,
          selling used machines and providing professional technical service.
          Our main base in Olsztyn is a warehouse of parts for renowned brands, and the network of branches in Bytom facilitates availability.
          We are a leader in introducing innovative solutions, such as ALLU screening buckets,
          and we produce bushings and pins for excavators to order. Thanks to experienced logistics staff, we quickly process orders,
          delivering them directly to the customer. At RENOX
          we ensure effective service for the construction industry by providing the necessary tools and support.
        </p>
      }
    </div>
  );
}

export default StoreStartPageDescription;