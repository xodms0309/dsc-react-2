import React, { Fragment, Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { connect } from "react-redux";

const Q13 = (props) => {
  return (
    <div>
      <div className="btn"
            ><button type="button">
                <Link to='Result'>
                결과 보기
                </Link>
                </button>
            </div>
    </div>
  );
};


export default Q13;
