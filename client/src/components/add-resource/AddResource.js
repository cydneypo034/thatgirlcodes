import React, {Component} from 'react';
import axios from 'axios';
import '../add-resource/AddResource.css';

export default class CreateResources extends Component {
    constructor() {
        super();

        this.state = {
            subjectTaught: '',
            bookOrWebsite: '',
            bookOrSubjectTitle: '',
            reviewAndRating: ''
        }
    }
    render() {
        return (
            <div>
                <h1 className='home-main-text'>Hello World!</h1>
            </div>
        )
    }
}