import React from 'react';
import { useParams  } from 'react-router-dom';
import styles from './AddToFavourite.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddToFavourite({ productCode, productName, price, mainImage, category }) {

  const toastId = React.useRef(null);

  // const { categoryLink, productCodeLink } = useParams();

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast("Dodano do ulubionych!", {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000,
        toastId: toastId.current
      });
    } else {
      toast.update(toastId.current, {
        progressStyle: { backgroundColor: 'green' },
        autoClose: 1000
      });
    }
  };

  const handleAddToFavourites = (event) => {
    event.stopPropagation();
    notify();
    const currentFavourites = JSON.parse(localStorage.getItem('favourite')) || [];
    const isProductInFavourites = currentFavourites.some(item => item.productCode === productCode);
  
    if (!isProductInFavourites) {
      const favouriteProduct = {
        productCode,
        productName,
        mainImage,
        price,
        category
      };
      currentFavourites.push(favouriteProduct);
  
      localStorage.setItem('favourite', JSON.stringify(currentFavourites));
    }
  };

  return (
    <div className={styles.addToFavourite}>
      <button 
        onClick={(event) => handleAddToFavourites(event)}
      >
        <FontAwesomeIcon icon={faHeart} className={styles.iconHeart} />
        <p>Dodaj do ulubionych</p>
      </button>
    </div>
  );
}

export default AddToFavourite;
