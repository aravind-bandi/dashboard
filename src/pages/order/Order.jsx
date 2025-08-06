import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiSearch, FiX, FiPlus, FiMinus, FiStar } from 'react-icons/fi';
import './order.css';

const ProductsPage = () => {
  // Categories data
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'fruits', name: 'Fruits & Vegetables' },
    { id: 'dairy', name: 'Dairy & Eggs' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'bakery', name: 'Bakery' },
    { id: 'meat', name: 'Meat & Fish' },
    { id: 'home', name: 'Home Care' },
    { id: 'personal', name: 'Personal Care' },
  ];

  // Products data with proper image URLs
  const products = [
    {
      id: 1,
      name: 'Fresh Apples',
      description: 'Crisp, juicy, and organically grown apples. Perfect for snacking, baking, or juicing.',
      price: 120,
      originalPrice: 150,
      discount: 20,
      category: 'fruits',
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&auto=format&fit=crop&q=60',
      rating: 4.5,
      unit: '1kg'
    },
    {
      id: 2,
      name: 'Bananas',
      description: 'Naturally ripened, sweet, and energy-rich bananas. Great for breakfast or smoothies.',
      price: 45,
      originalPrice: 60,
      discount: 25,
      category: 'fruits',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60',
      rating: 4.2,
      unit: '6 pcs'
    },
    {
      id: 3,
      name: 'Milk',
      description: 'Rich and creamy full cream milk, sourced from local farms. Ideal for drinking, tea, or cooking.',
      price: 60,
      category: 'dairy',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&auto=format&fit=crop&q=60',
      rating: 4.7,
      unit: '1L'
    },
    {
      id: 4,
      name: 'Eggs',
      description: 'Farm-fresh eggs with rich yolks and strong shells. Perfect for breakfast or baking.',
      price: 90,
      originalPrice: 100,
      discount: 10,
      category: 'dairy',
      image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=500&auto=format&fit=crop&q=60',
      rating: 4.3,
      unit: '12 pcs'
    },
    {
      id: 5,
      name: 'Orange Juice',
      description: 'Refreshing and tangy 100% pure orange juice. No added sugar or preservatives.',
      price: 110,
      originalPrice: 130,
      discount: 15,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&auto=format&fit=crop&q=60',
      rating: 4.1,
      unit: '1L'
    },
    {
      id: 6,
      name: 'Potato Chips',
      description: 'Crispy, golden potato chips with classic salted flavor. The perfect snack for any time.',
      price: 40,
      originalPrice: 50,
      discount: 20,
      category: 'snacks',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/044/274/331/small_2x/potato-chips-in-a-bowl-on-isolated-transparent-background-free-png.png',
      rating: 4.0,
      unit: '150g'
    },
    {
      id: 7,
      name: 'Whole Wheat Bread',
      description: 'Soft and healthy multigrain bread, rich in fiber and nutrients. Great for sandwiches.',
      price: 55,
      category: 'bakery',
      image: 'https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-whole-wheat-bread-cutout-png-file-png-image_9428439.png',
      rating: 4.4,
      unit: '500g'
    },
    {
      id: 8,
      name: 'Chicken Breast',
      description: 'Lean, boneless chicken breast. High in protein and perfect for grilling, roasting, or curries.',
      price: 180,
      originalPrice: 200,
      discount: 10,
      category: 'meat',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500&auto=format&fit=crop&q=60',
      rating: 4.6,
      unit: '500g'
    },
    {
      id: 9,
      name: 'Tomatoes',
      description: 'Fresh, juicy, and organic tomatoes. Essential for salads, sauces, and cooking.',
      price: 35,
      category: 'fruits',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgW6SonXBCwyFwZkaFj-ulqY5m7CahtNO5g&s',
      rating: 4.2,
      unit: '500g'
    },
    {
      id: 10,
      name: 'Greek Yogurt',
      description: 'Thick and creamy Greek-style yogurt. Great for breakfast, smoothies, or desserts.',
      price: 65,
      originalPrice: 80,
      discount: 19,
      category: 'dairy',
      image: 'https://img.freepik.com/free-photo/greek-yogurt-wooden-bowl-isolated-white-background_123827-22632.jpg?semt=ais_hybrid&w=740&q=80',
      rating: 4.5,
      unit: '500g'
    },
    {
      id: 11,
      name: 'Mineral Water',
      description: 'Pure and refreshing mineral water. Stay hydrated with this convenient pack.',
      price: 200,
      originalPrice: 220,
      discount: 9,
      category: 'beverages',
      image: 'https://i.pinimg.com/736x/86/4f/b7/864fb76a67b876647ec3cd01c1d04641.jpg',
      rating: 4.3,
      unit: '12x1L'
    },
    {
      id: 12,
      name: 'Chocolate Cookies',
      description: 'Delicious, crunchy chocolate cookies made with real cocoa. Perfect for tea time.',
      price: 75,
      originalPrice: 90,
      discount: 17,
      category: 'snacks',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60',
      rating: 4.7,
      unit: '200g'
    },
    {
      id: 13,
      name: 'Basmati Rice',
      description: 'Premium quality basmati rice with long grains and aromatic flavor.',
      price: 120,
      originalPrice: 150,
      discount: 20,
      category: 'home',
      image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=500&auto=format&fit=crop&q=60',
      rating: 4.6,
      unit: '1kg'
    },
    {
      id: 14,
      name: 'Olive Oil',
      description: 'Extra virgin olive oil, rich in flavor and perfect for cooking and dressings.',
      price: 350,
      originalPrice: 400,
      discount: 13,
      category: 'home',
      image: 'https://i.pinimg.com/474x/d6/26/9e/d6269e8980de99be39bbc0c27120693a.jpg',
      rating: 4.8,
      unit: '500ml'
    },
    {
      id: 15,
      name: 'Toothpaste',
      description: 'Minty fresh toothpaste for complete oral care and cavity protection.',
      price: 85,
      originalPrice: 100,
      discount: 15,
      category: 'personal',
      image: 'https://atlas-content-cdn.pixelsquid.com/stock-images/colgate-toothpaste-Q9xJPV8-600.jpg',
      rating: 4.4,
      unit: '100g'
    },
    {
      id: 16,
      name: 'Shampoo',
      description: 'Nourishing shampoo for all hair types with natural extracts and vitamins.',
      price: 180,
      originalPrice: 200,
      discount: 10,
      category: 'personal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5yo9iDv2tdtE46BMC093W1Z8uAv9HvqlIA&s',
      rating: 4.5,
      unit: '400ml'
    },
    {
      id: 17,
      name: 'Coffee Powder',
      description: 'Premium arabica coffee beans ground to perfection for rich flavor.',
      price: 250,
      originalPrice: 300,
      discount: 17,
      category: 'beverages',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4X3rana6HFRSEHW705ZEwlNx4wupzzTxMA&s',
      rating: 4.7,
      unit: '200g'
    },
    {
      id: 18,
      name: 'Honey',
      description: 'Pure natural honey with no additives, rich in antioxidants and nutrients.',
      price: 220,
      originalPrice: 250,
      discount: 12,
      category: 'home',
      image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=500&auto=format&fit=crop&q=60',
      rating: 4.9,
      unit: '500g'
    }
  ];

  // State management
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Cart functions
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity), 0
  );

  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="products-page">
      {/* Header with search and cart */}
      <header className="header">
        <div className="header-container">
          <h1 className="logo">Quick<span>Cart</span></h1>
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button 
            className="cart-button" 
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-label="Cart"
          >
            <FiShoppingCart />
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </button>
        </div>
      </header>
      
      {/* Categories Navigation - Horizontal */}
      <nav className="categories-nav">
        <ul>
          {categories.map(category => (
            <li 
              key={category.id}
              className={selectedCategory === category.id ? 'active' : ''}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Main Content */}
      <main className="main-content">
        {/* Product Grid - 4 products per row */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300?text=Product+Image';
                    }}
                  />
                  {product.discount && (
                    <span className="discount-badge">-{product.discount}%</span>
                  )}
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-unit">{product.unit}</div>
                  </div>
                  <p className="product-description">{product.description}</p>
                  <div className="product-rating">
                    <FiStar className="star-icon" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="price-section">
                    <div className="price-container">
                      <span className="current-price">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">₹{product.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <FiShoppingCart /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <h3>No products found</h3>
              <p>Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart ({cartItemCount})</h3>
          <button 
            className="close-cart" 
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <FiX />
          </button>
        </div>
        
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/100?text=Product';
                  }}
                />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.unit}</p>
                  <div className="cart-item-price">₹{item.price} x {item.quantity}</div>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  <FiX />
                </button>
              </div>
            ))
          ) : (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <button onClick={() => setIsCartOpen(false)}>Continue Shopping</button>
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
      
      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div 
          className="overlay" 
          onClick={() => setIsCartOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default ProductsPage;