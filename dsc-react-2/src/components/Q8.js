import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q8 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">내가 주로 공부하는 곳은</p>
        <ButtonComponent
          step={8}
          type={"A"}
          txt={"조용한 열람실"}
          imgUrl={"./imgs/q_8_1.png"}
        ></ButtonComponent>
        <ButtonComponent
          step={8}
          type={"B"}
          txt={"카페"}
          imgUrl={"./imgs/q_8_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q8;
