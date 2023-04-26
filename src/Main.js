import './Main.css';
import React, { Component } from 'react';
import axios from 'axios';
import blogPostData from './blog_post.xml'
import { parseString } from 'xml2js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";


class Main extends Component {




    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        };
    }

    componentDidMount() {
        var self = this;
        axios.get(
            blogPostData,
            { "Content-Type": "application/xml; charset=utf-8" }).then(function (response) {
                console.log(response.data);
                parseString(response.data, (error, result) => {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log(result.blog.post);
                        let updateData = result.blog.post;
                        const navLinks = ['/NowhereTONow', '/JamesUlmer', '/AnnaDegnbol', '/Entre'];
                        // Updating Blogs with their blog links 
                        for (let i = 0; i < updateData.length; i++) {
                            updateData[i].link = navLinks[i];
                        }
                        self.setState({
                            blogPosts: updateData
                        })

                    }
                })

            })
            .catch(function (error) {
                console.log(error);
            })


        console.log(self.blogPosts);
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
                        <Card.Img variant="top" src={blog_posts.summary[0].image_path} />
                        <Card.Text>
                            {blog_posts.summary[0].text}
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