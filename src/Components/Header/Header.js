import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import DataContext from "../Context/DataContext";

import { Link } from 'react-router-dom';
import { NavLink } from "react-bootstrap";


function Header() {

    const {cartData} = React.useContext(DataContext);
    const cartItems = cartData.reduce((acc, prevValue)=>{ return acc+= prevValue.quantity},0);
    return (
        <>

            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Shopping Cart
                    </Navbar.Brand>

                    <Navbar.Toggle id="responsive-navbar-nav" />

                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Item variant="dark">
                                <Nav.Link as={Link} to="/">Favorites</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/">Orders</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Navbar.Collapse>
                    <div style={{ color: "white" }}>Hello Keerthi</div>

                    <Nav>
                        <Nav.Item variant="dark">


                            <Nav.Link as={Link} to="/cart">Cart <Badge>{cartItems}</Badge></Nav.Link>
                        </Nav.Item>
                        <Nav.Item variant="dark">
                            <Nav.Link as={Link} to="/">Logout </Nav.Link>

                        </Nav.Item>
                    </Nav>


                </Container>

            </Navbar>
        </>
    );
}






export default Header