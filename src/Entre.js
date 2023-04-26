import React, { Component } from 'react';
import './stylesheets/Entre.css';

class Entre extends Component {
    render() {
        return (
            <div className="blog-post-body">
                <h1 id="title">“Entre” by Photographer Desiré van den Berg</h1>
                <p>A beautiful new photobook from Dutch photographer Desiré van den Berg (previously featured here). “Entre” is a docufiction about the Entrepotbrug, a unique building above the Borneohaven in Amsterdam where van den Berg has lived in recent years. The book not only captures the retro-futuristic character of the serpentine building with its round windows and spiral staircases, it sheds light on the lives behind the outer walls through still lifes and portraits of some of van den Berg’s neighbours. Interspersed with drawings by the architect and notes by van den Berg herself, “Entre” offers a personal portrait of a time and place. See more images below.</p>
                <div className="image-container"><img src="painting_4.jpg"></img></div>
            </div>
        )
    }
}

export default Entre;