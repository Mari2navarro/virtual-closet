import ClothingCard from "../clothing_card/clothing-card";
import "./clothing-grid.scss";

import { SearchX } from "lucide-react";

function ClothingGrid({ clothes, onToggleFavorite }) {
  if (clothes.length === 0) {
    return (
      <section className="clothing-grid clothing-grid--empty">
        <div className="clothing-grid__empty-message">
  <SearchX className="clothing-grid__empty-icon" />
  <p>No hemos encontrado ninguna prenda</p>
</div>
      </section>
    );
  }

  return (
    <section className="clothing-grid">
      {clothes.map((clothing) => (
        <ClothingCard
          key={clothing.id}
          clothing={clothing}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
}

export default ClothingGrid;