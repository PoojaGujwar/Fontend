import { useState, useEffect } from "react"

const useFetch =(url, initial)=>{
    const [data, setData] = useState(initial)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res)=> res.json())
        .then((data)=>setData(data))
        .then((error)=>setError(error))
        .finally(()=>setLoading(false))
    },[url]);
    return {data, loading, error}
}
export default useFetch