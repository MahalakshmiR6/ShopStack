import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaTrash,
} from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import { ShopContext } from "../../context/ShopContext";

import "../../styles/customerWishlist.css";

function CustomerWishlist() {

  const navigate = useNavigate();

  const {

    wishlist,

    removeFromWishlist,

    addToCart

  } = useContext(ShopContext);

  return (

    <>

      <DashboardNavbar />

      <div className="wishlist-page">

        <button

          className="back-btn"

          onClick={() => navigate("/customer/profile")}

        >

          <FaArrowLeft />

          Back to Profile

        </button>

        <h1>My Wishlist ❤️</h1>

        {

          wishlist.length === 0 ?

          (

            <h2>No products in Wishlist</h2>

          )

          :

          (

            <div className="wishlist-grid">

              {

                wishlist.map((product)=>(

                  <div
                    key={product.id}
                    className="wishlist-card"
                  >

                    <img

                      src={product.image}

                      alt={product.name}

                    />

                    <h3>{product.name}</h3>

                    <p className="price">

                      ₹{product.price.toLocaleString()}

                    </p>

                    <div className="wishlist-buttons">

                      <button

                        className="cart-btn"

                        onClick={()=>addToCart(product)}

                      >

                        <FaShoppingCart />

                        Add to Cart

                      </button>

                      <button

                        className="remove-btn"

                        onClick={()=>removeFromWishlist(product.id)}

                      >

                        <FaTrash />

                      </button>

                    </div>

                  </div>

                ))

              }

            </div>

          )

        }

      </div>

    </>

  );

}

export default CustomerWishlist;