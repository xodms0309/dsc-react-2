<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q9 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    나는 과제를
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_9_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>몰아서(밤샘) 한다</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_9_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>미리미리 한다</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q9;
=======
import React, { Fragment, Component } from "react";
import "../App.css";
import ButtonComponent from "./ButtonComponent";

const Q9 = () => {
  return (
    <form>
      <div className="qa-container">
        <p className="q-txt">나는 과제를</p>
        <ButtonComponent
          step={9}
          type={"A"}
          txt={"몰아서(밤샘) 한"}
          imgUrl={"./imgs/q_9_1.jpg"}
        ></ButtonComponent>
        <ButtonComponent
          step={9}
          type={"B"}
          txt={"미리미리 한다"}
          imgUrl={"./imgs/q_9_2.jpg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q9;
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
