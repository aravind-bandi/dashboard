import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/top-bars/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User Management
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

// Product Management
import ProductList from "./pages/productList/ProductList";
import Products from "./pages/products/Products";
import NewProduct from "./pages/newProducts/NewProduct";

// Business Operations
import Invoice from "./pages/invoice/Invoice";
import Sales from "./pages/sales/Sales";
import Reports from "./pages/reports/Reports";
import OrderFulfillment from "./pages/shedule/OrderFulfillment";
import Analytics from "./pages/Analytics/Analytics";

// Other Pages
import MessageAlerts from "./pages/Message/MessageAlerts";
import FeedbackPage from "./pages/Feedback/Feedback";
import ChangePassword from "./pages/changepassword/ChangePassword";
import ManageAccount from "./pages/Manage/ManageAccount";
import SettingsPage from './pages/setting/SettingsPage';
import UserAccess from "./pages/access/UserAccess";

// Category Pages
import VegetablesPage from './pages/vegetables/VegetablesPage';
import FashionPage from './pages/fashion/FashionPage.jsx';
import MobilesPage from './pages/mobiles/MobilesPage';
import OfficePage from './pages/office/OfficePage';
import ComputersPage from './pages/computers/ComputersPage.jsx';
import { computers } from './pages/computers/computersData.jsx';
import CheckoutPage from './pages/computers/CheckoutPage.jsx';
import CategoriesPage from "./pages/Categories/Categories.jsx";
import OrderPage from "./pages/order/Order.jsx";
import SupportPage from "./pages/help/SupportPage.jsx";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Router>
      <Topbar toggleSidebar={toggleSidebar} isSidebarCollapsed={isSidebarCollapsed} />
      <div className="container">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <div className={`content ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Home />} />

            {/* User Management */}
            <Route path="/users" element={<UserList />} />
            <Route path="/users/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />

            {/* Product Management */}
            <Route path="/Products" element={<ProductList />} />
            {/* <Route path="/products/product/:productId" element={<Products />} /> */}
            <Route path="/newProduct" element={<NewProduct />} />

            {/* Business Operations */}
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/Help" element={<SupportPage />} />
            <Route path="/Help" element={<SettingsPage />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/shedule" element={<OrderFulfillment />} />
            <Route path="/analytics" element={<Analytics />} />

            {/* Category Pages */}
            <Route path="/vegetables" element={<VegetablesPage />} />
            <Route path="/fashion" element={<FashionPage />} />
            <Route path="/mobiles" element={<MobilesPage />} />
            <Route path="/office" element={<OfficePage />} />
            <Route path="/order" element={<OrderPage/>}/>
            <Route path="/computers" element={<ComputersPage computers={computers} />} />
            <Route path="/computer/:id" element={<ComputersPage computers={computers} />} />
             <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout" element={<CategoriesPage />} />

            {/* Other Pages */}
            <Route path="/Messages" element={<MessageAlerts />} />
            <Route path="/userAccess" element={<UserAccess />} />
            <Route path="/manage" element={<ManageAccount />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/mail" element={<ChangePassword />} />
             <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;