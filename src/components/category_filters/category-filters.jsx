import "./category-filters.scss";

function CategoryFilters({
  categories,
  categoryLabels,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <nav
      className="category-filters"
      aria-label="Filtrar prendas"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-filters__button ${
            selectedCategory === category
              ? "category-filters__button--active"
              : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </nav>
  );
}

export default CategoryFilters;