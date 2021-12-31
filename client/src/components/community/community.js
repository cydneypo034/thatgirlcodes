import React from 'react';
import {Button} from 'react-bootstrap';
import CommunityCard from './communitycard.js';
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
            fetch('/api/community')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    community: data })
                console.log(data)
            }).catch(error => {
                console.log("error in displaying community")
            });
        }

    render() {
        const community = this.state.community;
        let communityList;

        communityList = community.map((community, key) => 
           <CommunityCard community={community} key={key} /> 
        );

        return (
            <div>
                <div className='container'>
                    <h1 className='community-main-text'>Our Community</h1>
                    <p className="community-pg-text">
                    Welcome to our thriving communtiy at That Girl Codes. From software engineers to data scientists, we have
                    women from all kinds of walks of life within the tech space. Feel free to add yourself and network with one another to grow your 
                    network with women who are doing amazing work in all kinds of tech fields.
                    </p>

                    <div className='buttons-community'>
                        <a href="/" className='home-resource-button'>
                            <Button variant="outline-light">Home</Button></a> {' '}
                        <a href="/create-new-user" className='add-resource-button'>
                            <Button variant="outline-light">Add Yourself to Our Community</Button></a>
                    </div>
                </div>

                <div className="container">
                    <div className="card-wrapper">{communityList}</div>
                </div>
            
            </div>
            
        )
    }
}

export default ShowCommunity;