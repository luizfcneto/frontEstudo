import React from "react";

import TitleH2 from "../../../../Common/TitleH2";
import Thumbnail from "../../../../Common/Thumbnail"; 


// Importando imagens para exemplificar produtos:
import produto1 from "../../../../img/fake-imgs/tattoo1.jpg";
import produto2 from "../../../../img/fake-imgs/tattoo2.jpg";
import produto3 from "../../../../img/fake-imgs/tattoo3.jpg";
import produto4 from "../../../../img/fake-imgs/tattoo4.jpg";
import produto5 from "../../../../img/fake-imgs/tattoo5.jpg";
import produto6 from "../../../../img/fake-imgs/tattoo6.jpg";
import produto7 from "../../../../img/fake-imgs/tattoo7.jpg";
import produto8 from "../../../../img/fake-imgs/tattoo8.jpg";
import produto9 from "../../../../img/fake-imgs/tattoo9.jpg";
import Pagination from "../../../../Common/Pagination";


export default ( props ) => {

    return (
        <div className={ props.divClass }>

            <div className="row">
                <TitleH2 
                    titleClass="titleClass"
                    title="Cards de Produtos:"
                />
            </div>
            
            <div className="row">
                <div className="col-xs-4">
                    <Thumbnail
                        imgSrc={ produto1 }
                        imgAlt="Imagem do Produto 1"
                        type="produto"
                        thumbnailTitle="Produto 1"
                        thumbnailDescription="Descrição do Produto 1"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail
                        imgSrc={ produto2 }
                        imgAlt="Imagem do Produto 2"
                        type="produto"
                        thumbnailTitle="Produto 2"
                        thumbnailDescription="Descrição do Produto 2"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail
                        imgSrc={ produto3 }
                        imgAlt="Imagem do Produto 3"
                        type="produto"
                        thumbnailTitle="Produto 3"
                        thumbnailDescription="Descrição do Produto 3"
                    />
                </div>

            </div>


            <div className="row">
                <div className="col-xs-4">
                    <Thumbnail
                        imgSrc={ produto4 }
                        imgAlt="Imagem do Produto 4"
                        type="produto"
                        thumbnailTitle="Produto 4"
                        thumbnailDescription="Descrição do Produto 4"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail
                        imgSrc={ produto5 }
                        imgAlt="Imagem do Produto 5"
                        type="produto"
                        thumbnailTitle="Produto 5"
                        thumbnailDescription="Descrição do Produto 5"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail
                        imgSrc={ produto6 }
                        imgAlt="Imagem do Produto 6"
                        type="produto"
                        thumbnailTitle="Produto 6"
                        thumbnailDescription="Descrição do Produto 6"
                    />
                </div>
            </div>

                
            <div className="row">
                <div className="col-xs-4">
                    <Thumbnail
                        imgSrc={ produto7 }
                        imgAlt="Imagem do Produto 7"
                        type="produto"
                        thumbnailTitle="Produto 7"
                        thumbnailDescription="Descrição do Produto 7"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail

                        imgSrc={ produto8 }
                        imgAlt="Imagem do Produto 8"
                        type="produto"
                        thumbnailTitle="Produto 8"
                        thumbnailDescription="Descrição do Produto 8"
                    />
                </div>

                <div className="col-xs-4">
                    <Thumbnail
                        imgSrc={ produto9 }
                        imgAlt="Imagem do Produto 9"
                        type="produto"
                        thumbnailTitle="Produto 9"
                        thumbnailDescription="Descrição do Produto 9"
                    />
                </div>

            </div>

            <div className="row">
                <Pagination
                    divClass="col-xs-offset-4 col-xs-4 col-xs-offset-4 middle"

                />

            </div>

        </div>
    )
}