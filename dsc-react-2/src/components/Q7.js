<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q7 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    더 망한 수강신청은
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_7_1.jpeg)`,
                    }}
                ></div>
                <label>
                    <span>4 우주 공강</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_7_2.jpeg)`,
                    }}
                ></div>
                <label>
                    <span>4 연강</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q7;
=======
import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q7 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">더 망한 수강신청은</p>
        <ButtonComponent
          step={7}
          type={"A"}
          txt={"4연속 우주공강"}
          imgUrl={"./imgs/q_7_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={7}
          type={"B"}
          txt={"4연강"}
          imgUrl={"./imgs/q_7_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q7;
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
