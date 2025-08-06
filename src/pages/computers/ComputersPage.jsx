import React, { useState } from 'react';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiChevronRight, 
  FiStar,
  FiX,
  FiCheck,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import './ComputersPage.css';
import Footer from '../footer/Footer';

const ComputersPage = ({ computers }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([20000, 300000]);
  const [sortOption, setSortOption] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique brands from the computers prop
  const brands = [...new Set(computers.map(comp => comp.brand))];

  // Cart functionality
  const addToCart = (computer) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === computer.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === computer.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...computer, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (parseInt(item.discount) * item.quantity), 0);
  };

  // Wishlist functionality
  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Filter functionality
  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const handlePriceChange = (e, index) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };

  // Filter and sort computers
  const filteredComputers = computers.filter(computer => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(computer.brand);
    const priceMatch = parseInt(computer.discount) >= priceRange[0] && parseInt(computer.discount) <= priceRange[1];
    return brandMatch && priceMatch;
  });

  const sortedComputers = [...filteredComputers].sort((a, b) => {
    switch(sortOption) {
      case 'price-low':
        return parseInt(a.discount) - parseInt(b.discount);
      case 'price-high':
        return parseInt(b.discount) - parseInt(a.discount);
      case 'rating':
        return parseFloat(b.rating) - parseFloat(a.rating);
      default:
        return 0;
    }
  });

  // Navigation
  const navigateToProduct = (id) => {
    navigate(`/computer/${id}`);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹');
  };

  return (
    <div className="comp-page-container">
      <div className="comp-category-header">
        <div className="comp-header-content">
          <div className="comp-breadcrumb">
            <Link to="/">Home</Link> <FiChevronRight /> <span>Computers & Laptops</span>
          </div>
        </div>
      </div>

      <div className="comp-main-content">
        {/* Brand Filter Section - Horizontal */}
        <div className="comp-brand-filter-section">
          <div className="comp-brand-filter-container">
            <h3>Brands:</h3>
            <div className="comp-brand-filter-options">
              {brands.map(brand => (
                <button
                  key={brand}
                  className={selectedBrands.includes(brand) ? 'comp-active-brand' : ''}
                  onClick={() => toggleBrand(brand)}
                >
                  {brand}
                </button>
              ))}
            </div>
            <button 
              className="comp-filter-toggle-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Filters' : 'More Filters'} 
              {showFilters ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
        </div>

        {/* Additional Filters - Collapsible */}
        {showFilters && (
          <div className="comp-additional-filters">
            <div className="comp-filter-section">
              <h3>Price Range (₹)</h3>
              <div className="comp-price-range">
                <span>{formatCurrency(priceRange[0])}</span>
                <input 
                  type="range" 
                  min="20000" 
                  max="300000" 
                  step="10000"
                  value={priceRange[0]} 
                  onChange={(e) => handlePriceChange(e, 0)}
                />
                <input 
                  type="range" 
                  min="20000" 
                  max="300000" 
                  step="10000"
                  value={priceRange[1]} 
                  onChange={(e) => handlePriceChange(e, 1)}
                />
                <span>{formatCurrency(priceRange[1])}</span>
              </div>
            </div>

            <div className="comp-sort-section">
              <span>Sort by:</span>
              <select 
                value={sortOption} 
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
        )}

        <div className="comp-products-container">
          <div className="comp-products-count">
            {filteredComputers.length} {filteredComputers.length === 1 ? 'item' : 'items'} found
          </div>

          <div className="comp-products-grid">
            {sortedComputers.map(computer => {
              // Add a description based on product name or brand
              let description = '';
              if (computer.name && computer.name.toLowerCase().includes('macbook')) {
                description = 'Apple MacBook: Sleek, powerful, and perfect for professionals and creatives.';
              } else if (computer.name && computer.name.toLowerCase().includes('dell')) {
                description = 'Dell laptops: Reliable performance for work, study, and entertainment.';
              } else if (computer.name && computer.name.toLowerCase().includes('hp')) {
                description = 'HP computers: Versatile and dependable for everyday use.';
              } else if (computer.name && computer.name.toLowerCase().includes('lenovo')) {
                description = 'Lenovo: Known for durability and business-class productivity.';
              } else if (computer.name && computer.name.toLowerCase().includes('asus')) {
                description = 'ASUS: Innovative design and gaming-ready performance.';
              } else if (computer.name && computer.name.toLowerCase().includes('acer')) {
                description = 'Acer: Affordable and efficient for students and home users.';
              } else if (computer.name && computer.name.toLowerCase().includes('msi')) {
                description = 'MSI: High-performance laptops for gaming and creators.';
              } else if (computer.name && computer.name.toLowerCase().includes('surface')) {
                description = 'Microsoft Surface: Ultra-portable and versatile 2-in-1 devices.';
              } else {
                description = 'A modern computer with great specs for work, study, and entertainment.';
              }
              return (
                <div key={computer.id} className="comp-product-card">
                  <div className="comp-card-top-section">
                    <div className="comp-card-badges">
                      {computer.inStock ? (
                        <span className="comp-stock-badge comp-in-stock">In Stock</span>
                      ) : (
                        <span className="comp-stock-badge comp-out-of-stock">Out of Stock</span>
                      )}
                      {parseInt(computer.discount) < parseInt(computer.price) && (
                        <span className="comp-discount-badge">
                          {Math.round((1 - computer.discount/computer.price) * 100)}% off
                        </span>
                      )}
                    </div>
                    <button 
                      className={`comp-wishlist-btn ${wishlist.includes(computer.id) ? 'comp-active-wishlist' : ''}`}
                      onClick={() => toggleWishlist(computer.id)}
                    >
                      <FiHeart />
                    </button>
                  </div>
                  <div 
                    className="comp-product-image-container"
                    onClick={() => navigateToProduct(computer.id)}
                  >
                    <img src={computer.image} alt={computer.name} className="comp-product-image" />
                  </div>
                  <div className="comp-product-info">
                    <span className="comp-brand">{computer.brand}</span>
                    <h3 onClick={() => navigateToProduct(computer.id)}>
                      {computer.name}
                    </h3>
                    <p className="comp-description">{description}</p>
                    <div className="comp-specs">
                      <span>{computer.specs.cpu}</span>
                      <span>{computer.specs.gpu}</span>
                      <span>{computer.specs.ram} RAM</span>
                      <span>{computer.specs.storage}</span>
                    </div>
                    <div className="comp-rating-reviews">
                      <div className="comp-rating">
                        <div className="comp-stars">
                          {Array(Math.floor(parseFloat(computer.rating))).fill().map((_, i) => (
                            <FiStar key={i} className="comp-filled-star" />
                          ))}
                          {Array(5 - Math.floor(parseFloat(computer.rating))).fill().map((_, i) => (
                            <FiStar key={i} className="comp-empty-star" />
                          ))}
                        </div>
                        <span>({computer.reviews})</span>
                      </div>
                    </div>
                    <div className="comp-price-section">
                      <div className="comp-price">
                        <span className="comp-current-price">{formatCurrency(computer.discount)}</span>
                        {parseInt(computer.discount) < parseInt(computer.price) && (
                          <span className="comp-original-price">{formatCurrency(computer.price)}</span>
                        )}
                      </div>
                    </div>
                    <div className="comp-offers">
                      {computer.offers.slice(0, 2).map((offer, i) => (
                        <span key={i} className="comp-offer">{offer}</span>
                      ))}
                      {computer.offers.length > 2 && (
                        <span className="comp-more-offers">+{computer.offers.length - 2} more</span>
                      )}
                    </div>
                    {computer.inStock ? (
                      <button 
                        className="comp-add-to-cart"
                        onClick={() => addToCart(computer)}
                      >
                        <FiShoppingCart /> Add to Cart
                      </button>
                    ) : (
                      <button className="comp-notify-me">Notify Me</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="comp-pagination-container">
            <div className="comp-pagination">
              <button className="comp-active-page">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <span>...</span>
              <button>10</button>
              <button className="comp-next-btn">Next →</button>
            </div>
          </div>
        </div>

        <div className="comp-cart-icon" onClick={() => setShowCart(true)}>
          <FiShoppingCart />
          {cart.length > 0 && <span className="comp-cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>}
        </div>

        {showCart && (
          <div className="comp-cart-overlay" onClick={() => setShowCart(false)}>
            <div className="comp-cart-sidebar" onClick={(e) => e.stopPropagation()}>
              <div className="comp-cart-header">
                <h3>Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</h3>
                <button className="comp-close-cart" onClick={() => setShowCart(false)}>
                  <FiX />
                </button>
              </div>
              <div className="comp-cart-items">
                {cart.length === 0 ? (
                  <div className="comp-empty-cart">
                    <p>Your cart is empty</p>
                    <button 
                      className="comp-continue-shopping"
                      onClick={() => setShowCart(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="comp-cart-item">
                        <img src={item.image} alt={item.name} className="comp-cart-item-image" />
                        <div className="comp-item-details">
                          <h4>{item.name}</h4>
                          <div className="comp-item-price">
                            {formatCurrency(item.discount)} × {item.quantity} = 
                            <span> {formatCurrency(item.discount * item.quantity)}</span>
                          </div>
                          <div className="comp-item-actions">
                            <div className="comp-quantity-control">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button 
                              className="comp-remove-item"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {cart.length > 0 && (
                <div className="comp-cart-summary">
                  <div className="comp-summary-row">
                    <span>Subtotal:</span>
                    <span>{formatCurrency(calculateTotal())}</span>
                  </div>
                  <div className="comp-summary-row">
                    <span>Delivery:</span>
                    <span>FREE</span>
                  </div>
                  <div className="comp-summary-row comp-total">
                    <span>Total:</span>
                    <span>{formatCurrency(calculateTotal())}</span>
                  </div>
                  <div className="comp-cart-buttons">
                    <button 
                      className="comp-checkout-btn"
                      onClick={() => navigate('/checkout')}
                    >
                      Proceed to Checkout
                    </button>
                    <button 
                      className="comp-continue-shopping" 
                      onClick={() => setShowCart(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default ComputersPage;