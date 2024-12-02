import React from 'react';
import { useNavigate } from 'react-router-dom';

// Button function for Homepage
function HomepageButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new'); // Navigate to New Page
  };

  return <button onClick={handleClick}>Go to New Page</button>;
}

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Welcome to the homepage.</p>
      <HomepageButton />
    </div>
  );
}

export default Homepage;
