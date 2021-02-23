import React from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";

import "./minhasFotos.css"

export default ( props ) => {
    return ( 
        <div className="all">
            <Header />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-xs-offset-1 col-xs-10 background">
                        <h3> Minhas Fotos: </h3>
                        
                        <div className="row">
                            <div className="col-xs-4">
                                <iframe 
                                    className="iframe-0"
                                    id="frame"
                                    src="https://www.instagram.com/p/BbXI1GclRb8/embed" 
                                    frameborder="0"
                                   >

                                </iframe>
                            </div>


                            <div className="col-xs-4">
                                <iframe 
                                    id="frame"
                                    className="iframe-1"
                                    src="https://www.instagram.com/p/B45KccMFAx0/embed" 
                                    frameborder="0">

                                </iframe>
                            </div>


                            <div className="col-xs-4">
                                <iframe 
                                    id="frame" 
                                    className="iframe-1"
                                    src="https://www.instagram.com/p/B45KccMFAx0/embed" 
                                    frameborder="0">

                                </iframe>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-xs-4">
                                <iframe 
                                    id="frame" 
                                    className="iframe-0"
                                    src="https://www.instagram.com/p/BbXI1GclRb8/embed" 
                                    frameborder="0">

                                </iframe>
                            </div>


                            <div className="col-xs-4">
                                <iframe 
                                    id="frame"
                                    className="iframe-1" 
                                    src="https://www.instagram.com/p/B45KccMFAx0/embed" 
                                    frameborder="0">

                                </iframe>
                            </div>


                            <div className="col-xs-4">
                                <iframe 
                                    id="frame" 
                                    className="iframe-1"
                                    src="https://www.instagram.com/p/B45KccMFAx0/embed" 
                                    frameborder="0">

                                </iframe>
                            </div>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        
            <Footer />
        </div>
    )
}