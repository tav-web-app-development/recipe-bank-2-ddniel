import { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext({
    items: [],
    setRecipes: ()=>{},
    updateRecipe: () => {},
    deleteRecipe: () => {},
})


export default function RecipesContextProvider({children}){
    
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

    

    const ctxValue = {
        items: recipes,
        setRecipes: setRecipes,
        updateRecipe: updateRecipe,
        deleteRecipe: deleteRecipe 
    }
    
    return <RecipesContext.Provider value={ctxValue}>
        {children}
    </RecipesContext.Provider>
}