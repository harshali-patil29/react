import React, { useState } from "react";
import { LogoImg } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    console.log("Header rendered");

    useEffect( ()=>{
        console.log("useeffect called");
    }, [btnName]

    );

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"> <img className="logo" src={LogoImg} alt="logo" /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About Us</Link> </li>
                    <li> <Link to="/contact">Contact Us</Link> </li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={()=>{
                        (btnName==="Login") ? setbtnName("Logout") : setbtnName("Login")
                        }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;