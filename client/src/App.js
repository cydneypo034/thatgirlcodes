import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import ShowHome from './components/home/Home.js';
import NavigateBar from './components/navbar/navbar';
import ShowResources from './components/resources/AllResources.js';
import OneResource from './components/one-resource/OneResource.js';
import CreateResources from './components/add-resource/AddResource.js';
import EditResources from './components/edit-resource/EditResource.js';

class App extends React.Component{
  render() {
     return (
       <div>
       <Router>         
         <NavigateBar />

            <Route exact path="/" component={ShowHome} />
            <Route path="/resources" component={ShowResources}/>
            <Route path="/one-resource/:id" component={OneResource}/>
            <Route path="/create-resources" component={CreateResources}/>
            <Route path="edit-resources" component={EditResources}/> 
       </Router>
        </div>

      );
  }
}

export default App;
