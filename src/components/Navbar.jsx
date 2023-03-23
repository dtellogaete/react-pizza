import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container, Nav} from 'react-bootstrap';

export const NavbarComp = () => {
    return (
        <>       
        <Navbar bg="warning" expand="lg" collapseOnSelect>
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-2"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/" className="text-light">
                <h4>&#127829; Pizzería Mamma Mía</h4>
                </Nav.Link>
                <Nav.Link href="/contacto" className="text-light">
                <h4>&#128241; Contacto</h4>
                </Nav.Link>
            </Nav>
            <Navbar.Brand className='text-light'>
                <h4>&#x1F6D2; $25.000</h4>
            </Navbar.Brand>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
}

export default NavbarComp;