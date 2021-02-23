import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Todo from "../Todo/todo";
import About from "../About/about";

export default ( props ) => {
    return (
        <Router history={ hashHistory }>
            <Route path="/todos" component={Todo} ></Route>
            <Route path="/sobre" component={About} ></Route>
            <Redirect from="*" to="/todos" />
        </Router>
    )
};