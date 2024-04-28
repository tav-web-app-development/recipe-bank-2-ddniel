import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RecipesContextProvider from "./store/recipes-context.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewRecipe from "./Components/NewRecipe.jsx";

//Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/new-recipe',
    element: <NewRecipe />
  }

])



ReactDOM.createRoot(document.getElementById("root")).render(
  
  
  <React.StrictMode>
    <RecipesContextProvider>
      <RouterProvider router={router}/>
    </RecipesContextProvider> 
  </React.StrictMode>
);
