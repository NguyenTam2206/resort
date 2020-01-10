import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [state, setState] = useState({
        isOpen: false,
    })
    const handleToggle = () => {
        setState((state) => {
            return {
                ...state,
                isOpen: !state.isOpen
            }
        })
    }
    const closeDropdown = () => {
        setState((state) => {
            return {
                ...state,
                isOpen : false
            }
        })
    }
    const classOne = state.isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';
    const classTwo = state.isOpen ? 'navbar-toggler navbar-toggler-right' : 'navbar-toggler navbar-toggler-right collapsed';
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid p-0">
                <span onClick={closeDropdown}>
                    <Link to="/" className="navbar-brand">
                        <img src={logo} style={{ width: '35px' }} alt="logo" />
                    </Link>
                </span>
                <button onClick={handleToggle} style={{border: 'none'}}className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`} id="navbarResponsive">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <span onClick={closeDropdown}>
                                <Link className="nav-link" to="/">Home</Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={closeDropdown}>
                                <Link className="nav-link" to="/rooms">Rooms</Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

