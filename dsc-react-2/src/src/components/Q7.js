import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q7 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">더 망한 수강신청은</p>
        <ButtonComponent
          step={7}
          type={"A"}
          txt={"4연속 우주공강"}
          imgUrl={"./imgs/q_7_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={7}
          type={"B"}
          txt={"4연강"}
          imgUrl={"./imgs/q_7_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q7;
