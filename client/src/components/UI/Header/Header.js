import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import './Header.css'
import logo from '../../../accets/logo.png'


const Header = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <NavLink to='/'><img className='logo' src={logo} alt=""/></NavLink>
                <Nav className="mr-auto">
                    <NavLink exact className='buttonNav' activeClassName='buttonNavActive' to="/">Home</NavLink>
                    <NavLink  className='buttonNav' activeClassName='buttonNavActive' to="/addProduct">addProduct</NavLink>
                </Nav>
                {props.children}
            </Navbar>
        </div>
    )
};


export default Header;