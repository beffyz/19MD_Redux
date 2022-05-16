import { Product } from '../Models/ProductModel';

const shopProducts: Product[] = [
  {
    id: 1,
    title: 'BMW 650i',
    price: '130.000€',
    imgSrc: 'https://cdn.motor1.com/images/mgl/8m493/s1/bmw-m6-2017.jpg',
    count: 0,
  },
  {
    id: 2,
    title: 'Mercedes-AMG C63 S Coupe',
    price: '170.000€',
    imgSrc: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/1-mercedes-amg-c-63-s-coupe-2019-rt-hero-front.jpg',
    count: 0,
  },
  {
    id: 3,
    title: 'Lamborghini Huracan',
    price: '145.000€',
    imgSrc: 'https://i.ytimg.com/vi/bStQfHFODKs/maxresdefault.jpg',
    count: 0,
  },
  {
    id: 4,
    title: 'Ferrari 458 Italia',
    price: '189.000€',
    imgSrc: 'https://www.alainclass.com/wp-content/uploads/2017/05/ban1170.jpg',
    count: 0,
  },
  {
    id: 5,
    title: 'Porsche 911 Turbo-S',
    price: '166.000€',
    imgSrc: 'https://posta-magazine.ru/wp-content/uploads/2020/10/main_porsche-911-turbo-s-2020_posta-magazine.jpg',
    count: 0,
  },
];

export const getProducts = () => [...shopProducts];
export const getProductById = (id: number) => (
  shopProducts.find((product) => (
    product.id === id
  ))
);

export default shopProducts;
