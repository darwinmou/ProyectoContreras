import CartWidget from "./CartWidget";

const Nav = () => {
  return (
    <div className="nav">
      <h2> Bienvenido a GamesLandia </h2>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Quienes Somos</li>
          <li>Productos</li>
          <li>Contacto</li>
          <li>
            <CartWidget/>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
