import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component{
  render() {
     return (
        <div className="App">
        
        <Router>
          <Route exact path="/" element={<ShowHome />}/>
          <Route path='/ladies' element={<ShowLadies />}/>
          <Route path="/one-lady/:id" element={<OneLady />} />
          <Route path="/create-ladies" element={<CreateLadies />} />
          <Route path="/edit-ladies" element={<EditLadies/>} />       
          <Route path="/resources" element={<ShowResources />}/>
          <Route path="/one-resource/:id" element={<OneResource />} />
          <Route path="/create-resources" element={<CreateResources />} />
          <Route path="edit-resources" element={<EditResources />} />
          </Router>
        </div>
      );
  }
}

export default App;
