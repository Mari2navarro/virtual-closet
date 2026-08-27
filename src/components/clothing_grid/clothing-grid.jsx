import ClothingCard from "../clothing_card/clothing-card";
import "./clothing-grid.scss";

function ClothingGrid({ clothes, onToggleFavorite }) {
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