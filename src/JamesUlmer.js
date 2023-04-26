import React, { Component } from 'react';
import './stylesheets/JamesUlmer.css';
class JamesUlmer extends Component {
    render() {
        return (
            <div className="blog-post-body">
                <h1 id="title">Artist Spotlight: James Ulmer</h1>
                <p>Aselection of recent work by Queens, New York-based artist James Ulmer. Utilizing a simple and universal rudimentary visual vocabulary, Ulmer’s paintings feature childlike elements—people, animals, still lifes, and landscapes—rendered with sophistication and a minimalist restraint. With a BFA in Illustration and Design from The University of the Arts in Philadelphia, Ulmer has exhibited work both nationally and internationally.

                    See more from James Ulmer below!</p>
                <div className="image-container"><img src="painting_2.jpg"></img></div>
            </div>)
    }
}
export default JamesUlmer;