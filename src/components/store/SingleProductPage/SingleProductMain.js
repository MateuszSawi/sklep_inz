import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import TextEdit from './TextEdit';
import styles from './SingleProductMain.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { apiK, apiP } from '../../../apiConfig';

import StoreProductsPath from '../StoreProductsPage/StoreProductsPath/StoreProductsPath';
import AddToCartButton from './AddToCartButton/AddToCartButton';
import AddToFavourite from './AddToFavourite/AddToFavourite';

function SingleProductMain() {

  const { category, subcategory, singleProduct } = useParams();

  const [product, setProduct] = useState([]);

  const [mainImage, setMainImage] = useState('');

  const [imagesLinksArray, setImagesLinksArray] = useState([]);

  useEffect(() => {
    if (product.primary_link) {
      setMainImage(product.primary_link);
    }
  }, [product.primary_link]);

  useEffect(() => {
    axios.get(`${apiP}/products/get_product/`, { 
      params: {
        product_id : singleProduct
      }
    })
    .then(response => {
      // console.log(response.data.product);
      setProduct(response.data.product);

      
      if (response.data.product.other_links) {
        const arrayFromInput = response.data.product.other_links.split('\n');
        setImagesLinksArray(arrayFromInput);
      }

      console.log(imagesLinksArray)
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

  let brandImage;

  if (product.brand_name === 'ESCO') {
    brandImage = '/website/MainPage/logos/esco_logo.png';
  } 
  else if (product.brand_name === 'CAT') {
    brandImage = '/website/MainPage/logos/CAT.jpg';
  } 
  else if (product.brand_name === 'Doosan') {
    brandImage = '/website/MainPage/logos/doosan.jpg';
  } 
  else if (product.brand_name === 'Komatsu') {
    brandImage = '/website/MainPage/logos/komatsu.jpg';
  } 
  else if (product.brand_name === 'KTR') {
    brandImage = '/website/MainPage/logos/ktr_logo.jpg';
  } 
  else if (product.brand_name === 'JCB') {
    brandImage = '/website/MainPage/logos/jcg.jpg';
  }

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

  // scroll

  const myElementRef = useRef(null);

  const scrollToMyElement = () => {
    myElementRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  //

  // function getQuantityUnit(quantity) {
  //   if (quantity === 1) {
  //     return 'sztuka';
  //   } else if (quantity > 1 && quantity < 5 || (quantity % 10 > 1 && quantity % 10 < 5 && (quantity % 100 < 10 || quantity % 100 > 20))) {
  //     return 'sztuki';
  //   } else {
  //     return 'sztuk';
  //   }
  // }

  // let by_length_unit = product.by_length ? 'cm' : getQuantityUnit(product.quantity);

  return (
    <div className={styles.mainWrapper} >     
      <StoreProductsPath /> 

      <div className={styles.wrapper} >
        <div>
          <h1 className={styles.titleWrapper}>
            {product.product_name}
          </h1>
        </div>

        <div className={styles.mainInfo} >
          <div className={styles.imagesWrapper} >
            <div onClick={() => openModal(mainImage)}>
              <img src={mainImage} alt="Product" className={styles.mainImage} />
            </div>

            <div className={styles.smallImages} >
              <img src={product.primary_link} 
                      onClick={() => setMainImage(product.primary_link)} 
                      alt="Product" className={styles.mainImage} />

              {imagesLinksArray && imagesLinksArray.length > 0 && imagesLinksArray.map((imageLink, index) => (
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
            <p>Numer katalogowy: {product.product_id} </p>
            <p>{product.product_description_short}</p>
            {product.brand_name &&
              <img src={process.env.PUBLIC_URL + brandImage}  
                alt="Brand" className={styles.brandImage} 
              />
            }
            {product.brand_name &&
              <p>Firma: {product.brand_name} </p>
            }
            {product.reference_number &&
              <p>Numer referencji: {product.reference_number} </p>
            }
            <img className={styles.renox}
              src={process.env.PUBLIC_URL + '/website/MainPage/logos/logo_web.png'} 
              alt="Renox logo" 
            />
            <div onClick={scrollToMyElement} className={styles.scroll}>
              <h3>Przejdź do pełnej specyfikacji </h3> &nbsp;
              <span>↓</span>
            </div>
            <AddToFavourite  
              category={category}
              subcategory={subcategory}
              product={product}
            />
          </div>
          <div>
            <div className={styles.priceWrapper} >
              <div className={styles.price}>
                <h1>{product.price_netto}</h1>
                <h3>zł netto</h3>
              </div>
              <div className={styles.price}>
                <h1>{product.price_brutto}</h1>
                <h3>zł brutto</h3>
              </div>
              {product.quantity > 0 &&
                <p className={styles.quantity}>✔️ Na magazynie 
                  {/* {product.quantity} {by_length_unit} */}
                </p>
              } 
              {product.quantity === 0 &&
                <a href="tel:+48 89 523 91 52" className={styles.phone}>
                  <p className={styles.quantity}>
                    <img src="/store/phone_little_dark.png" alt="cart" className={styles.icon}/>
                    {/* ❌  */}
                    Zapytaj o produkt
                  </p>
                </a>
              }
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
                {!product.by_length && 
                  <p>ilość</p>
                }
                {product.by_length && 
                  <p>cm</p>
                }
              </div>
              {product.quantity > 0 &&
                <AddToCartButton
                  product_id={product.product_id}
                  quantity={quantity}
                  product_name={product.product_name}
                  price_netto={product.price_netto}
                  price_brutto={product.price_brutto}
                  by_length={product.by_length}
                  // maxQuantity={product.quantity}
                  category={category}
                  subcategory={subcategory}
                  primary_link={product.primary_link}
                />
              } 
              {product.quantity === 0 &&
                <div >
                  <button className={styles.buttonNoProducts}><h3>DO KOSZYKA</h3></button>
                </div>
              }
              <div className={styles.underline}></div>
            </div>
          </div>
        </div>

        <div className={styles.shortDescSmallPx}>
          <p>Numer katalogowy: {product.product_id} </p>
          <p>{product.product_description_short}</p>

          {product.brand_name &&
            <img src={process.env.PUBLIC_URL + brandImage}  
              alt="Brand" className={styles.brandImage} 
            />
          }

          {product.brand_name &&
            <p>Firma: {product.brand_name} </p>
          }

          {product.reference_number &&
            <p>Numer referencji: {product.reference_number} </p>
          }

          <img className={styles.renox}
            src={process.env.PUBLIC_URL + '/website/MainPage/logos/logo_web.png'} 
            alt="Renox logo" 
          />

          <div onClick={scrollToMyElement} className={styles.scroll}>
            <h3>Przejdź do pełnej specyfikacji </h3> &nbsp;
            <span>↓</span>
          </div>

          <AddToFavourite  
            category={category}
            subcategory={subcategory}
            product={product}
          />
        </div>

        <div>
          <div className={styles.priceWrapperSmallPx} >
            <div className={styles.price}>
              <h1>{product.price_netto}</h1>
              <h3>zł netto</h3>
            </div>
            <div className={styles.price}>
              <h1>{product.price_brutto}</h1>
              <h3>zł brutto</h3>
            </div>
            {product.quantity > 0 &&
              <p className={styles.quantity}>✔️ Na magazynie 
                {/* {product.quantity} {by_length_unit} */}
              </p>
            } 
            {product.quantity === 0 &&
              <a href="tel:+48 89 523 91 52" className={styles.phone}>
                <p className={styles.quantity}>
                  <img src="/store/phone_little_dark.png" alt="cart" className={styles.icon}/>
                  {/* ❌  */}
                  Zapytaj o produkt
                </p>
              </a>
            }
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
              {!product.by_length && 
                <p>ilość</p>
              }
              {product.by_length && 
                <p>cm</p>
              }
            </div>
            {product.quantity > 0 &&
              <AddToCartButton
                product_id={product.product_id}
                quantity={quantity}
                product_name={product.product_name}
                price_netto={product.price_netto}
                price_brutto={product.price_brutto}
                by_length={product.by_length}
                // maxQuantity={product.quantity}
                category={category}
                subcategory={subcategory}
                primary_link={product.primary_link}
              />
            } 
            {product.quantity === 0 &&
              <div >
                <button className={styles.buttonNoProducts}><h3>DO KOSZYKA</h3></button>
              </div>
            }
          </div>
        </div>

        <div className={styles.restInfo} ref={myElementRef}>
          <div dangerouslySetInnerHTML={{ __html: product.product_description_html }} />
        </div>
      </div>    
    </div>
  );
}

export default SingleProductMain;
