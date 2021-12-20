import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
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

          <Routes>
            <Route path="/" element={<ShowHome />} />
            <Route path="/resources" element={<ShowResources />}/>
            <Route path="/one-resource/:id" element={<OneResource />}/>
            <Route path="/create-resources" element={<CreateResources />}/>
            <Route path="edit-resources" element={<EditResources />}/> 
          </Routes>  
       </Router>
        </div>

      );
  }
}

export default App;
