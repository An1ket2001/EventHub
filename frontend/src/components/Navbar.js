import Helpline from "./Helpline";
import "../design/Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
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
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Add"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Add-Event
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/login"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Sign-Up
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </ div>
    );
}

export default Navbar;