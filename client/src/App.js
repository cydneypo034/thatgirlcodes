import './App.css';
import React from 'react';
import {BrowserRouter as Routes, Route } from 'react-router-dom';
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
        <div className="App">
          <Routes>
            <Route exact path="/">
            <ShowHome />
            </Route>

            <Route path='/ladies'>
            <ShowLadies />
            </Route>

            <Route path="/one-lady/:id">
            <OneLady />
            </Route>

            <Route path="/create-ladies">
            <CreateLadies />
              </Route>

            <Route path="/edit-ladies">
            <EditLadies/>
              </Route>

            <Route path="/resources">
            <ShowResources />
            </Route>

            <Route path="/one-resource/:id">
            <OneResource />
            </Route>

            <Route path="/create-resources">
            <CreateResources />
            </Route>

            <Route path="edit-resources">
            <EditResources />
            </Route>
          </Routes>
        

        </div>
      );
  }
}

export default App;
