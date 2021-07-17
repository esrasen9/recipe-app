import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import {NavLink} from "react-router-dom";
import {NavDropdown} from "react-bootstrap";
const Navbar = () =>  {
    return (
            <div className="navbar">
                <NavLink to="/" className="navbar-logo">
                    Tasty
                </NavLink>
                <div className="menu">
                    <ul>
                        <li className="menu-item"><NavLink exact to="/">Discover</NavLink></li>
                        <li className="menu-item"><NavLink to="/breakfast">Breakfast</NavLink></li>
                        <li className="menu-item"><NavLink to="/lunch">Lunch</NavLink></li>
                        <li className="menu-item"><NavLink to="/dinner">Dinner</NavLink></li>
                        <li className="menu-item"><NavLink to="/snacks">Snacks</NavLink></li>
                        <li className="menu-item"><NavLink to="/teatime">Teatime</NavLink></li>
                        <li className="menu-item signup-item"><NavLink to="/signup">Sign Up!</NavLink></li>
                    </ul>
                </div>
                <NavDropdown className="mobile-menu" title="Recipes" id="nav-dropdown">
                    <NavDropdown.Item className="mobile-menu-item"><NavLink activeClassName="menu-item-active" exact to="/">Discover</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="mobile-menu-item"><NavLink activeClassName="menu-item-active" to="/breakfast">Breakfast</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="mobile-menu-item"><NavLink activeClassName="menu-item-active" to="/lunch">Lunch</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="mobile-menu-item"><NavLink activeClassName="menu-item-active" to="/dinner">Dinner</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="mobile-menu-item"><NavLink activeClassName="menu-item-active" to="/snacks">Snacks</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="mobile-menu-item"><NavLink activeClassName="menu-item-active" to="/teatime">Teatime</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="mobile-menu-item signup-item"><NavLink to="/signup">Sign Up!</NavLink></NavDropdown.Item>
                </NavDropdown >
            </div>
    );
}

export default Navbar;