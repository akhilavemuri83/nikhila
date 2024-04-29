import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNavigation from './TopNavigation'

function Login() {

  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let msgInputRef = useRef();
  let navigate = useNavigate();

  let onLoginBtnClick = () =>{

  if(emailInputRef.current.value=="nikhila@gmail.com"  && passwordInputRef.current.value=="Nikhila@516"){
    navigate('/home',{state:{msg:msgInputRef.current.value } });
  }else{
    alert("invalid");
  }

  }
  return (
    <div>
      
      <form>
        <h2 style={{
          color:"purple",
          textShadow:"5px 5px 5px purple",
          backgroundColor:"White",
          borderRadius:"25px"
        }}>Login</h2>
        <div>
            <label>Email</label>
            <input ref={emailInputRef}></input>
        </div>
        <div>
            <label>Password</label>
            <input ref={passwordInputRef}></input>
        </div>
        <div>
            <label>Message</label>
            <input ref={msgInputRef}></input>
        </div>
        <div>
            {<button to="/Home" onClick={()=>{
              onLoginBtnClick()
            }}>Login</button>}
        </div>
      </form>
      <br></br>
      {<Link to="/Signup">Signup</Link>}
    </div>
  )
}

export default Login
