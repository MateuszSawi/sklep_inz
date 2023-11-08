import React, { useState, useEffect } from 'react';
import styles from './Contact.module.scss';

import ContactInfo from './ContactInfo/ContactInfo';
import ContactMenu from './ContactMenu/ContactMenu';
import ContactForm from './ContactForm/ContactForm';
import ContactNewsletter from './ContactNewsletter/ContactNewsletter';

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ContactInfo />
      </div>

      <div className={styles.wrapper}>
        <ContactMenu />
      </div>

      <div className={styles.wrapper}>
        <ContactForm />
      </div>

      <div className={styles.wrapper}>
        <ContactNewsletter />
      </div>
    </div>
  );
}

export default Contact;