// import React, { useState, useEffect, createContext, useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { 
//   Home, People, Inventory, TrendingUp, Assessment, 
//   Mail, Feedback, Message, Settings, Analytics, 
//   Category, LocalOffer, Schedule, Security 
// } from '@mui/icons-material';
// import './aaa.css';

// // ========== CONSTANTS & CONFIGURATION ==========
// const ROLES = {
//   ADMIN: 'admin',
//   SALES: 'sales',
//   DELIVERY: 'delivery',
//   CUSTOMER_SUPPORT: 'customer_support'
// };

// const PERMISSIONS = {
//   VIEW_USERS: 'view_users',
//   CREATE_USER: 'create_user',
//   EDIT_USER: 'edit_user',
//   DELETE_USER: 'delete_user',
//   VIEW_ACTIVITY: 'view_activity',
//   MANAGE_PRODUCTS: 'manage_products',
//   PROCESS_ORDERS: 'process_orders',
//   HANDLE_TICKETS: 'handle_tickets',
//   MANAGE_SETTINGS: 'manage_settings',
//   MANAGE_ACCESS: 'manage_access'
// };

// const ROLE_PERMISSIONS = {
//   [ROLES.ADMIN]: Object.values(PERMISSIONS),
//   [ROLES.SALES]: [
//     PERMISSIONS.VIEW_USERS,
//     PERMISSIONS.MANAGE_PRODUCTS
//   ],
//   [ROLES.DELIVERY]: [
//     PERMISSIONS.PROCESS_ORDERS
//   ],
//   [ROLES.CUSTOMER_SUPPORT]: [
//     PERMISSIONS.HANDLE_TICKETS
//   ]
// };

// // ========== CONTEXT ==========
// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false);
//   }, []);

//   const login = (userData) => {
//     localStorage.setItem('user', JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//   };

//   const hasPermission = (requiredPermission) => {
//     if (!user) return false;
//     return user.permissions.includes(requiredPermission);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout, hasPermission }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ========== COMPONENTS ==========
// const ProtectedRoute = ({ children, requiredPermission }) => {
//   const { user, loading, hasPermission } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!loading && !user) {
//       navigate('/login');
//     } else if (!loading && requiredPermission && !hasPermission(requiredPermission)) {
//       navigate('/');
//     }
//   }, [user, loading, requiredPermission, navigate]);

//   if (loading) return <div className="loading">Loading...</div>;
//   if (!user) return null;

//   return children;
// };

// const Sidebar = () => {
//   const { hasPermission } = useContext(AuthContext);
//   const location = useLocation();

//   const isActive = (path) => {
//     return location.pathname === path || 
//            (path !== "/" && location.pathname.startsWith(path));
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebarwrapper">
//         <div className="sidebarmenu">
//           <h3 className="sidebartitle">Dashboard</h3>
//           <ul className="sidebarlist">
//             <li className={`sidebarlistitem ${isActive("/") ? "active" : ""}`}>
//               <NavLink to="/" className="sidebarlink">
//                 <Home className="sidebaricon" />
//                 <span className="linktext">Home</span>
//               </NavLink>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/analytics") ? "active" : ""}`}>
//               <NavLink to="/analytics" className="sidebarlink">
//                 <Analytics className="sidebaricon" />
//                 <span className="linktext">Analytics</span>
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {hasPermission(PERMISSIONS.VIEW_USERS) && (
//           <div className="sidebarmenu">
//             <h3 className="sidebartitle">Management</h3>
//             <ul className="sidebarlist">
//               <li className={`sidebarlistitem ${isActive("/users") ? "active" : ""}`}>
//                 <NavLink to="/users" className="sidebarlink">
//                   <People className="sidebaricon" />
//                   <span className="linktext">Customers</span>
//                 </NavLink>
//               </li>
//               <li className={`sidebarlistitem ${isActive("/products") ? "active" : ""}`}>
//                 <NavLink to="/products" className="sidebarlink">
//                   <Inventory className="sidebaricon" />
//                   <span className="linktext">Products</span>
//                 </NavLink>
//               </li>
//               <li className={`sidebarlistitem ${isActive("/categories") ? "active" : ""}`}>
//                 <NavLink to="/categories" className="sidebarlink">
//                   <Category className="sidebaricon" />
//                   <span className="linktext">Categories</span>
//                 </NavLink>
//               </li>
//               <li className={`sidebarlistitem ${isActive("/sales") ? "active" : ""}`}>
//                 <NavLink to="/sales" className="sidebarlink">
//                   <TrendingUp className="sidebaricon" />
//                   <span className="linktext">Sales</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         )}

//         {hasPermission(PERMISSIONS.VIEW_ACTIVITY) && (
//           <div className="sidebarmenu">
//             <h3 className="sidebartitle">Reports</h3>
//             <ul className="sidebarlist">
//               <li className={`sidebarlistitem ${isActive("/reports") ? "active" : ""}`}>
//                 <NavLink to="/reports" className="sidebarlink">
//                   <Assessment className="sidebaricon" />
//                   <span className="linktext">Reports</span>
//                 </NavLink>
//               </li>
//               <li className={`sidebarlistitem ${isActive("/activity") ? "active" : ""}`}>
//                 <NavLink to="/activity" className="sidebarlink">
//                   <Assessment className="sidebaricon" />
//                   <span className="linktext">Activity Log</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         )}

//         {hasPermission(PERMISSIONS.MANAGE_SETTINGS) && (
//           <div className="sidebarmenu">
//             <h3 className="sidebartitle">System</h3>
//             <ul className="sidebarlist">
//               <li className={`sidebarlistitem ${isActive("/settings") ? "active" : ""}`}>
//                 <NavLink to="/settings" className="sidebarlink">
//                   <Settings className="sidebaricon" />
//                   <span className="linktext">Settings</span>
//                 </NavLink>
//               </li>
//               <li className={`sidebarlistitem ${isActive("/access-control") ? "active" : ""}`}>
//                 <NavLink to="/access-control" className="sidebarlink">
//                   <Security className="sidebaricon" />
//                   <span className="linktext">Access Control</span>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // ... [Include all your other components: Login, Dashboard, UserManagement, etc.]

// const UserAccess = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="app-container">
//           <TopNav />
//           <div className="content-wrapper">
//             <Sidebar />
//             <main className="main-content">
//               <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//                 <Route path="/users" element={<ProtectedRoute requiredPermission={PERMISSIONS.VIEW_USERS}><UserManagement /></ProtectedRoute>} />
//                 <Route path="/products" element={<ProtectedRoute requiredPermission={PERMISSIONS.MANAGE_PRODUCTS}><ProductsPage /></ProtectedRoute>} />
//                 <Route path="/settings" element={<ProtectedRoute requiredPermission={PERMISSIONS.MANAGE_SETTINGS}><SettingsPage /></ProtectedRoute>} />
//                 <Route path="/access-control" element={<ProtectedRoute requiredPermission={PERMISSIONS.MANAGE_ACCESS}><AccessControlPage /></ProtectedRoute>} />
//                 {/* Add other routes as needed */}
//               </Routes>
//             </main>
//           </div>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default UserAccess;