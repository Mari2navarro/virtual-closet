import { useState } from "react";

import Sidebar from "./components/sidebar/sidebar";
import Wardrobe from "./pages/wardrobe/wardrobe";


function App() {
  const [showFavorites, setShowFavorites] = useState(false);

 return (
    <>
      <Wardrobe showFavorites={showFavorites} />

      <Sidebar
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
    </>
  );
}

export default App;