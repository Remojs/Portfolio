// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ESP from '../views/Esp.jsx';
import '../index.css'


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ESP />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
