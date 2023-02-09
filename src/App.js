import './App.css';
import { useCallback, useEffect, useState } from 'react';
import MyRecipesComponent from './MyRecipesComponent';
import video from './coverr.mp4';

function App() {
  const MY_ID = "f9a6c8e0";
  const MY_KEY = "03e8e1e615ea3b452a47e7f2b4736750";

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState('salad')
    
 const getRecipe = useCallback(async() => {
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
  const data = await response.json();
  setMyRecipes(data.hits);
  console.log(data.hits);
}, [wordSubmitted])

 useEffect(() => {
  getRecipe()
 }, [getRecipe])
 
const myRecipeSearch = (e) => {
  setMySearch(e.target.value);
  console.log(e.target.value)
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
}

  return (
    <div className="App">
      <div className='videoBox'>
      <video autoPlay muted loop>
        <source src={video} type='video/mp4'/>
      </video>
      </div>

      <h1>Find a Recipe</h1>

      <form className='search' onSubmit={finalSearch}>
        <input placeholder='search...' onChange={myRecipeSearch} value={mySearch}/>
        <button>Find</button>
      </form>
      
      {myRecipes.map((element, index) => (
        <MyRecipesComponent
        key = {index} 
        label = {element.recipe.label}
        calories = {element.recipe.calories}
        image = {element.recipe.image}
        ingredient = {element.recipe.ingredientLines}/>
      ))}
    </div>
  );
}

export default App;
