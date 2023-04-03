import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/1')
      .then((response) => {
        if (typeof response.data === 'object') {
          setProducts([response.data]);
        } else {
          setError('Invalid response data');
        }
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
    <div className='product-list'>
      <h1>Product List</h1>
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
              <th>Discount Percentage</th>
              <th>Rating</th>
              <th>Stock</th>
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
                <td>{product.discountPercentage}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
