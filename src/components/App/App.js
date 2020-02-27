import React from 'react';
import { Router, Link } from "@reach/router";
import Home from "../Home/Home";
import NotFound404 from "../NotFound404/NotFound404";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import './App.scss';

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
      <NotFound404 default/>
      <Home path="/" />
    </Router>
    <Footer />
    </div>
  );
}

export default App;
