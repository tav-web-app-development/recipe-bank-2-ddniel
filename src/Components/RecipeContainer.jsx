import { useContext, useState } from "react";
import { RecipesContext } from "../store/recipes-context";



/* eslint-disable react/prop-types */
function RecipeContainer({ recipe }) {
  const {updateRecipe, onDeleteRecipe} = useContext(RecipesContext)

  const [isEditing, setIsEditing] = useState(false)
  const [editedRecipe, setEditedRecipe] = useState({...recipe});
  
  const handleEditClick = (e)=> {
    
    if (e.target.value === 'Save'){
      updateRecipe({editedRecipe})
      setIsEditing(!isEditing)
    } else if (e.target.value ==='Edit') {
      setEditedRecipe({...recipe})
      setIsEditing(!isEditing)
    }
    
  }

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleDeleteClick = () => {
    // Call the onDeleteRecipe function with the recipe ID
    onDeleteRecipe(recipe.id);
  };


  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipe.title;
        }}
      >
        <div className="recipe">
          <h2>{isEditing ? (<input type="text" name="title" value={editedRecipe.title}
                onChange={handleInputChange}></input>) : (recipe.title)}</h2>
          <p>
            <strong>Description:</strong>
            {isEditing ? (<input type="text" name="description" value={editedRecipe.description} onChange={handleInputChange}></input>) : (recipe.description)}
          </p>
          <p>
            <strong>Ingredients:</strong> {isEditing ? (<textarea type="text" name="ingredients" value={editedRecipe.ingredients}
                onChange={handleInputChange} rows={8} cols={90}></textarea>) : (recipe.ingredients)}
          </p>
          <p>
            <strong>Directions:</strong> {isEditing ? (<textarea type="text" name="directions" value={editedRecipe.directions}
                onChange={handleInputChange} rows={12} cols={90}></textarea>) : (recipe.directions)}
          </p>
          <img
            src={recipe.photoUrl}
            alt={recipe.title}
            width={300}
            height={300}
          />

          <div className="buttons-container">
            <button onClick={handleEditClick} value={isEditing ? "Save": "Edit"} >{ isEditing ? "Save": "Edit"}</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
