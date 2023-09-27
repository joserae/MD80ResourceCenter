import React from "react";
import md80Image from "./MD80-front.png";

export default function Home(){

    return(
        <div className="container-fluid">
                <h1>Welcome to the MD-80 Resource Center!</h1>
                <img src={md80Image} className="img-fluid" alt="MD-80"></img>
                <div className="row">
                    <h3>On the navigation bar, you will be able to see all options available.</h3>
                    <p><a href="http://www.avjk5022.com/avjk5022/public/media/docs/t%C3%A9cnico/200902/Mcdonnell_Md80_Flight_Manual.pdf" target="_blank" rel="noreferrer">MD 80 Flight Manual in PDF</a></p>
                </div>
                <div className="p-5 text-center bg-body-tertiary">
                    <h2>Plan your flight:</h2>
                    <div className="row xl-3 text-center">
                        <div className="col-sm-4 themed-grid-col">
                            <h4>Current weather and forecast on airports and enroute:</h4>
                            <ul>
                                <li><a href="https://www.allmetsat.com/" target="_blank" rel="noreferrer">Allmetsat</a></li>
                                <li><a href="http://meteorologia.aerocivil.gov.co/wxwatch/table?list_id=1" target="_blank" rel="noreferrer">Aerocivil METAR</a></li>
                                <li><a href="http://meteorologia.aerocivil.gov.co/satellite_image" target="_blank" rel="noreferrer">Aerocivil Satellite</a></li>
                                <li><a href="https://www.aviationweather.gov/progchart/high?region=a" target="_blank" rel="noreferrer">Noaa Progressive charts</a></li>
                                <li><a href="https://www.windy.com/-Clouds-clouds?clouds,6.253,-75.565,5" target="_blank" rel="noreferrer">Windy.com</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 themed-grid-col">
                            <h4>NOTAMS:</h4>
                            <li><a href="https://www.aerocivil.gov.co/servicios-a-la-navegacion/servicio-de-informacion-aeronautica-ais/Documents/Charlie2.pdf" target="_blank" rel="noreferrer">NOTAMS Type C</a></li>
                        </div>
                        <div className="col-sm-4 themed-grid-col">
                            <h4>Navigation and Operational Flight Plan:</h4>
                            <ul>
                                <li><a href="https://www.aerocivil.gov.co/servicios-a-la-navegacion/servicio-de-informacion-aeronautica-ais/aip" target="_blank" rel="noreferrer">Colombian AIP</a></li>
                                <li><a href="https://skyvector.com/?layers_on=jeta" target="_blank" rel="noreferrer">SkyVector</a></li>
                                <li><a href="https://www.simbrief.com/home/" target="_blank" rel="noreferrer">SimBrief by Navigraph</a></li>
                                <li><a href="https://fpl.ivao.aero/" target="_blank" rel="noreferrer">IVAO Flight Plan upload</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            
        </div>
    )

};