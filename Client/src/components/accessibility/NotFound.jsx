import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function NotFound(){

    const navigate=useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/",{replace:true});
        },3000)

    },[])

    return(
        <h1>This page does not exists. Redirecting to home page</h1>
    )
}