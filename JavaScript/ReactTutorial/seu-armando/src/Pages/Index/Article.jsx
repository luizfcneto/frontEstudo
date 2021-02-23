import React from "react";
import "./article.css";

// Importando imagem:
// const image1 = require( "../../img/fake-imgs/tattoo1.jpg" ) ES05
import imagem1 from "../../img/fake-imgs/tattoo1.jpg"; 
import imagem2 from "../../img/fake-imgs/tattoo2.jpg";
import imagem3 from "../../img/fake-imgs/tattoo3.jpg";
import imagem4 from "../../img/fake-imgs/tattoo4.jpg"; 
import imagem5 from "../../img/fake-imgs/tattoo5.jpg";
import imagem6 from "../../img/fake-imgs/tattoo6.jpg";
import imagem7 from "../../img/fake-imgs/tattoo7.jpg"; 
import imagem8 from "../../img/fake-imgs/tattoo8.jpg";
import imagem9 from "../../img/fake-imgs/tattoo9.jpg";

import Thumbnail from "../../Common/Thumbnail";



export default ( props ) => {
    return (
        <div className={ props.divClass }>
            {/* <h3> Article Area </h3> */}
            
            <div className="row">
                <div className="col-xs-4">
                    <Thumbnail 
                        imgSrc={ imagem1 }
                        imgAlt="Tattoo 1"  
                        thumbnailTitle="Tatuagem 1"
                        thumbnailDescription="Descrição tatuagem 1"
                    />

                </div>
                
                <div className="col-xs-4">
                    <Thumbnail 
                        imgSrc={ imagem2 }
                        imgAlt="Tattoo 2"
                        thumbnailTitle="Tatuagem 2"
                        thumbnailDescription="Descrição tatuagem 2"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail 
                        imgSrc={ imagem3 }
                        imgAlt="Tattoo 3"
                        thumbnailTitle="Tatuagem 3"
                        thumbnailDescription="Descrição tatuagem 3"
                    />
                </div>

            </div>

            <div className="row">
                <div className="col-xs-4">
                    <Thumbnail 
                        imgSrc={ imagem9 }
                        imgAlt="Tattoo 9"
                        thumbnailTitle="Tatuagem 9"
                        thumbnailDescription="Descrição tatuagem 9"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail 
                        imgSrc={ imagem6 }
                        imgAlt="Tattoo 6"
                        thumbnailTitle="Tatuagem 6"
                        thumbnailDescription="Descrição tatuagem 6"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail 
                        imgSrc={ imagem7 }
                        imgAlt="Tattoo 7"
                        thumbnailTitle="Tatuagem 7"
                        thumbnailDescription="Descrição tatuagem 7"
                    />
                </div>

            </div>

        </div>
    )
}