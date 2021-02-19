import React, { Fragment, useState, Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import DATA from "../shared/data";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Q1 = () => {
  //선택한 사항에 따라서 점수를 부여하는 함수
  const ScoreUpdate = () => {
    DATA.map((data) => (data.id === 1 ? { ...data, point: 10 } : data));
  };

  //const [score, setScore] = useState({});

  let test = DATA.filter((data) => data.id === 1);
  //test[0].point = 10;

  return (
    <form action className="form q1">
      <div className="qa-container">
        <p className="q-txt">나는 학교에 올 때</p>
        <ButtonComponent
          step={1}
          type={"A"}
          txt={"통학"}
          imgUrl={"./imgs/q_1_1.jpeg"}
        ></ButtonComponent>
        <ButtonComponent
          step={1}
          type={"B"}
          txt={"자취"}
          imgUrl={"./imgs/q_1_2.jpeg"}
        ></ButtonComponent>
      </div>
    </form>
  );
};

export default Q1;
