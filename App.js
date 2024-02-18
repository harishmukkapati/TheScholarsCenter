import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './Page'; // Import your Page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
