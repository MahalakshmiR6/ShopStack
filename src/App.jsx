import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home
import Home from "./pages/Home/Home";

// Customer
import CustomerLogin from "./pages/Customer/CustomerLogin";
import CustomerRegister from "./pages/Customer/CustomerRegister";
import CustomerDashboard from "./pages/Customer/CustomerDashboard";
import CustomerProfile from "./pages/Customer/CustomerProfile";
import CustomerOrders from "./pages/Customer/CustomerOrders";
import CustomerWishlist from "./pages/Customer/CustomerWishlist";
import CustomerCart from "./pages/Customer/CustomerCart";
import CustomerAddresses from "./pages/Customer/CustomerAddresses";
import CustomerPayments from "./pages/Customer/CustomerPayments";
import CustomerProductDetails from "./pages/Customer/CustomerProductDetails";
import CustomerCheckout from "./pages/Customer/CustomerCheckout";
import CustomerSettings from "./pages/Customer/CustomerSettings";

// Vendor
import VendorRegister from "./pages/Vendor/VendorRegister";
import VendorLogin from "./pages/Vendor/VendorLogin";
import VendorVerification from "./pages/Vendor/VendorVerification";

// Admin
import AdminLogin from "./pages/Admin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= CUSTOMER ================= */}

        <Route path="/customer/login" element={<CustomerLogin />} />

        <Route path="/customer/register" element={<CustomerRegister />} />

        <Route
          path="/customer/dashboard"
          element={<CustomerDashboard />}
        />
<Route
  path="/customer/payments"
  element={<CustomerPayments />}
/>
        <Route
          path="/customer/profile"
          element={<CustomerProfile />}
        />

        <Route
          path="/customer/orders"
          element={<CustomerOrders />}
        />

        <Route
          path="/customer/wishlist"
          element={<CustomerWishlist />}
        />
<Route
  path="/customer/addresses"
  element={<CustomerAddresses />}
/>
<Route
  path="/customer/product/:id"
  element={<CustomerProductDetails />}
/>
<Route
  path="/customer/checkout"
  element={<CustomerCheckout />}
/>
<Route
  path="/customer/settings"
  element={<CustomerSettings />}
/>

        <Route
          path="/customer/cart"
          element={<CustomerCart />}
        />

        {/* ================= VENDOR ================= */}

        <Route
          path="/vendor/register"
          element={<VendorRegister />}
        />

        <Route
          path="/vendor/login"
          element={<VendorLogin />}
        />

        <Route
          path="/vendor/verification"
          element={<VendorVerification />}
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;