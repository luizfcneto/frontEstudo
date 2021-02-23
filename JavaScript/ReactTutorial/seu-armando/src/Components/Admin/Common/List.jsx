import React from "react";

import Element from "./Element";
import Pagination from "../../../Common/Pagination";

export default ( props ) => {
    return (
        <div className={ props.divClass } >
            <h3> { props.listTitle } </h3>

            <ul className="list-group">
                <li className="list-group-item"> 
                    <div className="row">
                        <Element
                            divClass="col-xs-12"
                        />
                    </div>
                </li>

                <li className="list-group-item"> 
                    <div className="row">
                        <Element
                            divClass="col-xs-12"
                        />
                    </div>
                </li>

                <li className="list-group-item"> 
                    <div className="row">
                        <Element
                            divClass="col-xs-12"
                        />
                    </div>
                </li>
                
                
                <li className="list-group-item"> 
                    <div className="row">
                        <Element
                            divClass="col-xs-12"
                        />
                    </div>
                </li>
                
                <li className="list-group-item"> 
                    <div className="row">
                        
                    </div>  
                </li>
            </ul>

            <div className="row">
                <Pagination
                    divClass="col-xs-12 middle"

                />

            </div>
        </div>
    )
}