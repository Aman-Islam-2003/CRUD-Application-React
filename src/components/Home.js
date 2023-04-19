import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    loadUsers();
  },[])

  const loadUsers=async ()=>{

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    //console.log(result);
    // const result=axios.get("https://localhost:3002/users")
    setUsers(result);

  }
  return (
    <div className='container'>
        <h2 className='py-4'>Home Page</h2>
        <table class="table">
  <thead class="thead-dark bg-dark text-white">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user)=>{
        return(
        <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link class="btn btn-primary me-2">View</Link>
          <Link class="btn btn-outline-primary me-2">Edit</Link>
          <Link class="btn btn-danger">Delete</Link>
        </td>
    </tr>
    )
    })
      }
  </tbody>
  </table> 
 </div>
  )
}

export default Home
