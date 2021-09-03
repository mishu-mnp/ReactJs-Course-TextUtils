import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Contact</a>
                            </li>
                        </ul>
                        <div className="btn-group mx-4" role="group" aria-label="Basic mixed styles example">
                            <button type="button" id='y' style={{ backgroundColor: 'salmon' }} className="btn btn-outline-primary" onClick={props.colorBtn}>Yellow</button>
                            <button type="button" id='g' style={{ backgroundColor: 'salmon' }} className="btn btn-outline-primary" onClick={props.colorBtn}>Grey</button>
                            <button type="button" id='p' style={{ backgroundColor: 'salmon' }} className="btn btn-outline-primary" onClick={props.colorBtn}>Purple</button>
                        </div>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.darkMode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.darkMode === 'light' ? 'dark' : 'light'} Mode</label>
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