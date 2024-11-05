import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
