import React, { Fragment } from 'react';
import "../App.css";

const Q7 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    더 망한 수강신청은
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_7_1.jpeg)`,
                    }}
                ></div>
                <label>
                    <span>4 우주 공강</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_7_2.jpeg)`,
                    }}
                ></div>
                <label>
                    <span>4 연강</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q7;