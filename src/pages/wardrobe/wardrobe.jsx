import { useState } from "react";
import { clothes } from "../../data/clothes";
import ClothingGrid from "../../components/clothing_grid/clothing-grid";
import "./wardrobe.scss";

function Wardrobe({ showFavorites }) {
  // State
  const [clothesList, setClothesList] = useState(clothes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
 

  // Categories
  const categories = [
    "all",
    "top",
    "bottom",
    "dress",
    "outerwear",
    "shoes",
    "accessory",
  ];

  const categoryLabels = {
    all: "Todo",
    top: "Tops",
    bottom: "Bottoms",
    dress: "Vestidos",
    outerwear: "Chaquetas",
    shoes: "Zapatos",
    accessory: "Accesorios",
  };

  // Filter clothes
const filteredClothes = clothesList.filter((clothing) => {
  const matchesSearch = clothing.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "all" ||
    clothing.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

const displayedClothes = showFavorites
  ? filteredClothes.filter((clothing) => clothing.favorite)
  : filteredClothes;

  // Toggle favorite
  const handleToggleFavorite = (id) => {
    setClothesList((currentClothes) =>
      currentClothes.map((clothing) =>
        clothing.id === id
          ? { ...clothing, favorite: !clothing.favorite }
          : clothing
      )
    );
  };

  return (
    <main className="wardrobe">
      <header className="wardrobe__header">
        <div className="wardrobe__title">
          <p className="wardrobe__eyebrow">MY CLOSET</p>

          <h1>Mi armario</h1>

          <p className="wardrobe__subtitle">
            Tu armario, tus reglas.
          </p>
        </div>

        <div className="wardrobe__count">
          <span>{filteredClothes.length}</span>

          <div>
            <strong>PRENDAS</strong>
            <small>EN TU ARMARIO</small>
          </div>
        </div>
      </header>

      <div className="wardrobe__search">
        <input
          type="search"
          placeholder="Buscar una prenda..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <nav
        className="wardrobe__filters"
        aria-label="Filtrar prendas"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`wardrobe__filter ${
              selectedCategory === category
                ? "wardrobe__filter--active"
                : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </nav>

      <ClothingGrid
  clothes={displayedClothes}
  onToggleFavorite={handleToggleFavorite}
/>
    </main>
  );
}

export default Wardrobe;