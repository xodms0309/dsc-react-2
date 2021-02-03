import React from 'react';
import "../css/StartPage.css"
const StartPage=()=>{
    return(
        <div className="wrapper">
            <img src="./imgs/startpage.png"></img>
            <div className="name">
                EWHA<br /> MBTI
            </div>
            <div className="btn"><button type="button">테스트 시작하기</button></div>
        </div>
    );
}
export default StartPage;