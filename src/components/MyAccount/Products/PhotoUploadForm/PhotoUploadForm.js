import React, { useState } from 'react';
import axios from 'axios';
import styles from './PhotoUploadForm.module.scss';

const PhotoUploadForm = (props) => {

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhoto = {
          image: reader.result,
          image_name: file.name
        };
        props.setPhotos(prevPhotos => [...prevPhotos, newPhoto]);
      };
      reader.onerror = (error) => console.error(error);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>Pierwsze wgrane zdjęcie jest zdjęciem głównym produktu.</p>
      <input type="file" onChange={handlePhotoChange} />
      {props.photos.map((photo, index) => (
        <div key={index}>{photo.image_name}</div>
      ))}
    </div>
  );
};

export default PhotoUploadForm;
