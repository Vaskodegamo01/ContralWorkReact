import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import './Header.css'
import logo from '../../../accets/logo.png'
import {connect} from "react-redux";
import {fetchback} from "../../../store/actions";


const Header = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <NavLink to='/'><img className='logo' src={logo} alt=""/></NavLink>
                <Nav className="mr-auto">
                    <NavLink onClick={()=>props.fetchback()} exact className='buttonNav' activeClassName='buttonNavActive' to="/">Home</NavLink>
                </Nav>
                {props.children}
            </Navbar>
        </div>
    )
};
const mapDispatchToProps = dispatch => {
    return {
        fetchback:() => dispatch(fetchback())
    }
};

export default connect(null, mapDispatchToProps)(Header);