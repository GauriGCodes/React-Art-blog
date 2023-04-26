import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Home.js";
import NowhereTONow from "./NowhereTONow.js";
import Entre from "./Entre.js";
import JamesUlmer from "./JamesUlmer.js";
import AnnaDegnbol from "./AnnaDegnbol.js";


function App() {
  return (
    <>
      <Router>
         <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/NowhereTONow" element={<NowhereTONow />} />
          <Route path="/Entre" element={<Entre />} />
          <Route path="/JamesUlmer" element={<JamesUlmer />} />
          <Route path="/AnnaDegnbol" element={<AnnaDegnbol />}/>
        </Routes>
        </Router>
    </>);
}

export default App;