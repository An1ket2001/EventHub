import Helpline from "./Helpline";
import "../design/Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect,useContext, useState } from "react";
import { FaBars } from 'react-icons/fa'; 
import { FaTimes } from "react-icons/fa";
import { AuthContext } from "../shared/AuthContext";

const Navbar = () => {
    const auth = useContext(AuthContext);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <i className="fa fa-code">Event-Hub</i>
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        {auth.isLoggedIn && auth.isUserHr && <li className="nav-item">
                            <NavLink
                                exact
                                to="/Add"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Add-Event
                            </NavLink>
                        </li>}
                        {auth.isLoggedIn === false ?
                            (<li className="nav-item">
                                <NavLink
                                    exact
                                    to="/login"
                                    activeclassname="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Login/SignUp
                                </NavLink>
                            </li>

                            ) : (<li className="nav-item">
                                <NavLink
                                    exact
                                    to="/login"
                                    activeclassname="active"
                                    className="nav-links"
                                    onClick={() => { auth.logout() }}
                                >
                                    Log Out
                                </NavLink>
                            </li>)}
                        {
                            auth.isLoggedIn &&
                            <NavLink
                                exact
                                to="/profile"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Profile
                            </NavLink>
                        }
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>
        </ div>
    );
}

export default Navbar;