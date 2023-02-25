import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import homeIcon from '../../../../images/Home/icon.png';

const Header = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/company/${search}`);
        setSearch("");
    }
    return (
        <Navbar expand="lg" className='bg-lime-100'>
            <Container fluid>
                <Navbar.Brand as={Link} to="/"><img src={homeIcon} className='w-32' alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex mx-auto w-1/3" >
                        <Form.Control
                            type="search"
                            placeholder="Search your Company "
                            className="me-2 bg-lime-100"
                            aria-label="Search"
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            required
                        />
                        <Button onClick={handleSearch} variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} className='ms-2' to="/calculator">Calculator</Nav.Link>
                        <Nav.Link as={Link} className='ms-2' to="/">About</Nav.Link>
                        <Nav.Link as={Link} className='ms-2' to="/">Help</Nav.Link>
                        <Nav.Link as={Link} className='ms-2' to="/">Sign In</Nav.Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;  