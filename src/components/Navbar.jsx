import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <div className="collapse navbar-collapse col-md-8" id="navbarNav">
                    <ul className="navbar-nav col-md-8">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/">🏠 Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/contacto">📒 Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='container d-flex justify-content-end'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="navbar-brand text-light" to="/">🍰 Happy Cake</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
