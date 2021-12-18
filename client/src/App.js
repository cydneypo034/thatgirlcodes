import './App.css';
import React from 'react';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ShowHome from './components/Home.js';
import ShowLadies from './components/AllLadies.js';
import OneLady from './components/OneLady.js';
import CreateLadies from './components/AddNewLady.js';
import EditLadies from './components/EditLady.js';
import ShowResources from './components/AllResources.js';
import OneResource from './components/OneResource.js';
import CreateResources from './components/AddResource.js';
import EditResources from './components/EditResource.js';

class App extends React.Component{
  render() {
     return (
       <div>
         <nav className="nav-bar">
           
         </nav>
       <Router>
          <Routes>
            <Route path="/" element={<ShowHome />} />
            <Route path='/ladies' element={<ShowLadies />}/>
            <Route path="/one-lady/:id" element={<OneLady />} />
            <Route path="/create-ladies" element={<CreateLadies />} />
            <Route path="/edit-ladies" element={<EditLadies/>}/>  
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
