import React, { useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import copy from 'copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookSquare, FaPhoneAlt, FaEnvelope, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {

  const handleCopyToClipboard = (text) => {
    copy(text);
    // alert('Skopiowano do schowka: ' + text);

    toast.dismiss();

    toast.success(`Skopiowano do schowka:\n${text}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000, // Czas wyświetlania w milisekundach (tutaj 2 sekundy)
    });
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.column}>
          <h4 className={styles.title}>DANE FIRMY</h4>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} 
                style={{ cursor: 'default' }}>
                Przedsiębiorstwo Remontowo-Handlowe „RENOX” Mirosław Wielechowski Sp. J.
              </p>
              {/* <span className={styles.underlineWhite}></span> */}
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} 
                onClick={e => {handleCopyToClipboard('11-041 Olsztyn, ul. Sokola 4')}}
                style={{ cursor: 'pointer' }}>
                11-041 Olsztyn, ul. Sokola 4
              </p>
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn}
                onClick={e => {handleCopyToClipboard('7390203185')}} 
                style={{ cursor: 'pointer' }}>
                NIP 739-020-31-85
              </p>
              <span className={styles.underlineWhite}></span>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>DANE KONTAKTOWE</h4>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} 
                onClick={e => {handleCopyToClipboard('cometweb.kontakt@gmail.com')}}
                style={{ cursor: 'pointer' }}>
                <FaEnvelope/> renox@renox.pl <ToastContainer />
              </p>
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }} onClick={e => {handleCopyToClipboard('89 523 91 52')}}>
                <FaPhoneAlt/> 89 523-91-52 <ToastContainer />
              </p> 
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }} onClick={e => {handleCopyToClipboard('89 523 91 53')}}>
                <FaPhoneAlt/> 89 523-91-53 <ToastContainer />
              </p> 
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }} onClick={e => {handleCopyToClipboard('89 523 90 82')}}>
                <FaPhoneAlt/> Fax. 89 523-90-82 <ToastContainer />
              </p> 
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>
                <a href="https://www.facebook.com/renoxPL/" target="_blank" rel="noreferrer"><FaFacebookSquare/> https://www.facebook.com/renoxPL/</a>
              </p> 
              <span className={styles.underlineWhite}></span>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>&nbsp;</h4>

          <Link to="/polityka-prywatności" className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>Polityka Prywatności</p>
              <span className={styles.underlineWhite}></span>
            </div>
          </Link>

          <Link to="/polityka-cookies" className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>Polityka Cookies</p>
              <span className={styles.underlineWhite}></span>
            </div>
          </Link>        
        </div>
      </div>

      <div className={styles.footerLogo}>
        <img 
          src={process.env.PUBLIC_URL + '/website/logo/renox_logo_white.png'} 
          alt={'Renox-logo'} 
        />
      </div>
    </footer>
  );
}

export default Footer;