import React from "react";
import "./calendarioMes.css";

export default ( props ) => {

    return (
        <div className="calendarioMes"> 

            <div className="row">
                
                <div className="col-xs-offset-1 col-xs-1 iconDiv">
                    <span
                        className="glyphicon glyphicon-chevron-left icon"
                        aria-hidden="true"
                    />
                </div>

                <div className="col-xs-offset-1 col-xs-6 titleMonth">
                    <p> Janeiro - ANO </p>
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
                                <th> dom </th>
                                <th> seg </th>
                                <th> ter </th>
                                <th> quar </th>
                                <th> qui </th>
                                <th> sex </th>
                                <th> sab </th> 
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>  </td>
                                <td> 1 </td>
                                <td> 2 </td>
                                <td> 3 </td>
                                <td> 4 </td>
                                <td> 5 </td>
                                <td> 6 </td> 
                            </tr>

                            <tr>
                                <td> 7 </td>
                                <td> 8 </td>
                                <td> 9 </td>
                                <td> 10 </td>
                                <td> 11 </td>
                                <td> 12 </td>
                                <td> 13 </td> 
                            </tr>

                            <tr>
                                <td> 14 </td>
                                <td> 15 </td>
                                <td> 16 </td>
                                <td> 17 </td>
                                <td> 18 </td>
                                <td> 19 </td>
                                <td> 20 </td> 
                            </tr>

                            <tr>
                                <td> 21 </td>
                                <td> 22 </td>
                                <td> 23 </td>
                                <td> 24 </td>
                                <td> 25 </td>
                                <td> 26 </td>
                                <td> 27 </td> 
                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>

            

        </div>
    )
}