import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="textosDiv">
        <a href="http://localhost:3000/">Sobre nós</a>
        <a href="http://localhost:3000/">Termos e condições de serviço</a>
      </div>
      <div className="textos1Div">
        <a href="http://localhost:3000/">Copyright © 2022</a>
        <a href="http://localhost:3000/">Gabriel Silva / Victor Martini</a>
      </div>
    </div>
  );
};

export default Footer;
