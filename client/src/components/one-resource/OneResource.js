import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../one-resource/OneResource.css';
import axios from 'axios';

class OneResource extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resource: {}
        }; 
    }

    componentDidMount(){
        this.fetchOneResource();
    }

    fetchOneResource = () => {
        axios.get('http://localhost:8000/api/resources/'+ this.props)
        .then(res => {
            this.setState({
                resources: res.data
            })
        })
        .catch(err => {
            console.log("error in displaying resource")
        })
    }

    render() {

        let OneResource = 
            <div className="container">
                <Card style={{ width: '48rem', height: '28rem', backgroundColor: '#282828', 
                boxShadow: ".5rem .5rem 3rem rgba(0,0,0,0.2)",
                border: "1px solid white"}}>
                <Card.Body>
                <Card.Title style={{color: 'white', fontSize: '30px'}}>
                    Subject Taught: {this.state.resource.subjectTaught}
                    </Card.Title>
                <Card.Text style={{color: 'white'}}>Book or Website: {this.state.resource.bookOrWebsite}</Card.Text>
                <Card.Text style={{color: 'white'}}>Book or Subject Title: {this.state.resource.bookOrSubjectTitle}</Card.Text>
                <Card.Text style={{color: 'white'}}>Reviews and Ratings: {this.state.resource.reviewAndRating}</Card.Text>
                <a href="/resources" className='home-resource-button'>
                        <Button variant="outline-light">Go Back to Resource List</Button>
                        </a> 
                </Card.Body>
                </Card>
            </div>
        
        return (
            <div>
                <h1 className='home-main-text'>Here's a Resource We Love</h1>
                <div className='card-wrapper'>{OneResource}</div>
            </div>
        )
    }
}

export default OneResource;