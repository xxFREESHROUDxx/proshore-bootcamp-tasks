import './Task03.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ThemeContext from '../../contexts/ThemeContext';
import ThemeButton from '../ThemeButton/ThemeButton';

const Task03 = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        console.log(response.data.products);
        if (typeof response.data === 'object' && response.data.products) {
          setProducts(response.data.products);
        } else {
          setError('Invalid response data');
        }
        console.log(products);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`product-list ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>Product Lists</h1>
      <div style={{ marginBottom: '2rem' }}>
        <label htmlFor='search'>Search by brand:</label>
        <input type='text' id='search' value={search} onChange={handleSearch} />
      </div>
      {error && <p>{error}</p>}
      {!error && filteredProducts.length === 0 && <p>No products found.</p>}
      {!error && filteredProducts.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Brand</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ThemeButton />
    </div>
  );
};

export default Task03;
