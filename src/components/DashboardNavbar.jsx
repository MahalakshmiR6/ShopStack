import { FaHeart, FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/dashboardNavbar.css";

function DashboardNavbar() {

  const navigate = useNavigate();

  return (
    <nav className="dashboard-navbar">

      <div
        className="dashboard-logo"
        onClick={() => navigate("/customer/dashboard")}
      >
        Shop<span>Stack</span>
      </div>

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search products..."
        />

      </div>

      <div className="dashboard-icons">

        <div
          className="icon-box"
          onClick={() => navigate("/customer/wishlist")}
        >
          <FaHeart />
          <span>Wishlist</span>
        </div>

        <div
          className="icon-box"
          onClick={() => navigate("/customer/cart")}
        >
          <FaShoppingCart />
          <span>Cart</span>
        </div>

        <div
          className="icon-box"
          onClick={() => navigate("/customer/profile")}
        >
          <FaUserCircle />
          <span>Profile</span>
        </div>

      </div>

    </nav>
  );
}

export default DashboardNavbar;