// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ESP from './Components/Esp.jsx';
import ENG  from './Components/Eng.jsx';
import './index.css'


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ESP />} />
        <Route path="/ENG" element={<ENG />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
