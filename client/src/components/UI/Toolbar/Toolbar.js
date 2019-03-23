import React from 'react';
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

const Toolbar = () =>(
    <Nav className='justify-content-end'>
        <NavLink className='buttonNav' activeClassName='buttonNavActive'to="/register">Register</NavLink>
        <NavLink className='buttonNav' activeClassName='buttonNavActive' to="/login">Login</NavLink>
    </Nav>

);

export default Toolbar