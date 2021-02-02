import React, { Fragment } from 'react';
import "./App.css";

const Q6 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    내가 더 좋아하는 이화는?
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_6_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>이화의 여름</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_6_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>이화의 겨울</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q6;