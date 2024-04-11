// import React, { useState } from 'react';  
// import '../design/Login.css';  
  
// const LoginSignup = () => {  
//   const [action, setAction] = useState("Sign Up");  
//   const [username, setUsername] = useState("");  
//   const [email, setEmail] = useState("");  
//   const [password, setPassword] = useState("");  
//   const [confirmPassword, setConfirmPassword] = useState("");  
//   const [designation, setDesignation] = useState("HR");  
//   const [errors, setErrors] = useState({});  
  
//   const handleActionChange = (newAction) => {  
//     setAction(newAction);  
//     setErrors({});  
//   };  
  
//   const handleUsernameChange = (e) => {  
//     setUsername(e.target.value);  
//   };  
  
//   const handleEmailChange = (e) => {  
//     setEmail(e.target.value);  
//   };  
  
//   const handlePasswordChange = (e) => {  
//     setPassword(e.target.value);  
//   };  
  
//   const handleConfirmPasswordChange = (e) => {  
//     setConfirmPassword(e.target.value);  
//   };  
  
//   const handleDesignationChange = (e) => {  
//     setDesignation(e.target.value);  
//   };  
  
//   const handleSubmit = (e) => {  
//     e.preventDefault();  
//     const validationErrors = {};  
  
//     if (action === "Login") {  
//       if (!username) {  
//         validationErrors.username = "Username is required";  
//       }  
//       if (!password) {  
//         validationErrors.password = "Password is required";  
//       }  
//     } else {  
//       if (!username) {  
//         validationErrors.username = "Username is required";  
//       }  
//       if (!email) {  
//         validationErrors.email = "Email is required";  
//       } else if (!/\S+@\S+\.\S+/.test(email)) {  
//         validationErrors.email = "Invalid email format";  
//       }  
//       if (!password) {  
//         validationErrors.password = "Password is required";  
//       } else if (password.length < 6) {  
//         validationErrors.password = "Password should be at least 6 characters long";  
//       }  
//       if (!confirmPassword) {  
//         validationErrors.confirmPassword = "Confirm Password is required";  
//       } else if (confirmPassword !== password) {  
//         validationErrors.confirmPassword = "Passwords do not match";  
//       }  
//     }  
  
//     if (Object.keys(validationErrors).length === 0) {  
//       if (action === "Login") {  
//         console.log("Login");  
//         console.log(username);  
//         console.log(password);  
//       } else {  
//         console.log("Sign Up");  
//         console.log(username);  
//         console.log(email);  
//         console.log(password);  
//         console.log(confirmPassword);  
//         console.log(designation);  
//       }  
//       setErrors({});  
//     } else {  
//       setErrors(validationErrors);  
//     }  
//   };  
  
//   return (  
//     <div className='container'>  
//       <div className="header">  
//         <div className="text">{action}</div>  
//         <div className="underline"></div>  
//       </div>  
//       <div className="inputs">  
//         <div className="input">  
//           <input type="text" placeholder='Username' value={username} onChange={handleUsernameChange} />  
//           {errors.username && <span className="error">{errors.username}</span>}  
//         </div>  
  
//         {action === "Sign Up" && (  
//           <div className="input">  
//             <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} />  
//             {errors.email && <span className="error">{errors.email}</span>}  
//           </div>  
//         )}  
  
//         <div className="input">  
//           <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />  
//           {errors.password && <span className="error">{errors.password}</span>}  
//         </div>  
  
//         {action === "Sign Up" && (  
//           <div className="input">  
//             <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={handleConfirmPasswordChange} />  
//             {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}  
//           </div>  
//         )}  
  
//         {action === "Sign Up" && (  
//           <div className="input">  
//             <select value={designation} onChange={handleDesignationChange}>  
//               <option value="HR">HR</option>  
//               <option value="Normal User">Normal User</option>  
//             </select>  
//           </div>  
//         )}  
//       </div>  
  
//       {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password?<span>Click Here! </span></div>}  
  
//       <div className="submit-container">  
//         <button className="submit" onClick={handleSubmit}>{action}</button>  
//         <button className="submit gray" onClick={() => handleActionChange(action === "Login" ? "Sign Up" : "Login")}>  
//           {action === "Login" ? "Sign Up" : "Login"}  
//         </button>  
//       </div>  
//     </div>  
//   )  
// }  
  
// export default LoginSignup;  


import React, { useState } from 'react';  
import '../design/Login.css';  
  
const LoginSignup = () => {  
  const [action, setAction] = useState("Sign Up");  
  const [username, setUsername] = useState("");  
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const [confirmPassword, setConfirmPassword] = useState("");  
  const [designation, setDesignation] = useState("HR");  
  const [errors, setErrors] = useState({});  
  
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
      if (!username) {  
        validationErrors.username = "Username is required";  
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
        console.log("Login");  
        console.log(username);  
        console.log(password);  
      } else {  
        console.log("Sign Up");  
        console.log(username);  
        console.log(email);  
        console.log(password);  
        console.log(confirmPassword);  
        console.log(designation);  
      }  
      setErrors({});  
    } else {  
      setErrors(validationErrors);  
    }  
  };  
  
  return (  
    <div className='container'>  
      <div className="header">  
        <div className="text">{action}</div>  
        <div className="underline"></div>  
      </div>  
      <div className="inputs">  
        <div className="input">  
          <input type="text" placeholder='Username' value={username} onChange={handleUsernameChange} />  
          {errors.username && <span className="error">{errors.username}</span>}  
        </div>  
  
        {action === "Sign Up" && (  
          <div className="input">  
            <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} />  
            {errors.email && <span className="error">{errors.email}</span>}  
          </div>  
        )}  
  
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
              <option value="HR">HR</option>  
              <option value="Normal User">Normal User</option>  
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
