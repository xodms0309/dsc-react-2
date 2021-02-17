import React from "react";
import { Route } from "react-router-dom";

//컴포넌트들을 불러와서 인스턴스 생성.
const Q1 = React.lazy(() => import("./components/Q1"));
const Q2 = React.lazy(() => import("./components/Q2"));
const Q3 = React.lazy(() => import("./components/Q3"));
const Q4 = React.lazy(() => import("./components/Q4"));
const Q5 = React.lazy(() => import("./components/Q5"));
const Q6 = React.lazy(() => import("./components/Q6"));

//라우팅 주소별 컴포넌트 매칭하기
const routes = [
  { path: "/Q1", name: "Q1", component: Q1, route: Route },
  { path: "/Q2", name: "Q2", component: Q2, route: Route },
  { path: "/Q3", name: "Q3", component: Q3, route: Route },
  { path: "/Q4", name: "Q4", component: Q4, route: Route },
  { path: "/Q5", name: "Q5", component: Q5, route: Route },
  { path: "/Q6", name: "Q6", component: Q6, route: Route },
];
export { routes };
