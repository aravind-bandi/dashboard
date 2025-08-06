import React, { useState } from 'react';
import { 
  FiChevronRight,
  FiFilter,
  FiShoppingCart,
  FiStar
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './featuredinfo.css';
import Footer from '../../pages/footer/Footer';

const categories = [
  { 
    id: 1, 
    name: 'Vegetables', 
    image: 'https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg?semt=ais_hybrid&w=740',
    icon: 'https://cdn-icons-png.flaticon.com/512/2329/2329865.png',
    stock: 45 
  },
  { 
    id: 2, 
    name: 'Fashion', 
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    icon: 'https://cdn-icons-png.flaticon.com/512/892/892458.png',
    stock: 32 
  },
  { 
    id: 3, 
    name: 'Mobiles', 
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933245.png',
    stock: 28 
  },
  { 
    id: 4, 
    name: 'Office', 
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    icon: 'https://cdn-icons-png.flaticon.com/512/3468/3468379.png',
    stock: 18 
  },
  { 
    id: 5, 
    name: 'Computer', 
    image: 'https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965300.png',
    stock: 15 
  },
];

const foodCategories = [
  { 
    id: 1, 
    name: 'Vegetables', 
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/044/771/696/small_2x/a-basket-brimming-with-vegetables-free-png.png',
    stock: 78 
  },
  { 
    id: 2, 
    name: 'Fish', 
    icon: 'https://img.freepik.com/premium-photo/joyful-blue-fish-smiles-brightly-against-white-background-white-png-transparent-background_927930-5106.jpg',
    stock: 45 
  },
  { 
    id: 3, 
    name: 'Fruits', 
    icon: 'https://www.spotlessfruits.com/cdn/shop/files/SPOTLESSFRUITS-FRUITBASKET_1024x1024.jpg?v=1738153576',
    stock: 62 
  },
  { 
    id: 4, 
    name: 'Meat', 
    icon: 'https://images.squarespace-cdn.com/content/v1/59f0e6beace8641044d76e9c/1669587646206-6Z76MY4X3GBFKIUQZJ4R/Social+Meat.jpeg',
    stock: 34 
  },
  { 
    id: 5, 
    name: 'Milk', 
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLYLrpcL-2TKZDY0eljDthboDPMytCCRgVg&s',
    stock: 89 
  }
];

const featuredProducts = [
  {
    id: 301,
    name: 'Printed Hummingbird T-Shirt',
    isNew: true,
    price: 23.90,
    originalPrice: 30.52,
    rating: 5,
    reviews: 124,
    image: 'https://cpimg.tistatic.com/07494903/b/4/Mens-Hummingbird-Printed-T-Shirt.jpg'
  },
  {
    id: 302,
    name: 'Slim Fit Blue Jeans',
    isSale: true,
    price: 30.52,
    originalPrice: 35.99,
    rating: 4,
    reviews: 89,
    saleTime: '49DAYS 09HOURS 28MINS 36SECS',
    image: 'https://spykar.com/cdn/shop/files/bIRVAkL6cM-MDSKN2BC014-LIGHT-BLUE-_1.webp?v=1750337593'
  },
  {
    id: 303,
    name: 'Wireless Bluetooth Headphones',
    price: 29.00,
    rating: 4,
    reviews: 56,
    image: 'https://www.lapcare.com/cdn/shop/files/1_6122ca29-5373-4c4f-97c2-0728ea368fc1.webp?v=1747984575'
  },
  {
    id: 304,
    name: 'Stainless Steel Water Bottle',
    price: 19.99,
    rating: 5,
    reviews: 231,
    image: 'https://pexpo.in/cdn/shop/files/Artboard_1_192fb835-3f76-4f02-9bab-fcc6011ec1cc.jpg?v=1747041970'
  },
  {
    id: 305,
    name: "Women's Summer Dress",
    price: 11.90,
    rating: 3,
    reviews: 42,
    image: 'https://images.meesho.com/images/products/409742702/r4pmx_512.webp'
  },
  {
    id: 306,
    name: 'Leather Wallet (Free Shipping)',
    isFree: true,
    originalPrice: 11.90,
    rating: 5,
    reviews: 78,
    saleTime: '493DAYS 09HOURS 28MINS 36SECS',
    image: 'https://funkforhire.co.in/cdn/shop/files/FFHACHORSELOOPWALLETPETROL1.png?v=1729942888'
  },
  {
    id: 307,
    name: 'Smart Watch Series 5',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviews: 215,
    image: 'https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch_series_5-gold-aluminum-case-pomegranate-band-and-space-gray-aluminum-case-pine-green-band-091019_big.jpg.large.jpg'
  },
  {
    id: 308,
    name: 'Wireless Earbuds Pro',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.2,
    reviews: 178,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9i9VAceOEekKQ-ICYNISi1UtyXw9gGf9MCg&s'
  }
];

const groceryProducts = [
  {
    id: 401,
    name: 'Organic Carrots',
    category: 'ROOT • KG',
    price: 3.09,
    originalPrice: 3.51,
    discount: 12,
    rating: 3.1,
    reviews: 45,
    inStock: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbO19EKPDHbGwtfBuMegCjN_HS5ULMvsnm5g&s'
  },
  {
    id: 402,
    name: 'Fresh Spinach',
    category: 'FRUIT • BUNCH',
    price: 2.68,
    originalPrice: 3.29,
    discount: 19,
    rating: 0.8,
    reviews: 23,
    inStock: true,
    image: 'https://img500.exportersindia.com/product_images/bc-500/2022/9/8532990/fresh-spinach-1662381058-6524846.jpeg'
  },
  {
    id: 403,
    name: 'Chewy Tomatoes',
    category: 'FLOWER • PIECE',
    price: 1.73,
    originalPrice: 1.83,
    discount: 5,
    rating: 1.9,
    reviews: 67,
    inStock: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_iIFTim7zOF0IswwywyyDk_qJMtB-jKNbw&s'
  },
  {
    id: 404,
    name: 'Bell Peppers',
    category: 'STEM • DOZEN',
    price: 4.26,
    rating: 2.9,
    reviews: 34,
    inStock: true,
    image: 'https://healthyfamilyproject.com/wp-content/uploads/2020/05/Bell-Peppers-background.jpg'
  },
  {
    id: 405,
    name: 'Organic Apples',
    category: 'FRUIT • KG',
    price: 2.99,
    originalPrice: 3.49,
    discount: 14,
    rating: 4.2,
    reviews: 56,
    inStock: true,
    image: 'https://www.orgpick.com/cdn/shop/articles/Apple_1024x1024.jpg?v=1547124407'
  },
  {
    id: 406,
    name: 'Fresh Bananas',
    category: 'FRUIT • BUNCH',
    price: 1.99,
    originalPrice: 2.29,
    discount: 13,
    rating: 4.0,
    reviews: 89,
    inStock: true,
    image: 'https://media.istockphoto.com/id/1494763483/photo/banana-concept.jpg?s=612x612&w=0&k=20&c=ZeVP-L6ClmyT-i0N-QAbDK7q37uHhrzg7KOzMkaOtg4='
  },
  {
    id: 407,
    name: 'Sweet Potatoes',
    category: 'ROOT • KG',
    price: 2.49,
    originalPrice: 2.99,
    discount: 17,
    rating: 3.8,
    reviews: 34,
    inStock: true,
    image: 'https://img.onmanorama.com/content/dam/mm/en/lifestyle/health/images/2024/11/27/sweet-potato-1.jpg?w=1120&h=583'
  },
  {
    id: 408,
    name: 'Fresh Broccoli',
    category: 'FLOWER • PIECE',
    price: 3.29,
    originalPrice: 3.79,
    discount: 13,
    rating: 4.1,
    reviews: 42,
    inStock: true,
    image: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_294838064-min.jpg'
  }
];

const newArrivalProducts = [
  {
    id: 501,
    name: 'Wireless Earbuds Pro',
    category: 'ELECTRONICS • PAIR',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.5,
    reviews: 215,
    inStock: true,
    image: 'https://unixindia.in/cdn/shop/files/02_0a600cb1-f9a2-4af2-9ad4-bbb201846684.jpg?v=1747995446&width=1500'
  },
  {
    id: 502,
    name: 'Smart Watch Series 5',
    category: 'WEARABLES • PIECE',
    price: 199.00,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.2,
    reviews: 178,
    inStock: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ554jRORYYsmjExo8ZMk7I3IQ0sggZdznoNA&s'
  },
  {
    id: 503,
    name: '4K Action Camera',
    category: 'CAMERAS • UNIT',
    price: 149.99,
    originalPrice: 179.99,
    discount: 17,
    rating: 4.7,
    reviews: 342,
    inStock: true,
    image: 'https://ausha.co.in/cdn/shop/files/G.jpg?v=1712123464'
  },
  {
    id: 504,
    name: 'Bluetooth Speaker',
    category: 'AUDIO • PIECE',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    rating: 4.3,
    reviews: 126,
    inStock: true,
    image: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Buddy-100-pic1.jpg?v=1742361712'
  },
  {
    id: 505,
    name: 'Gaming Keyboard',
    category: 'COMPUTER • PIECE',
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.6,
    reviews: 287,
    inStock: true,
    image: 'https://itgadgetsonline.com/wp-content/uploads/2023/12/Razer-BlackWidow-V4-X-Mechanical-Yellow-Switches-Gaming-Keyboard-2-1.webp'
  },
  {
    id: 506,
    name: 'Noise Cancelling Headphones',
    category: 'AUDIO • PAIR',
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    rating: 4.4,
    reviews: 198,
    inStock: true,
    image: 'https://cdn.thewirecutter.com/wp-content/media/2025/05/BEST-NOISE-CANCELLING-HEADPHONES-8254.jpg?auto=webp&quality=75&width=1024'
  },
  {
    id: 507,
    name: 'Fitness Tracker',
    category: 'WEARABLES • PIECE',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    rating: 4.1,
    reviews: 156,
    inStock: true,
    image: 'https://m.media-amazon.com/images/I/61AeGQhwjxL._UF1000,1000_QL80_.jpg'
  },
  {
    id: 508,
    name: 'Portable SSD 1TB',
    category: 'STORAGE • UNIT',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.8,
    reviews: 342,
    inStock: true,
    image: 'https://microless.com/cdn/products/7323a888fe7a80e85a79328f91d6bf7f-hi.jpg'
  }
];

const FeaturedInfo = () => {
  const [showCartPrice, setShowCartPrice] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FiStar key={i} className="star filled" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FiStar key={i} className="star half-filled" />);
      } else {
        stars.push(<FiStar key={i} className="star" />);
      }
    }
    
    return stars;
  };

  const addToCart = (productId, productType = 'featured') => {
    let product;
    if (productType === 'grocery') {
      product = groceryProducts.find(p => p.id === productId);
    } else if (productType === 'newArrival') {
      product = newArrivalProducts.find(p => p.id === productId);
    } else {
      product = featuredProducts.find(p => p.id === productId);
    }
    
    setShowCartPrice({
      id: productId,
      price: product.price,
      name: product.name
    });
    
    setTimeout(() => {
      setShowCartPrice(null);
    }, 2000);
  };

  return (
    <div className="dashboard-container">
      <div className="banner-section">
        <div className="discount-card">
          <div className="discount-content">
            <h3>Get Special Discount</h3>
            <h1>UP TO 45%</h1>
            <p>Shop now and save big on our seasonal sale. Limited time offer!</p>
            <button className="use-now-btn">Use Now</button>
          </div>
          <div className="vegetable-box">
            <img 
              src="https://png.pngtree.com/png-vector/20240708/ourmid/pngtree-fresh-vegetables-with-wicker-basket-png-image_13008114.png" 
              alt="Fresh Vegetables" 
            />
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2>Popular Categories</h2>
        <Link to="/categories" className="view-all">
          View All <FiChevronRight />
        </Link>
      </div>

      <div className="categories-grid">
        {categories.slice(0, 5).map(category => {
          // Fix for Computer route and ensure correct content
          let path = `/${category.name.toLowerCase()}`;
          let displayName = category.name;
          if (category.name.toLowerCase() === 'computer') {
            path = '/computers';
            displayName = 'Computers';
          }
          return (
            <Link 
              to={path}
              key={category.id} 
              className="category-card"
            >
              <div className="category-image-container">
                <img src={category.image} alt={displayName} className="category-image" />
              </div>
              <div className="category-info">
                <h3>{displayName}</h3>
                <p>{category.stock} items</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="section-header with-filter">
        <h2 className="centered-title">Categories and Stock</h2>
        <div className="filter-btn">
          <FiFilter /> Filter
        </div>
      </div>

      <div className="stock-grid">
        {foodCategories.map(category => (
          <div key={category.id} className="stock-card">
            <div className="stock-icon-container">
              <img 
                src={category.icon} 
                alt={category.name} 
                className="stock-icon" 
              />
              <span className="stock-badge">{category.stock}</span>
            </div>
            <p className="stock-category-name">{category.name}</p>
          </div>
        ))}
      </div>

      <div className="special-offers">
        <div className="offer-section new-arrivals">
          <h3>NEW ARRIVALS</h3>
          <h2>UP TO 25% OFF</h2>
        </div>
        <div className="offer-section trend">
          <h3>TREND 2018</h3>
          <h2>SAVE UP TO 25%</h2>
        </div>
        <div className="offer-section big-sale">
          <h3>THE BIG SALE</h3>
          <h2>WOMEN STYLE</h2>
          <h3>SAVE 40% OFF</h3>
        </div>
      </div>

      {/* Grocery New Arrivals Section */}
      <div className="section-header">
        <h2>Grocery New Arrivals</h2>
        <Link to="/grocery-new-arrivals" className="view-all">
          View All <FiChevronRight />
        </Link>
      </div>

      <div className="grocery-product-grid">
        {groceryProducts.map(product => (
          <div key={product.id} className="grocery-product-card">
            {product.discount && (
              <div className="grocery-product-badge">{product.discount}% off</div>
            )}
            
            <div className="grocery-product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="grocery-product-info">
              <h3 className="grocery-product-name">{product.name}</h3>
              <p className="grocery-product-category">{product.category}</p>
              
              <div className="grocery-product-pricing">
                {product.originalPrice ? (
                  <>
                    <span className="grocery-current-price">${product.price.toFixed(2)}</span>
                    <span className="grocery-original-price">${product.originalPrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="grocery-current-price">${product.price.toFixed(2)}</span>
                )}
              </div>

              <div className="grocery-product-rating">
                <div className="grocery-stars">
                  {renderStars(product.rating)}
                  <span className="grocery-rating-value">({product.rating.toFixed(1)})</span>
                </div>
                {product.inStock && (
                  <span className="grocery-in-stock">✓ In stock</span>
                )}
              </div>

              <button 
                className="grocery-add-to-cart"
                onClick={() => addToCart(product.id, 'grocery')}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* New Arrivals Section */}
      <div className="section-header">
        <h2>New Arrivals</h2>
        <Link to="/new-arrivals" className="view-all">
          View All <FiChevronRight />
        </Link>
      </div>

      <div className="grocery-product-grid">
        {newArrivalProducts.map(product => (
          <div key={product.id} className="grocery-product-card">
            {product.discount && (
              <div className="grocery-product-badge">{product.discount}% off</div>
            )}
            
            <div className="grocery-product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="grocery-product-info">
              <h3 className="grocery-product-name">{product.name}</h3>
              <p className="grocery-product-category">{product.category}</p>
              
              <div className="grocery-product-pricing">
                {product.originalPrice ? (
                  <>
                    <span className="grocery-current-price">${product.price.toFixed(2)}</span>
                    <span className="grocery-original-price">${product.originalPrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="grocery-current-price">${product.price.toFixed(2)}</span>
                )}
              </div>

              <div className="grocery-product-rating">
                <div className="grocery-stars">
                  {renderStars(product.rating)}
                  <span className="grocery-rating-value">({product.rating.toFixed(1)})</span>
                </div>
                {product.inStock && (
                  <span className="grocery-in-stock">✓ In stock</span>
                )}
              </div>

              <button 
                className="grocery-add-to-cart"
                onClick={() => addToCart(product.id, 'newArrival')}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Products Section */}
      <div className="section-header">
        <h2>Featured Products</h2>
        <Link to="/featured-products" className="view-all">
          View All <FiChevronRight />
        </Link>
      </div>

      <div className="grocery-product-grid">
        {featuredProducts.map(product => (
          <div 
            key={product.id} 
            className="grocery-product-card"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Badges */}
            <div className="grocery-product-badges">
              {product.isNew && <span className="badge new">NEW</span>}
              {product.isSale && <span className="badge sale">SALE</span>}
              {product.isFree && <span className="badge free">FREE</span>}
            </div>
            
            <div className="grocery-product-image">
              <img src={product.image} alt={product.name} />
            </div>

            {product.saleTime && (
              <div className="sale-timer">
                <div className="timer">{product.saleTime}</div>
              </div>
            )}

            <div className="grocery-product-info">
              <h3 className="grocery-product-name">{product.name}</h3>
              
              <div className="grocery-product-pricing">
                {typeof product.price === 'number' && product.originalPrice ? (
                  <>
                    <span className="grocery-current-price">${product.price.toFixed(2)}</span>
                    <span className="grocery-original-price">${product.originalPrice.toFixed(2)}</span>
                    <span className="grocery-discount-percent">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  </>
                ) : product.isFree && typeof product.originalPrice === 'number' ? (
                  <>
                    <span className="grocery-current-price">$0.00</span>
                    <span className="grocery-original-price">${product.originalPrice.toFixed(2)}</span>
                    <span className="grocery-discount-percent">-100%</span>
                  </>
                ) : typeof product.price === 'number' ? (
                  <span className="grocery-current-price">${product.price.toFixed(2)}</span>
                ) : (
                  <span className="grocery-current-price">$0.00</span>
                )}
              </div>

              <div className="grocery-product-rating">
                <div className="grocery-stars">
                  {renderStars(product.rating)}
                  <span className="grocery-rating-value">({product.reviews})</span>
                </div>
              </div>

              <button 
                className="grocery-add-to-cart"
                onClick={() => addToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {showCartPrice && (
        <div className="cart-notification">
          {showCartPrice.name} added to cart - ${showCartPrice.price.toFixed(2)}
        </div>
      )}
      <Footer />
      
    </div>
    
  );
};

export default FeaturedInfo;