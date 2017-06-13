import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Headroom from 'react-headroom';
import Back2Top from 'react-back2top';
import { Glyphicon } from 'react-bootstrap';

export default function(props) {
    return (
        <div className="App">
            <Headroom>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavLink exact to="/">Ice and Fire</NavLink>
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
                            {/*<NavItem eventKey={3.1} href="https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire" target="_blank">More</NavItem>
                            <NavItem href="https://anapioficeandfire.com/" target="_blank">API</NavItem>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Headroom>

            <div className="">
                {props.children}
            </div>

            <Back2Top>
                <div className="scrollTop"><Glyphicon glyph="arrow-up" /></div>
            </Back2Top>

            <div className="copyright">

                <div className="container">
                    <div className="col-md-6">
                        <p>© 2017 - Planlodge</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="bottom_ul">
                            <li><a rel="noopener noreferrer" href="https://planlodge.com" target="_blank">Portfolio</a></li>
                            <li><a rel="noopener noreferrer" href="https://github.com/planlodge" target="_blank">GitHub</a></li>
                            <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/jarrodsampson/" target="_blank">LinkedIn</a></li>
                            <li><a rel="noopener noreferrer" href="https://angel.co/jarrod-sampson" target="_blank">AngelList</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
}