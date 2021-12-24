import React from 'react';
import axios from 'axios';
import './community.css';

class ShowCommunity extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            community: []
        }
    }
        componentDidMount() {
            this.fetchCommunity();
        }

        fetchCommunity = () => {
            axios('http://localhost:8000/api/community')
            .then(res => {
                this.setState({
                    isLoaded: true,
                    community: res.data
                }).catch(error => {
                    console.log("error displaying community")
                });
            })
        }

    render() {
        return (
            <div className='container'>
                <h1 className='community-main-text'>Our Community</h1>
                <p className="community-pg-text">
                Welcome to our thriving communtiy at That Girl Codes. From software engineers to data scientists, we have
                women from all kinds of walks of life within the tech space. Feel free to add yourself and network with one another to grow your 
                network with women who are doing amazing work in all kinds of tech fields.
                </p>

            </div>
        )
    }
}

export default ShowCommunity;