import React, { Component } from 'react';
import './stylesheets/AnnaDegnbol.css';
class AnnaDegnbol extends Component {
    render() {
        return (
            <div className="blog-post-body">
                <h1 id="title">Artist Spotlight: Anna Degnbol</h1>
                <p>A selection of recent work by Copenhagen-based illustrator, graphic designer, and comic artist Anna Degnbol (previously featured here). Degnbol is interested in colours, textures, and moods. Inspired by a mix of sci-fi, fantasy worlds, and fashion illustration, her work aims to create “tender and magic moments in time.” Check out more of Degnbol’s work below!</p>
                <div className="image-container"><img src="painting_3.jpg" alt="painting"></img></div>
            </div>
        )
    }
}

export default AnnaDegnbol;