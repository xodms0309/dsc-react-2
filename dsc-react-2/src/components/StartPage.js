import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
  width: 200px;
  height: 50px;
  position: relative;
  display: block;
  text-align: center;
  border-radius: 40px;
  cursor: pointer;
  background-color: white;
  opacity: 0.6;

  :hover {
    background-color: ${(props) => "#white"};
    opacity: 1;
  }
`;

const StyleSpan = styled.span`
  position: absolute;
  font-family: sans-serif;
  color: black;
  bottom: 15px;
  left: 50%;
  font-size: 18px;
  opacity: 1;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  white-space: nowrap;
`;

const StartPage = () => {
  return (
    <div className="wrapper">
      <img src="./imgs/startpage.png"></img>
      <div className="name">EWHA MBTI</div>
      <p className="name_p">나와 잘 맞는 단대는 어디일까?</p>
      <div className="btn">
        <Button type="button">
          <Link to="Q1">
            <StyleSpan>테스트 시작하기</StyleSpan>
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default StartPage;
