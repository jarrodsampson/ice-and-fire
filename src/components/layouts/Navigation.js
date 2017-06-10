import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function(props) {
    return (
        <div className="App">
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink exact to="/">Home</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/books">
                            <NavItem>Books</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/characters">
                            <NavItem>Characters</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/homes">
                            <NavItem>Homes</NavItem>
                        </LinkContainer>

                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="container">
                {props.children}
            </div>
        </div>

    );
}