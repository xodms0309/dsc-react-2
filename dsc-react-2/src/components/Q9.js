import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q9 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 과제를</p>
        <ButtonComponent
          step={9}
          type={"A"}
          txt={"몰아서(밤샘) 한"}
          imgUrl={"./imgs/q_9_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={9}
          type={"B"}
          txt={"미리미리 한다"}
          imgUrl={"./imgs/q_9_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q9;
