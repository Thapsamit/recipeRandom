
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import useFetch from "./useFetch";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setRecipes } from "./actions";

const RecipesList = () => {
    const{recipeLen} = useParams();
    const{recipes,isPending} = useFetch(`https://random-recipes.p.rapidapi.com/ai-quotes/${recipeLen}`)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setRecipes(recipes))
    }, [dispatch,recipes])
    
        return ( 
        <>
            {isPending && <p>Loading Your Dishes....</p>}
            {recipes &&  <RecipeCard recipes = {recipes}/>}
        </>
     );
}

export default RecipesList;