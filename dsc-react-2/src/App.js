import React from 'react';
import "./App.css";
import QLayout from './QLayout';
import Q1 from './Q1';


const App = () => {
  return (
    <div className="app-frame">
      <QLayout>
        <Q1 />
      </QLayout>
    </div>
  );
};

export default App;
