import React from 'react';  
import '../design/Profile.css';  
 
const Profile = () => {  

 
  return (  
    <div className="profile-page">  
      <div className="profile-header">  
        <img src="https://th.bing.com/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Profile Picture" className="profile-picture" />  
        <h1 className="profile-name">Harsh Agarwal</h1>  
        <p className="profile-bio">Associate</p>  
      </div>  
      <div className="profile-content">  
        <h2>Email-Id</h2>  
        <p>harsh.e.agarwal@pwc.com</p> 
      </div>  
    </div>  
  );  
};  
 
export default Profile;  