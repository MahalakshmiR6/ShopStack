import "../styles/categoryCard.css";

function CategoryCard({ title }) {
  return (
    <div className="category-card">
      <div className="category-icon">
        {title.split(" ")[0]}
      </div>

      <h3>{title.substring(title.indexOf(" ") + 1)}</h3>
    </div>
  );
}

export default CategoryCard;