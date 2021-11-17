import React from 'react';
import "../css/header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Home() {
    return (
        <div>
            <Navbar className="header-bg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><i class="fa fa-globe" aria-hidden="true"></i> Ecommerce</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#pricing"><i class="fa fa-cart-plus" aria-hidden="true"></i></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Home
