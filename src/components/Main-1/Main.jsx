import React from "react";
import "./Main.css";

import image from "../../assets/main1.png";

const Main = () => {
  return (
    <div className="main1">
      <h2>Transformando sua vida em um show !</h2>
      <img src={image} alt="imagem" />
    </div>
  );
};

export default Main;
