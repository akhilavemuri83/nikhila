import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
      <nav>
        <NavLink 
        style={(nikhila) => {
          if(nikhila.isActive === true){
            return {
              backgroudColor:"purple",color:"white",textDecoration:"none"
          };
          }
        }} to="/Home">Home</NavLink>
        <NavLink 
        style={(obj) => {
          console.log(obj);
          if(obj.isActive === true){
            return {
              backgroudColor:"purple",color:"white",textDecoration:"none"
          };
          }
        }} to="/">Login</NavLink>
        <NavLink 
        style={(obj) => {
          if(obj.isActive === true){
            return{
              backgroundColor:"purple",
              color:"white",
              textDecoration:"none",
            };
          }
        }} to="/PageNotFound">PageNotFound</NavLink>
        <Link to="/">Logout</Link>
      </nav>
  )
}

export default TopNavigation
