import React from "react";
import jsonData from "../data/aircraftLimitations.json"

export default function Limitations(){


    //REMEMBER!! YOU ONLY DO MAPS TO ARRAYS, NOT OBJECTS!!!!

    const tableOfContentsData = [
        { id: jsonData.altitude.id, name: jsonData.altitude.name, items: jsonData.altitude.items },
        { id: jsonData.windComponent.id, name: jsonData.windComponent.name, items: jsonData.windComponent.items },
        { id: jsonData.speeds.id, name: jsonData.speeds.name, items: jsonData.speeds.items, warnings: jsonData.speeds.warnings },
        { id: jsonData.flaps.id, name: jsonData.flaps.name, items: jsonData.flaps.items, warnings: jsonData.flaps.warnings },
        { id: jsonData.fuel.id, name: jsonData.fuel.name, items: jsonData.fuel.items },
        { id: jsonData.weights.id, name: jsonData.weights.name, items: jsonData.weights.items },
        { id: jsonData.electric.id, name: jsonData.electric.name, items: jsonData.electric.items, warnings: jsonData.electric.warnings },
        { id: jsonData.engine.id, name: jsonData.engine.name, items: jsonData.engine.items, warnings: jsonData.engine.warnings },
        { id: jsonData.apu.id, name: jsonData.apu.name, items: jsonData.apu.items, warnings: jsonData.apu.warnings },
        { id: jsonData.antiIce.id, name: jsonData.antiIce.name, items: jsonData.antiIce.items, warnings: jsonData.antiIce.warnings },
        { id: jsonData.miscelaneous.id, name: jsonData.miscelaneous.name, items: jsonData.miscelaneous.items, warnings: jsonData.miscelaneous.warnings }
      ];
      console.log("this is your console log: " + tableOfContentsData[0].items[3])

    return(
        <div className="container">
            <h1>Aircraft Limitations</h1>
            <div className="row g-5">
                <div className="col-md-4">
                    <div className="position-sticky">
                        <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">Table of contents</h2>
                        <div className="list-group">
                            {tableOfContentsData.map((item)=>(
                                <a key={item.id} className="list-group-item list-group-item-action" href={`#${item.id}`}>{item.name}</a>
                            ))}
                        </div>
                    </div>  
                </div>

                <div className="col-md-8">
                    {tableOfContentsData.map((section, index)=>{
                        return(
                            <div key={index} id={`${section.id}`} className="bd-example-snippet bd-code-snippet">
                                    <div className="bd-example m-0 border-0">
                                        <h2>{section.name}</h2>
                                        <table className="table border shadow">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Item</th>
                                                    <th scope="col">Limitation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {section.items.map((item, index) => (
                                                    <tr key={index}>
                                                    <td scope="row">{item[0]}</td>
                                                    <td>{item[1]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <section>
                                            {section.warnings && Array.isArray(section.warnings) && section.warnings.map((item, index) => (
                                                <ul key={index}>
                                                <li className="text-danger">WARNING: {item}</li>
                                                </ul>
                                            ))}
                                        </section>

                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
        
        
    )
};