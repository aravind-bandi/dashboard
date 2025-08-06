import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import Chart from "../../components/charts/Chart";
import { productData } from "../../DummyData";
import {
  Publish as PublishIcon,
  FavoriteBorder as FavoriteIcon,
  Star as StarIcon,
  ShoppingCart as CartIcon,
  Share as ShareIcon,
} from "@mui/icons-material";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    // Simulate API calls
    const fetchData = async () => {
      // In a real app, these would be API calls
      const mockProducts = [
        {
          id: 1,
          name: "Premium Milk",
          category: "dairy",
          price: 3.99,
          discountPrice: 3.49,
          rating: 4.5,
          reviewCount: 128,
          inStock: true,
          description: "Organic whole milk from grass-fed cows.",
          image: "https://cdn.theatlantic.com/thumbor/MAp_MfXXLZpH6CyMHf9LfaJjdnM=/458x43:1523x1108/540x540/media/img/mt/2024/10/Atlantic_Milk_2000x1125/original.jpg",
          images: [
            "https://cdn.theatlantic.com/thumbor/MAp_MfXXLZpH6CyMHf9LfaJjdnM=/458x43:1523x1108/540x540/media/img/mt/2024/10/Atlantic_Milk_2000x1125/original.jpg",
            "https://www.organicvalley.coop/imgproxy/v__/r0_500x500__s800x800/dpr_2.0/w_500/h_500/q_auto,f_auto,fl_lossy,c_fill,g_auto/orgamicvalley/products/0003/0429/2%25_Organic_Milk_Half_Gallon_Carton_Whole_front.png",
            "https://m.media-amazon.com/images/I/71hU1x1XpZL._SL1500_.jpg"
          ],
          details: {
            brand: "Organic Valley",
            weight: "1 Gallon",
            shelfLife: "14 days",
            ingredients: "Organic milk",
            nutritionalInfo: {
              calories: 150,
              fat: 8,
              protein: 8,
              carbs: 12
            }
          }
        },
        {
          id: 2,
          name: "Organic Eggs",
          category: "dairy",
          price: 5.99,
          discountPrice: 4.99,
          rating: 4.7,
          reviewCount: 215,
          inStock: true,
          description: "Free-range organic eggs from happy chickens.",
          image: "https://m.media-amazon.com/images/I/71hU1x1XpZL._SL1500_.jpg",
          details: {
            brand: "Happy Hens",
            weight: "12 count",
            shelfLife: "30 days",
            ingredients: "Organic eggs",
            nutritionalInfo: {
              calories: 70,
              fat: 5,
              protein: 6,
              carbs: 0
            }
          }
        },
        // Add more products...
      ];

      const mockCategories = [
        { id: "all", name: "All Products" },
        { id: "dairy", name: "Dairy" },
        { id: "fruits", name: "Fruits & Vegetables" },
        { id: "meat", name: "Meat & Poultry" },
        { id: "bakery", name: "Bakery" },
        { id: "beverages", name: "Beverages" },
      ];

      const mockReviews = [
        {
          id: 1,
          userId: 101,
          userName: "John D.",
          rating: 5,
          date: "2023-05-15",
          comment: "Best milk I've ever tasted! Creamy and fresh."
        },
        {
          id: 2,
          userId: 102,
          userName: "Sarah M.",
          rating: 4,
          date: "2023-04-22",
          comment: "Great quality but a bit pricey."
        }
      ];

      setProducts(mockProducts);
      setCategories(mockCategories);
      setSelectedProduct(mockProducts[0]);
      setReviews(mockReviews);
      setSimilarProducts(mockProducts.slice(0, 4));
    };

    fetchData();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    // Add to cart logic
    alert(`${quantity} ${selectedProduct.name} added to cart!`);
  };

  const handleWishlist = () => {
    // Add to wishlist logic
    alert(`${selectedProduct.name} added to wishlist!`);
  };

  return (
    <div className="products-page">
      {/* Category Navigation */}
      <div className="category-nav">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products
          .filter(product => selectedCategory === "all" || product.category === selectedCategory)
          .map(product => (
            <div key={product.id} className="product-card">
              <div className="product-badge">{product.inStock ? "In Stock" : "Out of Stock"}</div>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={i < Math.floor(product.rating) ? "filled" : ""} />
                  ))}
                  <span>({product.reviewCount})</span>
                </div>
                <div className="product-pricing">
                  <span className="current-price">${product.discountPrice || product.price}</span>
                  {product.discountPrice && (
                    <span className="original-price">${product.price}</span>
                  )}
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="product-detail-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setSelectedProduct(null)}>×</button>
            
            <div className="product-detail-container">
              {/* Product Images */}
              <div className="product-images">
                <div className="main-image">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                <div className="thumbnail-container">
                  {selectedProduct.images.map((img, index) => (
                    <img 
                      key={index} 
                      src={img} 
                      alt={`${selectedProduct.name} ${index + 1}`} 
                      className="thumbnail"
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="product-info">
                <h1 className="product-title">{selectedProduct.name}</h1>
                
                <div className="product-meta">
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={i < Math.floor(selectedProduct.rating) ? "filled" : ""} />
                    ))}
                    <span>({selectedProduct.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="availability">
                    {selectedProduct.inStock ? (
                      <span className="in-stock">In Stock</span>
                    ) : (
                      <span className="out-of-stock">Out of Stock</span>
                    )}
                  </div>
                </div>

                <div className="price-container">
                  <span className="current-price">${selectedProduct.discountPrice || selectedProduct.price}</span>
                  {selectedProduct.discountPrice && (
                    <>
                      <span className="original-price">${selectedProduct.price}</span>
                      <span className="discount">
                        {Math.round((1 - selectedProduct.discountPrice / selectedProduct.price) * 100)}% OFF
                      </span>
                    </>
                  )}
                </div>

                <div className="product-description">
                  <p>{selectedProduct.description}</p>
                </div>

                {/* Quantity Selector */}
                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                  <button className="add-to-cart" onClick={handleAddToCart}>
                    <CartIcon /> Add to Cart
                  </button>
                  <button className="wishlist" onClick={handleWishlist}>
                    <FavoriteIcon /> Wishlist
                  </button>
                  <button className="share">
                    <ShareIcon /> Share
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="delivery-info">
                  <h3>Delivery Options</h3>
                  <p>Free delivery on orders over $50</p>
                  <p>Expected delivery: 2-3 business days</p>
                </div>
              </div>
            </div>

            {/* Product Tabs */}
            <div className="product-tabs">
              <div className="tab-header">
                <button 
                  className={activeTab === "description" ? "active" : ""}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button 
                  className={activeTab === "details" ? "active" : ""}
                  onClick={() => setActiveTab("details")}
                >
                  Details
                </button>
                <button 
                  className={activeTab === "reviews" ? "active" : ""}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews ({reviews.length})
                </button>
              </div>

              <div className="tab-content">
                {activeTab === "description" && (
                  <div className="description-content">
                    <h3>About this item</h3>
                    <p>{selectedProduct.description}</p>
                  </div>
                )}

                {activeTab === "details" && (
                  <div className="details-content">
                    <h3>Product Details</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Brand</td>
                          <td>{selectedProduct.details.brand}</td>
                        </tr>
                        <tr>
                          <td>Weight/Volume</td>
                          <td>{selectedProduct.details.weight}</td>
                        </tr>
                        <tr>
                          <td>Shelf Life</td>
                          <td>{selectedProduct.details.shelfLife}</td>
                        </tr>
                        <tr>
                          <td>Ingredients</td>
                          <td>{selectedProduct.details.ingredients}</td>
                        </tr>
                        <tr>
                          <td>Nutritional Info</td>
                          <td>
                            Calories: {selectedProduct.details.nutritionalInfo.calories}kcal, 
                            Fat: {selectedProduct.details.nutritionalInfo.fat}g, 
                            Protein: {selectedProduct.details.nutritionalInfo.protein}g, 
                            Carbs: {selectedProduct.details.nutritionalInfo.carbs}g
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="reviews-content">
                    <h3>Customer Reviews</h3>
                    <button className="write-review">Write a Review</button>
                    
                    {reviews.map(review => (
                      <div key={review.id} className="review-item">
                        <div className="review-header">
                          <span className="reviewer">{review.userName}</span>
                          <div className="review-rating">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} className={i < review.rating ? "filled" : ""} />
                            ))}
                          </div>
                          <span className="review-date">{review.date}</span>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Similar Products */}
            <div className="similar-products">
              <h3>Similar Products</h3>
              <div className="similar-products-grid">
                {similarProducts.map(product => (
                  <div key={product.id} className="similar-product-card">
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <div className="price">${product.discountPrice || product.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}