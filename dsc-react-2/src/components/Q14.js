import React from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q14 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">내가 선호하는 강의는</p>
        <ButtonComponent
          step={14}
          type={"A"}
          txt={"대학영어"}
          imgUrl={"./imgs/q_14_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={14}
          type={"B"}
          txt={"우글(통글)"}
          imgUrl={"./imgs/q_14_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q14;
