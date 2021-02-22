import React, { useState } from "react";
import "../App.css";
//import DATA from "../data";
import { Switch, Route } from "react-router-dom";
import {
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  Q9,
  Q10,
  Q11,
  Q12,
  Q13,
  QLayout,
  Counter,
  StartPage,
  Result,
} from "../components";

const App = () => {
  // const [score_Liberal, setScore_Liberal] = useState(0);
  // const [score_Social, setScore_Social] = useState(0);
  // const [score_Science, setScore_Science] = useState(0);
  // const [score_Engineering, setScore_Engineering] = useState(0);
  // const [score_Music, setScore_Music] = useState(0);
  // const [score_Art, setScore_Art] = useState(0);
  // const [score_Edu, setScore_Edu] = useState(0);
  // const [score_Business, setScore_Business] = useState(0);
  // const [score_Industry, setScore_Industry] = useState(0);
  // const [score_Medicine, setScore_Medicine] = useState(0);
  // const [score_Nursing, setScore_Nursing] = useState(0);
  // const [score_Pharmacy, setScore_Pharmacy] = useState(0);
  // const [score_Scranton, setScore_Scranton] = useState(0);
  // const [score_Hokma, setScore_Hokma] = useState(0);
  //이걸다 props로 넘겨서 선택할때 점수를 반영하도록 만듬
  //<Q1 score_Hokma={this.state.score_Hokma} -> 근데이걸 변경하면 메인에서도 변경이되는건지 모르겟음 ㅅ
  //아니면 data.js에 각자 score 파트를넣고 변경이되는지 알아봐야함

  //근데 일단 다른건 둘째치고 걍 버튼누르면 다음페이지로 넘어가는거부터 구현하는게 나을듯

  //const hello = DATA.filter((data) => data.id === 1);

  return (
    <div className="app-frame">
      <Switch>
        <Route exact path="/" component={StartPage}>
          <StartPage></StartPage>
        </Route>
        <Route exact path="/Q1" component={Q1}>
          <QLayout step={1}>
            <Q1></Q1>
          </QLayout>
        </Route>
        <Route path="/Q2" component={Q2}>
          <QLayout step={2}>
            <Q2></Q2>
          </QLayout>
        </Route>
        <Route path="/Q3" component={Q3}>
          <QLayout step={3}>
            <Q3></Q3>
          </QLayout>
        </Route>
        <Route path="/Q4" component={Q4}>
          <QLayout step={4}>
            <Q4></Q4>
          </QLayout>
        </Route>
        <Route path="/Q5" component={Q5}>
          <QLayout step={5}>
            <Q5></Q5>
          </QLayout>
        </Route>
        <Route path="/Q6" component={Q6}>
          <QLayout step={6}>
            <Q6></Q6>
          </QLayout>
        </Route>
        <Route path="/Q7" component={Q7}>
          <QLayout step={7}>
            <Q7></Q7>
          </QLayout>
        </Route>
        <Route path="/Q8" component={Q8}>
          <QLayout step={8}>
            <Q8></Q8>
          </QLayout>
        </Route>
        <Route path="/Q9" component={Q9}>
          <QLayout step={9}>
            <Q9></Q9>
          </QLayout>
        </Route>
        <Route path="/Q10" component={Q10}>
          <QLayout step={10}>
            <Q10></Q10>
          </QLayout>
        </Route>
        <Route path="/Q11" component={Q11}>
          <QLayout step={11}>
            <Q11></Q11>
          </QLayout>
        </Route>
        <Route path="/Q12" component={Q12}>
          <QLayout step={12}>
            <Q12></Q12>
          </QLayout>
        </Route>
        <Route path="/Q13" component={Q13}>
          <QLayout step={13}>
            <Q13></Q13>
          </QLayout>
        </Route>
        <Route path="/Result" component={Result}>
            <Result></Result>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
