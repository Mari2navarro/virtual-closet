import "./clothing-card.scss";

function ClothingCard({ clothing }) {
  return (
    <article className="clothing-card">
      <div className="clothing-card__image-container">
        <img
          className="clothing-card__image"
          src={clothing.image}
          alt={clothing.name}
        />

        <button className="clothing-card__favorite" type="button">
          ♡
        </button>
      </div>

      <div className="clothing-card__info">
        <h3>{clothing.name}</h3>
        <p>{clothing.category}</p>
      </div>
    </article>
  );
}

export default ClothingCard;