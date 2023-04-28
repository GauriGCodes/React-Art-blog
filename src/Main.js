import './Main.css';
import React, { Component } from 'react';
import blogPostData from './blog_post.xml';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import $ from "jquery";


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        };
    }

    componentDidMount() {
        $.ajax({
            type: "GET",
            url: blogPostData,
            contentType: "application/xml; charset=utf-8",
            datatype: "xml",
            success: function (xml) {
                let posts = [];
                $(xml).find("post").each(function () {
                    let post = {};
                    post.date = $(this).find('date').text();
                    post.title = $(this).find('title').text();
                    post.image_path = $(this).find('image_path').text();
                    post.text = $(this).find('text').text();
                    post.body = $(this).find('body').text();
                    posts.push(post);
                })

                const navLinks = ['/NowhereTONow', '/JamesUlmer', '/AnnaDegnbol', '/Entre'];
                // Updating Blogs with their blog links
                for (let i = 0; i < posts.length; i++) {
                    posts[i].link = navLinks[i];
                }

                this.setState({
                    isLoaded: true,
                    blogPosts: posts
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

    render() {
        const { blogPosts } = this.state;


        return (
            blogPosts.map(blog_posts => (
                <Card className="main-content-cards">
                    <Card.Header id="main-content-heading"><NavLink to={blog_posts.link}><h1>{blog_posts.title}</h1></NavLink></Card.Header>
                    <Card.Body>
                        <Card.Text className="main-content-cards-text">
                            {blog_posts.date}
                        </Card.Text>
                        <Card.Text className="main-content-cards-text">
                            {blog_posts.author}
                        </Card.Text>
                        <Card.Img variant="top" src={blog_posts.image_path} />
                        <Card.Text>
                            {blog_posts.text}
                        </Card.Text>
                        <Card.Text>
                            {blog_posts.body}
                        </Card.Text>

                    </Card.Body>
                </Card >))
        );


    }

}



export default Main;