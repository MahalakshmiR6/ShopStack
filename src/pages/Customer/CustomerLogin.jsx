import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import AuthLayout from "../../layouts/AuthLayout";

function CustomerLogin() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Backend API will be added later
    navigate("/customer/dashboard");
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Login to continue shopping on ShopStack."
    >
      <h2>Customer Login</h2>

      <p>Sign in to your account</p>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        <div className="remember-forgot">

          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <a href="#">Forgot Password?</a>

        </div>

        <button type="submit" className="auth-btn">
          Login
        </button>

      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <button className="google-btn">
        <FaGoogle />
        Continue with Google
      </button>

      <div className="bottom-link">
        Don't have an account?
        <Link to="/customer/register"> Sign Up</Link>
      </div>

    </AuthLayout>
  );
}

export default CustomerLogin;