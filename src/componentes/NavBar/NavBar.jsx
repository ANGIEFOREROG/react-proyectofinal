import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {


return (

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
<Container>

<Navbar.Brand as = {Link} to= "" href="#home" className='logo'>El Gaucho</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="#features">Inicio</Nav.Link>
        <Nav.Link href="#pricing">Nosotros</Nav.Link>
    <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item as ={Link}to="category/Dulce">Dulce de leche</NavDropdown.Item>
        <NavDropdown.Item as={Link}to ="category/Alfajores">
        Alfajores
        </NavDropdown.Item>
        <NavDropdown.Item as={Link}to ="category/Yerba">Yerba Mate</NavDropdown.Item>
        <NavDropdown.Divider />
    
    </NavDropdown>
    </Nav>
    <Nav as={Link} to = "cart">

<CartWidget />  
</Nav>
        <Nav.Link href="#deets"  ></Nav.Link>
        <Nav.Link eventKey={2} href="#memes">Mi cuenta </Nav.Link>

</Navbar.Collapse>
</Container>
</Navbar>
);
}

export default NavBar