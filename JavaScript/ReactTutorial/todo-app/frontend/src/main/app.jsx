import React from "react";
import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";


import Todo from "../Todo/todo";
import About from "../About/about";
import Menu from "../Template/menu";
import Routes from "./router";

export default ( props ) => {
    return (
        <div className="container"> 
            <Menu />
            <Routes />
        </div>
    )
}