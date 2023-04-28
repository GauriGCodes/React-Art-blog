import React, { Component } from "react";
import './NavBar.css';
import { NavLink } from "react-router-dom";
import $ from "jquery";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            artNewsHeadlines: []
        };
    }


    fetchApiData = () => {
        $.ajax({
            url: "https://newsapi.org/v2/everything?q=painting&apiKey=",
            type: "GET",
            dataType: "json",
            success: function (response) {
                this.setState({
                    isLoaded: true,
                    artNewsHeadlines: response.articles
                });
            }.bind(this),
            error: function (e) {
                this.setState({
                    isLoaded: true,
                    error: e
                })
            }.bind(this)
        });
    }


    componentDidMount() {
        this.fetchApiData();
        this.interval = setInterval(() => {
            this.fetchApiData()
        }, 60000);

    };


    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        const { error, isLoaded, artNewsHeadlines } = this.state;
        if (error) {
            return <div className="artHeadline">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="artHeadline">Loading...</div>;
        } else {
            return (
                <div className="artHeadline">
                    <NavLink to="/"><h1>Home</h1></NavLink>
                    <h1>Latest in the Art World</h1>
                    <ol>
                        {artNewsHeadlines.map(article => (
                            <li key={article.title}>
                                <a href={article.url}>{article.title}</a>
                            </li>
                        ))}
                    </ol>
                </div>
            );
        }
    }
}

export default NavBar;
