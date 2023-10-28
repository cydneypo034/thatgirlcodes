import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../one-resource/OneResource.css';

class OneResource extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resource: {}
        }; 
    }

    fetchOneResource = () => {
        fetch('https://that-girl-codes.onrender.com/api/resources/' + this.props.match.params.id)
            .then(res => res.json())
            .then(data => {
                this.setState({ resource: data })
                console.log(data);
                })
                .catch(err => {
                    console.log("error in displaying resource")
                })
    }

    componentDidMount(){
        this.fetchOneResource();
    }

    onDeleteResource(id) {
        const deletedUser = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        fetch('https://that-girl-codes.onrender.com/api/resources/'+ id, deletedUser)
        .then(() => {
            this.props.history.push("/resources");
            console.log('removed')
        })
        .catch(err => {
            console.log("error deleting resource")
        })
    }

    render() {

        const resource = this.state.resource;
        const id = this.props.match.params.id;

        let OneResource = 
            <div className="container">
                <Card className="text-center" style={{ backgroundColor: '#282828', 
                boxShadow: ".5rem .5rem 3rem rgba(0,0,0,0.2)",
                border: "1px solid white", textAlign: "center"}}>
                <Card.Body>
                <Card.Title style={{color: 'white', fontSize: '40px'}}>
                Are You Sure You Want to Delete?
                </Card.Title>
                <Card.Text style={{color: 'white', fontSize: "20px"}}>Subject Taught: {resource.subjectTaught}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "20px"}}>Book or Website: {resource.bookOrWebsite}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "20px"}}>Book or Subject Title: {resource.bookOrSubjectTitle}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "20px"}}>Reviews and Ratings: {resource.reviewAndRating}</Card.Text>
                        <a href="/resources" className='home-resource-button'>
                        <Button variant="outline-light">Go Back to Resource List</Button>
                        </a> { ' ' }
                        <Button variant="outline-light" className='home-resource-button' 
                        onClick={this.onDeleteResource.bind(this, id)} >Delete This Resource</Button>
                </Card.Body>
                </Card>
            </div>
        
        return (
            <div>
                <div className='container'>
                <div className='card-wrapper'>{OneResource}</div>
                </div>
            </div>
        )
    }
}

export default OneResource;