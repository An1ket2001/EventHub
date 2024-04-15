import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
//import CarouselComponent from './components/CarouselComponent';
import Events from './components/Events';
import Addform from './components/Addform';
import LoginSignup from './components/LoginSignup';
import {useAuth} from './components/AuthHook';
import { AuthContext } from './shared/AuthContext';
import Profile from "./components/Profile";
import EventBar from './components/EventBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  
  const {token,isLoggedIn,isUserHr,loginfunc,logout} =useAuth();
return (
  <>
  <AuthContext.Provider value={{token,isLoggedIn:isLoggedIn,isUserHr:isUserHr,login:loginfunc,logout:logout}}>
      <Router>
        
          <Navbar/>

        
        <div className="container">
          <Routes>
            
            <Route exact path="/" element={<Events />}>
            </Route>
            <Route exact path="/add" element={<Addform />}>
            </Route>
            <Route exact path="/login" element={<LoginSignup />}>
            </Route>
            <Route exact path="/profile" element={<Profile />}>
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </Router>
      </AuthContext.Provider>
    </>
  )
}

export default App