import React, { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import "aos/dist/aos.css";
import AOS from 'aos'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
