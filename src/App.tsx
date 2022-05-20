import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header'
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import './styles/index.scss'
import Popup from './shared/Popup/Popup';

function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
