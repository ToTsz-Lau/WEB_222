import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './HomePage';
import NewPage from './NewPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/new" element={<NewPage />} />
    </Routes>
  );
}

// Button function for App page
function NavigateButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new'); // Navigate to New Page
  };

  return <button onClick={handleClick}>Go to New Page</button>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            {/* Add the button to the paragraph */}
            <NavigateButton />
          </p>
        </header>
        {/* Use the separate router setup */}
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
