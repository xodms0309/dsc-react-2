<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q12 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    여가 시간에는
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_12_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>책 읽기</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_12_2.png)`,
                    }}
                ></div>
                <label>
                    <span>영화 보기</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q12;
=======
import React, { Fragment, Component } from "react";
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
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
