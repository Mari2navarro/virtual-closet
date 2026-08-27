import "./sidebar.scss";

function Sidebar({ showFavorites, setShowFavorites }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <span>VIRTUAL</span>
        <span>CLOSET</span>
        <span className="sidebar__logo-star">✳</span>
      </div>

      <nav className="sidebar__nav">
       <button
  type="button"
  className={`sidebar__link ${
    !showFavorites ? "sidebar__link--active" : ""
  }`}
  onClick={() => setShowFavorites(false)}
>
          <span className="sidebar__icon">♧</span>
          <span>Mi armario</span>
      </button>

       <button
  type="button"
  className={`sidebar__link ${
    showFavorites ? "sidebar__link--active" : ""
  }`}
  onClick={() => setShowFavorites(true)}
>
  <span className="sidebar__icon">♡</span>
  <span>Favoritos</span>
</button>

        <a href="#" className="sidebar__link">
          <span className="sidebar__icon">♧</span>
          <span>Looks</span>
        </a>

        <a href="#" className="sidebar__link">
          <span className="sidebar__icon">▣</span>
          <span>Calendario</span>
        </a>

        <a href="#" className="sidebar__link">
          <span className="sidebar__icon">▥</span>
          <span>Estadísticas</span>
        </a>

        <a href="#" className="sidebar__link">
          <span className="sidebar__icon">⚙</span>
          <span>Ajustes</span>
        </a>
      </nav>

      <div className="sidebar__sticker">
        <strong>WEAR</strong>
        <strong>WHAT</strong>
        <strong>MAKES</strong>
        <strong>YOU</strong>
        <strong>HAPPY</strong>
      </div>
    </aside>
  );
}

export default Sidebar;