import React from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q4 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 채플을 들을 때</p>
        <ButtonComponent
          step={4}
          type={"A"}
          txt={"올 출석"}
          imgUrl={"./imgs/q_4_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={4}
          type={"B"}
          txt={"최대한 빠지기"}
          imgUrl={"./imgs/q_4_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q4;
