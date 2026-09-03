import {
  CalendarDays,
  Heart,
  House,
  Plus,
  Shirt,
  UserRound,
} from "lucide-react";

import "./sidebar.scss";

function Sidebar({ showFavorites, setShowFavorites }) {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav" aria-label="Navegación principal">
        <button
          className="sidebar__link sidebar__link--active"
          type="button"
          aria-label="Inicio"
        >
          <House className="sidebar__icon" />
        </button>

        <button
          className="sidebar__link"
          type="button"
          aria-label="Armario"
        >
          <Shirt className="sidebar__icon" />
        </button>

        <button
          className={`sidebar__link ${
            showFavorites ? "sidebar__link--active" : ""
          }`}
          type="button"
          aria-label="Favoritos"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          <Heart className="sidebar__icon" />
        </button>

        <button
          className="sidebar__add"
          type="button"
          aria-label="Añadir prenda"
        >
          <Plus />
        </button>

        <button
          className="sidebar__link"
          type="button"
          aria-label="Calendario"
        >
          <CalendarDays className="sidebar__icon" />
        </button>

        <button
          className="sidebar__link"
          type="button"
          aria-label="Perfil"
        >
          <UserRound className="sidebar__icon" />
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;