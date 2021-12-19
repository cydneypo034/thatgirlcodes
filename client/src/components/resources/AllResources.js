import React, {Component} from 'react';
import './AllResources.css';
import {Button} from 'react-bootstrap';
import ResourceCard from './AllResourcesCard.js';

export default class ShowResources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: [],
        };
    }

    componentDidMount() {
        this.fetchResources();
    }

    fetchResources = () => {
        fetch('http://localhost:8000/api/resources')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    resources: data })
                console.log(data)
            }).catch(error => {
                console.log("error in displaying resources")
            });
    }

    render() {
        const resources = this.state.resources;
        let resourceList;

        resourceList = resources.map((resource, key) => 
           <ResourceCard resource={resource} key={key} /> 
        );

        return (
            <div className='container'>
                <h1 className='resources-main-text'>Our Resources</h1>
                <p className="resources-pg-text">
                For everyone who wants to learn new technologies or to simply learn how to code, here at That Girl Codes, we have a library of resources
                where learning to code is a priority. Feel free to view all the resources our community contributes with some being resources that 
                we all know and love and others that may be new.
                </p>
                
                <div className='buttons-resources'>
                    <a href="/" className='home-resource-button'>
                        <Button variant="outline-light">Home</Button></a> {' '}
                    <a href="/create-ladies" className='add-resource-button'>
                        <Button variant="outline-light">Add Your Favorite Resource</Button></a>
                </div>
              
                <div className='card-wrapper'>{resourceList}</div>
            </div>
        )
    }
}