<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q2 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    나는 휴학을 해본 경험이
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_2_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>있다</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_2_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>없다</span>
                </label>
            </div>
            </div>
        </form>
    );
  };

export default Q2;
=======
import React, { Fragment, Component } from "react";
import "../App.css";
import DATA from "../shared/data";
import ButtonComponent from "./ButtonComponent";

const Q2 = () => {
  let test = DATA.filter((data) => data.id === 1);

  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 휴학을 해본 경험이</p>
        <ButtonComponent
          step={2}
          type={"A"}
          txt={"있다"}
          imgUrl={"./imgs/q_2_1.jpeg"}
        ></ButtonComponent>
        <ButtonComponent
          step={2}
          type={"B"}
          txt={"없다"}
          imgUrl={"./imgs/q_2_2.jpeg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q2;
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
