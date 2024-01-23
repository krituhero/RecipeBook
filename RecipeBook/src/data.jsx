import React, {useEffect, useState} from "react";

export default function Data(){
  const [recipe, setRecipe] = useState([]);

  useEffect(()=>{
    fetch("https://api.spoonacular.com/recipes/search?query=pasta&apiKey=41ed475a65464b2b9a47915ec00cc575")
    .then(response => response.json)
    .then(data => setRecipe(data))
    .catch(err => console.log(err))
  }, [])


  return(
    <>
      <div>
        <h5>{recipe}</h5>
      </div>
    </>
  )
}