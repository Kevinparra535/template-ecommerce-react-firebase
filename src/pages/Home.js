import React from "react";

import Nav from "../components/Nav";

import defaultImage from "../assets/static/imagen.png";

const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <main className="hero">
        <div className="hero__image">
          <img src={defaultImage} alt="Imagen que se utiliza por defecto" />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home;
