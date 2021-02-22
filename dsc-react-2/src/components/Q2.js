import React from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q2 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 휴학을 해본 경험이</p>
        <ButtonComponent
          step={2}
          type={"A"}
          txt={"있다"}
          imgUrl={"./imgs/q_2_1.png"}
        ></ButtonComponent>
        <ButtonComponent
          step={2}
          type={"B"}
          txt={"없다"}
          imgUrl={"./imgs/q_2_2.png"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q2;
