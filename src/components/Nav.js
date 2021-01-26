import React from "react";
import { Link } from "react-router-dom";

import defaultImage from "../assets/static/imagen.png";
import Menu from "../assets/static/icons/nav__menu.svg";

const Nav = () => {
  function responsive() {
    var linksNav = document.querySelector(".header__links");
    if (linksNav.className === "header__links") {
      linksNav.className += " responsive";
    } else {
      linksNav.className = "header__links";
    }
  }

  return (
    <React.Fragment>
      <header className="header">
        <div className="header__logo">
          <img src={defaultImage} alt="Imagen que se utiliza por defecto" />
          <h1>Ecommerce Name</h1>
        </div>

        <div className="header__links">
          <a href="#home" class="active">
            Inicio
          </a>
          <Link to="/">Tienda</Link>
          <Link to="/">Nosotros</Link>
          <Link to="/">Contact</Link>
          <a href="/" className="callToAction" rel="noreferrer" target="blank">
            Ingresar
          </a>
          <button className="header__links--menuBurger" onClick={responsive}>
            <img
              src={Menu}
              alt="Boton menu: Si da click en este botón se abriran mas opciones"
            />
          </button>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Nav;
