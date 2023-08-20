import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navv = () => {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>Bienvenido a GamesLandia</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/category/juegos">
              Juegos
            </NavLink>
            <NavLink className="nav-link" to="/category/perifericos">
              Perifericos
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Link to="/carrito">
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navv;
