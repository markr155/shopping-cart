import { useOutletContext } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import { useEffect, useState } from 'react';

const Store = () => {
  const [cart, setCart] = useOutletContext().cart;
  const handleAddToCart = useOutletContext().handleAddToCart;
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4');
    const products = await response.json();
    console.log(products);
    return products;
  };

  useEffect(() => {
    getProducts().then((results) => setProducts(results));
  }, []);

  return (
    <>
      <h1>Store Page</h1>
      {products &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.title}
              img={product.image}
              price={product.price}
              description={product.description}
							handleAddToCart={handleAddToCart}
            />
          );
        })}
    </>
  );
};

export default Store;
