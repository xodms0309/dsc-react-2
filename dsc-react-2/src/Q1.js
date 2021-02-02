import React, { Fragment } from 'react';
import "./App.css";

const Q1 = () => {
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

export default Q1;