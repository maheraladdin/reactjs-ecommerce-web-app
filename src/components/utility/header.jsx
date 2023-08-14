import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OffCanvas from 'react-bootstrap/Offcanvas';
import Logo from "../../assets/images/logo.png";
import {cartRoute, loginRoute, signupRoute} from "../../constants/routes";
import {Link} from "react-router-dom";

export default function Header() {

    const expand = 'lg';

    const setLocalStorage = (e, storageKey) => {
        localStorage.setItem(storageKey, e.target.textContent);
    }

    return (
        <>
            <Navbar key={expand} expand={expand} className="bg-body-tertiary" style={{height: "70px"}}>
                <Container fluid>
                    <Navbar.Brand role={"button"}>
                        <Link to={"/"}>
                            <img
                                src={Logo}
                                alt="E-shop"
                                height="50"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <OffCanvas.Header closeButton>
                            <OffCanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Options
                            </OffCanvas.Title>
                        </OffCanvas.Header>
                        <OffCanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 mb-3 mb-lg-0">
                                {/* profile dropdown */}
                                <NavDropdown
                                    title="profile"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <Link to={loginRoute} className="text-decoration-none text-dark w-100 dropdown-item">login</Link>
                                    <Link to={signupRoute} className="text-decoration-none text-dark w-100 dropdown-item">sign up</Link>
                                    <Link to={cartRoute} className="text-decoration-none text-dark w-100 dropdown-item">cart</Link>
                                </NavDropdown>

                                <NavDropdown
                                    title="appearance mode"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item onClick={e => setLocalStorage(e,"appearanceMode")}>System mode</NavDropdown.Item>
                                    <NavDropdown.Item onClick={e => setLocalStorage(e,"appearanceMode")}>light mode</NavDropdown.Item>
                                    <NavDropdown.Item onClick={e => setLocalStorage(e,"appearanceMode")}>dark mode</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    title="language"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                >
                                    <NavDropdown.Item onClick={(e) => setLocalStorage(e,"language")}>English</NavDropdown.Item>
                                    <NavDropdown.Item onClick={(e) => setLocalStorage(e,"language")}>عربي</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex w-100">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </OffCanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}