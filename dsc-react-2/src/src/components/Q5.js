import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q5 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">내가 자주 타는 셔틀버스는</p>
        <ButtonComponent
          step={5}
          type={"A"}
          txt={"하얀버스"}
          imgUrl={"./imgs/q_5_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={5}
          type={"B"}
          txt={"주황버스"}
          imgUrl={"./imgs/q_5_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q5;
