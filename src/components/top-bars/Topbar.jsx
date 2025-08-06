import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Edit as EditIcon,
  Save as SaveIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Topbar.css";

function Topbar({ toggleSidebar, isSidebarCollapsed }) {
  const navigate = useNavigate();
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [adminData, setAdminData] = useState({
    name: "Aravind",
    email: "aravind@example.com",
    phone: "+1 234 567 890",
    role: "Administrator",
    joinDate: "2022-01-15"
  });
  const [tempAdminData, setTempAdminData] = useState({ ...adminData });
  const [settings, setSettings] = useState({
    theme: "light",
    notifications: true,
    language: "en"
  });

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "zh", name: "中文", flag: "🇨🇳" }
  ];

  const toggleDropdown = (dropdownType) => {
    setShowNotificationDropdown(dropdownType === "notification" ? !showNotificationDropdown : false);
    setShowLanguageDropdown(dropdownType === "language" ? !showLanguageDropdown : false);
    setShowProfileDropdown(dropdownType === "profile" ? !showProfileDropdown : false);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setShowLanguageDropdown(false);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchTerm);
      setSearchTerm("");
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleProfileClick = () => {
    setShowProfileModal(true);
    setShowProfileDropdown(false);
  };

  const handleSettingsClick = () => {
    setShowSettingsModal(true);
    setShowProfileDropdown(false);
  };

  const handleProfileSave = () => {
    setAdminData({ ...tempAdminData });
    setShowProfileModal(false);
  };

  const handleSettingsSave = () => {
    setShowSettingsModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempAdminData({
      ...tempAdminData,
      [name]: value
    });
  };

  const handleSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <div className="logo-container">
            <img 
              src={require('../../assests/Astrolite-TM__1_-removebg-preview.png')} 
              alt="Dairy Farm Logo" 
              className="logo-image"
            />
          </div>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
        </div>

        <div className="topbar-center">
          <div className="search-container">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="search-input"
            />
          </div>
        </div>

        <div className="topbar-right">
          <div className="icon-container" onClick={() => toggleDropdown("notification")}>
            <NotificationsIcon className="topbar-icon" />
            <span className="icon-badge">3</span>
            {showNotificationDropdown && (
              <div className="dropdown notification-dropdown">
                <div className="dropdown-header">
                  <h4>Notifications</h4>
                  <span className="badge">3 New</span>
                </div>
                <div className="dropdown-item">
                  <div className="item-icon">
                    <NotificationsIcon />
                  </div>
                  <div className="item-content">
                    <p>New order received</p>
                    <small>2 minutes ago</small>
                  </div>
                </div>
                <div className="dropdown-item">
                  <div className="item-icon">
                    <NotificationsIcon />
                  </div>
                  <div className="item-content">
                    <p>System alert</p>
                    <small>1 hour ago</small>
                  </div>
                </div>
                <div className="dropdown-footer">
                  <button>View All</button>
                </div>
              </div>
            )}
          </div>

          <div className="language-selector" onClick={() => toggleDropdown("language")}>
            <div className="current-language">
              <LanguageIcon className="language-icon" />
              <span className="language-name">{selectedLanguage}</span>
              <ArrowDropDownIcon className="dropdown-arrow" />
            </div>
            {showLanguageDropdown && (
              <div className="dropdown language-dropdown">
                {languages.map((lang) => (
                  <div 
                    key={lang.code} 
                    className={`dropdown-item ${selectedLanguage === lang.name ? 'selected' : ''}`}
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-text">{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="profile-container" onClick={() => toggleDropdown("profile")}>
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="profile-image"
            />
            <span className="profile-name">{adminData.name}</span>
            <ArrowDropDownIcon className="dropdown-arrow" />
            {showProfileDropdown && (
              <div className="dropdown profile-dropdown">
                <div className="dropdown-item" onClick={handleProfileClick}>
                  <PersonIcon className="dropdown-icon" />
                  <span>Profile</span>
                </div>
                <div className="dropdown-item" onClick={handleSettingsClick}>
                  <SettingsIcon className="dropdown-icon" />
                  <span>Settings</span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item" onClick={handleLogout}>
                  <LogoutIcon className="dropdown-icon" />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showProfileModal && (
        <div className="modal-overlay" onClick={() => setShowProfileModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Admin Profile</h3>
              <button className="close-button" onClick={() => setShowProfileModal(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="profile-image-container">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Profile"
                  className="modal-profile-image"
                />
                <button className="edit-image-button">
                  <EditIcon /> Change Photo
                </button>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={tempAdminData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={tempAdminData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={tempAdminData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  value={tempAdminData.role}
                  readOnly
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Join Date</label>
                <input
                  type="text"
                  name="joinDate"
                  value={tempAdminData.joinDate}
                  readOnly
                  disabled
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-button" onClick={() => setShowProfileModal(false)}>
                Cancel
              </button>
              <button className="save-button" onClick={handleProfileSave}>
                <SaveIcon /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettingsModal && (
        <div className="modal-overlay" onClick={() => setShowSettingsModal(false)}>
          <div className="modal-content settings-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Admin Settings</h3>
              <button className="close-button" onClick={() => setShowSettingsModal(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="settings-section">
                <h4>Appearance</h4>
                <div className="form-group">
                  <label>Theme</label>
                  <select
                    name="theme"
                    value={settings.theme}
                    onChange={handleSettingsChange}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System Default</option>
                  </select>
                </div>
              </div>
              
              <div className="settings-section">
                <h4>Notifications</h4>
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="notifications"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleSettingsChange}
                  />
                  <label htmlFor="notifications">Enable notifications</label>
                </div>
              </div>
              
              <div className="settings-section">
                <h4>Language</h4>
                <div className="form-group">
                  <label>Interface Language</label>
                  <select
                    name="language"
                    value={settings.language}
                    onChange={handleSettingsChange}
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-button" onClick={() => setShowSettingsModal(false)}>
                Cancel
              </button>
              <button className="save-button" onClick={handleSettingsSave}>
                <SaveIcon /> Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topbar;