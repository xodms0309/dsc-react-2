import React, { Fragment, useState, Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import DATA from "../shared/data";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Button = styled.div`
  width: 300px;
  height: 175px;
  position: relative;
  display: block;
  margin-bottom: 30px;
  text-align: center;
  margin-left: 35px;
  background-color: white;
  border-radius: 10px;

  cursor: pointer;

  :hover {
    background-color: ${(props) => "#FFC52F"};
  }
`;

const ImgBox = styled.div`
  background-position: center;
  background-image: url(${(props) => props.imgPath});
  width: 100%;
  height: 80%;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const StyleLabel = styled.label`
  line-height: 1;
  color: #333;
  width: 300px;
  min-height: 175px;
  display: inline-block;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  -webkit-transition: 0.2s;
  transition: 0.2s;
`;

const StyleSpan = styled.span`
  position: absolute;
  font-family: sans-serif;
  bottom: 10px;
  left: 50%;
  font-size: 18px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;

//선택한 사항에 따라서 점수를 부여하는 함수
// const ScoreRecord = (e) => {};
//
// let img = "";
//
// if (props.step == 1) {
//   img = props.step + 1;
// }
//  background-image: url(${(props) => props.imgFile});

//이건되는데 setScore가 안되는거냐 시발이 ?
//const [score, setScore] = useState({});
//const score1 = DATA.filter((data) => data.id == 1);

//const globalCondition = useSelector((state) => state.id);
//const globalCondition = useSelector((state) => state.condition);

function ButtonComponent(props) {
  const BtnType = props.type;
  const step = props.step + 1;
  //const onBtnClick = () => {};

  return (
    <Button step={props.step}>
      {/*<div className="a-box">*/}
      <Link to={"/Q" + step}>
        <ImgBox imgPath={props.imgUrl} />
        <StyleLabel>
          <StyleSpan>{props.txt}</StyleSpan>
        </StyleLabel>
      </Link>
    </Button>
  );
}

export default ButtonComponent;
