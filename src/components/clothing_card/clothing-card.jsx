import "./clothing-card.scss";

function ClothingCard({ clothing, onToggleFavorite }) {
  return (
    <article className={`clothing-card clothing-card--${clothing.color}`}>
      <div className="clothing-card__image-container">
        <img
          className="clothing-card__image"
          src={clothing.image}
          alt={clothing.name}
        />

      <button
  className="clothing-card__favorite"
  type="button"
  aria-label={`Añadir ${clothing.name} a favoritos`}
  onClick={() => onToggleFavorite(clothing.id)}
>
  {clothing.favorite ? "♥" : "♡"}
</button>
      </div>

      <div className="clothing-card__info">
        <h2>{clothing.name}</h2>
        <p>{clothing.category}</p>
      </div>
    </article>
  );
}

export default ClothingCard;