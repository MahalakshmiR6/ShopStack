import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaBolt,
} from "react-icons/fa";

import { ShopContext } from "../context/ShopContext";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const { addToWishlist, addToCart } = useContext(ShopContext);

  const [liked, setLiked] = useState(false);

  // Wishlist
  const handleWishlist = (e) => {

  e.stopPropagation();

  setLiked(!liked);

  addToWishlist(product);

};

  // Cart
  const handleCart = (e) => {
    e.stopPropagation();

    addToCart(product);

    alert(`${product.name} added to cart`);
  };

  // Buy Now
  const handleBuyNow = (e) => {
    e.stopPropagation();

    addToCart(product);

    navigate("/customer/cart");
  };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/customer/product/${product.id}`)}
    >
      {/* Wishlist */}

      <div
        className="wishlist-icon"
        onClick={handleWishlist}
      >
        {liked ? <FaHeart /> : <FaRegHeart />}
      </div>

      {/* Image */}

      <img
        src={product.image}
        alt={product.name}
      />

      {/* Product Name */}

      <h3>{product.name}</h3>

      {/* Rating */}

      <p className="rating">
        ⭐ {product.rating}
      </p>

      {/* Price */}

      <p className="price">
        ₹{product.price.toLocaleString()}
      </p>

      {/* Vendor */}

      <p className="vendor">
        Sold by <span>{product.vendor}</span>
      </p>

      {/* Buttons */}

      <div
        className="product-buttons"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="cart-btn"
          onClick={handleCart}
        >
          <FaShoppingCart />
          Add to Cart
        </button>

        <button
          className="buy-btn"
          onClick={handleBuyNow}
        >
          <FaBolt />
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;