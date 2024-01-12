import React, { useState, useEffect } from 'react';
import styles from './Footer.module.scss';
import copy from 'copy-to-clipboard';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookSquare, FaPhoneAlt, FaEnvelope, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {

  const handleCopyToClipboard = (text) => {
    // copy(text);
    // alert('Skopiowano do schowka: ' + text);

    // toast.dismiss();

    // toast.success(`Skopiowano do schowka:\n${text}`, {
    //   position: toast.POSITION.TOP_CENTER,
    //   autoClose: 1000, // Czas wyświetlania w milisekundach (tutaj 2 sekundy)
    // });
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
                Clothes Shop
              </p>
              {/* <span className={styles.underlineWhite}></span> */}
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} 
                onClick={e => {handleCopyToClipboard('11-111 Gdańsk, ul. Pistacjowa 1')}}
                style={{ cursor: 'pointer' }}>
                11-111 Gdańsk, ul. Pistacjowa 1
              </p>
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn}
                onClick={e => {handleCopyToClipboard('1111111111')}} 
                style={{ cursor: 'pointer' }}>
                NIP 111-111-11-11
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
                onClick={e => {handleCopyToClipboard('contact@clothes.shop')}}
                style={{ cursor: 'pointer' }}>
                <FaEnvelope/> contact@clothes.shop <ToastContainer />
              </p>
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }} onClick={e => {handleCopyToClipboard('111 111 111')}}>
                <FaPhoneAlt/> 111-111-111 <ToastContainer />
              </p> 
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }} onClick={e => {handleCopyToClipboard('222 222 222')}}>
                <FaPhoneAlt/> 222-222-222 <ToastContainer />
              </p> 
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }} onClick={e => {handleCopyToClipboard('33 333 33 33')}}>
                <FaPhoneAlt/> Fax. 33 333-33-33 <ToastContainer />
              </p> 
              <span className={styles.underlineWhite}></span>
            </div>
          </div>

          <div className={styles.link}>
            <div className={styles.box}>
              <p className={styles.footerColumn} style={{ cursor: 'pointer' }}>
                <a href="https://facebook/clothesShopXX" target="_blank" rel="noreferrer"><FaFacebookSquare/> https://facebook/clothesShopXX</a>
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
          className={styles.logo}
          src={process.env.PUBLIC_URL + '/website/logo/Clothes_white.png'} 
          alt={'Renox-logo'} 
        />
      </div>
    </footer>
  );
}

export default Footer;