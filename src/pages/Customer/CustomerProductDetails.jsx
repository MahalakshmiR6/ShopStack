import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaHeart,
  FaShoppingCart,
  FaBolt,
  FaStar,
} from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import products from "../../data/products";
import "../../styles/customerProductDetails.css";

function CustomerProductDetails() {

  const navigate = useNavigate();

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product Not Found</h2>;
  }

  return (
    <>
      <DashboardNavbar />

      <div className="details-page">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/dashboard")}
        >
          <FaArrowLeft />
          Back
        </button>

        <div className="details-container">

          {/* Left */}

          <div className="details-image">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

          {/* Right */}

          <div className="details-info">

            <h1>{product.name}</h1>

            <p className="rating">

              <FaStar />

              {product.rating} Rating

            </p>

            <h2>₹{product.price.toLocaleString()}</h2>

            <p className="vendor">

              Sold by <span>{product.vendor}</span>

            </p>

            <div className="description">

              <h3>Description</h3>

              <p>

                Premium quality product from ShopStack.

                Fast delivery.

                Easy Returns.

                Genuine Warranty.

              </p>

            </div>

            <div className="buttons">

              <button className="wishlist-btn">

                <FaHeart />

                Wishlist

              </button>

              <button className="cart-btn">

                <FaShoppingCart />

                Add to Cart

              </button>

              <button className="buy-btn">

                <FaBolt />

                Buy Now

              </button>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default CustomerProductDetails;