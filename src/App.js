import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className='app'>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
