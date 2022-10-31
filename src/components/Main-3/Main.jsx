import React from "react";
import "./Main.css";

const Main = (props) => {
  return (
    <div className="main3">
      <h2>{props.name}</h2>
      <div className="showsDiv">
        <div className="showPart1">
          <div className="divImg">
            <img src={props.img1} alt="" />
          </div>
          <h4>{props.date1}</h4>
          <h5>{props.show1}</h5>
          <h6>{props.place1}</h6>
        </div>
        <div className="showPart2">
          <div className="divImg">
            <img src={props.img2} alt="" />
          </div>
          <h4>{props.date2}</h4>
          <h5>{props.show2}</h5>
          <h6>{props.place2}</h6>
        </div>
        <div className="showPart3">
          <div className="divImg">
            <img src={props.img3} alt="" />
          </div>
          <h4>{props.date3}</h4>
          <h5>{props.show3}</h5>
          <h6>{props.place3}</h6>
        </div>
      </div>
    </div>
  );
};

export default Main;
