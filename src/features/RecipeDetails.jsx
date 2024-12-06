import { useParams } from "react-router-dom"
import Header from "../components/Header"
import useFetch from "../useFetch"
import { useEffect, useState } from "react"

const RecipeDetails =()=>{
    const {data, loading, error} = useFetch("https://recipe-eta-flame.vercel.app/recipes")
    const [fetchData, setFetchData] = useState()
    const {id} = useParams()
    console.log(data)
    useEffect(()=>{
        if(data){
            setFetchData(data)
        }
    },[data])
    const filterdRecipe = fetchData && fetchData.find((recipe)=>recipe._id === id )
    console.log(filterdRecipe)
    
    return (
        <>
        <Header/>
        {loading && <p>Loading..</p>}
        {error && <p>{error}</p>}
        <div className="container py-3">
            
            {filterdRecipe && (
                <>
            <h1>{filterdRecipe.name}</h1>
           
            <div className="card d-flex flex-wrap w-100">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                <img src={filterdRecipe.image} alt={filterdRecipe.name} className="img-fluid" style={{width:"100%",height:"100%", objectFit:"cover",borderRadius: "5px"}}/>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="card-body ms-3 mb-5">
                    <h2>Cuisine: {filterdRecipe.cuisineType}</h2>
                    <h4>Ingredients: </h4>
                    <p>{filterdRecipe.ingredients}</p>
                    <h4>Instructions:</h4>
                    <ol>
                {filterdRecipe.instructions.split(". ").map((rec)=>(
                    <li>{rec}</li>
                ))}
                    </ol>
                    
                </div>
                </div>
           </div>
            </div>
            </>
             )}
        </div>
        </>
    )
}
export default RecipeDetails