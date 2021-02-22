import React from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q3 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 생협에 가면</p>
        <ButtonComponent
          step={3}
          type={"A"}
          txt={"아이스티노"}
          imgUrl={"./imgs/q_3_1.jpeg"}
        ></ButtonComponent>
        <ButtonComponent
          step={3}
          type={"B"}
          txt={"아이스티"}
          imgUrl={"./imgs/q_3_2.jpeg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q3;
