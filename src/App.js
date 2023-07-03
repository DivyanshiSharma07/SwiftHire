import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import IntroDetail from './components/IntroDetail';
import Features from './components/Features';
import Client from './components/Client';
import BottomLine from './components/BottomLine';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import CandidateSearchPage from './components/CandidateSearchPage';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Candidates" element={<CandidateSearchPage />} />
      </Routes>
      <Footer />
      <div className="footer-bottom-line">
        <p className="rights-reserved">All rights reserved. © 2023 SwiftHire</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Intro />
      <IntroDetail />
      <Features />
      <Client />
      <BottomLine />
    </>
  );
};

export default App;
