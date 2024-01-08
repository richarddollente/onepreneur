import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header= () => {
    return(
        <div>
            <div className="header">
                <Navbar bg="light" expand="lg">
                    <div className="container">
                        <Navbar.Brand href="/home" style={{justifyContent:"center"}}>
                                <img src="/onepreneur-logo-100x100.png" width="50" height="50" className="d-inline-block align-top" alt="Onepreneur logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"end"}}>
                            <Nav className="mr-auto">
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;