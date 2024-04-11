import React, { useState } from 'react';
import '../design/Login.css';
 
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'
 
const LoginSignup = () => {
 
  const [action,setAction] = useState("Sign Up");
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");

  const nameChange=(e)=>{
    console.log(e.target.value);
    setusername(e.target.value);
  }
  const passChange=(e)=>{
    console.log(e.target.value);
    setpassword(e.target.val);
  }
  const loginhandleClick=(e)=>{
    console.log(username);
    console.log(password);
  }

  const signuphandleclick=(e)=>{
    console.log(username);
    console.log(password);
  }
 
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          {/* <img src alt="" /> */}
          <input type="email" placeholder='Username' value={username} onChange={nameChange}/>
        </div>
 
        <div className="input">
          {/* <img src alt="" /> */}
          <input type="password" placeholder='Password' value={password} onChange={passChange}/>
        </div>
 
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here! </span></div>}
        
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={loginhandleClick}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={signuphandleclick}>Login</div>
      </div>
    </div>
  )
}
 
export default LoginSignup