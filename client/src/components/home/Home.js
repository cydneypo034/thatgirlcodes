import React, {Component} from 'react';
import WomenLaughing from '../project-images/womenlaughing.jpg'
import WomanOnLaptop from '../project-images/womanonlaptop.jpg';
import '../home/Home.css';

export default class ShowHome extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='home-main-text'>That Girl Codes</h1>
                <p className="home-pg-text">
                Here at That Girl Codes, we pride ourselves in being a hub for women who want to code and resources to help them learn to code so they can earn high paying jobs as software engineering, data science and ux designers.
                Click below to add yourself to our growing community of women and add your favorite resource that you’d like to use to learn coding whether that’s a website or book. Explore below and happy hacking :)
                </p>

                <div className='home-link-choices'>
                    <a href="/community"><h6 className="over-image-text-1">View Our Community</h6></a>
                    <img src={WomenLaughing} alt='black-women-laughing' className="women-laughing-image"/>
                    <a href="/resources"><h6 className="over-image-text-2">View Our Resources</h6></a>
                    <img src={WomanOnLaptop} alt="black-woman-on-laptop" className='woman-laptop-image' />
                </div>
            </div>
            
               
        )
    }
}