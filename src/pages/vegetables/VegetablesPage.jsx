import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart, FiChevronRight, FiX, FiCheck, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './VegetablesPage.css';
import Footer from '../footer/Footer';

const VegetablesPage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Featured');

  const categories = ['All', 'Leafy', 'Root', 'Fruit', 'Flower', 'Stem', 'Bulb', 'Tuber', 'Pod', 'Organic'];

  // Unique image paths for each vegetable
  const vegetableImages = {
    'carrot': 'https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'spinach': 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'tomato': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjRuhlVNh_ZjVVtYZPK5DZzjk1LI4iOOGoA&s',
    'bell pepper': 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'broccoli': 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'cucumber': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT19UUTLodCwKT1sEjgfdbWn8WLfiJ3D2d4Q&s',
    'zucchini': 'https://assets.epicurious.com/photos/579146ee69625943186f7b57/1:1/w_1332,h_1332,c_limit/sliced-raw-zucchini-squash-072116.jpg',
    'eggplant': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdKL_jbI9Nf17lkFG2LAu4e_lt1Lomy7KGw&s',
    'kale': 'https://cdn.apartmenttherapy.info/image/upload/v1558445472/k/archive/5b74c0f71344a125d8c8e76a34e9174a033a4b94.jpg',
    'potato': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'corn': 'https://coldkart.com/cdn/shop/products/Steamed_Whole_Corn_580x.jpg?v=1607359508',
    'green beans': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1axQJcfzDPID_IrF-qkyqailPgwZIMp5zlA&s',
    'red onion': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'garlic': 'https://m.media-amazon.com/images/I/71KmgOL2q4L.jpg',
    'ginger': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfAe0HZ5aUCme3zH3qurCWLtlw9vUv8o7DA&s',
    'mushroom': 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'asparagus': 'https://images.unsplash.com/photo-1556801366-1a0d0c0a5e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'artichoke': 'https://images.unsplash.com/photo-1594282486552-c4a1af02a9f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'brussels sprouts': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'cauliflower': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'celery': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'leek': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'okra': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'peas': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'radish': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'sweet potato': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'turnip': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'watercress': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'arugula': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'bok choy': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'collard greens': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'endive': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'fennel': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'jicama': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'kohlrabi': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'mustard greens': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'parsnip': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'rutabaga': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'swiss chard': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'butternut squash': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'acorn squash': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'spaghetti squash': 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'beetroot': 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    'daikon': 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  };

  const vegetables = [
    { id: 1, name: 'Organic Carrots', imageKey: 'carrot' },
    { id: 2, name: 'Fresh Spinach', imageKey: 'spinach' },
    { id: 3, name: 'Cherry Tomatoes', imageKey: 'tomato' },
    { id: 4, name: 'Bell Peppers', imageKey: 'bell pepper' },
    { id: 5, name: 'Broccoli Florets', imageKey: 'broccoli' },
    { id: 6, name: 'English Cucumbers', imageKey: 'cucumber' },
    { id: 7, name: 'Zucchini Squash', imageKey: 'zucchini' },
    { id: 8, name: 'Italian Eggplant', imageKey: 'eggplant' },
    { id: 9, name: 'Curly Kale', imageKey: 'kale' },
    { id: 10, name: 'Yukon Gold Potatoes', imageKey: 'potato' },
    { id: 11, name: 'Sweet Corn', imageKey: 'corn' },
    { id: 12, name: 'French Green Beans', imageKey: 'green beans' },
    { id: 13, name: 'Red Onions', imageKey: 'red onion' },
    { id: 14, name: 'Fresh Garlic', imageKey: 'garlic' },
    { id: 15, name: 'Young Ginger', imageKey: 'ginger' },
    { id: 16, name: 'Cremini Mushrooms', imageKey: 'mushroom' },
    { id: 17, name: 'Asparagus Spears', imageKey: 'asparagus' },
    { id: 18, name: 'Globe Artichokes', imageKey: 'artichoke' },
    { id: 19, name: 'Brussels Sprouts', imageKey: 'brussels sprouts' },
    { id: 20, name: 'White Cauliflower', imageKey: 'cauliflower' },
    { id: 21, name: 'Celery Stalks', imageKey: 'celery' },
    { id: 22, name: 'Baby Leeks', imageKey: 'leek' },
    { id: 23, name: 'Fresh Okra', imageKey: 'okra' },
    { id: 24, name: 'Sweet Peas', imageKey: 'peas' },
    { id: 25, name: 'Easter Egg Radishes', imageKey: 'radish' },
    { id: 26, name: 'Jewel Yams', imageKey: 'sweet potato' },
    { id: 27, name: 'Purple Top Turnips', imageKey: 'turnip' },
    { id: 28, name: 'Fresh Watercress', imageKey: 'watercress' },
    { id: 29, name: 'Baby Arugula', imageKey: 'arugula' },
    { id: 30, name: 'Shanghai Bok Choy', imageKey: 'bok choy' },
    { id: 31, name: 'Southern Collard Greens', imageKey: 'collard greens' },
    { id: 32, name: 'Belgian Endive', imageKey: 'endive' },
    { id: 33, name: 'Florence Fennel', imageKey: 'fennel' },
    { id: 34, name: 'Mexican Jicama', imageKey: 'jicama' },
    { id: 35, name: 'Purple Kohlrabi', imageKey: 'kohlrabi' },
    { id: 36, name: 'Tendergreen Mustard', imageKey: 'mustard greens' },
    { id: 37, name: 'Hollow Crown Parsnips', imageKey: 'parsnip' },
    { id: 38, name: 'American Purple Top Rutabaga', imageKey: 'rutabaga' },
    { id: 39, name: 'Rainbow Swiss Chard', imageKey: 'swiss chard' },
    { id: 40, name: 'Butternut Squash', imageKey: 'butternut squash' }
  ].map(veg => ({
    ...veg,
    description: [
      'Sweet and crunchy, perfect for snacks and cooking...',
      'Tender leaves packed with nutrients...',
      'Juicy and flavorful, great for salads...',
      'Colorful and versatile for many dishes...',
      'Nutritious florets with a satisfying crunch...',
      'Refreshing and hydrating with mild flavor...',
      'Mild flavor perfect for grilling or sautéing...',
      'Meaty texture ideal for many cuisines...',
      'Superfood green loaded with vitamins...',
      'Versatile staple for countless recipes...',
      'Sweet and tender when cooked properly...',
      'Delicate flavor that enhances any dish...',
      'Pungent and aromatic, essential for cooking...',
      'Spicy and fragrant, great for teas and cooking...',
      'Earthy flavor that works in many dishes...',
      'Tender spears with a distinctive flavor...',
      'Unique texture and nutty flavor...',
      'Mini cabbages with a sweet, nutty taste...',
      'Mild and versatile cruciferous vegetable...',
      'Crunchy stalks with a distinctive flavor...',
      'Mild onion flavor perfect for soups...',
      'Southern favorite with a unique texture...',
      'Sweet little pearls of goodness...',
      'Peppery and crisp, great for salads...',
      'Naturally sweet and packed with nutrients...',
      'Earthy flavor that mellows when cooked...',
      'Peppery green perfect for salads...',
      'Asian green with mild mustard flavor...',
      'Southern staple with hearty texture...',
      'Bitter green that balances rich flavors...',
      'Licorice-flavored bulb with many uses...',
      'Crisp and slightly sweet root vegetable...',
      'Unique looking vegetable with mild flavor...',
      'Spicy green that adds kick to dishes...',
      'Sweet root vegetable that caramelizes well...',
      'Nutty flavored root, great roasted...',
      'Colorful stems with earthy flavor...',
      'Sweet winter squash perfect for roasting...'
    ][veg.id - 1],
    category: ['Root', 'Leafy', 'Fruit', 'Fruit', 'Flower', 'Fruit', 'Fruit', 'Fruit', 'Leafy', 'Tuber', 
               'Fruit', 'Pod', 'Bulb', 'Root', 'Root', 'Fungus', 'Stem', 'Flower', 'Leafy', 'Flower',
               'Stem', 'Bulb', 'Fruit', 'Pod', 'Root', 'Tuber', 'Root', 'Leafy', 'Leafy', 'Leafy',
               'Leafy', 'Leafy', 'Bulb', 'Root', 'Stem', 'Leafy', 'Root', 'Root', 'Leafy', 'Fruit'][veg.id - 1],
    price: (Math.random() * 5 + 1).toFixed(2),
    discount: (Math.random() * 4 + 0.5).toFixed(2),
    image: vegetableImages[veg.imageKey],
    organic: veg.id % 3 === 0,
    rating: (Math.random() * 5).toFixed(1),
    unit: ['lb', 'bunch', 'pint', 'each', 'head', 'each', 'each', 'each', 'bunch', 'lb',
           'ear', 'lb', 'lb', 'lb', 'lb', 'lb', 'bunch', 'each', 'lb', 'head',
           'bunch', 'bunch', 'lb', 'lb', 'bunch', 'lb', 'lb', 'bunch', 'bunch', 'bunch',
           'bunch', 'head', 'lb', 'lb', 'each', 'bunch', 'lb', 'lb', 'bunch', 'each'][veg.id - 1],
    stock: Math.floor(Math.random() * 50) + 10
  }));

  const addToCart = (vegetable) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === vegetable.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === vegetable.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { ...vegetable, quantity: 1 }];
      }
    });
    setShowCart(true);
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.discount * item.quantity), 0).toFixed(2);
  };

  const filteredVegetables = vegetables.filter(veg => {
    const matchesCategory = selectedCategory === 'All' || 
                          (selectedCategory === 'Organic' ? veg.organic : veg.category === selectedCategory);
    return matchesCategory;
  });

  const sortedVegetables = [...filteredVegetables].sort((a, b) => {
    switch(sortOption) {
      case 'Price: Low to High':
        return parseFloat(a.discount) - parseFloat(b.discount);
      case 'Price: High to Low':
        return parseFloat(b.discount) - parseFloat(a.discount);
      case 'Rating: High to Low':
        return parseFloat(b.rating) - parseFloat(a.rating);
      default:
        return 0;
    }
  });

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showCart]);

  return (
  <div className={`vegetables-page ${showCart ? 'vegetables-cart-open' : ''}`}>
  <div className="vegetables-category-header">
  <div className="vegetables-header-content">
          <h1>Fresh Vegetables</h1>
          <p>Farm to table freshness delivered to your doorstep</p>
          <div className="vegetables-breadcrumb">
            <Link to="/">Home</Link> <FiChevronRight /> <span>Vegetables</span>
          </div>
        </div>
      </div>

  <div className="vegetables-category-filters">
  <div className="vegetables-category-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'vegetables-active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

  <div className="vegetables-main-content">
  <div className="vegetables-products-container">
          <div className="vegetables-products-header">
            <h2>{selectedCategory === 'All' ? 'All' : selectedCategory} Vegetables ({filteredVegetables.length})</h2>
            <div className="vegetables-sort-section">
              <span>Sort by:</span>
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
            </div>
          </div>

          <div className="vegetables-products-grid">
            {sortedVegetables.map(veg => (
              <div key={veg.id} className="vegetables-product-card">
                <div className="vegetables-card-top-section">
                  <div className="vegetables-card-badges">
                    {veg.organic && <span className="vegetables-organic-badge">Organic</span>}
                    {parseFloat(veg.discount) < parseFloat(veg.price) && <span className="vegetables-discount-badge">Sale</span>}
                    {veg.stock < 15 && <span className="vegetables-stock-badge">Low Stock</span>}
                  </div>
                  <button 
                    className={`vegetables-wishlist-btn ${wishlist.includes(veg.id) ? 'vegetables-active' : ''}`}
                    onClick={() => toggleWishlist(veg.id)}
                  >
                    <FiHeart />
                  </button>
                </div>
                
                <div className="vegetables-product-image-container">
                  <img src={veg.image} alt={veg.name} className="vegetables-product-image" loading="lazy" />
                </div>
                
                <div className="vegetables-product-info">
                  <h3>{veg.name}</h3>
                  <span className="vegetables-category">{veg.category} • {veg.unit}</span>
                  <p className="vegetables-description">{veg.description}</p>
                  <div className="vegetables-price-section">
                    <div className="vegetables-price">
                      <span className="vegetables-current">${veg.discount}</span>
                      {parseFloat(veg.discount) < parseFloat(veg.price) && (
                        <span className="vegetables-original">${veg.price}</span>
                      )}
                    </div>
                    {parseFloat(veg.discount) < parseFloat(veg.price) && (
                      <span className="vegetables-discount-percent">
                        {Math.round((1 - veg.discount/veg.price) * 100)}% off
                      </span>
                    )}
                  </div>
                  <div className="vegetables-rating-stock">
                    <div className="vegetables-rating">
                      <div className="vegetables-stars">
                        {'★'.repeat(Math.floor(veg.rating))}
                        {'☆'.repeat(5 - Math.floor(veg.rating))}
                      </div>
                      <span>({veg.rating})</span>
                    </div>
                    <div className="vegetables-stock-status">
                      {veg.stock > 10 ? (
                        <span className="vegetables-in-stock"><FiCheck /> In stock</span>
                      ) : (
                        <span className="vegetables-low-stock">Only {veg.stock} left</span>
                      )}
                    </div>
                  </div>
                  <button 
                    className="vegetables-add-to-cart"
                    onClick={() => addToCart(veg)}
                  >
                    <FiShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="vegetables-pagination-container">
            <div className="vegetables-pagination">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <span>...</span>
              <button>10</button>
              <button className="vegetables-next-btn">Next →</button>
            </div>
          </div>
        </div>

        {showCart && (
          <div className="vegetables-cart-overlay" onClick={() => setShowCart(false)}>
            <div className="vegetables-cart-sidebar" onClick={(e) => e.stopPropagation()}>
              <div className="vegetables-cart-header">
                <h3>Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)})</h3>
                <button className="vegetables-close-cart" onClick={() => setShowCart(false)}>
                  <FiX />
                </button>
              </div>
              <div className="vegetables-cart-items">
                {cart.length === 0 ? (
                  <div className="vegetables-empty-cart">
                    <p>Your cart is empty</p>
                    <button 
                      className="vegetables-continue-shopping"
                      onClick={() => setShowCart(false)}
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="vegetables-cart-item">
                        <img src={item.image} alt={item.name} className="vegetables-cart-item-image" />
                        <div className="vegetables-item-details">
                          <h4>{item.name}</h4>
                          <div className="vegetables-item-price">
                            ${item.discount} × {item.quantity} = 
                            <span> ${(item.discount * item.quantity).toFixed(2)}</span>
                          </div>
                          <div className="vegetables-item-actions">
                            <div className="vegetables-quantity-control">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button 
                              className="vegetables-remove-item"
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
                <div className="vegetables-cart-summary">
                  <div className="vegetables-summary-row">
                    <span>Subtotal:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="vegetables-summary-row">
                    <span>Delivery:</span>
                    <span>Free</span>
                  </div>
                  <div className="vegetables-summary-row vegetables-total">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <div className="vegetables-cart-buttons">
                    <button className="vegetables-checkout-btn">Proceed to Checkout</button>
                    <button 
                      className="vegetables-continue-shopping" 
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
      <Footer />
    </div>
  );
};

export default VegetablesPage;