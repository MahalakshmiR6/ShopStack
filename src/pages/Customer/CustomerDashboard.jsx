import DashboardNavbar from "../../components/DashboardNavbar";
import HeroBanner from "../../components/HeroBanner";
import CategoryCard from "../../components/CategoryCard";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

import "../../styles/dashboard.css";

function CustomerDashboard() {

  const categories = [
    "📱 Electronics",
    "👕 Fashion",
    "💄 Beauty",
    "🥫 Grocery",
    "📚 Books",
    "⌚ Watches",
    "💻 Laptops",
    "🎧 Audio",
  ];

  return (
    <div className="dashboard">

      <DashboardNavbar />

      <HeroBanner />

      <div className="dashboard-container">

        {/* Categories */}

        <section className="category-section">

          <h2>Shop by Category</h2>

          <div className="category-grid">

            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category}
              />
            ))}

          </div>

        </section>

        {/* Products */}

        <section className="product-section">

          <h2>Featured Products</h2>

          <div className="product-grid">

            {products.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </section>

      </div>

    </div>
  );
}

export default CustomerDashboard;