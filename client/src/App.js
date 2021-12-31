import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import ShowHome from './components/home/Home.js';
import NavigateBar from './components/navbar/navbar';
import ShowResources from './components/resources/AllResources.js';
import OneResource from './components/one-resource/OneResource.js';
import CreateResources from './components/add-resource/AddResource.js';
import EditResources from './components/edit-resource/EditResource.js';
import DeleteResource from './components/delete-resource/deleteresource.js';
import ShowUsers from './components/community/community.js';
import OneUser from './components/one-user/one-user.js';
import CreateUser from './components/add-user/add-newuser.js';
import EditUser from './components/edit-user/edit-user.js';
import DeleteUser from './components/delete-user/deleteuser.js';

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
            <Route path="/edit-resources/:id" component={EditResources}/>
            <Route path="/delete-resource/:id" component={DeleteResource} /> 
            <Route path="/community" component={ShowUsers}/>
            <Route path="/one-user/:id" component={OneUser}/>
            <Route path="/create-new-user" component={CreateUser}/>
            <Route path="/edit-user/:id" component={EditUser}/> 
            <Route path="/delete-user/:id" component={DeleteUser} />
       </Router>
        </div>

      );
  }
}

export default App;
