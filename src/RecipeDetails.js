
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  
  const {id} = useParams();
  const recipeByRedux = useSelector(state=> state.recipeByRedux );
  console.log(recipeByRedux)
  const getThatRecipe = recipeByRedux.filter((recipe)=>{
  
      return recipe.id===parseInt(id)
    
  })
  
 
   console.log(getThatRecipe)
    return ( 
        <>
        {getThatRecipe.map((myrecipe)=>(
          <div className="recipe-container" key={myrecipe.id}>
            
          <div className="title">
            <h3>{myrecipe.title}</h3>
          </div>
          <div className="img">
            <img src={myrecipe.image} alt="" />
          </div>
          <div className="content">
          <div className="ingrediants">
            <h3>Ingredients:-</h3>
            <ol>
              {myrecipe.ingredients.map((ing,ind)=>(
                <li key={ind}>{ing}</li>
              ))}
            </ol>
          </div>
          <div className="instructions">
            <ol>
              <h3>Instructions:-</h3>
              {myrecipe.instructions.map((ins,ind)=>(
                <li key={ind}>{ins.text}</li>
        ))}
            </ol>
          </div>
          </div> 
         </div>

        ))}
          
        </>
     );
}
 
export default RecipeDetails;