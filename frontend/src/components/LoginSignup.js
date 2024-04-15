import React, { useState,useEffect, useContext } from 'react';  
import '../design/Login.css';  
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../shared/AuthContext";
  
const LoginSignup = () => {  
  const auth=useContext(AuthContext);
  const navigate=useNavigate();
  const [action, setAction] = useState("Sign Up");  
  const [username, setUsername] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  
  const [designation, setDesignation] = useState("");  
  const [errors, setErrors] = useState({});  
  const [designationList,setDesignationList]=useState([]);
  
  const handleActionChange = (newAction) => {  
    setAction(newAction);  
    setErrors({});  
  };  
  
  const handleUsernameChange = (e) => {  
    setUsername(e.target.value);  
  };  
  
  const handleEmailChange = (e) => {  
    setEmail(e.target.value);  
  };  
  
  const handlePasswordChange = (e) => {  
    setPassword(e.target.value);  
  };  
  
  const handleConfirmPasswordChange = (e) => {  
    setConfirmPassword(e.target.value);  
  };  
  
  const handleDesignationChange = (e) => {  
    setDesignation(e.target.value);  
  };  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    const validationErrors = {};  
  
    if (action === "Login") {  
      if (!email) {  
        validationErrors.username = "Email is required";  
      }  
      if (!password) {  
        validationErrors.password = "Password is required";  
      } else if (password.length < 6) {  
        validationErrors.password = "Password should be at least 6 characters long";  
      }  
    } else {  
      if (!username) {  
        validationErrors.username = "Username is required";  
      }  
      if (!email) {  
        validationErrors.email = "Email is required";  
      } else if (!/\S+@\S+\.\S+/.test(email)) {  
        validationErrors.email = "Invalid email format";  
      }  
      if (!password) {  
        validationErrors.password = "Password is required";  
      } else if (password.length < 6) {  
        validationErrors.password = "Password should be at least 6 characters long";  
      }  
      if (!confirmPassword) {  
        validationErrors.confirmPassword = "Confirm Password is required";  
      } else if (confirmPassword !== password) {  
        validationErrors.confirmPassword = "Passwords do not match";  
      }  
    }  
  
    if (Object.keys(validationErrors).length === 0) {  
      if (action === "Login") {   
        AuthApi("login",{email,password})
      } else {  
        AuthApi("createuser",{"name":username,email,password,"designationId":designation}) 
      }  
      setErrors({});  
    } else {  
      setErrors(validationErrors);  
    }  
  };  

  const AuthApi=async(endpoint,data)=>{
    const res= await fetch(`http://localhost:5000/api/auth/${endpoint}`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    const userData=await res.json();
    localStorage.setItem("user",JSON.stringify(userData));
    auth.login();
    navigate("/");
  }

  useEffect(()=>{
    const fetchDesignation=async()=>{
      const res = await fetch("http://localhost:5000/api/auth/getdesg");
      const desgData = await res.json();
      setDesignationList(desgData);
    }
    fetchDesignation();
  },[])
  
  return (  
    <div className='container'>  
      <div className="header">  
        <div className="text">{action}</div>  
        <div className="underline"></div>  
      </div>  
      <div className="inputs">  
      {action === "Sign Up" && ( <div className="input">  
          <input type="text" placeholder='Username' value={username} onChange={handleUsernameChange} />  
          {errors.username && <span className="error">{errors.username}</span>}  
        </div>  
      )}
         
          <div className="input">  
            <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} />  
            {errors.email && <span className="error">{errors.email}</span>}  
          </div>  
          
  
        <div className="input">  
          <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />  
          {errors.password && <span className="error">{errors.password}</span>}  
        </div>  
  
        {action === "Sign Up" && (  
          <div className="input">  
            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} />  
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}  
          </div>  
        )}  
  
        {action === "Sign Up" && (  
          <div className="input">  
            <select value={designation} onChange={handleDesignationChange}>  
            {
              designationList.map((desg)=>{
                return <option key={desg._id} value={desg._id}>{desg.designation}</option>  
              })
            }
            </select>  
          </div>  
        )}  
      </div>  
  
      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password?<span>Click Here! </span></div>}  
  
      <div className="submit-container">  
        <button className="submit" onClick={handleSubmit}>{action}</button>  
        <button className="submit gray" onClick={() => handleActionChange(action === "Login" ? "Sign Up" : "Login")}>  
          {action === "Login" ? "Sign Up" : "Login"}  
        </button>  
      </div>  
    </div>  
  )  
}  
  
export default LoginSignup;  
