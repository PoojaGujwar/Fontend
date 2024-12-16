import { useState } from "react";
import Header from "../components/Header";

const AddRecipeForm = () => {
  const [name, setRecipeName] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://recipe-eta-flame.vercel.app/recipes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            cuisineType,
            image,
            ingredients,
            instructions,
          }),
        }
      );
      const data = await response.json();
      console.log(data, "");
      setRecipeName("");
      setCuisineType("");
      setInstructions("");
      setIngredients("");
      setImage("");
      setMessage("Add Recipe to List");
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setMessage(""), 2000);
    }
  };

  return (
    <>
      <Header />
      {message && <p className="alert alert-info">{message}</p>}
      <div className="container py-3">
        <h1>Add Recipe</h1>
        <div className="col-lg-8 col-md-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="recipeName">Name: </label>
            <input
              type="text"
              name="name"
              id="recipeName"
              className="form-control"
              required
              onChange={(e) => setRecipeName(e.target.value)}
              value={name}
            />
            <br />
            <label htmlFor="cuisineType">Cuisine Type: </label>
            <input
              type="text"
              name="cuisineType"
              id="cuisineType"
              className="form-control"
              onChange={(e) => setCuisineType(e.target.value)}
              value={cuisineType}
              required
            />
            <br />
            <label htmlFor="imageRecipe">Image Url</label>
            <input
              type="text"
              name="image"
              id="imageRecipe"
              className="form-control"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              required
            />
            <br />
            <label htmlFor="recipeIngredients">Ingredients:</label>
            <textarea
              type="text"
              name="ingredients"
              id="recipeIngredients"
              className="form-control"
              onChange={(e) => setIngredients(e.target.value)}
              value={ingredients}
              required
            ></textarea>
            <br />
            <label htmlFor="recipeInstructions">Instructions: </label>
            <textarea
              type="text"
              name="instructions"
              id="recipeInstructions"
              className="form-control"
              onChange={(e) => setInstructions(e.target.value)}
              value={instructions}
              required
            ></textarea>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddRecipeForm;
