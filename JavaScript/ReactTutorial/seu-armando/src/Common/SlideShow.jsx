import React from "react";
import "./slideshow.css";

//Para slideshow fotos recomendadas: formato jpg
import imagem01 from "../img/slide-show-imgs/slide-2.jpg";
import imagem02 from "../img/slide-show-imgs/slide-3.jpg";

export default ( props ) => {

    return ( 
        <div className="slideshow">
            {/* <h3> Slide Show </h3> */}
            <div className="container-fluid">
                <div className="slide carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    
                    <div className="carousel-inner">
                        <div className="item active">
                            <img className="img-slide" src={ imagem01 } alt="Imagem 1" />
                            <div className="carousel-caption">
                                <h3>Imagem 01 Ativada no bgl</h3>
                                <p> Varias promoções não perca </p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="img-slide" src={ imagem02 } alt="Imagem 2" />
                            <div className="carousel-caption">
                                <h3>titulo relacionado a imagem 2</h3>
                                <p>texto relacionado a imagem 2</p>
                            </div>
                        </div>

                        <div className="item">
                            <img className="img-slide" src={ imagem01 } alt="imagem 3" />
                            <div className="carousel-caption">
                                <h3>titulo relacionado a imagem 3</h3>
                                <p>Texto relacionado a imagem 3</p>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>

                        <a className="right carousel-control" href="#" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                
                </div>

                <div className="slide-fotos">
                    <div className="row">
                        
                        
                        <div className="col-xs-3">
                            <img className="img-list" src={ imagem02 } alt="imagem2" />    
                        </div>

                        <div className="col-xs-3">
                            <img className="img-list" src={ imagem01 } alt="imagem2" />    
                        </div>

                        <div className="col-xs-3">
                            <img className="img-list" src={ imagem02 } alt="imagem2" />    
                        </div>

                        <div className="col-xs-3">
                            <img className="img-list" src={ imagem01 } alt="imagem2" />    
                            
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}



// <div id="myCarousel" className="carousel slide" data-ride="carousel">
            
//     <!-- Indicators -->
//     

//     <!-- Wrapper for slides -->
    

//     <!-- Left and right controls -->
//     <a className="left carousel-control" href="#myCarousel" data-slide="prev">
//         <span className="glyphicon glyphicon-chevron-left"></span>
//         <span className="sr-only">Previous</span>
//     </a>
//     <a className="right carousel-control" href="#myCarousel" data-slide="next">
//         <span className="glyphicon glyphicon-chevron-right"></span>
//         <span className="sr-only">Next</span>
//     </a>
// </div> 