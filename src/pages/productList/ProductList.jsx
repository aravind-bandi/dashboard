// import "./ProductList.css"
// import { DataGrid, GridColDef, renderActionsCell } from '@mui/x-data-grid';
// import Paper from '@mui/material/Paper';
// import { Avatar } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { productRows } from '../../DummyData';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// export default function ProductList() {
//     const[data,setData] = useState(productRows)
//     const handleDelete =(id)=>{
//         setData(data.filter((item)=>item.id !== id));
//     };

//     const columns = [
//         { field: 'id', headerName: 'ID', width: 90 },
//         { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
//             return(
//                 <div className='productListItem'>
//                     <img className='productListImg' src={params.row.img} alt=''/>
//                     {params.row.name}
//                 </div>
//             )
//         } },
//         { field: 'stock', headerName: 'Stock ', width: 200 },
//         {
//           field: 'status',
//           headerName: 'Status',     
//           width: 90,
//         },
//         {
//             field: 'price',
//             headerName: 'Price',     
//             width: 160,
//           },
//           {
//            field:"action",
//            headerName:"Action",
//            width:"150",
//            renderCell:(params)=>{
//             return(
//                 <div className='productsListAbt'>
//                     <Link to={"/products/product/${id}"}>
//                     <button className='productListEdit'>Edit</button>
//                     </Link>
                
//                 <DeleteIcon className='productListDelete' onClick={()=>handleDelete(params.row.id)}/>
//                 </div>
//             )
//            }
//           },
       
//       ];

//       const paginationModel ={
//         pages:0,
//         pagesSize:5,
//       };

//   return (
//     <div className='ProductList'>
//         <DataGrid
//             rows={data} disableRowSelectionOnClick
//             columns={columns}
//             initialState={{ pagination: { paginationModel } }}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//             sx={{ border: 0 }}
//           /></div>
//   )
// }


import React, { useState, useEffect } from 'react';
import './product.css';

const DairyInventorySystem = () => {
  // Sample initial data
  const initialProducts = [
    { id: 1, name: 'Whole Milk', price: 3.99, stock: 120, category: 'Milk', expiryDate: '2023-12-15' },
    { id: 2, name: 'Low Fat Yogurt', price: 2.49, stock: 85, category: 'Yogurt', expiryDate: '2023-11-30' },
    { id: 3, name: 'Cheddar Cheese', price: 5.99, stock: 45, category: 'Cheese', expiryDate: '2024-01-20' },
    { id: 4, name: 'Butter', price: 4.29, stock: 60, category: 'Butter', expiryDate: '2024-02-10' },
    { id: 5, name: 'Almond Milk', price: 4.49, stock: 30, category: 'Milk', expiryDate: '2023-12-05' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    stock: '',
    category: 'Milk',
    expiryDate: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState('catalogue');
  const [lowStockAlert, setLowStockAlert] = useState([]);
  const [expiringSoonAlert, setExpiringSoonAlert] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Check for low stock and expiring products
  useEffect(() => {
    const lowStock = products.filter(product => product.stock < 50);
    setLowStockAlert(lowStock);

    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    const expiringSoon = products.filter(product => {
      const expiryDate = new Date(product.expiryDate);
      return expiryDate <= nextWeek && expiryDate >= today;
    });
    setExpiringSoonAlert(expiringSoon);
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      // Update existing product
      setProducts(products.map(product => 
        product.id === editingId ? { ...formData, id: editingId } : product
      ));
      setEditingId(null);
    } else {
      // Add new product
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      setProducts([...products, { ...formData, id: newId }]);
    }
    setFormData({
      id: '',
      name: '',
      price: '',
      stock: '',
      category: 'Milk',
      expiryDate: ''
    });
  };

  const handleEdit = (product) => {
    setFormData({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category,
      expiryDate: product.expiryDate
    });
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleStockUpdate = (id, amount) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, stock: Math.max(0, product.stock + amount) } : product
    ));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Dairy Inventory Management</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search"></i>
        </div>
      </header>

      <nav className="main-nav">
        <button 
          className={`nav-button ${activeTab === 'catalogue' ? 'active' : ''}`}
          onClick={() => setActiveTab('catalogue')}
        >
          <i className="fas fa-list"></i> Product Catalogue
        </button>
        <button 
          className={`nav-button ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
        >
          <i className="fas fa-boxes"></i> Inventory
        </button>
        <button 
          className={`nav-button ${activeTab === 'expiry' ? 'active' : ''}`}
          onClick={() => setActiveTab('expiry')}
        >
          <i className="fas fa-clock"></i> Expiry
        </button>
        <button 
          className={`nav-button ${activeTab === 'alerts' ? 'active' : ''}`}
          onClick={() => setActiveTab('alerts')}
        >
          <i className="fas fa-bell"></i> Alerts
          {(lowStockAlert.length > 0 || expiringSoonAlert.length > 0) && (
            <span className="alert-badge">
              {lowStockAlert.length + expiringSoonAlert.length}
            </span>
          )}
        </button>
      </nav>

      <div className="content-area">
        {activeTab === 'catalogue' && (
          <div className="tab-content">
            <div className="form-container">
              <h2>{editingId ? 'Edit Product' : 'Add New Product'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="Milk">Milk</option>
                      <option value="Yogurt">Yogurt</option>
                      <option value="Cheese">Cheese</option>
                      <option value="Butter">Butter</option>
                      <option value="Cream">Cream</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Price ($)</label>
                    <input
                      type="number"
                      name="price"
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Stock</label>
                    <input
                      type="number"
                      name="stock"
                      min="0"
                      value={formData.stock}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="date"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="submit-button">
                    {editingId ? 'Update Product' : 'Add Product'}
                  </button>
                  {editingId && (
                    <button 
                      type="button" 
                      className="cancel-button"
                      onClick={() => {
                        setEditingId(null);
                        setFormData({
                          id: '',
                          name: '',
                          price: '',
                          stock: '',
                          category: 'Milk',
                          expiryDate: ''
                        });
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="product-table-container">
              <h2>Product Catalogue</h2>
              <table className="product-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Expiry Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map(product => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td className={product.stock < 50 ? 'low-stock' : ''}>
                        {product.stock}
                        {product.stock < 50 && <span className="stock-warning">!</span>}
                      </td>
                      <td className={
                        new Date(product.expiryDate) < new Date(new Date().setDate(new Date().getDate() + 7)) 
                          ? 'expiring-soon' 
                          : ''
                      }>
                        {product.expiryDate}
                      </td>
                      <td>
                        <button 
                          className="edit-button"
                          onClick={() => handleEdit(product)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button 
                          className="delete-button"
                          onClick={() => handleDelete(product.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'inventory' && (
          <div className="tab-content">
            <h2>Inventory Tracking</h2>
            <div className="inventory-stats">
              <div className="stat-card">
                <h3>Total Products</h3>
                <p>{products.length}</p>
              </div>
              <div className="stat-card">
                <h3>Total Stock Value</h3>
                <p>${products.reduce((sum, product) => sum + (product.price * product.stock), 0).toFixed(2)}</p>
              </div>
              <div className="stat-card warning">
                <h3>Low Stock Items</h3>
                <p>{lowStockAlert.length}</p>
              </div>
            </div>

            <div className="inventory-controls">
              <h3>Quick Stock Adjustment</h3>
              <div className="stock-adjustment-container">
                {products.map(product => (
                  <div key={product.id} className="stock-item">
                    <span>{product.name} (Current: {product.stock})</span>
                    <div className="stock-buttons">
                      <button onClick={() => handleStockUpdate(product.id, 10)}>+10</button>
                      <button onClick={() => handleStockUpdate(product.id, 1)}>+1</button>
                      <button onClick={() => handleStockUpdate(product.id, -1)}>-1</button>
                      <button onClick={() => handleStockUpdate(product.id, -10)}>-10</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="inventory-chart">
              <h3>Stock Levels by Category</h3>
              <div className="chart-container">
                {Array.from(new Set(products.map(p => p.category))).map(category => {
                  const categoryProducts = products.filter(p => p.category === category);
                  const totalStock = categoryProducts.reduce((sum, p) => sum + p.stock, 0);
                  const percentage = (totalStock / products.reduce((sum, p) => sum + p.stock, 0)) * 100;
                  
                  return (
                    <div key={category} className="chart-bar-container">
                      <div className="chart-bar-label">{category}</div>
                      <div className="chart-bar">
                        <div 
                          className="chart-bar-fill"
                          style={{ width: `${percentage}%` }}
                        ></div>
                        <span className="chart-bar-value">{totalStock} units</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'expiry' && (
          <div className="tab-content">
            <h2>Expiration Management</h2>
            <div className="expiry-stats">
              <div className="stat-card">
                <h3>Products Expiring Soon</h3>
                <p>{expiringSoonAlert.length}</p>
              </div>
              <div className="stat-card warning">
                <h3>Expired Products</h3>
                <p>
                  {products.filter(p => new Date(p.expiryDate) < new Date()).length}
                </p>
              </div>
            </div>

            <div className="expiry-table-container">
              <h3>Products Sorted by Expiry Date</h3>
              <table className="expiry-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Expiry Date</th>
                    <th>Days Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  {[...products]
                    .sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate))
                    .map(product => {
                      const today = new Date();
                      const expiryDate = new Date(product.expiryDate);
                      const diffTime = expiryDate - today;
                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                      
                      return (
                        <tr key={product.id} className={
                          diffDays <= 0 ? 'expired' : diffDays <= 7 ? 'expiring-soon' : ''
                        }>
                          <td>{product.name}</td>
                          <td>{product.category}</td>
                          <td>{product.stock}</td>
                          <td>{product.expiryDate}</td>
                          <td>
                            {diffDays <= 0 ? 'Expired' : `${diffDays} days`}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className="rotation-recommendations">
              <h3>Stock Rotation Recommendations</h3>
              <div className="recommendations-container">
                {Array.from(new Set(products.map(p => p.category))).map(category => {
                  const categoryProducts = [...products]
                    .filter(p => p.category === category)
                    .sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
                  
                  if (categoryProducts.length === 0) return null;
                  
                  return (
                    <div key={category} className="category-recommendation">
                      <h4>{category}</h4>
                      <p>Next to expire: <strong>{categoryProducts[0].name}</strong> on {categoryProducts[0].expiryDate}</p>
                      <p>Stock: {categoryProducts[0].stock} units</p>
                      <p className="recommendation-text">
                        Recommendation: Move this product to the front of the shelf for priority sale.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="tab-content">
            <h2>Alerts and Notifications</h2>
            
            <div className="alert-section">
              <h3 className="low-stock-header">Low Stock Alerts ({lowStockAlert.length})</h3>
              {lowStockAlert.length > 0 ? (
                <div className="alert-grid">
                  {lowStockAlert.map(product => (
                    <div key={product.id} className="alert-card stock-alert">
                      <div className="alert-icon">
                        <i className="fas fa-exclamation-triangle"></i>
                      </div>
                      <div className="alert-content">
                        <h4>{product.name}</h4>
                        <p>Current stock: <strong>{product.stock}</strong> units</p>
                        <p>Category: {product.category}</p>
                        <p>Reorder immediately to avoid stockout.</p>
                      </div>
                      <div className="alert-actions">
                        <button onClick={() => handleStockUpdate(product.id, 50)}>
                          Add 50 Units
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-alerts">
                  <i className="fas fa-check-circle"></i>
                  <p>No low stock items at this time.</p>
                </div>
              )}
            </div>

            <div className="alert-section">
              <h3 className="expiry-header">Expiring Soon Alerts ({expiringSoonAlert.length})</h3>
              {expiringSoonAlert.length > 0 ? (
                <div className="alert-grid">
                  {expiringSoonAlert.map(product => {
                    const today = new Date();
                    const expiryDate = new Date(product.expiryDate);
                    const diffTime = expiryDate - today;
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    
                    return (
                      <div key={product.id} className="alert-card expiry-alert">
                        <div className="alert-icon">
                          <i className="fas fa-clock"></i>
                        </div>
                        <div className="alert-content">
                          <h4>{product.name}</h4>
                          <p>Expires in: <strong>{diffDays} days</strong></p>
                          <p>Expiry date: {product.expiryDate}</p>
                          <p>Current stock: {product.stock} units</p>
                        </div>
                        <div className="alert-actions">
                          <button onClick={() => handleEdit(product)}>
                            <i className="fas fa-tag"></i> Discount
                          </button>
                          <button onClick={() => handleStockUpdate(product.id, -10)}>
                            <i className="fas fa-fire"></i> Promote
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="no-alerts">
                  <i className="fas fa-check-circle"></i>
                  <p>No products expiring in the next 7 days.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DairyInventorySystem;