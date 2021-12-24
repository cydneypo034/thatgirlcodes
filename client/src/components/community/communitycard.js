import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../community/community.css';

const CommunityCard = (props) => {
    const community = props.community;

    return (
        <div className="card-resource">
            <div className="col">
            <Card style={{ width: '18rem', backgroundColor: '#282828', 
            boxShadow: ".5rem .5rem 3rem rgba(0,0,0,0.2)",
            border: "1px solid white"}} className="card">
            <Card.Body>
            <Card.Img variant="top" src={community.photo} />
                <Card.Title>
                    <Link to={`/one-community/${community._id}`} 
                    style={{color: 'white', textDecoration: 'none'}}>
                        Name: {community.name}</Link>
                    </Card.Title>
                <Card.Text style={{color: 'white'}}>Age: {community.age}</Card.Text>
                <Card.Text style={{color: 'white'}}>School Attended: {community.schoolAttended}</Card.Text>
                <Card.Text style={{color: 'white'}}>Current Career: {community.currentCareer}</Card.Text>

            </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default CommunityCard;