import { useNavigate } from "react-router-dom";
import {
  FaBox,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCog,
  FaSignOutAlt,
  FaEdit,
} from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import "../../styles/customerProfile.css";

function CustomerProfile() {
  const navigate = useNavigate();

  return (
    <>
      <DashboardNavbar />

      <div className="profile-page">

        {/* Profile Header */}

        <div className="profile-header">

          <div>

            <h1>Maha Lakshmi</h1>

            <p>Welcome to ShopStack</p>

            <button
              className="edit-btn"
              onClick={() => navigate("/customer/profile")}
            >
              <FaEdit />
              Edit Profile
            </button>

          </div>

        </div>

        {/* Personal Information */}

        <div className="profile-card">

          <h2>Personal Information</h2>

          <div className="info-column">

            <div className="info-item">
              <label>Full Name</label>
              <span>Maha Lakshmi</span>
            </div>

            <div className="info-item">
              <label>Email</label>
              <span>maha@email.com</span>
            </div>

            <div className="info-item">
              <label>Phone Number</label>
              <span>+91 9876543210</span>
            </div>

            <div className="info-item">
              <label>Default Address</label>
              <span>Andhra Pradesh, India</span>
            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="quick-actions">

          <div
            className="action-card"
            onClick={() => navigate("/customer/orders")}
          >
            <FaBox />
            <h3>My Orders</h3>
            <p>View and track your orders</p>
          </div>

          <div
            className="action-card"
            onClick={() => navigate("/customer/wishlist")}
          >
            <FaHeart />
            <h3>Wishlist</h3>
            <p>Saved favourite products</p>
          </div>

          <div
            className="action-card"
            onClick={() => navigate("/customer/cart")}
          >
            <FaShoppingCart />
            <h3>Cart</h3>
            <p>Items ready for checkout</p>
          </div>

          <div
            className="action-card"
            onClick={() => navigate("/customer/addresses")}
          >
            <FaMapMarkerAlt />
            <h3>Addresses</h3>
            <p>Manage delivery addresses</p>
          </div>

          <div
            className="action-card"
            onClick={() => navigate("/customer/payments")}
          >
            <FaCreditCard />
            <h3>Payments</h3>
            <p>Manage payment methods</p>
          </div>

          <div
            className="action-card"
            onClick={() => navigate("/customer/settings")}
          >
            <FaCog />
            <h3>Settings</h3>
            <p>Manage your account</p>
          </div>

        </div>

        {/* Logout */}

        <div className="logout-section">

          <button
            className="logout-btn"
            onClick={() => navigate("/")}
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

      </div>
    </>
  );
}

export default CustomerProfile;