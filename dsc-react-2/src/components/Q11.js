<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q11 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    나는 "OO"과제를 선호한다
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_11_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>팀플(발표)</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_11_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>갠플(글쓰기)</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q11;
=======
import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q11 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 "OO"과제를 선호한다</p>
        <ButtonComponent
          step={11}
          type={"A"}
          txt={"발표(팀플)"}
          imgUrl={"./imgs/q_11_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={11}
          type={"B"}
          txt={"글씨기(갠플)"}
          imgUrl={"./imgs/q_11_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q11;
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
