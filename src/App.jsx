import { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";
import { RecipesContext } from "./store/recipes-context";

function App() {
  const {items} = useContext(RecipesContext)
  

  return (
    <>
      <Navbar />
      {items.map((data) => (
        <RecipeContainer recipe={data} key={data.id} />
      ))}
      <Footer />
    </>
  );
}

export default App;
