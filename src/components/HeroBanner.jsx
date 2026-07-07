import "../styles/dashboard.css";

function HeroBanner() {
  return (
    <section className="hero-banner">

      <div className="banner-content">

        <span className="offer-tag">
          🔥 MEGA SALE 2026
        </span>

        <h1>
          Welcome Back 👋
        </h1>

        <h2>
          Shop Smarter with <span>ShopStack</span>
        </h2>

        <p>
          Discover amazing deals from trusted vendors across India.
          Shop electronics, fashion, groceries, beauty products,
          home essentials and much more—all in one place.
        </p>

        <button className="shop-btn">
          Shop Now
        </button>

      </div>

      <div className="banner-image">

        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"
          alt="Shopping Banner"
        />

      </div>

    </section>
  );
}

export default HeroBanner;