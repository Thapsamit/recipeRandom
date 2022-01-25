import { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
    const[inputRecipeLen,setInputRecipeLen] = useState(0);
    const history = useHistory();

    const handleSubmit=(e)=>{ 
        e.preventDefault();
        history.push(`/${inputRecipeLen}`)
    }
    return ( 
        <>
          <div className="wrapper">
              <div className="container">
                  <form onSubmit={handleSubmit}>
                      <input required type="text" placeholder="Enter No of Recipes...." onChange={(e)=>{
                        setInputRecipeLen(parseInt(e.target.value))  
                      }}/>
                      <div>
                         <button>Search</button>      
                      </div>
                  </form>
              </div>
          </div>
        </>
     );
}
 
export default Search;
