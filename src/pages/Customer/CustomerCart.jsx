import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaTrash,
  FaShoppingBag,
} from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import { ShopContext } from "../../context/ShopContext";

import "../../styles/customerCart.css";

function CustomerCart() {

  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
  } = useContext(ShopContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <DashboardNavbar />

      <div className="cart-page">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/dashboard")}
        >
          <FaArrowLeft />
          Back to Shopping
        </button>

        <h1>My Cart 🛒</h1>

        {cart.length === 0 ? (

          <div className="empty-cart">

            <FaShoppingBag size={70} />

            <h2>Your Cart is Empty</h2>

            <button
              onClick={() => navigate("/customer/dashboard")}
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <>
            <div className="cart-grid">

              {cart.map((product) => (

                <div
                  key={product.id}
                  className="cart-card"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>{product.name}</h3>

                  <p className="vendor">
                    {product.vendor}
                  </p>

                  <p className="price">
                    ₹{product.price.toLocaleString()}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(product.id)
                    }
                  >
                    <FaTrash />
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="cart-summary">

              <h2>Order Summary</h2>

              <h3>
                Total : ₹{total.toLocaleString()}
              </h3>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/customer/checkout")
                }
              >
                Proceed to Checkout
              </button>

            </div>

          </>
        )}

      </div>

    </>
  );
}

export default CustomerCart;