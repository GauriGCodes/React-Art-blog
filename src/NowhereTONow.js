import React, { Component } from 'react';
import './stylesheets/NowhereTONow.css';

class NowhereTONow extends Component {
    render() {
        return (
            <div className="blog-post-body">
                <h1 id="title">“Nowhere to Now” by Artist Tom DesLongchamp</h1>
                <p>Seattle-based artist Tom DesLongchamp turns 8 years of portrait-making into an intimate art book. “Nowhere to Now” charts Tom’s evolution from doodling during breaks at work to full-time devotion. The intro and section titles share details about Tom’s approach to creativity in general, but also include specific information about his unique ink/fingerprint/masking technique. The book offers an intimate view of the intricate textures and colourful layering that make up Tom’s artistic process. Through playful explorations and some outright failures, “Nowhere to Now” speaks to the purpose and possibilities of keeping a pocket sketchbook as we see firsthand how Tom’s work progressed over time.

                    Tom DesLongchamp was selected as one of the winners of our 2022 Art & Photo Book Awards! With support from Artmobile, we helped Tom turn 8 years of mark-making into “Nowhere to Now”! If you want the opportunity to publish a book of your own work, you can apply for our 2023 Art & Photo Book Awards here.

                    See more from “Nowhere to Now” below!</p>
                <div className="image-container"><img src="painting_1.jpg" alt="painting"></img></div>
            </div>)
    }


}

export default NowhereTONow;