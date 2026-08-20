import { clothes } from "./data/clothes";
import ClothingCard from "./components/clothing_card/clothing-card";

function App() {
  return (
    <main>
      <h1>Mi armario 🎀</h1>

      <ClothingCard clothing={clothes[0]} />
    </main>
  );
}

export default App;