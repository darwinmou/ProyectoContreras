import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navv = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
        <Navbar.Brand href="#home">Bienvenido a GamesLandia</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto text-center">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/category/juegos">Juegos</Nav.Link>
            <Nav.Link href="/category/perifericos">Perifericos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <NavLink to="/carrito">
           <CartWidget />
         </NavLink>
      </Container>
    </Navbar>
  );

  //   <div className="nav">
  //     <h2> Bienvenido a GamesLandia </h2>
  //     <nav>
  //       <NavLink to="/">Inicio</NavLink>
  //       <NavLink to="/category/juegos">Juegos</NavLink>
  //       <NavLink to="/category/perifericos/">Perifericos</NavLink>
  //       <NavLink to="/carrito">
  //         <CartWidget />
  //       </NavLink>
  //     </nav>
  //   </div>
  // ;
};

export default Navv;
