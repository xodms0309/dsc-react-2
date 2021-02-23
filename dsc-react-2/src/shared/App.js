import React from "react";
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
  Q14,
  Q15,
  QLayout,
  StartPage,
  Result,
} from "../components";

const App = () => {
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
        <Route path="/Q14" component={Q14}>
          <QLayout step={14}>
            <Q14></Q14>
          </QLayout>
        </Route>
        <Route path="/Q15" component={Q15}>
          <QLayout step={14}>
            <Q15></Q15>
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
