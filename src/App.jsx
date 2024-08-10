import React from 'react';
import Navbar from './components/Nabvar';
import './styles/App.scss';
import './styles/Global.scss';

const App = () => {
  return (
    <div className="app">
      <div className="background">
        <Navbar />
      </div>

    </div>
  );
};

export default App;
