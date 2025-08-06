import React, { useState, useEffect } from 'react';
import './AllCategories.css'; // Update the import

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace this with your actual API call
    const fetchCategories = async () => {
      try {
        // Example API call - replace with your actual endpoint
        // const response = await fetch('/api/categories');
        // const data = await response.json();
        
        // Mock data - remove this when you have real API
        const mockData = [
          { id: 1, name: 'Electronics', productCount: 42 },
          { id: 2, name: 'Clothing', productCount: 36 },
          { id: 3, name: 'Home & Garden', productCount: 28 },
          { id: 4, name: 'Books', productCount: 15 },
          { id: 5, name: 'Sports', productCount: 22 },
        ];
        
        setCategories(mockData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  // Update the classes to match the new CSS
<div className="categories-container">
  <h2 className="categories-title">All Categories</h2>
  <div className="categories-grid">
    {categories.map((category) => (
      <div key={category.id} className="category-card">
        <span className="category-name">{category.name}</span>
        <div className="category-stats">
          <span className="category-count">{category.productCount}</span>
          <span className="category-label">Products</span>
        </div>
        <a href={`/category/${category.id}`} className="view-products-btn">
          View Products
        </a>
      </div>
    ))}
  </div>
</div>
  );
};

export default AllCategories;