<<<<<<< HEAD
import React, { Fragment } from 'react';
import "../App.css";

const Q10 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    시험기간 샤워는
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_10_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>학교에서</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_10_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>집에서</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q10;
=======
import React, { Fragment, Component } from "react";
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
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
