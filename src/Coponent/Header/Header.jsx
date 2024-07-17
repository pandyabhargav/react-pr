import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Hotel Management</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addData">Add Customer</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewData">View Customer</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Container fluid>
                <div className='col-12 d-flex flex-wrap'>
                    <div className='col-12 p-3'>
                        <div>
                            <img src="\image\istockphoto-1333257950-2048x2048.jpg" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Header;
