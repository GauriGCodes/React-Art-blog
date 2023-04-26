import Home from "./Home.js";
import NowhereTONow from "./NowhereTONow.js";
import Entre from "./Entre.js";
import JamesUlmer from "./JamesUlmer.js";
import AnnaDegnbol from "./AnnaDegnbol.js";

import { HashRouter, Route, Routes } from 'react-router-dom';
import './stylesheets/Home.css';
import { Component } from 'react';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/NowhereTONow/" element={<NowhereTONow />} />
                    <Route path="/Entre/" element={<Entre />} />
                    <Route path="/JamesUlmer/" element={<JamesUlmer />} />
                    <Route path="/AnnaDegnbol/" element={<AnnaDegnbol />} />
                </Routes>


            </HashRouter >
        );
    }

};

export default App;