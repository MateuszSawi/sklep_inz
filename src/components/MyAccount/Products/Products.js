import React, { useState, useEffect } from 'react';
import { apiK, apiP } from '../../../apiConfig';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Products.module.scss';
import TextEdit from './TextEdit/TextEdit';
import PhotoUploadForm from './PhotoUploadForm/PhotoUploadForm';

function Products() {

  const navigate = useNavigate();

  const clickHandler = () => {

  }

  const [message, setMessage] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [formData, setFormData] = useState({
    category: '',
    subcategory: '',
    product_name: '',
    product_name_ua: '',
    product_name_en: '',
    product_description_short: '',
    product_description_short_ua: '',
    product_description_short_en: '',
    by_length: false,
    product_description_html: '',
    product_description_html_ua: '',
    product_description_html_en: '',
    price_netto: 0,
    price_brutto: 0,
    price_netto_ua: 0,
    price_brutto_ua: 0,
    reference_number: '',
    product_ean: '',
    product_sku: '',
    quantity: 0,
    brand: '',
    price_visible: false,
    visible: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${apiK}/staff/addproduct`, {
      category: formData.category,
      subcategory: formData.subcategory,
      product_name: formData.product_name,
      product_name_ua: formData.product_name_ua,
      product_name_en: formData.product_name_en,
      product_description_short: formData.product_description_short,
      product_description_short_ua: formData.product_description_short_ua,
      product_description_short_en: formData.product_description_short_en,
      by_length: formData.by_length,
      product_description_html: formData.product_description_html,
      product_description_html_ua: formData.product_description_html_ua,
      product_description_html_en: formData.product_description_html_en,
      price_netto: Number(formData.price_netto),
      price_brutto: Number(formData.price_brutto),
      price_netto_ua: Number(formData.price_netto_ua),
      price_brutto_ua: Number(formData.price_brutto_ua),
      reference_number: formData.reference_number,
      product_ean: formData.product_ean,
      product_sku: formData.product_sku,
      quantity: Number(formData.quantity),
      brand: formData.brand,
      price_visible: formData.price_visible,
      visible: formData.visible,
      photos: photos
    }, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      setMessage(true)
    })
    .catch((error) => {
      console.error(error);
    })

  };

  const handleTextEditChange = (name, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  useEffect(() => {
  }, [formData]);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>
          Kategoria:
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </label>
        <label>
          Podkategoria:
          <input type="text" name="subcategory" value={formData.subcategory} onChange={handleChange} />
        </label>
        <label>
          Nazwa produktu PL:
          <input type="text" name="product_name" value={formData.product_name} onChange={handleChange} />
        </label>
        <label>
          Nazwa produktu UA:
          <input type="text" name="product_name_ua" value={formData.product_name_ua} onChange={handleChange} />
        </label>
        <label>
          Nazwa produktu ENG:
          <input type="text" name="product_name_en" value={formData.product_name_en} onChange={handleChange} />
        </label>

        <label>
          Krótki opis PL:
          <textarea type="text" name="product_description_short" value={formData.product_description_short} onChange={handleChange} />
        </label>
        <label>
          Krótki opis UA:
          <textarea type="text" name="product_description_short_ua" value={formData.product_description_short_ua} onChange={handleChange} />
        </label>
        <label>
          Krótki opis ENG:
          <textarea type="text" name="product_description_short_en" value={formData.product_description_short_en} onChange={handleChange} />
        </label>

        <label>
          Cena netto pln:
          <input type="text" name="price_netto" value={formData.price_netto} onChange={handleChange} />
        </label>
        <label>
          Cena brutto pln:
          <input type="text" name="price_brutto" value={formData.price_brutto} onChange={handleChange} />
        </label>
        <label>
          Cena netto ua:
          <input type="text" name="price_netto_ua" value={formData.price_netto_ua} onChange={handleChange} />
        </label>
        <label>
          Cena brutto ua:
          <input type="text" name="price_brutto_ua" value={formData.price_brutto_ua} onChange={handleChange} />
        </label>

        <label>
          Numer referencji:
          <input type="text" name="reference_number" value={formData.reference_number} onChange={handleChange} />
        </label>
        {/* <label>
          Cena brutto ua:
          <input type="text" name="product_ean" value={formData.product_ean} onChange={handleChange} />
        </label>
        <label>
          SKU produktu:
          <input type="text" name="product_sku" value={formData.product_sku} onChange={handleChange} />
        </label> */}

        <label>
          Ilość produktów:
          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
        </label>

        <label>
          Marka produktu:
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
        </label>
        
        <label className={styles.checkbox}>
          Kupowany na cm:
          <input type="checkbox" name="by_length" checked={formData.by_length} onChange={handleChange} />
        </label>

        <label className={styles.checkbox}>
          Cena ma być widoczna:
          <input type="checkbox" name="price_visible" checked={formData.price_visible} onChange={handleChange} />
        </label>

        <label className={styles.checkbox}>
          Produkt widoczny w sklepie:
          <input type="checkbox" name="visible" checked={formData.visible} onChange={handleChange} />
        </label>

        <label>
          Opis produktu PL:
          <TextEdit
            name="product_description_html"
            description_html={formData.product_description_html}
            onChange={(value) => handleTextEditChange('product_description_html', value)}
          />
        </label>
        <label>
          Opis produktu UA:
          <TextEdit
            name="product_description_html_ua"
            description_html={formData.product_description_html_ua}
            onChange={(value) => handleTextEditChange('product_description_html_ua', value)}
          />
        </label>
        <label>
          Opis produktu ENG:
          <TextEdit
            name="product_description_html_en"
            description_html={formData.product_description_html_en}
            onChange={(value) => handleTextEditChange('product_description_html_en', value)}
          />
        </label>

        <PhotoUploadForm photos={photos} setPhotos={setPhotos}/>

        <button 
          onClick={handleSubmit} 
          className={styles.buttonAddProduct}
        >
          Dodaj produkt
        </button>
      </form>

      {message &&
        <p style={{ color: "green", marginBottom: "50px" }}>Produkt dodany!</p>
      }
    </div>
  );
}

export default Products;


