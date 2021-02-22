import React from 'react';
import "../css/StartPage.css"
import { Link } from "react-router-dom";
const StartPage=()=>{
    return(
        <div className="wrapper">
            
            <div className="name">
                EWHA<br /> MBTI
            </div>
            <div className="btn"
            ><button type="button">
                <Link to='Q1'>
                테스트 시작하기
                </Link>
                </button>
            </div>
        </div>
    );
}
export default StartPage;
