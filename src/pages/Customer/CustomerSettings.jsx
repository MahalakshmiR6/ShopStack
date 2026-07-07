import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaUserEdit,
  FaLock,
  FaMoon,
  FaSun,
  FaBell,
  FaGlobe,
  FaQuestionCircle,
  FaSignOutAlt
} from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import { ShopContext } from "../../context/ShopContext";
import "../../styles/customerSettings.css";

function CustomerSettings() {

  const navigate = useNavigate();

  const { theme, setTheme } = useContext(ShopContext);

  return (
    <>
      <DashboardNavbar />

      <div className="settings-page">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/profile")}
        >
          <FaArrowLeft />
          Back to Profile
        </button>

        <h1>Settings</h1>

        {/* Account */}

        <div className="settings-card">

          <h2>Account</h2>

          <div
            className="setting-item"
            onClick={() => navigate("/customer/profile")}
          >
            <FaUserEdit />
            <span>Edit Profile</span>
          </div>

          <div className="setting-item">
            <FaLock />
            <span>Change Password</span>
          </div>

        </div>

        {/* Appearance */}

        <div className="settings-card">

          <h2>Appearance</h2>

          <div
            className={`theme-option ${
              theme === "light" ? "active" : ""
            }`}
            onClick={() => setTheme("light")}
          >
            <FaSun />
            <span>Light Theme</span>
          </div>

          <div
            className={`theme-option ${
              theme === "dark" ? "active" : ""
            }`}
            onClick={() => setTheme("dark")}
          >
            <FaMoon />
            <span>Dark Theme</span>
          </div>

        </div>

        {/* Notifications */}

        <div className="settings-card">

          <h2>Notifications</h2>

          <div className="setting-item">
            <FaBell />
            <span>Order Updates</span>
          </div>

          <div className="setting-item">
            <FaBell />
            <span>Offers & Discounts</span>
          </div>

          <div className="setting-item">
            <FaBell />
            <span>Wishlist Alerts</span>
          </div>

        </div>

        {/* Language */}

        <div className="settings-card">

          <h2>Language</h2>

          <div className="setting-item">
            <FaGlobe />
            <span>English</span>
          </div>

        </div>

        {/* Help */}

        <div className="settings-card">

          <h2>Help</h2>

          <div className="setting-item">
            <FaQuestionCircle />
            <span>FAQ</span>
          </div>

          <div className="setting-item">
            <FaQuestionCircle />
            <span>Contact Support</span>
          </div>

          <div className="setting-item">
            <FaQuestionCircle />
            <span>About ShopStack</span>
          </div>

        </div>

        {/* Logout */}

        <div className="settings-card">

          <div
            className="logout-item"
            onClick={() => navigate("/")}
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </div>

        </div>

      </div>
    </>
  );
}

export default CustomerSettings;