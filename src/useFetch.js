import { useState,useEffect } from "react";
const useFetch = (urlEndPoint) => {
    const[recipes,setRecipes] = useState(null)
    const[isPending,setPending] = useState(true)
    
    useEffect(()=>{
        fetch(urlEndPoint, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "random-recipes.p.rapidapi.com",
                "x-rapidapi-key": "7fec6da695mshdea2c6772d9cde3p16594fjsnb29c347b42a1"
            }
        })
        .then(response => {
            return response.json()
        })
        .then((data)=>{
             
             setRecipes(data)
             setPending(false)
        })
        .catch(err => {
            console.error(err);
        });
    },[urlEndPoint])
    return{recipes,isPending}

}
 
export default useFetch;