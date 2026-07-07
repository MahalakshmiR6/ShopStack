import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaTruck,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import "../../styles/customerOrders.css";

function CustomerOrders() {

  const navigate = useNavigate();

  return (
    <>
      <DashboardNavbar />

      <div className="orders-page">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/profile")}
        >
          <FaArrowLeft />
          Back to Profile
        </button>

        <h1>My Orders</h1>

        {/* Pending */}

        <div className="order-section">

          <h2>Pending Orders</h2>

          <div className="order-card">

            <div>

              <h3>Apple iPhone 16</h3>

              <p>Order ID : ORD1001</p>

              <p>₹79,999</p>

            </div>

            <div className="status pending">

              <FaTruck />

              Pending

            </div>

          </div>

        </div>

        {/* Delivered */}

        <div className="order-section">

          <h2>Delivered Orders</h2>

          <div className="order-card">

            <div>

              <h3>Nike Running Shoes</h3>

              <p>Order ID : ORD1002</p>

              <p>₹4,999</p>

            </div>

            <div className="status delivered">

              <FaCheckCircle />

              Delivered

            </div>

          </div>

        </div>

        {/* Cancelled */}

        <div className="order-section">

          <h2>Cancelled Orders</h2>

          <div className="order-card">

            <div>

              <h3>Smart Watch</h3>

              <p>Order ID : ORD1003</p>

              <p>₹3,999</p>

            </div>

            <div className="status cancelled">

              <FaTimesCircle />

              Cancelled

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default CustomerOrders;