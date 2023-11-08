import React, { useState, useEffect } from 'react';
import styles from './Privacy.module.scss';

function Privacy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Polityka Prywatności</h1>

      <h2 className={styles.subHeader}>§1 Administrator danych osobowych</h2>

      <ol>
        <li>
          <p className={styles.paragraph}>
            Administratorem danych osobowych w rozumieniu art. 4 pkt 4 RODO jest Mirosław Wielechowski Przedsiębiorstwo Remontowo-Handlowe „RENOX” Mirosław Wielechowski Sp. J. 11-041 Olsztyn, ul. Sokola 4 KRS 0000410742, REGON 008024721, NIP 7390011623 Dane kontaktowe administratora danych:
          </p>
        </li>

        <ul>
          <li>
            <p className={styles.paragraph}>
              telefon: 89 523-91-52;
            </p>
          </li>
          <li>
            <p className={styles.paragraph}>
              adres e-mail: renox@renox.pl.
            </p>
          </li>
        </ul>

        <li>
          <p className={styles.paragraph}>
            Administrator w myśl art. 32 ust. 1 RODO przestrzega zasady ochrony danych osobowych oraz stosuje odpowiednie środki techniczne i organizacyjne w celu zapobieżenia przypadkowego lub niezgodnego z prawem zniszczenia, utraty, modyfikacji, nieuprawnionego ujawnienia lub nieuprawnionego dostępu do danych osobowych przetwarzanych w związku z prowadzoną działalnością.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Podanie danych osobowych przez Panią/Pana jest dobrowolne, ale niezbędne w celu zawarcia umowy z administratorem danych.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Administrator danych przetwarzane dane osobowe w postaci danych identyfikacyjnych (imienia i nazwiska oraz nazwy firmy), danych adresowych, numeru identyfikacji podatkowej i innych numerów rejestrowych, numeru rachunku bankowego, serii i numeru dokumentu tożsamości, danych kontaktowych (numer telefonu), danych identyfikacyjnych osób wskazanych do kontaktu przez kontrahenta/klienta, z zastrzeżeniem, iż zakres przetwarzanych danych jest zależny od celu w jakim dane zostały uzyskane.
          </p>
        </li>
      </ol>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§2 Cel i podstawy przetwarzania danych osobowych</h2>

      <p className={styles.paragraph}>
        Administrator przetwarza dane osobowe w następujących celach:
      </p>

      <ol>
        <li>
          <p className={styles.paragraph}>
            Zawieranie i realizacja umów zarówno z kontrahentami (tj. podmiotami świadczącymi usługi na rzecz administratora danych) jak i z klientami (tj. podmiotami korzystającymi z usług administratora danych), na podstawie zawartej umowy (art. 6 ust. 1 lit. b RODO);
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Obsługa procesu reklamacyjnego, na podstawie obowiązku ciążącym na administratorze danych w związku z obowiązującymi przepisami prawa (art. 6 ust. 1 lit. c RODO);
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Rachunkowych związanych z wystawianiem dokumentów rozliczeniowych, na podstawie przepisów prawa podatkowego, w tym ustawy z dn. 29.09.1994 r. o rachunkowości oraz ustawy z dn. 11.03.2004 r. o podatku od towarów i usług (art. 6 ust. 1 lit. c RODO);
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Archiwizacja danych dla ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami, co jest prawnie uzasadnionym interesem administratora danych (art. 6 ust. 1 lit f RODO);
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Marketing bezpośredni własnych produktów, co jest prawnie uzasadnionym interesem administratora danych (art. 6 ust. 1 lit. f RODO).
          </p>
        </li>
      </ol>
      
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§3 Odbiorcy danych. Przekazywanie danych do państw trzecich</h2>
      
      <ol>
        <li>
          <p className={styles.paragraph}>
            Odbiorcami danych osobowych przetwarzanych przez administratora danych mogą być podwykonawcy – podmioty, z których usług korzysta administrator danych przy przetwarzaniu danych np. biura rachunkowe, kancelarie prawne;
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Dane osobowe nie będą przekazywane do państw trzecich tj. do państwa spoza Europejskiego Obszaru Gospodarczego.
          </p>
        </li>
      </ol>
      
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§4 Okres przechowywania danych osobowych</h2>

      <ol>
        <li>
          <p className={styles.paragraph}>
            Administrator danych przechowuje dane osobowe przez okres obowiązywania umowy zawartej z osobą, której dane dotyczą oraz po zakończeniu jej obowiązywania w celach związanych z dochodzeniem roszczeń związanych z umową, wykonania obowiązków wynikających z obowiązujących przepisów prawa, ale przez czas nie dłuższy niż 10 lat.
          </p>
        </li>
      </ol>
      
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§5 Uprawnienia osoby, której dane dotyczą</h2>

      <ol>
        <li>
          <p className={styles.paragraph}>
            Każda osoba, której dane osobowe są przetwarzane przez administratora ma prawo dostępu do treści swoich danych, prawo do ich sprostowania, usunięcia („prawo do bycia zapomnianym”), ograniczenia przetwarzania, prawo do przenoszenia danych, prawo sprzeciwu oraz prawo do cofnięcia zgody na przetwarzanie danych w dowolnym momencie.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Każda osoba, która uzna, że jej dane osobowe są przetwarzane przez administratora z naruszeniem przepisów RODO lub innych właściwych przepisów prawa, a dotyczących przetwarzania danych osobowych, ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default Privacy;