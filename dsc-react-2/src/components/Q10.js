import React from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q10 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">시험기간 샤워는</p>
        <ButtonComponent
          step={10}
          type={"A"}
          txt={"귀찮은데 학교에서"}
          imgUrl={"./imgs/q_10_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={10}
          type={"B"}
          txt={"힘들어도 집에서"}
          imgUrl={"./imgs/q_10_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q10;
