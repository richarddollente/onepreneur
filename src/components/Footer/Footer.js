import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer= () => {
    return(
        <div>
            <div className="Footer">
                <Navbar bg="dark" data-bs-theme="dark" className="fixed-bottom" style={{justifyContent:"center", padding:"0"}}>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">
                            &copy; 2023 All Rights Reserved
                        </Nav.Link>
                    </Nav>
                </Navbar> 
            </div>
        </div>
    );
};

export default Footer;