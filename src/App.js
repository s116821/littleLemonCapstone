import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
