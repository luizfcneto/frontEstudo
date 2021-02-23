import React from "react";
import "./aside.css";

//https://loremipsum.io/21-of-the-best-placeholder-image-generators/

import Thumbnail from "../../Common/Thumbnail";

export default ( props ) => {
    return (
        <div className={ props.divClass }>
            {/* <h3> Aside Area </h3> */}

            <Thumbnail 
                imgSrc="https://ipsumimage.appspot.com/640x360"
                imgAlt="Propaganda"
            /> 

            <Thumbnail
                imgSrc="https://ipsumimage.appspot.com/640x360"
                imgAlt="Propaganda"
            /> 

            <Thumbnail 
                imgSrc="https://ipsumimage.appspot.com/640x360"
                imgAlt="Propaganda"
            /> 
        </div>
    )
}