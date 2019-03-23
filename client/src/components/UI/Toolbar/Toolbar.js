import React from 'react';
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {fetchLogout} from "../../../store/actions";

const Toolbar = (props) =>(
    !props.user.token ?
    <Nav className='justify-content-end'>

        <NavLink className='buttonNav' activeClassName='buttonNavActive' to="/register">Register</NavLink>
        <NavLink className='buttonNav' activeClassName='buttonNavActive' to="/login">Login</NavLink>
    </Nav> :
        <Nav className='justify-content-end'>
            <p>Hello, {props.user.displayname}</p>
            <NavLink  className='buttonNav' activeClassName='buttonNavActive' to="/addProduct">addProduct</NavLink>
            <NavLink className='buttonNav' activeClassName='buttonNavActive' to="/logout" onClick={(e)=>props.fetchLogout(e,"users/sessions", props.user.token)}>logout</NavLink>
        </Nav>
);

const mapStateToProps = (state)=>{
    return{
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLogout:(e, url, token) => dispatch(fetchLogout(e, url, token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)