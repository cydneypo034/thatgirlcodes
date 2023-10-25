import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../one-resource/OneResource.css';

class OneResource extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resource: {}
        }; 
    }

    fetchOneResource = () => {
        const id = this.props.match.params.id;
        fetch('/api/resources/' + id)
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
                Here's a Resource We Love
                </Card.Title>
                <Card.Text style={{color: 'white', fontSize: "20px"}}>Subject Taught: {resource.subjectTaught}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "20px"}}>Book or Website: {resource.bookOrWebsite}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "20px"}}>Book or Subject Title: {resource.bookOrSubjectTitle}</Card.Text>
                <Card.Text style={{color: 'white', fontSize: "20px"}}>Reviews and Ratings: {resource.reviewAndRating}</Card.Text>
                        <a href="/resources" className='home-resource-button'>
                        <Button variant="outline-light">Go Back to Resource List</Button>
                        </a> { ' ' }
                        <Link to={`/edit-resources/${id}`} className='home-resource-button'>
                        <Button variant="outline-light">Edit This Resource</Button>
                        </Link> { ' ' }
                        <Link to={`/delete-resource/${id}`} className="home-resource-button">
                        <Button variant="outline-light" className='home-resource-button'>Delete This Resource</Button>
                        </Link>
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