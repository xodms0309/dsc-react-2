import React, { Fragment } from 'react';
import "./App.css";

const Q4 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    나는 채플을 들을 때
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_4_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>올 출석</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_4_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>최대한 빠지기</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q4;