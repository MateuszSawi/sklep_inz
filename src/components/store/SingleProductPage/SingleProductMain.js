import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './SingleProductMain.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { apiK, apiP } from '../../../apiConfig';

import AddToCartButton from './AddToCartButton/AddToCartButton';
import AddToFavourite from './AddToFavourite/AddToFavourite';

function SingleProductMain() {

  const { category, productCode } = useParams();

  const [product, setProduct] = useState([]);

  const [mainImage, setMainImage] = useState(product.imageUrls[0]);

  useEffect(() => {
    axios.get(`${apiP}/products/${productCode}`)
    .then(response => {
      setProduct(response.data.productBasicInfo);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // ----------------- quantity -----------------

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    // if (quantity < product.quantity){              // warunek niepozwalający na dodanie wiecej niz max produktow w magazynie
      if (quantity < 9999){
        setQuantity(quantity + 1);
      }
    // }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    let newQuantity = parseInt(e.target.value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      setQuantity(1);
    // } else if (newQuantity > product.quantity) {   // warunek niepozwalający na dodanie wiecej niz max produktow w magazynie
      // setQuantity(product.quantity);
    } else if (newQuantity > 9999) {
      setQuantity(9999);
    } else {
      setQuantity(newQuantity);
    }
  };


  return (
    <div className={styles.mainWrapper} >     
      {/* <StoreProductsPath />  */}

      <div className={styles.wrapper} >
        <div>
          <h1 className={styles.titleWrapper}>
            {product.name}
          </h1>
        </div>

        <div className={styles.mainInfo} >
          <div className={styles.imagesWrapper} >
            <div onClick={() => openModal(mainImage)}>
              <img src={mainImage} alt="Product" className={styles.mainImage} />
            </div>

            <div className={styles.smallImages} >
              {product.imageUrls.map((imageLink, index) => (
                <img src={imageLink} 
                        onClick={() => setMainImage(imageLink)} 
                        alt={`Product ${index}`} className={styles.mainImage} />
              ))}
            </div>

            {isModalOpen && (
              <div className={styles.modal}>
                <span className={styles.closeModal} onClick={closeModal}>&times;</span>
                <img src={selectedImage} alt="Powiększony produkt" className={styles.modalContent} />
              </div>
            )}
          </div>

          <div className={styles.shortDesc}>
            <p>Numer produktu: {product.productCode} </p>
            <p>Marka: {product.brand} </p>

            <p>Płeć: {product.gender} </p>
            <p>Kategoria: {product.category} </p>

            <AddToFavourite  
              products={product} 
            />
          </div>
          <div>
            <div className={styles.priceWrapper} >
              <div className={styles.price}>
                <h1>{product.price}</h1>
                <h3>zł</h3>
              </div>
              
              <p className={styles.quantity}>✔️ Na magazynie</p>
              
              <div className={styles.cartQuantity}>
                <button onClick={decreaseQuantity}><p>-</p></button>
                <input 
                  className={styles.quantityInput}
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  min="1" 
                  max={product.quantity} 
                />
                <button onClick={increaseQuantity}><p>+</p></button>
                <p>ilość</p>
              </div>

              <AddToCartButton
                products={product} 
                quantity={quantity}
              />
              <div className={styles.underline}></div>
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default SingleProductMain;
