import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import "./assets/styles/global.css";

function App() {
  return (
    <div className="App">
        <Header />
        <Content/>
        <Footer />
    </div>
  );
}

export default App;
