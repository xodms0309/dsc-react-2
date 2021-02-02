import React, { Fragment } from 'react';
import "./App.css";

const Q1 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    나는 학교에 올 때
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_1_1.jpeg)`,
                    }}
                ></div>
                <label>
                    <span>통학</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_1_2.jpeg)`,
                    }}
                ></div>
                <label>
                    <span>자취</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q1;