import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './SingleProductMain.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { apiK, apiP } from '../../../apiConfig';
import categoriesData from '../StoreProductsPage/categories';

import AddToCartButton from './AddToCartButton/AddToCartButton';
import AddToFavourite from './AddToFavourite/AddToFavourite';

function SingleProductMain() {
  const { category, productCode } = useParams();

  const selectedCurrency = localStorage.getItem('selectedCurrency');
  const exchangeRate = localStorage.getItem('exchangeRate');

  const [product, setProduct] = useState([]);
  const [amount, setAmount] = useState(1);
  const [productDetails, setProductDetails] = useState([]);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    axios.get(`${apiP}/products/${productCode}`)
    .then(response => {
      setProduct(response.data.productBasicInfo);
      setProductDetails(response.data.productDetails);
      setMainImage(response.data.productBasicInfo.imageUrls[0]);
      setAmount(response.data.productDetails.amount)
      console.log(amount, '|', typeof(amount))
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
    if (quantity < amount){
      setQuantity(quantity + 1);
    }
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
    } else if (newQuantity > amount) {
      setQuantity(amount);
    } else {
      setQuantity(newQuantity);
    }
  };

  const [selectedColour, setSelectedColour] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelection = (colour, size) => {
    if (selectedColour === colour && selectedSize === size) {
      setSelectedColour('');
      setSelectedSize('');
    } else {
      setSelectedColour(colour);
      setSelectedSize(size);
    }
  };

  const displayCategory = categoriesData.find(cat => cat.category === product.category)?.categoryToDisplay || product.category;

  function translateColor(color) {
    const colors = {
      'RED': 'Czerwony',
      'BLUE': 'Niebieski',
      'GREEN': 'Zielony',
      'YELLOW': 'Żółty',
      'BLACK': 'Czarny',
      'WHITE': 'Biały',
      'PURPLE': 'Fioletowy',
      'ORANGE': 'Pomarańczowy',
      'PINK': 'Różowy',
      'GRAY': 'Szary',
      'BROWN': 'Brązowy',
    };
  
    return colors[color.toUpperCase()] || color;
  }

  function translateGender(gender) {
    const genders = {
      'ALL': 'Wszystkie',
      'WOMEN': 'Kobiety',
      'MEN': 'Mężczyźni',
      'UNISEX': 'Unisex',
    };
  
    return genders[gender] || gender;
  }

  function amountHandler(amount) {
    if (amount === 1) {
      return 'sztuka';
    } else if (amount > 1 && amount < 5) {
      return 'sztuki';
    } else {
      return 'sztuk';
    }
  }
  
  return (
    <div className={styles.mainWrapper} >     
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
              <img src={mainImage} 
                        onClick={() => setMainImage(mainImage)} 
                        alt={`Product1`} className={styles.mainImage} />
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

            <p>Płeć: {translateGender(product.gender)}</p>
            <p>Kategoria: {displayCategory} </p>

            <AddToFavourite  
              productCode={product.productCode}
              productName={product.name}
              mainImage={mainImage}
              price={product.price}
              category={product.category}
            />
          </div>

          <div>
            <div className={styles.priceWrapper} >
              <div className={styles.price}>
                <h1>{(product.price * exchangeRate).toFixed(2)}</h1>
                <h3>{selectedCurrency}</h3>
              </div>
              
              {amount !== 0 && amount !== '0' &&
                <p className={styles.quantity}>✔️ Na magazynie - {amount} {amountHandler(amount)}</p>
              }
              {amount === 0 &&
                <p className={styles.quantity}>Niedostępne</p>
              }

              <div className={styles.cartQuantity}>
                <button onClick={decreaseQuantity}><p>-</p></button>
                <input 
                  className={styles.quantityInput}
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  min="1" 
                  max={product.amount} 
                />
                <button onClick={increaseQuantity}><p>+</p></button>
                <p>ilość</p>
              </div>

              <AddToCartButton
                quantity={quantity}
                amount={amount}
                selectedColour={selectedColour}
                selectedSize={selectedSize}
                brand={product.brand}
                productName={product.name}
                mainImage={mainImage}
                price={product.price}
                category={product.category}
                productCode={product.productCode}
              />

              <div className={styles.underline}></div>
            </div>
          </div>
        </div>

        <div>
        {productDetails.colourAndSizeMap && Object.entries(productDetails.colourAndSizeMap).map(([colour, sizes]) => (
            <div key={colour} className={styles.selectionWrapper}>
              <h3>{translateColor(colour)}</h3>
              {sizes.map(size => (
                <button
                key={size}
                onClick={() => handleSizeSelection(colour, size)}
                className={`${selectedColour === colour && selectedSize === size ? styles.selected : ''}`}
              >
                {size}
              </button>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.shortDescSmallPx}>
          <p>Numer produktu: {product.productCode} </p>
          <p>Marka: {product.brand} </p>

          <p>Płeć: {translateGender(product.gender)}</p>
          <p>Kategoria: {displayCategory} </p>

          <AddToFavourite  
            brand={product.brand}
            gender={product.gender}
            productName={product.name}
            mainImage={mainImage}
            price={product.price}
            amount={amount}
          />
        </div>

        <div>
          <div className={styles.priceWrapperSmallPx} >
            <div className={styles.price}>
              <h1>{product.price}</h1>
              <h3>zł</h3>
              {amount}
            </div>
            
              {amount !== 0 && amount !== '0' &&
                <p className={styles.quantity}>✔️ Na magazynie - {amount} {amountHandler(amount)}</p>
              }
              {amount == 0 &&
                <p className={styles.quantity}>Niedostępne</p>
              }
            
            {amount !== 0 && amount !== '0' &&
              <div className={styles.cartQuantity}>
                <button onClick={decreaseQuantity}><p>-</p></button>
                <input 
                  className={styles.quantityInput}
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  min="1" 
                  max={product.amount} 
                />
                <button onClick={increaseQuantity}><p>+</p></button>
                <p>ilość</p>
              </div>
            }

            <AddToCartButton
              quantity={quantity}
              amount={amount}
              selectedColour={selectedColour}
              selectedSize={selectedSize}
              brand={product.brand}
              productName={product.name}
              mainImage={mainImage}
              price={product.price}
            />
            <div className={styles.underline}></div>
          </div>
        </div>

      </div>   
    </div>
  );
}

export default SingleProductMain;
