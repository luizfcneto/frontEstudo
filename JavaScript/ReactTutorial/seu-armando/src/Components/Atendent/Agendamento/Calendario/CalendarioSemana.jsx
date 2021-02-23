import React from "react";
import "./calendarioSemana.css";

export default ( props ) => {

    const renderRows = ( ) => {
        
        let horas = [
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "13:00",
            "13:30",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
            "16:00",
            "16:30",
            "17:00",
            "17:30",
            "18:00",
            "18:30",
            "19:00",
            "19:30",
            "20:00",
            "20:30",
            "21:00",
            "21:30"
        ];

        return horas.map( ( element, idex ) => {
            return (
                <tr>
                    <td> { element } </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td>
                    <td>  </td> 
                </tr>
            )
        } );
    }

    return (
        <div className="calendarioSemana">
            
            <div className="row">
                <div className="col-xs-offset-1 col-xs-1 iconDiv">
                    <span
                        className="glyphicon glyphicon-chevron-left icon"
                        aria-hidden="true"
                    />
                </div>

                <div className="col-xs-offset-1 col-xs-6 titleMonth">
                    <p> 31/12 Janeiro 6/01 </p>

                </div>

                <div className="col-xs-offset-1 col-xs-1 iconDiv">                    
                    <span
                        className="glyphicon glyphicon-chevron-right icon"
                        aria-hidden="true"
                    />
                </div>
                
            </div>

            <div className="row">

                <div className="col-xs-12">
                    <table className="table">

                        <thead>
                            <tr>
                                <th> Horas </th>
                                <th> dom - 31/12 </th>
                                <th> seg - 1/01 </th>
                                <th> ter - 2/01 </th>
                                <th> qua - 3/01 </th>
                                <th> qui - 4/01 </th>
                                <th> sex - 5/01 </th>
                                <th> sab - 6/01 </th> 
                            </tr>
                        </thead>

                        <tbody>
                           { renderRows() }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    )
}