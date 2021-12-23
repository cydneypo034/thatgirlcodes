import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../resources/AllResources.css';

const ResourceCard = (props) => {
    const resource = props.resource;

    return (
        <div className="card-resource">
            <div className="col">
            <Card style={{ width: '18rem', backgroundColor: '#282828', 
            boxShadow: ".5rem .5rem 3rem rgba(0,0,0,0.2)",
            border: "1px solid white"}} className="card">
            <Card.Body>
                <Card.Title>
                    <Link to={`/one-resource/${resource._id}`} 
                    style={{color: 'white', textDecoration: 'none'}}>
                        Subject Taught: {resource.subjectTaught}</Link>
                    </Card.Title>
                <Card.Text style={{color: 'white'}}>Book or Website: {resource.bookOrWebsite}</Card.Text>
                <Card.Text style={{color: 'white'}}>Book or Subject Title: {resource.bookOrSubjectTitle}</Card.Text>
                <Card.Text style={{color: 'white'}}>Reviews and Ratings: {resource.reviewAndRating}</Card.Text>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default ResourceCard;