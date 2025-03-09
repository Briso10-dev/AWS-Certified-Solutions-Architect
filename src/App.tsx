import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/items/Navbar.tsx'
import Home from './pages/Home.tsx'
import Challenges from './pages/Challenges.tsx'
import IAMCLI from './pages/IamCli.tsx'
import './index.css'

function App() {

  return (
    <>
     <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/iam-cli" element={<IAMCLI />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

    </>
  )
}

export default App
