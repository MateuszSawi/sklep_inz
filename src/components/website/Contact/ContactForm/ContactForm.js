import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';

function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Wysyłanie wiadomości na podany adres e-mail
    const mailtoLink = `mailto:renox@renox.pl?subject=Wiadomość ze strony&body=Imię i nazwisko: ${name}%0D%0AEmail: ${email}%0D%0ANumer telefonu: ${phone}%0D%0AWiadomość: ${message}`;
    window.location.href = mailtoLink;

    // Czyszczenie pól formularza
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const lang = localStorage.getItem('lang') || 'pl';

  return (
    <div className={styles.container}>
      <div className={styles.wrapper_left}>
        {lang === 'pl' &&
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="name"
                placeholder="Imię i nazwisko"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="tel"
                id="phone"
                placeholder="Numer telefonu"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <textarea
                id="message"
                placeholder="Twoja wiadomość"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className={styles.button} type="submit">Wyślij</button>
          </form>
        }

        {lang === 'ua' &&
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="name"
                placeholder="Ім'я та прізвище"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                placeholder="Електронна пошта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="tel"
                id="phone"
                placeholder="Номер телефону"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <textarea
                id="message"
                placeholder="Ваше повідомлення"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className={styles.button} type="submit">Надіслати</button>
          </form>
        }

        {lang === 'en' &&
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                id="name"
                placeholder="Name and surname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                type="tel"
                id="phone"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <textarea
                id="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button className={styles.button} type="submit">Send</button>
          </form>
        }
      </div>

      <div className={styles.wrapper_right}>
        <img 
          src={process.env.PUBLIC_URL + '/website/logo/renox_logo.jpg'} 
          alt="Renox logo" 
        />
      </div>
    </div>
  );
}

export default ContactForm;