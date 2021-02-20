<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q8 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    내가 주로 공부하는 곳은
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_8_1.png)`,
                    }}
                ></div>
                <label>
                    <span>조용한 열람실</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_8_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>카페나 테이블</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q8;
=======
import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q8 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">내가 주로 공부하는 곳은</p>
        <ButtonComponent
          step={8}
          type={"A"}
          txt={"조용한 열람실"}
          imgUrl={"./imgs/q_8_1.png"}
        ></ButtonComponent>
        <ButtonComponent
          step={8}
          type={"B"}
          txt={"카페"}
          imgUrl={"./imgs/q_8_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q8;
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
