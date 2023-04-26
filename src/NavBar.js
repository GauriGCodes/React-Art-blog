import React, { Component } from "react";
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            artNewsHeadlines: []
        };
    }

    componentDidMount() {
        this.loadData()
        setInterval(this.loadData, 60000);
    }
    async loadData() {
        fetch("https://newsapi.org/v2/everything?q=painting&apiKey=c886c00247d9401ea1abf780a341ad39")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        artNewsHeadlines: result.articles
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };




    render() {
        const { error, isLoaded, artNewsHeadlines } = this.state;
        if (error) {
            return <div className="artHeadline">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="artHeadline">Loading...</div>;
        } else {
            return (
                <div className="artHeadline">
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