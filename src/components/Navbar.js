import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="btn-group mx-4" role="group" aria-label="Basic mixed styles example">
                            <button type="button" id='y' style={{ backgroundColor: 'salmon', color: 'black' }} className="btn btn-outline-primary" onClick={props.colorBtn}>Yellow</button>
                            <button type="button" id='g' style={{ backgroundColor: 'salmon', color: 'black' }} className="btn btn-outline-primary" onClick={props.colorBtn}>Grey</button>
                            <button type="button" id='p' style={{ backgroundColor: 'salmon', color: 'black' }} className="btn btn-outline-primary" onClick={props.colorBtn}>Purple</button>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.darkMode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.darkMode === 'dark' ? 'light' : 'dark'} Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Title here",
    aboutText: "About"
}