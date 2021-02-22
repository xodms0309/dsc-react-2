import React from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q12 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">여가 시간에는</p>
        <ButtonComponent
          step={12}
          type={"A"}
          txt={"책 읽기"}
          imgUrl={"./imgs/q_12_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={12}
          type={"B"}
          txt={"영화 보기"}
          imgUrl={"./imgs/q_12_2.png"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q12;
