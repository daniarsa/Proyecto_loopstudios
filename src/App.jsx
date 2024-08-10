import React from 'react';
import Navbar from './components/Nabvar';
import Header from './components/Header';
import './styles/App.scss';
import './styles/Global.scss';

const App = () => {
  return (
    <div className="app">
      <div className="background">
        <Navbar />
        <Header />
      </div>

    </div>
  );
};

export default App;
