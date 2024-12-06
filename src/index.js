import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Recipes from './features/Recipes';
import App from "./App"
import RecipeDetails from './features/RecipeDetails';
import AddRecipeForm from "./features/AddRecipeForm"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/recipe",
    element:<Recipes/>
  },
  {
    path:"/recipe/:id",
    element:<RecipeDetails/>
  },
  {
    path:"/addRecipe",
    element:< AddRecipeForm />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
