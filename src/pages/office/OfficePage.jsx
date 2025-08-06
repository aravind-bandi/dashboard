import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './OfficePage.css';
import Footer from '../footer/Footer';

const OfficeSuppliesPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [showCartSlide, setShowCartSlide] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const navigate = useNavigate();
  const offerIntervalRef = useRef();

  // Office products data
  useEffect(() => {
    const officeProducts = [
      { id: 1, name: 'Ergonomic Office Chair', price: 249.99, category: 'chairs', image: 'https://drogo.in/cdn/shop/files/81ALT_G9TlL.jpg?v=1749299080', rating: 4.5, stock: 15, discount: 20, description: 'Experience all-day comfort and support with this ergonomic office chair, designed for long working hours.' },
      { id: 2, name: 'Executive Desk', price: 399.99, category: 'tables', image: 'https://pritihome.com/wp-content/uploads/2024/03/anton-executive-desk-3.webp', rating: 4.2, stock: 8, discount: 15, description: 'A spacious executive desk with a modern finish, perfect for any professional workspace.' },
      { id: 3, name: 'Filing Cabinet', price: 129.99, category: 'storage', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayOa4eQUVW3f4NZ5qkfD7RIEx_a9BMaXfsw&s', rating: 4.0, stock: 12, discount: 10, description: 'Keep your documents organized and secure with this sturdy filing cabinet.' },
      { id: 4, name: 'Monitor Stand', price: 49.99, category: 'accessories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4TKFGlchvG50Z-bBh6kYeHqv8YJ1rksdKw&s', rating: 4.3, stock: 20, discount: 25, description: 'Elevate your monitor for better posture and desk organization.' },
      { id: 5, name: 'Desk Organizer', price: 24.99, category: 'accessories', image: 'https://m.media-amazon.com/images/I/81utGiRaWvL.jpg', rating: 4.1, stock: 25, discount: 5, description: 'Declutter your workspace with this multi-compartment desk organizer.' },
      { id: 6, name: 'Conference Table', price: 899.99, category: 'tables', image: 'https://cpimg.tistatic.com/08706717/b/4/Brown-Wooden-Conference-Table.jpg', rating: 4.7, stock: 5, discount: 30, description: 'A large, elegant conference table ideal for meetings and collaborations.' },
      { id: 7, name: 'Mesh Task Chair', price: 179.99, category: 'chairs', image: 'https://thesleepcompany.in/cdn/shop/files/1_3426fabe-ca94-4c07-8045-acdc75ae6ba4.webp?v=1750963026', rating: 4.4, stock: 10, discount: 18, description: 'Breathable mesh task chair for cool comfort and adjustable support.' },
      { id: 8, name: 'Bookshelf', price: 149.99, category: 'storage', image: 'https://img.pixers.pics/pho_wat(s3:700/FO/65/70/77/40/700_FO65707740_a1f7177e6af5a55410a721d7e08b3400.jpg,700,689,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,639,jpg)/wall-murals-bookshelf-full-with-books.jpg.jpg', rating: 4.2, stock: 7, discount: 12, description: 'Display and organize your books and files with this stylish bookshelf.' },
      { id: 9, name: 'Keyboard Tray', price: 34.99, category: 'accessories', image: 'https://www.content.upliftdesk.com/content/img/product/KBT007-BMB/KBT010-BLK.jpg?compression=lossy', rating: 3.9, stock: 18, discount: 8, description: 'Slide-out keyboard tray for ergonomic typing and extra desk space.' },
      { id: 10, name: 'Standing Desk Converter', price: 199.99, category: 'tables', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbOQyNPycWFFO_UTkXQDZ1k8jpvgGU2xVcQ&s', rating: 4.6, stock: 9, discount: 22, description: 'Easily switch between sitting and standing with this desk converter.' }
    ];
    setProducts(officeProducts);
  }, []);

  // Discount offers with images for banner
  const discountOffers = [
    {
      id: 1,
      title: "Summer Special",
      subtitle: "Up to 30% OFF on Office Chairs",
      description: "Upgrade your workspace with our premium ergonomic chairs designed for maximum comfort during long working hours.",
      image: "https://www.aadinathfurniture.com/wp-content/uploads/2024/12/Diamond-Boss-Office-Chair.png.webp",
      discount: "30%",
      category: "chairs",
      buttonText: "Shop Chairs"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Modern Office Furniture Collection",
      description: "Discover our latest collection of sleek and functional office furniture to transform your workspace.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      discount: "20%",
      category: "tables",
      buttonText: "Explore Tables"
    },
    {
      id: 3,
      title: "Storage Solutions",
      subtitle: "Buy 1 Get 1 Free on Selected Items",
      description: "Organize your office with our premium storage solutions at unbeatable prices.",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      discount: "B1G1",
      category: "storage",
      buttonText: "View Storage"
    },
    {
      id: 4,
      title: "Accessory Deals",
      subtitle: "Flat 15% OFF on All Accessories",
      description: "Complete your workspace setup with our essential office accessories at discounted prices.",
      image: "https://images.unsplash.com/photo-1585637071663-799845ad5212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      discount: "15%",
      category: "accessories",
      buttonText: "Browse Accessories"
    }
  ];

  // Auto-scroll offers
  useEffect(() => {
    offerIntervalRef.current = setInterval(() => {
      setCurrentOfferIndex(prev => (prev + 1) % discountOffers.length);
    }, 5000);
    
    return () => clearInterval(offerIntervalRef.current);
  }, [discountOffers.length]);

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        setCart(cart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ));
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    setShowCartSlide(true);
    const timer = setTimeout(() => {
      setShowCartSlide(false);
    }, 5000);
    return () => clearTimeout(timer);
  };

  // Remove from cart function
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity function
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const product = products.find(p => p.id === productId);
    if (newQuantity > product.stock) return;
    setCart(cart.map(item =>
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  // Calculate total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Filter and sort products
  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === 'all' || product.category === categoryFilter)
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.id - b.id;
      }
    });

  // Proceed to checkout
  const proceedToCheckout = () => {
    navigate('/checkout', { state: { cart, cartTotal } });
  };

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'chairs', name: 'Chairs' },
    { id: 'tables', name: 'Tables' },
    { id: 'storage', name: 'Storage' },
    { id: 'accessories', name: 'Accessories' }
  ];

  return (
    <div className="office-container">
      {/* Fixed Header */}
      <div className="office-header">
        <div className="office-header-container">
          <div className="office-logo" onClick={() => window.scrollTo(0, 0)}>
            <span className="office-logo-text">OfficeHub</span>
          </div>
          
          <div className="office-search-container">
            <div className="office-search">
              <input
                type="text"
                placeholder="Search for office products..."
                className="office-search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="office-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          
          <div className="office-cart-container">
            <div className="office-cart-icon" onClick={() => setShowCartSlide(!showCartSlide)}>
              <i className="fas fa-shopping-cart"></i>
              {cart.length > 0 && <span className="office-cart-count">{cart.length}</span>}
              <span className="office-cart-text">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="office-main-content">
        {/* Discount Offers Banner */}
        <div className="office-offers-container">
          <div className="office-offers-banner">
            <div className="office-offer-content-wrapper">
              <div className="office-offer-text-content">
                <div className="office-offer-badge">{discountOffers[currentOfferIndex].discount} OFF</div>
                <h2 className="office-offer-title">{discountOffers[currentOfferIndex].title}</h2>
                <h3 className="office-offer-subtitle">{discountOffers[currentOfferIndex].subtitle}</h3>
                <p className="office-offer-description">{discountOffers[currentOfferIndex].description}</p>
                <button 
                  className="office-offer-btn"
                  onClick={() => setCategoryFilter(discountOffers[currentOfferIndex].category)}
                >
                  {discountOffers[currentOfferIndex].buttonText}
                </button>
              </div>
              <div className="office-offer-image-wrapper">
                <img 
                  src={discountOffers[currentOfferIndex].image} 
                  alt={discountOffers[currentOfferIndex].title}
                  className="office-offer-main-image"
                />
              </div>
            </div>
            
            <div className="office-offer-dots">
              {discountOffers.map((_, index) => (
                <span 
                  key={index}
                  className={`office-offer-dot ${index === currentOfferIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentOfferIndex(index);
                    clearInterval(offerIntervalRef.current);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="office-category-filter">
          <div className="office-category-scroll">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`office-category-btn ${categoryFilter === category.id ? 'active' : ''}`}
                onClick={() => setCategoryFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div className="office-sort-options">
          <span className="office-sort-label">Sort By:</span>
          <select 
            className="office-sort-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="office-products-container">
          {filteredProducts.length > 0 ? (
            <div className="office-products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="office-product-card">
                  <div className="office-product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="office-product-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
                      }}
                    />
                    {product.discount > 0 && (
                      <div className="office-product-discount">{product.discount}% OFF</div>
                    )}
                    {product.stock < 5 && (
                      <div className="office-product-stock-badge">Only {product.stock} left</div>
                    )}
                  </div>
                  <div className="office-product-details">
                    <h3 className="office-product-name">{product.name}</h3>
                    <p className="office-product-description">{product.description}</p>
                    <div className="office-product-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span 
                          key={i}
                          className={`office-rating-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="office-rating-count">({Math.floor(Math.random() * 100) + 1})</span>
                    </div>
                    <div className="office-product-pricing">
                      <span className="office-product-price">₹{(product.price * 75).toFixed(2)}</span>
                      {product.discount > 0 && (
                        <span className="office-product-original-price">₹{(product.price * 75 * (1 + product.discount/100)).toFixed(2)}</span>
                      )}
                    </div>
                    <p className="office-product-delivery">Free delivery</p>
                    <button
                      className="office-add-to-cart-btn"
                      onClick={() => addToCart(product)}
                      disabled={product.stock === 0}
                    >
                      {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="office-no-products">
              <p>No products found matching your criteria.</p>
              <button 
                className="office-reset-filters"
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setSortOption('default');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Shopping Cart Slide */}
      <div className={`office-cart-slide ${showCartSlide ? 'show' : ''}`}>
        <div className="office-cart-header">
          <h3>My Cart ({cart.length})</h3>
          <button 
            className="office-cart-close"
            onClick={() => setShowCartSlide(false)}
          >
            ×
          </button>
        </div>
        
        {cart.length > 0 ? (
          <>
            <div className="office-cart-items">
              {cart.map(item => (
                <div key={item.id} className="office-cart-item">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="office-cart-item-image"
                  />
                  <div className="office-cart-item-details">
                    <h4 className="office-cart-item-name">{item.name}</h4>
                    <div className="office-cart-item-price">₹{(item.price * 75).toFixed(2)} × {item.quantity}</div>
                    <div className="office-cart-item-actions">
                      <button 
                        className="office-cart-item-action"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="office-cart-item-quantity">{item.quantity}</span>
                      <button 
                        className="office-cart-item-action"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.stock}
                      >
                        +
                      </button>
                      <button 
                        className="office-cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="office-cart-summary">
              <div className="office-cart-total">
                <span>Total:</span>
                <span>₹{(cartTotal * 75).toFixed(2)}</span>
              </div>
              <div className="office-cart-buttons">
                <button 
                  className="office-cart-continue"
                  onClick={() => setShowCartSlide(false)}
                >
                  Continue Shopping
                </button>
                <button 
                  className="office-cart-checkout"
                  onClick={proceedToCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="office-cart-empty">
            <img 
              src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" 
              alt="Empty Cart" 
              className="office-cart-empty-image"
            />
            <p>Your cart is empty</p>
            <button 
              className="office-cart-start-shopping"
              onClick={() => setShowCartSlide(false)}
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OfficeSuppliesPage;