import Navbar from "../../components/Navbar";
import RoleCard from "../../components/RoleCard";
import hero from "../../assets/hero.png";
import "../../styles/home.css";

function Home() {
  return (
    <div className="home">

      <Navbar />

      <section className="hero">

        <div className="hero-content">

          <span className="hero-badge">
            🚀 Enterprise Multi-Vendor Marketplace
          </span>

          <h1>
            Buy.
            <span> Sell.</span>
            Manage.
          </h1>

          <p>
            ShopStack connects customers, vendors and administrators
            through one powerful marketplace platform.
          </p>

          <div className="hero-image-mobile">

            <img src={hero} alt="ShopStack" />

          </div>

          <div className="cards-row">

            <RoleCard
              icon="🛒"
              title="Customer"
              subtitle="Shop Products"
              description="Browse products from multiple vendors."
              buttonText="Continue"
              link="/customer/login"
            />

            <RoleCard
              icon="🏪"
              title="Vendor"
              subtitle="Sell Products"
              description="Register your business and sell online."
              buttonText="Continue"
              link="/vendor/register"
            />

            <RoleCard
              icon="🛡️"
              title="Admin"
              subtitle="Manage Platform"
              description="Marketplace administration portal."
              buttonText="Continue"
              link="/admin/login"
            />

          </div>

        </div>

        <div className="hero-image">

          <img src={hero} alt="Marketplace" />

        </div>

      </section>

    </div>
  );
}

export default Home;