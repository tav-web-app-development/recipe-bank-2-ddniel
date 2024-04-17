import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch("https://api.sampleapis.com/recipes/recipes");
        const data = await response.json();
        setRecipes(data);
    };

    fetchData();

    return () => console.log("unmounted");
  }, []);
  

  const updateRecipe = ({editedRecipe}) => {
    const updatedRecipes = recipes.map((r) =>
      r.id === editedRecipe.id ? editedRecipe : r
    );
    setRecipes(updatedRecipes);
  };


  const deleteRecipe = (recipeId) => {
    const filteredRecipes = recipes.filter((r) => r.id !== recipeId);
    setRecipes(filteredRecipes);
  };


  return (
    <>
      <Navbar />
      {recipes.map((data) => (
        <RecipeContainer recipe={data} key={data.id} updateRecipe={updateRecipe} onDeleteRecipe={deleteRecipe} />
      ))}
      <Footer />
    </>
  );
}

export default App;
