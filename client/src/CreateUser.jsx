import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function CreateUser() {
  const[name,setName] = useState()
  const[email,setEmail] = useState()
  const[age,setAge] = useState()
  const handler1 = e =>{
    setName(e.target.value)
  }
  const handler2 = e =>{
    setEmail(e.target.value)
  }
  const handler3 = e =>{
    setAge(e.target.value)
  }
  const navigate = useNavigate()
  const submitHandler = e =>{
    e.preventDefault();
    axios.post("http://localhost:3000/createUser",{name,email,age})
    .then(result =>{
      console.log(result)
      navigate('/')
      console.log("navigated successfully")
    }) 
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={submitHandler}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Name' className='form-control'
            onChange={handler1} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control'
            onChange={handler2} />
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" placeholder='Enter Age' className='form-control'
            onChange={handler3} />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default CreateUser
