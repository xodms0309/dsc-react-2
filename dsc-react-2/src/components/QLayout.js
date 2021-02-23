import React, { Fragment } from "react";
import "../App.css";

// USE STATE : 함수형 컴포넌트가 가변적 상태를 지니고 있을 수 있게 함
const QLayout = (props) => {
  const children = props.children || null;
  return (
    <Fragment>
      {/* top bar */}
      <div className="top-bar">
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
        <p>{props.step}/14</p>
        <div className="step" style={{ width: props.step * 27 }} />
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
        <p>@dsc_react_team2</p>
      </div>
    </Fragment>
  );
};

export default QLayout;
