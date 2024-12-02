import React from 'react';
import { useNavigate } from 'react-router-dom';

// Button function for New Page
function NewPageButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigate to Homepage
  };

  return <button onClick={handleClick}>Go to Homepage</button>;
}

function NewPage() {
  return (
    <div>
      <h1>New Page</h1>
      <p>Welcome to the new page.</p>
      <NewPageButton />
    </div>
  );
}

export default NewPage;
