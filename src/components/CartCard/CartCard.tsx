import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import styles from './CartCard.module.scss';
import { increment, decrement } from '../../Reducers/CartReducer';

type CartCardProps = {
  id: number;
  title: string;
  price: string;
  imgSrc: string;
  count: number;
}

const CartCard:FC<CartCardProps> = ({
  id, imgSrc, price, title, count,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.card} key={id}>
      <div className={styles.card__box}>
        <div>
          <img
            className={styles.img}
            src={imgSrc}
            alt={title}
          />
        </div>
        <div className={styles.card__details}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.text}>
            {`Price per unit: ${price}`}
          </p>
          <div className={styles.container}>
            <p className={styles.text}>
              Amount:
            </p>
            <div className={styles.row}>
              <button
                className={`${styles.btn} ${styles.btnCount}`}
                onClick={() => dispatch(decrement(id))}
                disabled={count === 0}
              >
                -
              </button>

              <span>{count}</span>

              <button
                className={`${styles.btn} ${styles.btnCount}`}
                onClick={() => dispatch(increment(id))}
              >
                +
              </button>

            </div>
          </div>
          <p className={styles.text}>
            {`Total: ${(parseInt(price, 10) * count).toFixed(3)}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
