import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';

const CategoriesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortOption, setSortOption] = useState('featured');
  const navigate = useNavigate();

  // Sample categories data
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://via.placeholder.com/300x200?text=Electronics',
      subcategories: ['Smartphones', 'Laptops', 'TVs', 'Audio'],
      productCount: 1245,
    },
    {
      id: 2,
      name: 'Fashion',
      image: 'https://via.placeholder.com/300x200?text=Fashion',
      subcategories: ['Men', 'Women', 'Kids', 'Accessories'],
      productCount: 876,
    },
    {
      id: 3,
      name: 'Home & Garden',
      image: 'https://via.placeholder.com/300x200?text=Home+Garden',
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Lighting'],
      productCount: 543,
    },
    {
      id: 4,
      name: 'Beauty',
      image: 'https://via.placeholder.com/300x200?text=Beauty',
      subcategories: ['Skincare', 'Makeup', 'Haircare', 'Fragrances'],
      productCount: 321,
    },
    {
      id: 5,
      name: 'Sports',
      image: 'https://via.placeholder.com/300x200?text=Sports',
      subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Cycling'],
      productCount: 234,
    },
    {
      id: 6,
      name: 'Toys',
      image: 'https://via.placeholder.com/300x200?text=Toys',
      subcategories: ['Educational', 'Action Figures', 'Dolls', 'Board Games'],
      productCount: 187,
    },
  ];

  // Filter categories based on active filter
  const filteredCategories = activeFilter === 'all' 
    ? categories 
    : categories.filter(cat => cat.productCount > (activeFilter === 'popular' ? 500 : 200));

  // Sort categories based on sort option
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch(sortOption) {
      case 'name-asc': return a.name.localeCompare(b.name);
      case 'name-desc': return b.name.localeCompare(a.name);
      case 'count-asc': return a.productCount - b.productCount;
      case 'count-desc': return b.productCount - a.productCount;
      default: return 0; // featured - keep original order
    }
  });

  const handleCategoryClick = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <div className="categories-container">
      <div className="categories-header">
        <h1 className="categories-title">Shop by Category</h1>
        <div className="categories-controls">
          <div className="categories-filter">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Categories
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'popular' ? 'active' : ''}`}
              onClick={() => setActiveFilter('popular')}
            >
              Popular
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'trending' ? 'active' : ''}`}
              onClick={() => setActiveFilter('trending')}
            >
              Trending
            </button>
          </div>
          <div className="categories-sort">
            <label htmlFor="sort-select" className="sort-label">Sort by:</label>
            <select 
              id="sort-select" 
              className="sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="count-asc">Product Count (Low to High)</option>
              <option value="count-desc">Product Count (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="categories-grid">
        {sortedCategories.map(category => (
          <div 
            key={category.id} 
            className="category-card"
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="category-image-container">
              <img 
                src={category.image} 
                alt={category.name} 
                className="category-image"
                loading="lazy"
              />
              <div className="category-badge">{category.productCount}+ products</div>
            </div>
            <div className="category-info">
              <h3 className="category-name">{category.name}</h3>
              <div className="subcategories-list">
                {category.subcategories.map((sub, index) => (
                  <span key={index} className="subcategory-tag">{sub}</span>
                ))}
              </div>
              <button className="explore-btn">Explore {category.name}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="categories-promo">
        <div className="promo-banner">
          <h2>Summer Sale - Up to 50% Off!</h2>
          <p>Selected categories only. Limited time offer.</p>
          <button className="promo-btn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;