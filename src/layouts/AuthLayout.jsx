import "../styles/auth.css";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="brand">

          <h1>
            Shop<span>Stack</span>
          </h1>

          <h2>{title}</h2>

          <p>{subtitle}</p>

          <div className="features">

            <div className="feature">
              🛍️ Buy from Multiple Vendors
            </div>

            <div className="feature">
              🚚 Fast & Secure Checkout
            </div>

            <div className="feature">
              ⭐ Trusted Marketplace
            </div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AuthLayout;