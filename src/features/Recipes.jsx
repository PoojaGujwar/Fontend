import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";
import { useEffect, useState } from "react";


const Recipes =()=>{
    const {data, loading, error} = useFetch("https://recipe-eta-flame.vercel.app/recipes")
    const [fetchData, setFetchData] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [message, setMessage] = useState('')
   useEffect(()=>{
    if(data){
        setFetchData(inputValue?(data.filter((recipe) => recipe.cuisineType?.toLowerCase().includes(inputValue.toLowerCase()))
    ):data)
    }
   },[data, inputValue])
   const handleDeleteBtn =async(e,id)=>{
    e.preventDefault()
    try{
        const response =  await fetch(`https://recipe-eta-flame.vercel.app/recipes/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify()
        })
        const data = await response.json()
        setMessage("Deleted Recipe Successfully")
    setFetchData((pre)=> pre.filter(p=> p._id !== id))
        console.log(data)

    }catch(error){
        console.log(error)
    }finally{
        setTimeout(()=>setMessage(""),2000)
    }
   }
   console.log(fetchData)
    return (
        <>
        <Header/>
        <div className="container py-3">
            <h1 className="">All Recipies</h1>
            {loading && <p className="alert alert-info">Loading...</p>}
            {message && <p className="alert alert-info">{message}</p>}
            {error ? <p>{error}</p>:""}
            <div className="col-lg-10 col-md-4 py-3">
            <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} placeholder="Search by cuisine..." className="form-control"/>
            </div>
            <div className="row">
                {fetchData && fetchData?.map((recipe)=>(
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card w-100 h-100">
                            <img src={recipe.image} alt={recipe.name} className="img-fluid card-img-top" 
                            style={{height:"100%",objectFit:"cover"}}
                            />
                            <div className="card-body">
                                <h3>{recipe.name}</h3>
                                <p><strong>Cuisine Type: </strong>{recipe.cuisineType}</p>
                                <p><strong>Ingredients: </strong><NavLink to={`recipe/${recipe._id}`}>See Recipe</NavLink></p>
                                <p><strong>Instructions: </strong><NavLink to={`recipe/${recipe._id}`}>See Recipe</NavLink></p>
                                <form onSubmit={(e)=>handleDeleteBtn(e,recipe._id)}>
                                <button className="btn btn-danger"  type="submit">Delete</button>
                                </form>
                            </div>

                        </div>

                    </div>
                )) }
                <div></div>

            </div>
        </div>
        </>
    )
}
export default Recipes;