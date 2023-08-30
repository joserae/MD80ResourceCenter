import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

  let navigate= useNavigate()

  const [user, setUser]=useState({
    name:"",
    username:"",
    email:""
  })

  const{name, username, email}=user

  const onInputChange=(e)=>{
    setUser({ ...user, [e.target.name]:e.target.value})
  }

  const onSubmit= async (e)=>{
    e.preventDefault()

    await axios.post("http://localhost:8080/user", user)

    navigate("/")
  }

  return (
    <div className='container'>
        <div className='row'>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">

            <h2 className="text-center m-4">Create a User</h2>
            
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor='Name' className='"form-label'>
                  Name
                </label>
                <input type={'text'} className="form-control" placeholder='Enter your name' name="name"  onChange={onInputChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor='Username' className='"form-label'>
                  Username
                </label>
                <input type={'text'} className="form-control" placeholder='Enter your username' name="username" onChange={onInputChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor='Email' className='"form-label'>
                  E-mail
                </label>
                <input type={'email'} className="form-control" placeholder='Enter your e-mail address' name="email" onChange={onInputChange}/>
              </div>
              <button type='submit' className='btn btn-outline-primary'>Submit</button>
              <Link className='btn btn-outline-danger mx-2' to="/">Go back</Link>
            </form>

          </div>
        </div>
    </div>
  )
}
