import React, {Component} from "react";
import {Navbar, Nav} from 'react-bootstrap';
import '../navbar/navbar.css';

export default class NavigateBar extends Component {
    render() {
        return (
            <div className="container">
                <Navbar expand="lg">
                <Navbar.Brand href="/" className="nav-link">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                <Nav.Link href="/ladies" className="nav-link">Community</Nav.Link>
                <Nav.Link href="/resources" className="nav-link">Resources</Nav.Link>
                <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
          </div>
        )
    };
};