import React, {Component} from 'react';
import '../resources/AllResources.css';

export default class ShowResources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: [],
        };
    }

    fetchResources = () => {
        fetch('/resources')
            .then(response => response.json())
            .then(data => {
                
            })
    }

    render() {
        return (
            <div className='container'>
                <h1 className='resources-main-text'>Our Resources</h1>
                <p className="resources-pg-text">
                For everyone who wants to learn new technologies or to simply learn how to code, here at That Girl Codes, we have a library of resources
                where learning to code is a priority. Feel free to view all the resources our community contributes with some being resources that 
                we all know and love and others that may be new.
                </p>
                

            </div>
        )
    }
}