import React, { Fragment } from 'react';
import '../css/Result.css';
const Result=()=>{
    return(
    <Fragment>
      {/* top bar */}
      <div className="top-bar">
        <div className="ewha-logo-img-box"
          style={{
            "background-image": `url(./imgs/ewha_logo.png)`,
          }}>
        </div>
        <p className="top-bar-txt">EWHA MBTI</p>
      </div>
      <div className="resultWrapper">
        <div className="header">
            당신에게<br />
            잘 어울리는<br />
            <strong>단대</strong>는?
        </div>    

        <div className="colName">
            <strong>인문과학대</strong>
        </div>

        <div className="picture">

        </div>

        <div className="title">
            소개
        </div>
        <div className="content">
            
        </div>

        <div className="title">
            교육목표
        </div>

        <div className="title">
            소속 학과
        </div>

        <div className="trybtn">
            <button type="button">다시하기</button>
        </div>

      </div>
        {/* developer info */}
        <div className="bottom-bar">
            <div className="developer-logo-img-box" 
            style={{"background-image": `url(./imgs/dsc_logo.png)`,}}>
        </div>
        <p>@dsc_react_team2</p>
      </div>
      </Fragment>
    );

}
export default Result;