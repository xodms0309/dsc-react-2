import React from 'react';
import "./App.css";
import QLayout from './QLayout';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
import Q6 from './Q6';
import Q7 from './Q7';
import Q8 from './Q8';
import Q9 from './Q9';
import Q10 from './Q10';
import Q11 from './Q11';
import Q12 from './Q12';


const App = () => {
  return (
    <div className="app-frame">
      <QLayout>
        <Q2 />
      </QLayout>
    </div>
  );
};

export default App;