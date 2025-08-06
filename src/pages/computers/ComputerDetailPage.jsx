import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiChevronLeft,
  FiStar,
  FiCheck
} from 'react-icons/fi';
import './ComputerDetailPage.css';


function ComputerDetailPage({ computers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const computer = computers.find(comp => comp.id === parseInt(id));

  if (!computer) {
    return <div className="not-found">Product not found</div>;
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹');
  };

  return (
    <div>
      <div className="computer-detail-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FiChevronLeft /> Back
        </button>

        <div className="product-container">
          <div className="product-images">
            <div className="main-image">
              <img src={computer.image} alt={computer.name} />
            </div>
            <div className="thumbnail-container">
              <div className="thumbnail active">
                <img src={computer.image} alt={computer.name} />
              </div>
              {/* Add more thumbnails if available */}
            </div>
          </div>

          <div className="product-details">
            <h1>{computer.name}</h1>
            <div className="rating-section">
              <div className="stars">
                {Array(Math.floor(parseFloat(computer.rating))).fill().map((_, i) => (
                  <FiStar key={i} className="filled" />
                ))}
                {Array(5 - Math.floor(parseFloat(computer.rating))).fill().map((_, i) => (
                  <FiStar key={i} className="empty" />
                ))}
              </div>
              <span className="review-count">{computer.reviews} ratings</span>
            </div>

            <div className="price-section">
              <span className="current-price">{formatCurrency(computer.discount)}</span>
              {parseInt(computer.discount) < parseInt(computer.price) && (
                <span className="original-price">{formatCurrency(computer.price)}</span>
              )}
              {parseInt(computer.discount) < parseInt(computer.price) && (
                <span className="discount-percent">
                  {Math.round((1 - computer.discount / computer.price) * 100)}% off
                </span>
              )}
            </div>

            <div className="offers-section">
              <h3>Available offers</h3>
              <ul>
                {computer.offers.map((offer, i) => (
                  <li key={i}>
                    <FiCheck className="offer-icon" /> {offer}
                  </li>
                ))}
              </ul>
            </div>

            <div className="specs-section">
              <h3>Specifications</h3>
              <div className="specs-grid">
                <div className="spec-row">
                  <span className="spec-name">Brand</span>
                  <span className="spec-value">{computer.brand}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Model</span>
                  <span className="spec-value">{computer.name}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Type</span>
                  <span className="spec-value">{computer.type}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Processor</span>
                  <span className="spec-value">{computer.specs.cpu}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Graphics</span>
                  <span className="spec-value">{computer.specs.gpu}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">RAM</span>
                  <span className="spec-value">{computer.specs.ram}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Storage</span>
                  <span className="spec-value">{computer.specs.storage}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Display</span>
                  <span className="spec-value">{computer.specs.display}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Operating System</span>
                  <span className="spec-value">{computer.specs.os}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-name">Weight</span>
                  <span className="spec-value">{computer.specs.weight}</span>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart">
                <FiShoppingCart /> Add to Cart
              </button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ComputerDetailPage;