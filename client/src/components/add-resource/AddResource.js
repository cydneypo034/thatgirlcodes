import React, {Component} from 'react';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';
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
                <h1 className='home-main-text'>Add Your Favorite Resource</h1>
                <p></p>

                <div className="buttons-resources">
                <a href="/resources" className='home-resource-button'>
                        <Button variant="outline-light">Back to Resources</Button></a> {' '}
                <a href="/" className='home-resource-button'>
                        <Button variant="outline-light">Home</Button></a> {' '}
                </div>

                <Form>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color: "white"}}>Subject Taught</Form.Label>
                    <Form.Control type="text" 
                    name="subjectTaught" 
                    placeholder="JavaScript, Python, etc."
                     />
                    <Form.Text className="text-muted">
                    Share what subject the resource primarily teaches on.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label style={{color: "white"}}>Book or Website</Form.Label>
                    <Form.Control type="text" 
                    name="bookOrWebsite" 
                    placeholder="Intro to HTML or www.example.com"
                     />
                    <Form.Text className="text-muted">
                    This can be either a website or a book.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label style={{color: "white"}}>Book or Subject Title</Form.Label>
                    <Form.Control type="text" 
                    name="bookOrSubjectTitle" 
                    placeholder="Intro to HTML by Joe Brown"
                     />
                    <Form.Text className="text-muted">
                    Be sure to include the official resource name and the authors/contributors. 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{color: "white"}}>Review</Form.Label>
                <Form.Control as="textarea" rows={3} 
                type="text" 
                name="reviewAndRating" 
                placeholder="Write your honest review here."
                />
                <Form.Text className="text-muted">
                    Write your honest review of what you thought of the course you took or book you read.
                    </Form.Text>
                </Form.Group>

                <Button variant="outline-light" className="buttons-resources" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}