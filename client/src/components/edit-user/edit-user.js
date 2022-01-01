import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import '../edit-user/edit-user.css';

class EditUser extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            age: '',
            schoolAttended: '',
            currentCareer: ''
        }
    }

    getUserToEdit = () => {
        fetch('/api/community/' + this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                this.setState({
                        name: data.name,
                        age: data.age,
                        schoolAttended: data.schoolAttended,
                        currentCareer: data.currentCareer
                    })
                console.log(data)
            })
            .catch(err => {
                console.log("error getting user to edit")
            })
    }

    componentDidMount() {
        this.getUserToEdit();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const UpdatedUser = {
            name: this.state.name,
            age: this.state.age,
            schoolAttended: this.state.schoolAttended,
            currentCareer: this.state.currentCareer
        }

        const id = this.props.match.params.id;

        fetch('/api/community/' + id, {
            method: 'PUT',
            body: JSON.stringify(UpdatedUser),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                name: data.name,
                age: data.age,
                schoolAttended: data.schoolAttended,
                currentCareer: data.currentCareer
            })
            this.props.history.push('/one-user/'+id)
            console.log(data);
        })
    }
    
    render() {
        return (
            <div className='container'>
                <h1 className='home-main-text'>Edit Your Entry</h1>

                <div className="buttons-community">
                <a href="/community" className='home-resource-button'>
                        <Button variant="outline-light">Back to Community</Button></a> {' '}
                <a href="/" className='home-resource-button'>
                        <Button variant="outline-light">Home</Button></a> {' '}
                </div>

                <Form onSubmit={this.onSubmit} style={{}}>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color: "white"}}>Name</Form.Label>
                    <Form.Control type="text" 
                    name="name" 
                    placeholder="Enter Your Name Here..."
                    value={this.state.name}
                    onChange={this.onChange}
                     />
                    <Form.Text className="text-muted">
                    Feel free to enter your nickname if you're not into formals.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color: "white"}}>Age</Form.Label>
                    <Form.Control type="text" 
                    name="age" 
                    placeholder="Enter Your Age..."
                    value={this.state.age}
                    onChange={this.onChange}
                     />
                    <Form.Text className="text-muted">
                    If you don't feel comfortable putting your age, you can type whatever number comes to mind.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color: "white"}}>School Attended</Form.Label>
                    <Form.Control type="text" 
                    name="schoolAttended" 
                    placeholder="Example: University of Random School..."
                    value={this.state.schoolAttended}
                    onChange={this.onChange}
                     />
                    <Form.Text className="text-muted">
                    This could include formal and trade schools, and bootcamps. Youtube University is also acceptable.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{color: "white"}}>Current Career</Form.Label>
                    <Form.Control type="text" 
                    name="currentCareer" 
                    placeholder="Example: Software Developer"
                    value={this.state.currentCareer}
                    onChange={this.onChange}
                     />
                    <Form.Text className="text-muted">
                    You can also put what career you'd like to transition toward.
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

export default EditUser;