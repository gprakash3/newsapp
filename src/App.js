// import logo from './logo.svg';
import './App.css';
// Switch has been changed to Routes in latest version
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom"

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

export default class App extends Component {
  // function App(){
  name = 'Prakash';
  apikey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        {/* <News pageSize= {5} apikey={this.apikey} category={"health"} country={"in"}/> */}
      <Router>
        <Navbar />
        <Routes>
          {/* we will give component which we want to send if /general endpoint hit */}
          {/* if we do not give special key then while clicking the links it will hit the endpoint but it will not remount(page will not reload) */}
        
        {/* <Route exact path='/'><News pageSize= {5} apikey={this.apikey} key="general" category="general" country="in"/></Route>
        <Route exact path='/health'><News pageSize= {5} apikey={this.apikey} key="health" category="health" country="in"/></Route>
        <Route exact path='/entertainment'><News pageSize= {5} apikey={this.apikey} key="entertainment" category="entertainment" country="in"/></Route>
        <Route exact path='/science'><News pageSize= {5} apikey={this.apikey} key="science" category="science" country="in"/></Route>
        <Route exact path='/technology'><News pageSize= {5} apikey={this.apikey} key="technology" category="technology" country="in"/></Route>
        <Route exact path='/sport'><News pageSize= {5} apikey={this.apikey} key="sport" category="sport" country="in"/></Route>
        <Route exact path='/business'><News pageSize= {5} apikey={this.apikey} key="business" category="business" country="in"/></Route> */}

        {/* above syntaxs not working */}
        <Route exact path='/' element={<News pageSize= {5} apikey={this.apikey} key="general" category="general" country="in"/>}  />
        <Route exact path='/health' element={<News pageSize= {5} apikey={this.apikey} key="health" category="health" country="in"/>}  />
        <Route exact path='/entertainment' element={<News pageSize= {5} apikey={this.apikey} key="entertainment" category="entertainment" country="in"/>}  />
        <Route exact path='/science' element={<News pageSize= {5} apikey={this.apikey} key="science" category="science" country="in"/>}  />
        <Route exact path='/technology' element={<News pageSize= {5} apikey={this.apikey} key="technology" category="technology" country="in"/>}  />
        <Route exact path='/sport' element={<News pageSize= {5} apikey={this.apikey} key="sport" category="sport" country="in"/>}  />
        <Route exact path='/business' element={<News pageSize= {5} apikey={this.apikey} key="business" category="business" country="in"/>}  />


        </Routes>

        </Router>
      </>
    )
  }
}

// export default App;