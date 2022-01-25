import {Link} from 'react-router-dom';

const RecipeCard = (props) => {
    const recipes = props.recipes;
   
  
  
    return ( 
        <>
          {recipes.map((recipe)=>(
              <div className="card" key={recipe.id}>
              <div className="imagePlace">
                  <img src={recipe.image} alt="" />
              </div>
              <div className="content">
                  <h3>{recipe.title}</h3>
                  <Link to={`/details/${recipe.id}`}>
                    <button>Details</button>   
                  </Link>   
                           
              </div>
             </div>
    ))}
          
        </>
     );
}
export default RecipeCard