import React, { Fragment } from 'react';
import "./App.css";

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