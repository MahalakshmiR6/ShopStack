import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthLayout from "../../layouts/AuthLayout";

function CustomerRegister() {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Backend API will be added later
    navigate("/customer/dashboard");
  };

  return (
    <AuthLayout
      title="Create Your Account 🚀"
      subtitle="Join ShopStack and start shopping today."
    >
      <h2>Create Account</h2>

      <p>Register as a Customer</p>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          type="tel"
          placeholder="Mobile Number"
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

        <div className="password-box" style={{ marginTop: "18px" }}>

          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />

          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        <div className="remember-forgot">

          <label>
            <input type="checkbox" required />
            I agree to the Terms & Conditions
          </label>

        </div>

        <button type="submit" className="auth-btn">
          Create Account
        </button>

      </form>

      <div className="bottom-link">
        Already have an account?
        <Link to="/customer/login"> Login</Link>
      </div>

    </AuthLayout>
  );
}

export default CustomerRegister;