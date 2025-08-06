import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryProducts.css'; // Ensure this file exists in the same directory

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with your actual API calls
        // const categoryResponse = await fetch(`/api/categories/${categoryId}`);
        // const categoryData = await categoryResponse.json();
        
        // const productsResponse = await fetch(`/api/products?category=${categoryId}`);
        // const productsData = await productsResponse.json();
        
        // Mock data - remove this when you have real API
        const mockCategory = { id: categoryId, name: `Category ${categoryId}` };
        const mockProducts = Array(5).fill().map((_, i) => ({
          id: `${categoryId}-${i+1}`,
          name: `Product ${i+1}`,
          price: (Math.random() * 100).toFixed(2),
          stock: Math.floor(Math.random() * 100),
        }));
        
        setCategoryName(mockCategory.name);
        setProducts(mockProducts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products-container">
  <h2 className="category-header">Products in {categoryName}</h2>
  <div className="products-grid">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <span className="product-name">{product.name}</span>
        <div className="product-info">
          <span className="product-price">${product.price}</span>
          <span className="product-stock">In stock: {product.stock}</span>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default CategoryProducts;