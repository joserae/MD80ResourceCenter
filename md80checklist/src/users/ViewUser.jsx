import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const {id}=useParams()

    useEffect(()=>{
        console.log("%ccomponent was mounted at viewUser", "color: green");
        fetch(`http://localhost:8080/user/${id}`)
        .then(response => response.json())
        .then(data => {
            setUser(data)
        })
        .catch(error => console.error(error))
    },[])

    return(
    <div className='container'>
            <div className='row'>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">

                    <h2 className="text-center m-4">User Details</h2>
                    <div className="card">
                        <div className="card-header">
                            User #{user.id}:
                            <ul>
                                <li className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <b>Name:</b>
                                        {user.name}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Username:</b>
                                        {user.username}
                                    </li>
                                    <li className="list-group-item">
                                        <b>E-mail:</b>
                                        {user.email}
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Go back</Link>
                </div>
            </div>
    </div>
    );
}