import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectRoute(){
    const isAuth = localStorage.getItem("auth") === "true";

    return isAuth ? children : <Navigate to = "/" /> 
}