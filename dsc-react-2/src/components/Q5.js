import React, { Fragment } from 'react';
import "../App.css";

const Q5 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    내가 자주 타는 셔틀버스는
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_5_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>하얀 버스</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_5_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>주황 버스</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q5;