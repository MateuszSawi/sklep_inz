import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './StoreProducts.module.scss';
import categoriesData from '../categories';
import { FaChevronDown } from 'react-icons/fa';

import Products from './Products/Products';

function StoreProducts(props) {
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

  return (
    <div className={styles.wrapper}>
      <div>
          <Link to="/sklep/" className={styles.link} >
            <div className={styles.mainPageLink}>
                <p><strong>Strona Główna</strong></p>
            </div>
          </Link>
        <div className={styles.storeProducts}>
          {Object.keys(categoriesData).map((category, index) => {
            
            const isActive = activeCategory === category;

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

            return (
              <div key={index} className={styles.categoryWrapper}>
                <div className={styles.categoryTitle} onClick={() => handleCategoryClick(category)}>
                  {/* {category.replace(/_/g, ' ')} */}
                  <p className={isActive ? styles.activeCategory : ''}>{categoryToDisplay}</p>
                  <FaChevronDown className={isActive ? styles.rotate : ''} />
                </div>
                <div
                  className={styles.subcategories}
                  ref={(el) => setRef(category, el)}
                  style={{
                    maxHeight: isActive ? refs.current[category]?.scrollHeight + 'px' : '0',
                    transition: 'max-height 0.3s ease-in-out'
                  }}
                >
                  {categoriesData[category].map((subCategory, subIndex) => (
                    <Link key={subIndex} to={`/sklep/${category}/${subCategory}`} className={styles.link} >
                      <div className={styles.subcategoryItem}>
                        <p>{subCategory}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Products 
          category={props.category} 
        />
      </div>
    </div>
  );
}

export default StoreProducts;
