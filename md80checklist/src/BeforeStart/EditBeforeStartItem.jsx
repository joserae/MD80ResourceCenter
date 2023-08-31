import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditBeforeStart() {

  let navigate= useNavigate()

  const {id}=useParams()

  const [beforeStart, setBeforeStart]=useState({
    item:"",
    state:""
  })

  const{item, state}=beforeStart

  const onInputChange=(e)=>{
    setBeforeStart({ ...beforeStart, [e.target.name]:e.target.value})
  }

    useEffect(()=>{
        console.log("%ccomponent was mounted", "color: green")
        fetch(`http://localhost:8080/beforeStart/${id}`)
        .then(response => response.json())
        .then(data => {
        console.log(data)
        setBeforeStart(data)
        })
    },[]);

  const onSubmit= async (e)=>{
    e.preventDefault()

    await axios.put(`http://localhost:8080/beforeStart/${id}`, beforeStart)

    navigate("/normalChecklist")
  }

  return (
    <div className='container'>
        <div className='row'>

            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2">

                <h2 className="text-center m-4">Edit item</h2>
                
                <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor='Item' className='form-label'>
                    Item
                    </label>
                    <input type={'text'} className="form-control" placeholder='Enter the item' name="item" defaultValue={beforeStart.item}  onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor='State' className='form-label'>
                    State
                    </label>
                    <input type={'text'} className="form-control" placeholder='Enter the state' name="state" defaultValue={beforeStart.state} onChange={onInputChange}/>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/normalChecklist">Go back</Link>
                </form>

            </div>

        </div>
    </div>
  )
}

//For future Jose. How this works:
//1.onChange tracks what is written, and we send it to onInputChange, which is a feature that lets you track every input.
//2.On onInputchange, we store the value inputted according to the name of the input. We store it on setBeforeStart, which is the hook
//3.setBeforeStart gives the info to beforeStart.
//4.When we press submit, we trigger the onSubmit variable, which fetches the api and sends the info to the database via post.
