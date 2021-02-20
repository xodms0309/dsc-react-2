<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q3 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    나는 생협에 가면
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_3_1.jpeg)`,
                    }}
                ></div>
                <label>
                    <span>아이스티노</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_3_2.png)`,
                    }}
                ></div>
                <label>
                    <span>아메리카노</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q3;
=======
import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q3 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 생협에 가면</p>
        <ButtonComponent
          step={3}
          type={"A"}
          txt={"아이스티노"}
          imgUrl={"./imgs/q_3_2.jpeg"}
        ></ButtonComponent>
        <ButtonComponent
          step={3}
          type={"B"}
          txt={"아이스티"}
          imgUrl={"./imgs/q_3_1.png"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q3;
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
