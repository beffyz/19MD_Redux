import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { addToCart } from '../../Reducers/CartReducer';
import { getProductById } from '../../Data/VehicleData';
import styles from './ProductCard.module.scss';

type ProductCardProps = {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
  count: number;
}

const ProductCard:FC<ProductCardProps> = ({
  id, imgSrc, price, title, count,
}) => {
  const [productCount, setProductCount] = useState(count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className="col-md-12">
          <div className={styles.card} key={id}>
            <div className={styles.card__box}>
              <div className={styles.card__elements}>
                <div>
                  <img
                    className={styles.card__img}
                    src={imgSrc}
                    alt={title}
                  />
                </div>
                <h4>{title}</h4>
                <p>{`Price: ${price}`}</p>
                <div className={styles.card__buttons}>
                  <button
                    className={`${styles.btn} ${styles.btnCount}`}
                    onClick={() => setProductCount(productCount - 1)}
                    disabled={productCount === 0}
                  >
                    -
                  </button>
                  <span>{productCount}</span>
                  <button
                    className={`${styles.btn} ${styles.btnCount}`}
                    onClick={() => setProductCount(productCount + 1)}
                  >
                    +
                  </button>

                  <button
                    className={styles.card__btn}
                    onClick={() => {
                      // @ts-ignore
                      dispatch(addToCart({ ...getProductById(id), count: productCount }));
                      setProductCount(0);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
