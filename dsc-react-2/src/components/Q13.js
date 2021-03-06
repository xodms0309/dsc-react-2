import React from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q13 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 OO 수업을 선호한다</p>
        <ButtonComponent
          step={13}
          type={"A"}
          txt={"대면"}
          imgUrl={"./imgs/q_13_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={13}
          type={"B"}
          txt={"비대면"}
          imgUrl={"./imgs/q_13_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q13;
