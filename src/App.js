import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Display from './Display';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;
