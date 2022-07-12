import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";



const ProtectedRoute = () =>{
    const auth = async () =>{
        return localStorage.getItem("logged");
    }
    const [logged,setLogged] = useState("");
    useEffect(()=>{
        var status = auth()
        setLogged(status);
    },[])
    return logged === "logged" ? <Outlet/>: <Navigate to='/signin'/>
}
export default ProtectedRoute;