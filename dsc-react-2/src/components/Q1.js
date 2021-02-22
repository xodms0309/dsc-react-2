import React from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q1 = () => {
  return (
    <form action className="form q1">
      <div className="qa-container">
        <p className="q-txt">나는 학교에 올 때</p>
        <ButtonComponent
          step={1}
          type={"A"}
          txt={"통학"}
          imgUrl={"./imgs/q_1_1.jpeg"}
        ></ButtonComponent>
        <ButtonComponent
          step={1}
          type={"B"}
          txt={"자취"}
          imgUrl={"./imgs/q_1_2.jpeg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q1;
