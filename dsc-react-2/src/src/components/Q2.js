import React, { Fragment, Component } from "react";
import "../App.css";
import DATA from "../shared/data";
import ButtonComponent from "./ButtonComponent";

const Q2 = () => {
  let test = DATA.filter((data) => data.id === 1);

  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 휴학을 해본 경험이</p>
        <ButtonComponent
          step={2}
          type={"A"}
          txt={"있다"}
          imgUrl={"./imgs/q_2_1.jpeg"}
        ></ButtonComponent>
        <ButtonComponent
          step={2}
          type={"B"}
          txt={"없다"}
          imgUrl={"./imgs/q_2_2.jpeg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q2;
