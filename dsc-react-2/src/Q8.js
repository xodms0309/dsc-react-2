import React, { Fragment } from 'react';
import "./App.css";

const Q8 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    내가 주로 공부하는 곳은
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_8_1.png)`,
                    }}
                ></div>
                <label>
                    <span>조용한 열람실</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_8_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>카페나 테이블</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q8;