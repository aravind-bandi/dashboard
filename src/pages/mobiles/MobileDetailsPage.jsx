import React, { useState } from 'react';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiChevronLeft,
  FiStar,
  FiChevronDown,
  FiChevronUp,
  FiCheck
} from 'react-icons/fi';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './MobileDetailsPage.css';

const MobileDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showSpecs, setShowSpecs] = useState(true);
  const [showOffers, setShowOffers] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);

  // In a real app, this would come from an API or context
  const mobile = {
    id: id,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    price: '1299.00',
    discount: '1199.00',
    images: [
      'https://images.unsplash.com/photo-1695048133425-7ec0b8a7d743?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1695048133429-7d9f2c5b0b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1695048133430-7d9f2c5b0b20?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1695048133431-7d9f2c5b0b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    ],
    colors: ['Black Titanium', 'White Titanium', 'Blue Titanium', 'Natural Titanium'],
    specs: {
      display: '6.1-inch Super Retina XDR display',
      chip: 'A17 Pro chip',
      camera: 'Pro camera system (48MP Main, 12MP Ultra Wide, 12MP Telephoto)',
      battery: 'Up to 23 hours video playback',
      memory: '8GB RAM',
      storage: '256GB',
      os: 'iOS 17',
      weight: '187 grams'
    },
    rating: '4.8',
    reviews: 4285,
    offers: [
      'Get extra ₹8000 off with exchange',
      'No Cost EMI from ₹1999/month',
      'Bank OfferExtra ₹2000 discount on SBI Credit Cards',
      'Free Apple Case worth ₹5000'
    ],
    inStock: true,
    deliveryDate: 'Get it by Tomorrow, 10 AM'
  };

  const addToCart = () => {
    // In a real app, this would dispatch to a cart context
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
  };

  const changeQuantity = (newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;
    setQuantity(newQuantity);
  };

  return (
    <div className="mobile-details-page">
      <div className="breadcrumb">
        <button onClick={() => navigate(-1)}>
          <FiChevronLeft /> Back
        </button>
        <span>
          <Link to="/">Home</Link> / <Link to="/mobiles">Mobiles</Link> / {mobile.brand} {mobile.name}
        </span>
      </div>

      <div className="product-container">
        <div className="product-images">
          <div className="thumbnail-images">
            {mobile.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${mobile.name} ${index + 1}`}
                className={selectedImage === index ? 'active' : ''}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={mobile.images[selectedImage]} alt={mobile.name} />
          </div>
        </div>

        <div className="product-details">
          <h1>{mobile.brand} {mobile.name}</h1>
          
          <div className="rating-reviews">
            <div className="rating">
              <div className="stars">
                {Array(Math.floor(parseFloat(mobile.rating))).fill().map((_, i) => (
                  <FiStar key={i} className="filled" />
                ))}
                {Array(5 - Math.floor(parseFloat(mobile.rating))).fill().map((_, i) => (
                  <FiStar key={i} className="empty" />
                ))}
              </div>
              <span>{mobile.rating} ({mobile.reviews} ratings)</span>
            </div>
          </div>

          <div className="price-section">
            <div className="price">
              <span className="current">₹{mobile.discount}</span>
              <span className="original">₹{mobile.price}</span>
              <span className="discount">
                {Math.round((1 - mobile.discount/mobile.price) * 100)}% off
              </span>
            </div>
            <span className="inclusive">Inclusive of all taxes</span>
          </div>

          <div className="offers-section">
            <h3>Available offers</h3>
            <ul>
              {mobile.offers.map((offer, i) => (
                <li key={i}>
                  <FiCheck /> {offer}
                </li>
              ))}
            </ul>
          </div>

          <div className="color-section">
            <h3>Color: {mobile.colors[0]}</h3>
            <div className="color-options">
              {mobile.colors.map((color, i) => (
                <button key={i} className={i === 0 ? 'active' : ''}>
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="delivery-section">
            <h3>Delivery</h3>
            <div className="delivery-info">
              <input type="text" placeholder="Enter delivery pincode" />
              <button>Check</button>
            </div>
            <p className="delivery-date">{mobile.deliveryDate}</p>
            <p className="delivery-note">Free delivery</p>
          </div>

          <div className="quantity-section">
            <h3>Quantity</h3>
            <div className="quantity-control">
              <button onClick={() => changeQuantity(quantity - 1)}>-</button>
              <span>{quantity}</span>
              <button onClick={() => changeQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button 
              className={`add-to-cart ${addedToCart ? 'added' : ''}`}
              onClick={addToCart}
              disabled={!mobile.inStock}
            >
              {addedToCart ? 'Added to Cart' : <><FiShoppingCart /> Add to Cart</>}
            </button>
            <button 
              className={`buy-now ${!mobile.inStock ? 'disabled' : ''}`}
              disabled={!mobile.inStock}
            >
              Buy Now
            </button>
            <button 
              className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
              onClick={toggleWishlist}
            >
              <FiHeart /> {inWishlist ? 'In Wishlist' : 'Wishlist'}
            </button>
          </div>
        </div>
      </div>

      <div className="product-info-sections">
        <div className={`specs-section ${showSpecs ? 'open' : ''}`}>
          <div className="section-header" onClick={() => setShowSpecs(!showSpecs)}>
            <h2>Specifications</h2>
            {showSpecs ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {showSpecs && (
            <div className="section-content">
              <table>
                <tbody>
                  {Object.entries(mobile.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-name">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className={`offers-section ${showOffers ? 'open' : ''}`}>
          <div className="section-header" onClick={() => setShowOffers(!showOffers)}>
            <h2>Offers</h2>
            {showOffers ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {showOffers && (
            <div className="section-content">
              <ul>
                {mobile.offers.map((offer, i) => (
                  <li key={i}>
                    <FiCheck /> {offer}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileDetailsPage;