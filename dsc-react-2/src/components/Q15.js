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

  :hover {
    background-color: ${(props) => "#FFC52F"};
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

const Q15 = (props) => {
  return (
    <div>
      <div className="btn">
        <Button type="button">
          <Link to="Result">
            <StyleSpan>결과 보기</StyleSpan>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Q15;
