<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q6 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    내가 더 좋아하는 이화는?
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_6_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>이화의 여름</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_6_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>이화의 겨울</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q6;
=======
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
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
