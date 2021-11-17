import React from 'react';
import "../css/header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Home() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#pricing">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Home
