import React, { Fragment, useState, Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  increment,
  step_oneA,
  step_twoA,
  step_threeA,
  step_fourA,
  step_fiveA,
  step_sixA,
  step_sevenA,
  step_eightA,
  step_nineA,
  step_tenA,
  step_tenoneA,
  step_tentwoA,
  step_oneB,
  step_twoB,
  step_threeB,
  step_fourB,
  step_fiveB,
  step_sixB,
  step_sevenB,
  step_eightB,
  step_nineB,
  step_tenB,
  step_tenoneB,
  step_tentwoB,
} from "../actions";
import { connect } from "react-redux";

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

function ButtonComponent(props) {
  const BtnType = props.type;
  const step = props.step + 1;
  //const onBtnClick = () => {};

  function selectA(value) {
    if (value === 1) return props.onStepOneA;
    else if (value === 2) return props.onStepTwoA;
    else if (value === 3) return props.onStepThreeA;
    else if (value === 4) return props.onStepFourA;
    else if (value === 5) return props.onStepFiveA;
    else if (value === 6) return props.onStepSixA;
    else if (value === 7) return props.onStepSevenA;
    else if (value === 8) return props.onStepEightA;
    else if (value === 9) return props.onStepNineA;
    else if (value === 10) return props.onStepTenA;
    else if (value === 11) return props.onStepTenoneA;
    else return props.onStepTentwoA;
  }

  function selectB(value) {
    if (value === 1) return props.onStepOneB;
    else if (value === 2) return props.onStepTwoB;
    else if (value === 3) return props.onStepThreeB;
    else if (value === 4) return props.onStepFourB;
    else if (value === 5) return props.onStepFiveB;
    else if (value === 6) return props.onStepSixB;
    else if (value === 7) return props.onStepSevenB;
    else if (value === 8) return props.onStepEightB;
    else if (value === 9) return props.onStepNineB;
    else if (value === 10) return props.onStepTenB;
    else if (value === 11) return props.onStepTenoneB;
    else return props.onStepTentwoB;
  }

  return (
    <Button
      step={props.step}
      onClick={BtnType === "A" ? selectA(props.step) : selectB(props.step)}
    >
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

let mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onStepOneA: () => dispatch(step_oneA()),
    onStepTwoA: () => dispatch(step_twoA()),
    onStepThreeA: () => dispatch(step_threeA()),
    onStepFourA: () => dispatch(step_fourA()),
    onStepFiveA: () => dispatch(step_fiveA()),
    onStepSixA: () => dispatch(step_sixA()),
    onStepSevenA: () => dispatch(step_sevenA()),
    onStepEightA: () => dispatch(step_eightA()),
    onStepNineA: () => dispatch(step_nineA()),
    onStepTenA: () => dispatch(step_tenA()),
    onStepTenoneA: () => dispatch(step_tenoneA()),
    onStepTentwoA: () => dispatch(step_tentwoA()),
    onStepOneB: () => dispatch(step_oneB()),
    onStepTwoB: () => dispatch(step_twoB()),
    onStepThreeB: () => dispatch(step_threeB()),
    onStepFourB: () => dispatch(step_fourB()),
    onStepFiveB: () => dispatch(step_fiveB()),
    onStepSixB: () => dispatch(step_sixB()),
    onStepSevenB: () => dispatch(step_sevenB()),
    onStepEightB: () => dispatch(step_eightB()),
    onStepNineB: () => dispatch(step_nineB()),
    onStepTenB: () => dispatch(step_tenB()),
    onStepTenoneB: () => dispatch(step_tenoneB()),
    onStepTentwoB: () => dispatch(step_tentwoB()),
  };
};

ButtonComponent = connect(undefined, mapDispatchToProps)(ButtonComponent);

export default ButtonComponent;
