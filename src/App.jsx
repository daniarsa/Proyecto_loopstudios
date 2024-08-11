import React from 'react';
import Navbar from './components/Nabvar';
import Header from './components/Header';
import Footer from './components/Footer';
import Section_info from './components/Section_info';
import Main from './components/Main';
import './styles/App.scss';
import './styles/Global.scss';

const App = () => {
  return (
    <div className="app">
      <div className="background">
        <Navbar />
        <Header />
      </div>
      <div>
      {/* <Section_info /> */}
      <Main />
      </div>
    <Footer />
    </div>
  );
};

export default App;
