import React, { Fragment } from 'react';
import "../App.css";

const Q9 = () => {
    return (
        <form>
            <div className="qa-container">
                <p className="q-txt">
                    나는 과제를
                </p>
            
            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_9_1.jpg)`,
                    }}
                ></div>
                <label>
                    <span>몰아서(밤샘) 한다</span>
                </label>
            </div>

            <div className="a-box">
                <div
                    className="img-box"
                    style={{
                    "background-image": `url(./imgs/q_9_2.jpg)`,
                    }}
                ></div>
                <label>
                    <span>미리미리 한다</span>
                </label>
            </div>
            </div>
        </form>
        
    );
  };

export default Q9;