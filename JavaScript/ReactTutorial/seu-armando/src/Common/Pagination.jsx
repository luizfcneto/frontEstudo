import React from "react";

export default ( props ) => {
    return (
        <div className={ props.divClass } >
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="disabled">
                        <span>
                            <span aria-hidden="true">&laquo;</span>
                        </span>
                    </li>
                    
                    <li className="active">
                        <span>1 <span className="sr-only"></span></span>
                    </li>
                    
                    <li className="">
                        <span>2 <span className="sr-only"></span></span>
                    </li>

                    <li className="">
                        <span>3 <span className="sr-only"></span></span>
                    </li>

                    <li className="">
                        <span>4 <span className="sr-only"></span></span>
                    </li>

                    <li className="">
                        <span>5 <span className="sr-only"></span></span>
                    </li>

                    <li className="enable">
                        <span>
                            <span aria-hidden="true">&raquo;</span>
                        </span>
                    </li>

                </ul>
            </nav>
        </div>
    )
}