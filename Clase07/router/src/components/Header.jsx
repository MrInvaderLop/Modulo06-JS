import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
    )
}

export default Header