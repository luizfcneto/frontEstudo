import React from "react";

export default ( props ) => {
    return (
        <nav className="navbar navbar-inverse navbar-dark bg-primary">
            <div className="container"> 
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-calendar-check-o"> TodoApp </i>
                    </a>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav"> 
                        <li> <a href="#/todos"> Tarefas </a> </li>
                        <li> <a href="#/sobre"> Sobre</a> </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}