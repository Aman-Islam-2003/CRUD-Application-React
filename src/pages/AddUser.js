import React, { useState } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';

const AddUser = () => {
    const navigate = useNavigate()

 const [user,setUser]=useState({
    name:'',
    username:'',
    email:'',
    phone_num:''
 });

 const onInputChange=(event)=>{
    console.log(event.target.value);
    setUser({...user,[event.target.name]:event.target.value})
 }

 const onSubmit = async (event)=>{
    event.preventDefault();
    await axios.post("https://jsonplaceholder.typicode.com/users", user);

    navigate('/');
 }
 const {name,username,email,phone_num}=user;
  return (
    <div>
     <form onSubmit={event=>{
       onSubmit(event);
     }}>
  <div className="form-group row mt-4">
    <label for="inputEmail3" className="col-sm-2 col-form-label ms-3">Name</label>
    <div className="col-sm-7">
      <input type="text" className="form-control" value={name} name="name" placeholder="Enter your Name" onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label for="inputPassword3" className="col-sm-2 col-form-label ms-3">UserName</label>
    <div className="col-sm-7">
      <input type="text" className="form-control" value={username} name="username" placeholder="Enter UserName" onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label for="inputPassword3" className="col-sm-2 col-form-label ms-3">Email</label>
    <div className="col-sm-7">
      <input type="email" className="form-control" value={email} name="email"  placeholder="Enter Email" onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  <div className="form-group row mt-4">
    <label for="inputPassword3" className="col-sm-2 col-form-label ms-3">PhoneNumber</label>
    <div className="col-sm-7">
      <input type="text" className="form-control"  name="phone_num"  value={phone_num} placeholder="Enter Phone Number" onChange={e=>onInputChange(e)}/>
    </div>
  </div>
  
    <button className='btn btn-primary col-sm-5 mt-5 ms-5 d-flex justify-content-center align-items-center'>Add User</button>
</form>
    </div>
  )
}

export default AddUser
