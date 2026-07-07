import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import { ShopContext } from "../../context/ShopContext";

import "../../styles/customerCheckout.css";

function CustomerCheckout() {

  const navigate = useNavigate();

  const { cart } = useContext(ShopContext);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const gst = Math.round(subtotal * 0.18);

  const delivery = subtotal > 0 ? 0 : 0;

  const total = subtotal + gst + delivery;

  return (
    <>
      <DashboardNavbar />

      <div className="checkout-page">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/cart")}
        >
          <FaArrowLeft />
          Back to Cart
        </button>

        <h1>Checkout</h1>

        <div className="checkout-grid">

          <div className="checkout-left">

            <div className="checkout-card">

              <h2>Delivery Address</h2>

              <label>
                <input type="radio" name="address" defaultChecked />
                Home (Default)
              </label>

              <label>
                <input type="radio" name="address" />
                Hostel
              </label>

              <button>
                + Add New Address
              </button>

            </div>

            <div className="checkout-card">

              <h2>Payment Method</h2>

              <label>
                <input type="radio" name="payment" defaultChecked />
                Google Pay
              </label>

              <label>
                <input type="radio" name="payment" />
                PhonePe
              </label>

              <label>
                <input type="radio" name="payment" />
                Credit / Debit Card
              </label>

              <label>
                <input type="radio" name="payment" />
                Cash on Delivery
              </label>

            </div>

          </div>

          <div className="checkout-right">

            <div className="checkout-card">

              <h2>Order Summary</h2>

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="summary-item"
                >

                  <span>{item.name}</span>

                  <span>
                    ₹{item.price.toLocaleString()}
                  </span>

                </div>

              ))}

              <hr />

              <div className="summary-item">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="summary-item">
                <span>Delivery</span>
                <span>FREE</span>
              </div>

              <div className="summary-item">
                <span>GST</span>
                <span>₹{gst.toLocaleString()}</span>
              </div>

              <hr />

              <div className="summary-total">

                <span>Total</span>

                <span>
                  ₹{total.toLocaleString()}
                </span>

              </div>

              <button
                className="place-order-btn"
                onClick={() =>
                  navigate("/customer/order-success")
                }
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default CustomerCheckout;