import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import '../edit-resource/EditResource.css';

class EditResources extends Component {
    constructor(props) {
        super(props);

        this.state = {
            subjectTaught: '',
            bookOrWebsite: '',
            bookOrSubjectTitle: '',
            reviewAndRating: ''
        }
    }

    getResourceForEdit = () => {
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8000/api/resources/${id}`)
            .then(res => {
                this.setState({
                    subjectTaught: res.data.subjectTaught,
                    bookOrWebsite: res.data.bookOrWebsite,
                    bookOrSubjectTitle: res.data.bookOrSubjectTitle,
                    reviewAndRating: res.data.reviewAndRating
                })
            })
            .catch(err => {
                console.log("error getting resource to edit")
            })
    }

    componentDidMount() {
        this.getResourceForEdit();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            subjectTaught: this.state.subjectTaught,
            bookOrWebsite: this.state.bookOrWebsite,
            bookOrSubjectTitle: this.state.bookOrSubjectTitle,
            reviewAndRating: this.state.reviewAndRating
        }

        const id = this.props.match.params.id;

        axios
        .put(`http://localhost:8000/api/resources/${id}`, data)
        .then(res => {
            this.props.history.push("/one-resource/"+id)
        })
        .catch(err => {
            console.log("Error in Editing Resource!")
        })
    }
    render() {
        return (
            <div>
                <h1 className='home-main-text'>Add Your Favorite Resource</h1>

                <div className="buttons-resources">
                <a href="/resources" className='home-resource-button'>
                        <Button variant="outline-light">Back to Resources</Button></a> {' '}
                <a href="/" className='home-resource-button'>
                        <Button variant="outline-light">Home</Button></a> {' '}
                </div>

                <Form onSubmit={this.onSubmit} style={{}}>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1" >
                    <Form.Label style={{color: "white"}}>Subject Taught</Form.Label>
                    <Form.Control type="text" 
                    name="subjectTaught" 
                    placeholder="JavaScript, Python, etc."
                    value={this.state.subjectTaught}
                    onChange={this.onChange}
                     />
                    <Form.Text className="text-muted">
                    Share what subject the resource primarily teaches on.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color: "white"}}>Book or Website</Form.Label>
                    <Form.Control type="text" 
                    name="bookOrWebsite" 
                    placeholder="Intro to HTML or www.example.com"
                    value={this.state.bookOrWebsite}
                    onChange={this.onChange}
                     />
                    <Form.Text className="text-muted">
                    This can be either a website or a book.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color: "white"}}>Book or Subject Title</Form.Label>
                    <Form.Control type="text" 
                    name="bookOrSubjectTitle" 
                    placeholder="Intro to HTML by Joe Brown"
                    value={this.state.bookOrSubjectTitle}
                    onChange={this.onChange}
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
                value={this.state.reviewAndRating}
                onChange={this.onChange}
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

export default EditResources ;