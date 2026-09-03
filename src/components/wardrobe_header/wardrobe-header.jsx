import "./wardrobe-header.scss";

function WardrobeHeader({
  searchTerm,
  setSearchTerm,
  clothesCount,
}) {
  return (
    <header className="wardrobe-header">

      <div className="wardrobe-header__topbar">

        <div className="wardrobe-header__brand">
        <span>TU</span>
          <span>ARMARIO</span>
          <span>VIRTUAL</span>
        </div>

        <div className="wardrobe-header__actions">

          <label className="wardrobe-header__search">
            <span>⌕</span>

            <input
              type="search"
              placeholder="Buscar prendas..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <button
            className="wardrobe-header__add"
            type="button"
            aria-label="Añadir prenda"
          >
            +
          </button>

        </div>

      </div>

      <div className="wardrobe-header__hero">

        <div className="wardrobe-header__hero-content">

          <p className="wardrobe-header__greeting">
            Hola,
          </p>

          <h1 className="wardrobe-header__title">
            Mari
            <span>✳</span>
          </h1>

          <p className="wardrobe-header__subtitle">
            AQUÍ EMPIEZA TU PRÓXIMO LOOK
          </p>

        </div>

        <div className="wardrobe-header__profile">

          <div className="wardrobe-header__profile-shape"></div>

          <div className="wardrobe-header__profile-photo">
             <img
    src="/images/closet-profile.jpg"
    alt="Mi armario"
  />
          </div>

          <div className="wardrobe-header__count">
            <strong>{clothesCount}</strong>
            <span>prendas</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default WardrobeHeader;