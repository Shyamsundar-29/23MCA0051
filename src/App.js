import React, { useState } from 'react';
const ProductFilter = ({ products }) => {
  const [filters, setFilters] = useState({
    name: '',
    price: '',
    rating: '',
    discount: '',
    availability: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProducts = products.filter(product => {
    return (
      product.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      product.price >= parseInt(filters.price) &&
      product.rating >= parseInt(filters.rating) &&
      product.discount >= parseInt(filters.discount) &&
      product.availability === filters.availability
    );
  });

  return (
    <div>
      <input type="text" name="name" placeholder="Filter by Name" onChange={handleFilterChange} />
      <input type="number" name="price" placeholder="Filter by Price" onChange={handleFilterChange} />
      <input type="number" name="rating" placeholder="Filter by Rating" onChange={handleFilterChange} />
      <input type="number" name="discount" placeholder="Filter by Discount" onChange={handleFilterChange} />
      <select name="availability" onChange={handleFilterChange}>
        <option value="">Filter by Availability</option>
        <option value="In Stock">In Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
