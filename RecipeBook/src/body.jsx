import React, {useState, useEffect} from "react";
import './App.css'
import Header from "./header";
import Footer from "./footer";


export default function Body(){

  
  const [recipe, setRecipe] = useState([]);

  const[recipeUrl, setRecipeUrl] = useState([]);


  const query = ["pasta", "italian", "greek", "vegetarian", "gluten", "pan", "tomato", "cheese", "tomato,cheese", "eggs", "main course"];

  useEffect(()=>{
    fetch("https://api.spoonacular.com/recipes/search?query=pan&apiKey=41ed475a65464b2b9a47915ec00cc575")
    .then(response => response.json())
    .then(data => setRecipeUrl(data.results))
    .catch(error => console.log(error))
  }, []) 

  useEffect(() => {
    const fetchRecipeDetails = () => {
      if (recipeUrl && recipeUrl.length > 0) {
        fetch(`https://api.spoonacular.com/recipes/extract?url=${recipeUrl[0].sourceUrl}&apiKey=41ed475a65464b2b9a47915ec00cc575`)
          .then(response => response.json())
          .then(data => setRecipe(data))
          .catch(error => console.error('Error fetching recipe details:', error));
      }
    };
    fetchRecipeDetails();
  }, [recipeUrl]);
  console.log(recipe)

  return(
    <>
      <Header />


      <div className="body-main">
        <div className="body-main-left" >
          <h4 className="body-main-left-heading">Hot Recipes</h4>
          <div className="body-main-left-content">
            <img className="body-main-left-content-image"src={recipe.image}></img>
            <p className="body-main-left-content-text">{recipe.title}</p>
            <div className="RestDiv">
                <u>VIEW MORE RECIPES &gt;</u>  
            </div>
          </div>
        </div>

        <div className="body-main-right">
          <h4 className="body-main-right-heading">People's Favourite</h4>
            <div className="body-main-right-content">
              <div className="content">
                    <img className="body-main-left-content-image"src={recipe.image}></img>
                    <p className="body-main-left-content-text">"{recipe.title}"</p>
              </div>
              <div className="content">
                    <img className="body-main-left-content-image"src={recipe.image}></img>
                    <p className="body-main-left-content-text">"{recipe.title}"</p>
              </div>
            </div>
            <div className="body-main-right-content">
              <div className="content">
                    <img className="body-main-left-content-image"src={recipe.image}></img>
                    <p className="body-main-left-content-text">"{recipe.title}"</p>
              </div>
              <div className="content">
                    <img className="body-main-left-content-image"src={recipe.image}></img>
                    <p className="body-main-left-content-text">"{recipe.title}"</p>
              </div>
            </div>
        </div>
      </div>

      
      <Footer />
    </>
  )
}