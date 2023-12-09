import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import styles from './CategoriesMenu.module.scss';
import categoriesData from '../../categories';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import { apiK, apiP } from '../../../../../apiConfig';

function CategoriesMenu(props) {
  const [activeCategory, setActiveCategory] = useState(null);
  const refs = useRef({});

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
      // When not the current active category, we remove the height
      if (refs.current[activeCategory]) {
        refs.current[activeCategory].style.maxHeight = null;
      }
      // We calculate and update the height dynamically for the new active category
      const current = refs.current[category];
      current.style.maxHeight = `${current.scrollHeight}px`;
    }
  };

  const setRef = (category, el) => {
    refs.current[category] = el;
  };

  // params

  const { category, subcategory } = useParams();

  const navigate = useNavigate();

  const handleLinkClick = (subcategory, categoryParam) => {
    props.setIsLoading(true);

    props.setSubcategory(subcategory);

    const params = {
      category: categoryParam, 
      subcategory: category === subcategory ? '' : subcategory,
      sort_option: sessionStorage.getItem('sortBy'),
      page_size: sessionStorage.getItem('productsPerPage'),
      page_number: 1
    };

    axios.post(`${apiP}/products/product_list/`, { 
      params: params
    })
    .then(response => {
      // console.log(response.data.products);
      props.setProducts(response.data.products);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      props.setIsLoading(false); // Ustaw ładowanie na false po zakończeniu żądania
    });

    navigate(`/sklep/${category}/${subcategory}`);
  };

  return (
    <div>
        <Link to="/sklep/" className={styles.link} >
          <div className={styles.mainPageLink}>
              <p><strong>Strona Główna</strong></p>
          </div>
        </Link>
      <div className={styles.storeProducts}>
        {Object.keys(categoriesData).map((category, index) => {
          
          const isActive = activeCategory === category;
          const hasSubcategories = categoriesData[category].length > 0;

          // console.log(subcategory)

          let categoryToDisplay;

          if (category === 'Zeby_adaptery'){
            categoryToDisplay = 'Zęby i adaptery';
          }
          if (category === 'Gasienice_do_minikoparek'){
            categoryToDisplay = 'Gąsienice do minikoparek';
          }
          if (category === 'Sprezyny_napinacze'){
            categoryToDisplay = 'Sprężyny i napinacze';
          }
          if (category === 'Czesci_do_kruszarek_i_przesiewaczy'){
            categoryToDisplay = 'Cześci do kruszarek i przesiewaczy';
          }
          if (category === 'Maszyny_uzywane'){
            categoryToDisplay = 'Maszyny używane';
          }
          if (category === 'Czesci_zamienne'){
            categoryToDisplay = 'Części zamienne';
          }
          if (category === 'Lyzki_przesiewajace'){
            categoryToDisplay = 'Łyżki przesiewające';
          }
          if (category === 'Lemiesze'){
            categoryToDisplay = 'Lemiesze';
          }
          if (category === 'Podwozia'){
            categoryToDisplay = 'Podwozia';
          }
          if (category === 'Sworznie'){
            categoryToDisplay = 'Sworznie';
          }
          if (category === 'Tuleje'){
            categoryToDisplay = 'Tuleje';
          }
          if (category === 'Uszczelnienia'){
            categoryToDisplay = 'Uszczelnienia';
          }
          if (category === 'Sruby_i_nakretki'){
            categoryToDisplay = 'Śruby i nakrętki';
          }
          if (category === 'Lyzki_kruszace'){
            categoryToDisplay = 'Łyżki kruszące';
          }

          return (
            <div key={index} className={styles.categoryWrapper}>
              <div className={styles.categoryTitle} 
                  onClick={hasSubcategories ? () => handleCategoryClick(category) : null}>
                <p className={isActive ? styles.activeCategory : ''}>{categoryToDisplay}</p>
                {hasSubcategories && (
                  <FaChevronDown className={isActive ? styles.rotate : ''} />
                )}
              </div>
              {hasSubcategories && (
                <div
                  className={styles.subcategories}
                  ref={(el) => setRef(category, el)}
                  style={{
                    maxHeight: isActive ? refs.current[category]?.scrollHeight + 'px' : '0',
                    transition: 'max-height 0.3s ease-in-out'
                  }}
                >
                  {categoriesData[category].map((subCategory, subIndex) => {
                    return (
                      <Link key={subIndex} 
                        to={`/sklep/${category}/${subCategory}`} 
                        className={styles.link} 
                        onClick={() => handleLinkClick(subCategory, category)}
                      >
                        <div className={styles.subcategoryItem}>
                          <p>{subCategory}</p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesMenu;
