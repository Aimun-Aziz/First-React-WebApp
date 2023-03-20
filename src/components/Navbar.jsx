import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div style={{height:"80px",background:"#212e52", padding:"25px", border:"2px solid black", display:"flex", justifyContent:"center", justifyContent:"space-evenly"}} >
    
      <Link to={"/"}>Home</Link>
      <br/>

      <Link to={"/ContactUs"}>ContactUs</Link>
      <br/>

      <Link to={"/Counter"}>Counter</Link>
      <br />

      <Link to={"/Calculator"}>Result</Link>
      <br />

      <Link to={"/Employee List"}>ListingEmployees</Link>
      <br/>

      <Link to={"/Message"}>Listing Message 10 times</Link>

      <Link to={"/Geolocation"}> Geolocation</Link>

      <Link to={"/ToDoList"}>ToDoList </Link>

      <Link to ={"/Categories"}>Categories</Link>
      
      <Link to ={"/Brands"}>Brands</Link>

      <Link to ={"/PopularToday"}>PopularToday</Link>



     
      {/* <div>
        Counter: {props.counter} <br/>
        Name: {props.sendName}
      </div> */}
    
    </div>
  )
}
