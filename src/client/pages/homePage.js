import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Home component </div>
      <button onClick={() => { console.log('the button is clicked'); }}>The button </button>
    </div>
  );
};

export default {
  component: Home,
};
