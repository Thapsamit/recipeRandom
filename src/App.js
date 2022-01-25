
import './App.css';
import Header from './Header';
import Search from './Search';
import Recipes from './Recipes';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
function App() {
  return (
    <>
    <Router>
    <Header/>
     <Switch>
       <Route exact path='/'>
       <Search/>
       </Route>
       <Route path='/details/:id'>
         <RecipeDetails/>
       </Route>
       <Route  path='/:recipeLen'>
         <Recipes/>
       </Route>
         
    </Switch>
    </Router>
     
    </>
  );
}

export default App;
