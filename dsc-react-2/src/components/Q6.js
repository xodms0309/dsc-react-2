import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q6 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">내가 더 좋아하는 이화는?</p>
        <ButtonComponent
          step={6}
          type={"A"}
          txt={"이화의 봄"}
          imgUrl={"./imgs/q_6_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={6}
          type={"B"}
          txt={"이화의 겨울"}
          imgUrl={"./imgs/q_6_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q6;
