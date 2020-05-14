import React from 'react';
import './navbar.scss';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function navbar() {
    return (
        <>
            <Navbar
                fixed="top"
                className="navbar navbar-expand-lg navbar-light nav-color p-3">
                <a className="navbar-brand text-white" href="#">
                    Corona-19
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to="/">
                                Data <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Wiki">
                                Wiki
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/maps">
                                Map
                            </Link>
                        </li>
                    </ul>
                </div>
            </Navbar>
        </>
    );
}
