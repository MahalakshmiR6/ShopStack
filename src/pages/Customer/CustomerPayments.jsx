import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCreditCard,
  FaGooglePay,
  FaPaypal,
  FaWallet,
  FaPlus,
  FaCheckCircle,
} from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import "../../styles/customerPayments.css";

function CustomerPayments() {

  const navigate = useNavigate();

  return (
    <>
      <DashboardNavbar />

      <div className="payment-page">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/profile")}
        >
          <FaArrowLeft />
          Back to Profile
        </button>

        <div className="payment-header">

          <h1>Payment Methods</h1>

          <button className="add-payment-btn">
            <FaPlus />
            Add Payment Method
          </button>

        </div>

        {/* Cards */}

        <div className="payment-card">

          <div className="payment-title">
            <FaCreditCard />
            <h2>Saved Cards</h2>
          </div>

          <div className="payment-item">
            <h3>Visa Platinum</h3>
            <p>**** **** **** 4589</p>
            <span className="default-tag">Default</span>
          </div>

        </div>

        {/* UPI */}

        <div className="payment-card">

          <div className="payment-title">
            <FaGooglePay />
            <h2>UPI Accounts</h2>
          </div>

          <div className="payment-item">
            <h3>Google Pay</h3>
            <p>maha@okaxis</p>
          </div>

          <div className="payment-item">
            <h3>PhonePe</h3>
            <p>maha@ybl</p>
          </div>

          <div className="payment-item">
            <h3>Paytm</h3>
            <p>maha@paytm</p>
          </div>

        </div>

        {/* Wallet */}

        <div className="payment-card">

          <div className="payment-title">
            <FaWallet />
            <h2>Wallets</h2>
          </div>

          <div className="payment-item">
            <h3>Amazon Pay</h3>
            <p>₹500 Balance</p>
          </div>

          <div className="payment-item">
            <FaPaypal />
            <h3>PayPal Connected</h3>
          </div>

        </div>

        {/* COD */}

        <div className="payment-card">

          <div className="payment-title">
            <FaCheckCircle />
            <h2>Cash on Delivery</h2>
          </div>

          <div className="payment-item">
            <p>Available for eligible orders.</p>
          </div>

        </div>

      </div>

    </>
  );
}

export default CustomerPayments;