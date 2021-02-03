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