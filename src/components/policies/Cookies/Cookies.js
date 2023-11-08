import React, { useState, useEffect } from 'react';
import styles from './Cookies.module.scss';

function Cookies() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Polityka Cookies</h1>

      <p className={styles.paragraph}>
        Poniższa Polityka Cookies określa zasady zapisywania i uzyskiwania dostępu do danych na Urządzeniach Użytkowników korzystających z Serwisu do celów świadczenia usług drogą elektroniczną przez Administratora Serwisu.
      </p>

      <h2 className={styles.subHeader}>§ 1 Definicje</h2>

      <ul>
        <li>
          <p className={styles.paragraph}>
            Serwis – serwis internetowy działający pod adresem https://renox.pl/
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Serwis zewnętrzny – serwis internetowe partnerów, usługodawców lub usługobiorców Administratora
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Administrator – firma Przedsiębiorstwo Remontowo-Handlowe „RENOX” Mirosław Wielechowski Sp. J., prowadząca działalność pod adresem: 11-041 Olsztyn, ul. Sokola 4, o nadanym numerze identyfikacji podatkowej (NIP): 739-020-31-85, świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu oraz przechowująca i uzyskująca dostęp do informacji w urządzeniach Użytkownika
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Użytkownik – osoba fizyczna, dla której Administrator świadczy usługi drogą elektroniczna za pośrednictwem Serwisu.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Urządzenie – elektroniczne urządzenie wraz z oprogramowaniem, za pośrednictwem, którego Użytkownik uzyskuje dostęp do Serwisu
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Cookies (ciasteczka) – dane tekstowe gromadzone w formie plików zamieszczanych na Urządzeniu Użytkownika
          </p>
        </li>
      </ul>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§2 Rodzaje Cookies</h2>

      <ul>
        <li>
          <p className={styles.paragraph}>
            Cookies wewnętrzne – pliki zamieszczane i odczytywane z Urządzenia Użytkownika przes system teleinformatyczny Serwisu
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Cookies zewnętrzne – pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez systemy teleinformatyczne Serwisów zewnętrznych
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Cookies sesyjne – pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis lub Serwisy zewnętrzne podczas jednej sesji danego Urządzenia. Po zakończeniu sesji pliki są usuwane z Urządzenia Użytkownika.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Cookies trwałe – pliki zamieszczane i odczytywane z Urządzenia Użytkownika przez Serwis lub Serwisy zewnętrzne do momentu ich ręcznego usunięcia. Pliki nie są usuwane automatycznie po zakończeniu sesji Urządzenia chyba że konfiguracja Urządzenia Użytkownika jest ustawiona na tryb usuwanie plików Cookie po zakończeniu sesji Urządzenia.
          </p>
        </li>
      </ul>
      
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§3 Bezpieczeństwo</h2>
      
      <ul>
        <li>
          <p className={styles.paragraph}>
            Mechanizmy składowania i odczytu – Mechanizmy składowania i odczytu Cookies nie pozwalają na pobierania jakichkolwiek danych osobowych ani żadnych informacji poufnych z Urządzenia Użytkownika. Przeniesienie na Urządzenie Użytkownika wirusów, koni trojańskich oraz innych robaków jest praktynie niemożliwe.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Cookie wewnętrzne – zastosowane przez Administratora Cookie wewnętrzne są bezpieczne dla Urządzeń Użytkowników
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Cookie zewnętrzne – za bezpieczeństwo plików Cookie pochodzących od partnerów Serwisu Administrator nie ponosi odpowiedzialności. Lista partnerów zamieszczona jest w dalszej części Polityki Cookie.
          </p>
        </li>
      </ul>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§4 Cele do których wykorzystywane są pliki Cookie</h2>

      <ul>
        <li>
          <p className={styles.paragraph}>
            Usprawnienie i ułatwienie dostępu do Serwisu – Administrator może przechowywać w plikach Cookie informacje o prefernecjach i ustawieniach użytkownika dotyczących Serwisu aby usprawnić, polepszyć i przyśpieszyć świadczenie usług w ramach Serwisu.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Logowanie – Administrator wykorzystuje pliki Cookie do celów logowania Użytkowników w Serwisie
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Marketing i reklama – Administrator oraz Serwisy zewnętrzne wykorzystują pliki Cookie do celów marketingowych oraz serwowania reklam Użytkowników.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Dane statystyczne – Administrator oraz Serwisy zewnętrzne wykorzystuje pliki Cookie do zbirania i przetwarzania danych statystycznych takich jak np. statystyki odwiedzin, statystyki Urządzeń Użytkowników czy statystyki zachowań użytkowników. Dane te zbierane są w celu analizy i ulepszania Serwisu.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Usługi społecznościowe – Administrator oraz Serwisy zewnętrzne wykorzystują pliki Cookie do wsparcia usług społecznościowych
          </p>
        </li>
      </ul>
      
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§5 Serwisy zewnętrzne</h2>

      <ul>
        <li>
          <p className={styles.paragraph}>
            Administrator współpracuje z następującymi serwisami zewnętrznymi, które mogą zamieszczać pliki Cookie na Urządzeniach Użytkownika:
          </p>
        </li>
        <ul>
          <li>
            <p className={styles.paragraph}>
              Google Analytics
            </p>
          </li>
          <li>
            <p className={styles.paragraph}>
              Google AdSense
            </p>
          </li>
          <li>
            <p className={styles.paragraph}>
              Google AdWords
            </p>
          </li>
          <li>
            <p className={styles.paragraph}>
              Google+
            </p>
          </li>
          <li>
            <p className={styles.paragraph}>
              Facebook
            </p>
          </li>
        </ul>
      </ul>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§6 Możliwości określania warunków przechowywania i uzyskiwania dostępu na Urządzeniach Użytkownika przez Serwis i Serwisy zewnętrzne</h2>

      <ul>
        <li>
          <p className={styles.paragraph}>
            Użytkownik może w dowolnym momencie, samodzielnie zmienić ustawienia dotyczące zapisywania, usuwania oraz dostępu do danych zapisanych plików Cookies
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Informacje o sposobie wyłączenia plików Cookie w najpopularniejszych przeglądarkach komputerowych i urządzeń mobilnych dostępna są na stronie: https://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do tej pory pliki Cookie korzystając z narzędzi Urządzenia Użytkownika za pośrednictwem którego Użytkowanik korzysta z usług Serwisu.
          </p>
        </li>
      </ul>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§7 Wyłączenie odpowiedzialności</h2>

      <ul>
        <li>
          <p className={styles.paragraph}>
            Administrator stosuje wszelkie możliwe środki w celu zapewnienia bezpieczeństwa danych umieszczanych w plikach Cookie. Należy jednak zwrócić uwagę, że zapewnienie bezpieczeństwa tych danych zależy od obu stron, w tym działalności Użytkownika oraz stanu zabezpieczeń urządzenia z którego korzysta.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Administrator nie bierze odpowiedzialności za przechwycenie danych zawartych w plikach Cookie, podszycie się pod sesję Użytkownika lub ich usunięcie, na skutek świadomej lub nieświadomej działalność Użytkownika, wirusów, koni trojańskich i innego oprogramowania szpiegującego, którymi może być zainfekowane Urządzenie Użytkownika.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Użytkownicy w celu zabezpieczenia się przed wskazanymi w punkcie poprzednim zagrożeniami powinni stosować się do zasad bezpiecznego korzystania z internetu.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Usługi świadczone przez podmioty trzecie są poza kontrolą Administratora. Podmioty te mogą w każdej chwili zmienić swoje warunki świadczenia usług, cel oraz wykorzystanie plików cookie. Administrator nie odpowiada na tyle na ile pozwala na to prawo za działanie plików cookies używanych przez serwisy partnerskie. Użytkownicy w każdej chwili mogą samodzielnie zarządzać zezwoleniami i ustawieniami plików cookie dla każdej dowolnej witryny.
          </p>
        </li>
      </ul>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§8 Wymagania Serwisu</h2>

      <ul>
        <li>
          <p className={styles.paragraph}>
            Ograniczenie zapisu i dostępu do plików Cookie na Urządzeniu Użytkownika może spowodować nieprawidłowe działanie niektórych funkcji Serwisu.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Administrator nie ponosi żadnej odpowiedzialności za nieprawidłowo działające funkcje Serwisu w przypadku gdy Użytkownik ograniczy w jakikolwiek sposób możliwość zapisywania i odczytu plików Cookie.
          </p>
        </li>
      </ul>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <h2 className={styles.subHeader}>§9 Zmiany w Polityce Cookie</h2>

      <ul>
        <li>
          <p className={styles.paragraph}>
            Administrator zastrzega sobie prawo do dowolnej zmiany niniejszej Polityki Cookie bez konieczności informowania o tym użytkowników.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Wprowadzone zmiany w Polityce Cookie zawsze będą publikowane na tej stronie.
          </p>
        </li>
        <li>
          <p className={styles.paragraph}>
            Wprowadzone zmiany wchodzą w życie w dniu publikacji Polityki Cookie.
          </p>
        </li>
      </ul>

    </div>
  );
}

export default Cookies;