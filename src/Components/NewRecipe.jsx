import { useContext, useState } from "react";
import { RecipesContext } from "../store/recipes-context";
import { Link } from "react-router-dom";


export default function NewRecipe() {

  const { addNewRecipe } = useContext(RecipesContext);

  const [newRecipe, setNewRecipe] = useState({title: '', description: '', ingredients: '', directions: '', photoUrl: ''});

  const handleSubmit = () => {
      addNewRecipe(newRecipe);
    }

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewRecipe((prev)=>({...prev, [name]: value}))
  };

  return (
    <>
      <h1>New recipe</h1>

      <div className="recipe">
            <strong>Title: </strong>
            <input
              type="text"
              name="title"
              value={newRecipe.title}
              onChange={handleInputChange}
            ></input>
        <p>
          <strong>Description: </strong>
            <input
              type="text"
              name="description"
              value={newRecipe.description}
              onChange={handleInputChange}
            ></input>
        </p>
        <p>
          <strong>Ingredients: </strong>{" "}
            <textarea
              type="text"
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
              rows={8}
              cols={90}
            ></textarea>
        </p>
        <p>
          <strong>Directions: </strong>{" "}
            <textarea
              type="text"
              name="directions"
              value={newRecipe.directions}
              onChange={handleInputChange}
              rows={12}
              cols={90}
            ></textarea>
        </p>
        <strong>Image Url: </strong>
        <input
          type="text"
          name="photoUrl"
          src={newRecipe.photoUrl}
          onChange={handleInputChange}
        />

        <div className="buttons-container">
          <Link to={'/'}>
                <button onClick={handleSubmit}>
                    Submit
                </button>
          </Link>
          <Link to={'/'}><button>Cancel</button></Link>
          
        </div>
      </div>
    </>
  );
}
