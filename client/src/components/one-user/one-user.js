import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class OneUser extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {}
        }
    }
    fetchOneUser = () => {
        const id = this.props.match.params.id;
        fetch(`/api/community/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ user: data })
                console.log(data);
                })
                .catch(err => {
                    console.log("error in displaying user")
                })
    }


    componentDidMount() {
        this.fetchOneUser();
    }


    render() {

        const user = this.state.user;
        const id = this.props.match.params.id;

        let OneUser = 
            <div className="container">
                <Card className="text-center" style={{ backgroundColor: '#282828', 
                boxShadow: ".5rem .5rem 3rem rgba(0,0,0,0.2)",
                border: "1px solid white", textAlign: "center"}}>
                <Card.Body>
                <Card.Title style={{color: 'white', fontSize: '50px'}}>
                Meet Our User
                    </Card.Title>
                <Card.Text style={{color: 'white', fontSize: "30px"}}>Name: {user.name}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "30px"}}>Age: {user.age}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "30px"}}>School Attended: {user.schoolAttended}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "30px"}}>Current Career: {user.currentCareer}</Card.Text>
                        <a href="/community" className='home-resource-button'>
                        <Button variant="outline-light">Go Back to Community</Button>
                        </a> { ' ' }
                        <Link to={`/edit-user/${id}`} className='home-resource-button'>
                        <Button variant="outline-light">Edit This User</Button>
                        </Link> { ' ' }
                        <Link to={`/delete-user/${id}`} className="home-resource-button">
                        <Button variant="outline-light">Delete This User</Button>
                        </Link>
                </Card.Body>
                </Card>
            </div>

        return (
            <div>
                <div className='container'>
                <div className='card-wrapper'>{OneUser}</div>
                </div>
            </div>
        )
    }
}

export default OneUser;