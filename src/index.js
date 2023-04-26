import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Home from "./Home.js";
import NowhereTONow from "./NowhereTONow.js";
import Entre from "./Entre.js";
import JamesUlmer from "./JamesUlmer.js";
import AnnaDegnbol from "./AnnaDegnbol.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/NowhereTONow" element={<NowhereTONow />} />
        <Route path="/Entre" element={<Entre />} />
        <Route path="/JamesUlmer" element={<JamesUlmer />} />
        <Route path="/AnnaDegnbol" element={<AnnaDegnbol />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
