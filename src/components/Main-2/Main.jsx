import React from "react";
import "./Main.css";

import imageColdplay from "../../assets/coldplay.png";

const Main = () => {
  return (
    <div className="main2">
      <h2>Próximos shows !</h2>
      <div className="quadro">
        <div className="elementoEsquerda">
          <h2>Show do Coldplay</h2>
          <h5>SAB, 24 de Dezembro</h5>
          <p>Allianz Parque - São Paulo, SP</p>
          <button>Saiba mais</button>
        </div>
        <div className="elementoDireita">
          <img src={imageColdplay} alt="coldplayImage" />
        </div>
      </div>
      <div className="links">
        <span className="active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Main;
