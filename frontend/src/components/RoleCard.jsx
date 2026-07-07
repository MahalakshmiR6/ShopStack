import { Link } from "react-router-dom";
import "../styles/rolecard.css";

function RoleCard({
  icon,
  title,
  subtitle,
  description,
  buttonText,
  link,
}) {
  return (
    <div className="role-card">

      <div className="role-icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <h4>{subtitle}</h4>

      <p>{description}</p>

      <Link to={link}>
        <button className="role-btn">
          {buttonText}
        </button>
      </Link>

    </div>
  );
}

export default RoleCard;