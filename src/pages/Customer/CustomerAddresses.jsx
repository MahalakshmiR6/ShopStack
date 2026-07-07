import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaHome,
  FaBuilding,
  FaPlus,
  FaEdit,
  FaTrash
} from "react-icons/fa";

import DashboardNavbar from "../../components/DashboardNavbar";
import "../../styles/customerAddresses.css";

function CustomerAddresses() {

  const navigate = useNavigate();

  return (
    <>
      <DashboardNavbar />

      <div className="address-page">

        <button
          className="back-btn"
          onClick={() => navigate("/customer/profile")}
        >
          <FaArrowLeft />
          Back to Profile
        </button>

        <div className="address-header">

          <h1>My Addresses</h1>

          <button className="add-address-btn">
            <FaPlus />
            Add New Address
          </button>

        </div>

        {/* Home */}

        <div className="address-card default">

          <div className="address-title">

            <FaHome />

            <h3>Home (Default)</h3>

          </div>

          <p>Maha Lakshmi</p>

          <p>4-25 Main Road</p>

          <p>Nandyal</p>

          <p>Andhra Pradesh - 518501</p>

          <p>Phone : +91 9876543210</p>

          <div className="address-actions">

            <button>
              <FaEdit />
              Edit
            </button>

            <button className="delete">
              <FaTrash />
              Delete
            </button>

          </div>

        </div>

        {/* Hostel */}

        <div className="address-card">

          <div className="address-title">

            <FaBuilding />

            <h3>Hostel</h3>

          </div>

          <p>Maha Lakshmi</p>

          <p>MITS Girls Hostel</p>

          <p>Madanapalle</p>

          <p>Andhra Pradesh - 517325</p>

          <p>Phone : +91 9876543210</p>

          <button className="default-btn">
            Set as Default
          </button>

          <div className="address-actions">

            <button>
              <FaEdit />
              Edit
            </button>

            <button className="delete">
              <FaTrash />
              Delete
            </button>

          </div>

        </div>

      </div>

    </>
  );
}

export default CustomerAddresses;