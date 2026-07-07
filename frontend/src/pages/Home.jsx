import Navbar from "../components/Navbar";
import RoleCard from "../components/RoleCard";
import hero from "../assets/hero.png";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">

      <Navbar />

      <section className="hero-section">

        <div className="hero-left">

          <span className="tagline">
            🚀 Enterprise Multi-Vendor Marketplace
          </span>

          <h1>
            One Marketplace.
            <br />
            <span>Endless Opportunities.</span>
          </h1>

          <p>
            ShopStack connects customers, vendors, and administrators
            through one modern marketplace. Buy products, sell your
            inventory, and manage everything from a single platform.
          </p>

          <div className="role-container">

            <RoleCard
              icon="🛒"
              title="Customer"
              subtitle="Buy Products"
              description="Explore products from multiple vendors and shop with ease."
              buttonText="Continue"
              link="/customer"
            />

            <RoleCard
              icon="🏪"
              title="Vendor"
              subtitle="Sell Products"
              description="Create your store, verify your business and start selling."
              buttonText="Continue"
              link="/vendor"
            />

            <RoleCard
              icon="🛡️"
              title="Admin"
              subtitle="Marketplace Control"
              description="Manage vendors, customers, products and platform activities."
              buttonText="Continue"
              link="/admin"
            />

          </div>

        </div>

        <div className="hero-right">

          <img
            src={hero}
            alt="ShopStack Marketplace"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;