import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {

  let navigate= useNavigate()

  const {id}=useParams()

  const [user, setUser]=useState({
    name:"",
    username:"",
    email:""
  })

  const{name, username, email}=user

  const onInputChange=(e)=>{
    setUser({ ...user, [e.target.name]:e.target.value})
  }

  useEffect(()=>{
    console.log("%ccomponent was mounted", "color: green")
    fetch(`http://localhost:8080/user/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUser(data)
    })

  },[]);

  const onSubmit= async (e)=>{
    e.preventDefault()

    await axios.put(`http://localhost:8080/user/${id}`, user)

    navigate("/")
  }


  return (
    <div className='container'>
        <div className='row'>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">

            <h2 className="text-center m-4">Edit a User</h2>
            
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor='Name' className='"form-label'>
                  Name
                </label>
                {/* check how to do this: */}
                <input type={'text'} className="form-control" placeholder='Enter your name' name="name" defaultValue={user.name} onChange={onInputChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor='Username' className='"form-label'>
                  Username
                </label>
                <input type={'text'} className="form-control" placeholder='Enter your username' name="username" defaultValue={user.username} onChange={onInputChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor='Email' className='"form-label'>
                  E-mail
                </label>
                <input type={'email'} className="form-control" placeholder='Enter your e-mail address' name="email" defaultValue={user.email} onChange={onInputChange}/>
              </div>
              <button type='submit' className='btn btn-outline-primary'>Submit</button>
              <Link className='btn btn-outline-danger mx-2' to="/">Go back</Link>
            </form>

          </div>
        </div>
    </div>
  )
}
