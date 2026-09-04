import ClothingCard from "../clothing_card/clothing-card";
import "./clothing-grid.scss";

function ClothingGrid({ clothes, onToggleFavorite }) {
  if (clothes.length === 0) {
    return (
      <section className="clothing-grid clothing-grid--empty">
        <p className="clothing-grid__empty-message">
          No hemos encontrado ninguna prenda 🥲
        </p>
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