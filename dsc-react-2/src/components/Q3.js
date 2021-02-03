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