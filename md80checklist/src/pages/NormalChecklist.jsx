import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function NormalChecklist(){

    const [beforeStart, setBeforeStart] = useState([]);

    const {id} = useParams()

    useEffect(()=>{
        console.log("%ccomponent was mounted.","color:green");
        fetch("http://localhost:8080/beforeStartItems")
        .then(response=>response.json())
        .then(data => setBeforeStart(data))
    },[]);

    // beforeStart.map((index =>{
    //     console.log(index.item + index.state)
    ////for future Jose: I found an anomaly that made me spend a couple of hours finding out why it didn't work. Turns out you don't need a return keyword here,
    ////but you do need a return keyword on the html.
    // }))

    const deleteItem = async (id) =>{
        await axios.delete(`http://localhost:8080/beforeStart/${id}`)
        console.log("%ccomponent was re-mounted.","color:yellow");
        fetch("http://localhost:8080/beforeStartItems")
        .then(response=>response.json())
        .then(data => setBeforeStart(data))
    }

    return(
        <div>
            <div>
                <h1>Normal Procedures</h1>
                <p>You can download the checklist on pdf format <a href="https://mega.nz/file/PEAlGRjQ#H0VzJFhu2qoi-R8YqONKj6FjcZkzGkdyj_8SaXV59fI" target="_blank" rel="noreferrer">here</a>.</p>
            </div>
            <div className="container">
                <div className="py-4">
                    <h2>Cold and Dark</h2>
                    <Link className='btn btn-outline-success' to="/addItem">Add item</Link>
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">State</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {beforeStart.map((item)=>{
                                return(
                                <tr>
                                    <td scope="row" key={item.id}>{item.item}</td>
                                    <td>{item.state}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-2" to={`/editItem/${item.id}`}>edit</Link>
                                        <button className="btn btn-danger mx-2" onClick={()=>deleteItem(item.id)}>Delete</button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    )
};