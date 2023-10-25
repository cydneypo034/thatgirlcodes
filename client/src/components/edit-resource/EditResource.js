import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
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
        fetch('https://that-girl-codes.onrender.com/api/resources/' + this.props.match.params.id)
            .then(res => res.json())
                .then(data => {
                    this.setState({
                        subjectTaught: data.subjectTaught,
                        bookOrWebsite: data.bookOrWebsite,
                        bookOrSubjectTitle: data.bookOrSubjectTitle,
                        reviewAndRating: data.reviewAndRating
                    })
                    console.log(data);
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

        const UpdatedResource = {
            subjectTaught: this.state.subjectTaught,
            bookOrWebsite: this.state.bookOrWebsite,
            bookOrSubjectTitle: this.state.bookOrSubjectTitle,
            reviewAndRating: this.state.reviewAndRating
        }

        const id = this.props.match.params.id;

        fetch('/api/resources/' + id, {
            method: 'PUT',
            body: JSON.stringify(UpdatedResource),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                subjectTaught: data.subjectTaught,
                bookOrWebsite: data.bookOrWebsite,
                bookOrSubjectTitle: data.bookOrSubjectTitle,
                reviewAndRating: data.reviewAndRating
            })
            this.props.history.push('/one-resource/'+id)
            console.log(data);
        })
        
    }
    render() {
        return (
            <div class="container">
                <h1 className='home-main-text'>Edit Your Favorite Resource</h1>

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