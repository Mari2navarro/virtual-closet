import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Wardrobe from "./pages/wardrobe/wardrobe";

function App() {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <>
      <Sidebar
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />

      <Wardrobe
        showFavorites={showFavorites}
      />
    </>
  );
}

export default App;