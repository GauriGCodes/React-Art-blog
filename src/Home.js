import NavBar from './NavBar.js';
import Main from './Main.js';
import './stylesheets/Home.css';
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 id="app-heading">Art Blog.</h1>
                </header>
                <div className='app-container'>
                    <div className='main-content'>
                        <Main />
                    </div>

                    <NavBar />

                </div>
                <footer>
                    Copyright@2023
                </footer>
            </div>);
    }
}

export default Home;