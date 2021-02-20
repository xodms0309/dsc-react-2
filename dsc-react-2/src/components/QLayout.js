<<<<<<< HEAD
import React, { Fragment } from 'react';
=======
import React, { Fragment } from "react";
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
import { Link } from "react-router-dom";
import "../App.css";
// import Button from './Button';

<<<<<<< HEAD

// USE STATE : 함수형 컴포넌트가 가변적 상태를 지니고 있을 수 있게 함 
=======
// USE STATE : 함수형 컴포넌트가 가변적 상태를 지니고 있을 수 있게 함
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
const QLayout = (props) => {
  const children = props.children || null;
  return (
    <Fragment>
      {/* top bar */}
      <div className="top-bar">
<<<<<<< HEAD
        <div className="ewha-logo-img-box"
          style={{
            "background-image": `url(./imgs/ewha_logo.png)`,
          }}>
        </div>
        <p className="top-bar-txt">EWHA MBTI</p>
      </div>

    {/* progress bar */}
      <div className="step-container">
        <p>1/12</p>
        <div className="step" style={{ width: 1 * 30 }} />
        <div className="step-bg" />
      </div>

    {/* Question */}
      <div className="qa-button-container">
        {children}
      </div>
      

    {/* developer info */}
      <div className="bottom-bar">
        <div className="developer-logo-img-box"
          style={{
            "background-image": `url(./imgs/dsc_logo.png)`,
          }}>
        </div>
=======
        <div
          className="ewha-logo-img-box"
          style={{
            "background-image": `url(./imgs/ewha_logo.png)`,
          }}
        ></div>
        <p className="top-bar-txt">EWHA MBTI</p>
      </div>

      {/* progress bar */}
      <div className="step-container">
        <p>{props.step}/12</p>
        <div className="step" style={{ width: props.step * 30 }} />
        <div className="step-bg" />
      </div>

      {/* Question */}
      <div className="qa-button-container">{children}</div>

      {/* developer info */}
      <div className="bottom-bar">
        <div
          className="developer-logo-img-box"
          style={{
            "background-image": `url(./imgs/dsc_logo.png)`,
          }}
        ></div>
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
        <p>@dsc_react_team2</p>
      </div>
    </Fragment>
  );
};

<<<<<<< HEAD
export default QLayout;
=======
export default QLayout;
>>>>>>> 5f26d76df6f4848e44de8d71941304ce0a845fd7
