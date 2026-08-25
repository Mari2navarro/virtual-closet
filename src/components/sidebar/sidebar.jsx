import "./sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <span>VIRTUAL</span>
        <span>CLOSET</span>
        <span className="sidebar__logo-star">✳</span>
      </div>

      <nav className="sidebar__nav">
        <a href="#" className="sidebar__link sidebar__link--active">
          <span className="sidebar__icon">♧</span>
          <span>Mi armario</span>
        </a>

        <a href="#" className="sidebar__link">
          <span className="sidebar__icon">♡</span>
          <span>Favoritos</span>
        </a>

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