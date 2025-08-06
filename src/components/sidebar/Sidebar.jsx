// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import ViewListIcon from "@mui/icons-material/ViewList";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import PersonIcon from '@mui/icons-material/Person';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import MailIcon from '@mui/icons-material/Mail';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import MessageIcon from '@mui/icons-material/Message';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import SettingsIcon from '@mui/icons-material/Settings';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import CategoryIcon from '@mui/icons-material/Category';
// import DiscountIcon from '@mui/icons-material/Discount';
// import "./sidebar.css";

// const Sidebar = () => {
//   const location = useLocation();

//   const isActive = (path) => {
//     return location.pathname === path || 
//            (path !== "/" && location.pathname.startsWith(path));
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebarwrapper">
//         <div className="sidebarmenu">
//           <h3 className="sidebartitile">Dashboard</h3>
//           <ul className="sidebarlist">
//             <li className={`sidebarlistitem ${isActive("/") ? "active" : ""}`}>
//               <Link to="/" className="sidebarlink">
//                 <HomeIcon className="sidebaricon" />
//                 <span className="linktext">HOME</span>
//               </Link>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/analytics") ? "active" : ""}`}>
//               <Link to="/analytics" className="sidebarlink">
//                 <AnalyticsIcon className="sidebaricon" />
//                 <span className="linktext">Analytics</span>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="sidebarmenu">
//           <h3 className="sidebartitile">Management</h3>
//           <ul className="sidebarlist">
//             <li className={`sidebarlistitem ${isActive("/users") ? "active" : ""}`}>
//               <Link to="/users" className="sidebarlink">
//                 <PersonIcon className="sidebaricon" />
//                 <span className="linktext">Favorites</span>
//               </Link>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/products") ? "active" : ""}`}>
//               <Link to="/products" className="sidebarlink">
//                 <InventoryIcon className="sidebaricon" />
//                 <span className="linktext">Orders</span>
//               </Link>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/categories") ? "active" : ""}`}>
//               <Link to="/categories" className="sidebarlink">
//                 <CategoryIcon className="sidebaricon" />
//                 <span className="linktext">Categories</span>
//               </Link>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/sales") ? "active" : ""}`}>
//               <Link to="/sales" className="sidebarlink">
//                 <TrendingUpIcon className="sidebaricon" />
//                 <span className="linktext">Cart</span>
//               </Link>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/invoice") ? "active" : ""}`}>
//               <Link to="/invoice" className="sidebarlink">
//                 <InventoryIcon className="sidebaricon" />
//                 <span className="linktext">message</span>
//               </Link>
//             </li>
//             {/* <li className={`sidebarlistitem ${isActive("/promotions") ? "active" : ""}`}>
//               <Link to="/promotions" className="sidebarlink">
//                 <DiscountIcon className="sidebaricon" />
//                 <span className="linktext">Promotions</span>
//               </Link>
//             </li> */}
//             {/* <li className={`sidebarlistitem ${isActive("/reports") ? "active" : ""}`}>
//               <Link to="/reports" className="sidebarlink">
//                 <AssessmentIcon className="sidebaricon" />
//                 <span className="linktext">Reports</span>
//               </Link>
//             </li> */}
//           </ul>
//         </div>

//         <div className="sidebarmenu">
//           <h3 className="sidebartitile">Communication</h3>
//           <ul className="sidebarlist">
//             <li className={`sidebarlistitem ${isActive("/messages") ? "active" : ""}`}>
//               <Link to="/messages" className="sidebarlink">
//                 <MessageIcon className="sidebaricon" />
//                 <span className="linktext">Help</span>
//               </Link>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/feedback") ? "active" : ""}`}>
//               <Link to="/feedback" className="sidebarlink">
//                 <FeedbackIcon className="sidebaricon" />
//                 <span className="linktext">Feedback</span>
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="sidebarmenu">
//           <ul className="sidebarlist">
//             <li className={`sidebarlistitem ${isActive("/settings") ? "active" : ""}`}>
//               <Link to="/settings" className="sidebarlink">
//                 <SettingsIcon className="sidebaricon" />
//                 <span className="linktext">Settings</span>
//               </Link>
//             </li>
//             {/* <li className={`sidebarlistitem ${isActive("/manage") ? "active" : ""}`}>
//               <Link to="/manage" className="sidebarlink">
//                 <ManageAccountsIcon className="sidebaricon" />
//                 <span className="linktext">Manage</span>
//               </Link>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/access-control") ? "active" : ""}`}>
//               <Link to="/access-control" className="sidebarlink">
//                 <ViewListIcon className="sidebaricon" />
//                 <span className="linktext">Access Control</span>
//               </Link>
//             </li>
//             <li className={`sidebarlistitem ${isActive("/shedule") ? "active" : ""}`}>
//               <Link to="/shedule" className="sidebarlink">
//                 <ViewListIcon className="sidebaricon" />
//                 <span className="linktext">Schedule</span>
//               </Link>
//             </li> */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ViewListIcon from "@mui/icons-material/ViewList";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CategoryIcon from '@mui/icons-material/Category';
import DiscountIcon from '@mui/icons-material/Discount';
import "./sidebar.css";

const Sidebar = ({ isCollapsed }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path || 
           (path !== "/" && location.pathname.startsWith(path));
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          {!isCollapsed && <h3 className="sidebartitile">Dashboard</h3>}
          <ul className="sidebarlist">
            <li className={`sidebarlistitem ${isActive("/") ? "active" : ""}`}>
              <Link to="/" className="sidebarlink">
                <HomeIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">HOME</span>}
              </Link>
            </li>
            {/* <li className={`sidebarlistitem ${isActive("/analytics") ? "active" : ""}`}>
              <Link to="/analytics" className="sidebarlink">
                <AnalyticsIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Analytics</span>}
              </Link>
            </li> */}
          </ul>
        </div>

        <div className="sidebarmenu">
          {!isCollapsed && <h3 className="sidebartitile"></h3>}
          <ul className="sidebarlist">
            <li className={`sidebarlistitem ${isActive("/users") ? "active" : ""}`}>
              <Link to="/users" className="sidebarlink">
                <PersonIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Favorites</span>}
              </Link>
            </li>
            <li className={`sidebarlistitem ${isActive("/products") ? "active" : ""}`}>
              <Link to="/favorites" className="sidebarlink">
                <InventoryIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Favorites</span>}
              </Link>
            </li>
            <li className={`sidebarlistitem ${isActive("/order") ? "active" : ""}`}>
  <Link to="/order" className="sidebarlink">
    <InventoryIcon className="sidebaricon" />
    {!isCollapsed && <span className="linktext">Orders</span>}
  </Link>
</li>
            <li className={`sidebarlistitem ${isActive("/categories") ? "active" : ""}`}>
              <Link to="/categories" className="sidebarlink">
                <CategoryIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Categories</span>}
              </Link>
            </li>
            <li className={`sidebarlistitem ${isActive("/sales") ? "active" : ""}`}>
              <Link to="/sales" className="sidebarlink">
                <TrendingUpIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Cart</span>}
              </Link>
            </li>
            <li className={`sidebarlistitem ${isActive("/Help") ? "active" : ""}`}>
              <Link to="/Help" className="sidebarlink">
                <InventoryIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Help</span>}
              </Link>
            </li>
              <li className={`sidebarlistitem ${isActive("/settings") ? "active" : ""}`}>
              <Link to="/settings" className="sidebarlink">
                <InventoryIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Setting</span>}
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          {!isCollapsed && <h3 className="sidebartitile">Communication</h3>}
          <ul className="sidebarlist">
            <li className={`sidebarlistitem ${isActive("/messages") ? "active" : ""}`}>
              <Link to="/messages" className="sidebarlink">
                <MessageIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Help</span>}
              </Link>
            </li>
            <li className={`sidebarlistitem ${isActive("/feedback") ? "active" : ""}`}>
              <Link to="/feedback" className="sidebarlink">
                <FeedbackIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Feedback</span>}
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarmenu">
          <ul className="sidebarlist">
            <li className={`sidebarlistitem ${isActive("/settings") ? "active" : ""}`}>
              <Link to="/settings" className="sidebarlink">
                <SettingsIcon className="sidebaricon" />
                {!isCollapsed && <span className="linktext">Settings</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;