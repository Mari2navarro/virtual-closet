import { useState } from "react";

import { clothes } from "../../data/clothes";

import WardrobeHeader from "../../components/wardrobe_header/wardrobe-header";
import CategoryFilters from "../../components/category_filters/category-filters";
import ClothingGrid from "../../components/clothing_grid/clothing-grid";

import "./wardrobe.scss";

function Wardrobe({ showFavorites }) {
  const [clothesList, setClothesList] = useState(clothes);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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
    all: "Todas",
    top: "Tops",
    bottom: "Bottoms",
    dress: "Vestidos",
    outerwear: "Abrigos",
    shoes: "Calzado",
    accessory: "Accesorios",
  };

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

  const handleToggleFavorite = (id) => {
    setClothesList((currentClothes) =>
      currentClothes.map((clothing) =>
        clothing.id === id
          ? {
              ...clothing,
              favorite: !clothing.favorite,
            }
          : clothing
      )
    );
  };

  return (
    <main className="wardrobe">

      <WardrobeHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        clothesCount={displayedClothes.length}
      />

      <CategoryFilters
        categories={categories}
        categoryLabels={categoryLabels}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <section className="wardrobe__content">

        <ClothingGrid
          clothes={displayedClothes}
          onToggleFavorite={handleToggleFavorite}
        />

      </section>

    </main>
  );
}

export default Wardrobe;