import React, { useEffect, useState } from 'react';
import { Product } from '../../Models/ProductModel';
import { getProducts } from '../../Data/ProductsData';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="container">
      <div className={styles.product}>
        {products.map(({
          id, imgSrc, price, title, count,
        }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            imgSrc={imgSrc}
            count={count}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
