import { SETRECIPES } from "../actions"
const initState = {
    recipeByRedux:[]
}
const rootReducer = (state=initState,action) => {
    if(action.type===SETRECIPES){
        return{
            recipeByRedux: action.payload 
        }
    }
    return state
}
export default rootReducer
 
