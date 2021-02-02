import React, { Fragment } from 'react';
import "./App.css";

const Q12 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    여가 시간에는
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_12_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>책 읽기</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_12_2.png)`,
                    }}
                ></div>
                <label>
                    <span>영화 보기</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q12;