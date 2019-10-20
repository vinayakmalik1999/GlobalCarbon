import React,{ Component } from 'react';
import './App.css'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

import Home from './Home'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Offline } from 'react-detect-offline'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';


class App extends Component  {

  render(){
  return (
<<<<<<< HEAD
    <div>
<Router>
    <Navbar className='topNavbar' style={{'background-color':'#000000'}}collapseOnSelect variant="dark" fixed ='top' expand="md">
       <Navbar.Brand style={{padding:'0','margin-left':'-27px'}}>
       <Link to ='/'style ={{textDecoration: 'none',  color: '#ffffff'}} >

         </Link>
       </Navbar.Brand>
       <Offline>
       <Navbar.Brand>

     </Navbar.Brand>

       </Offline>
       <Navbar.Toggle style={{'border-color':'transparent', outline:'transparent'}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="ml-auto">
       <br/>



       </Nav>
       </Navbar.Collapse>

     </Navbar>


<Switch>
 <Route exact path="/" component={Home}/>


</Switch>

</Router>
</div>

=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 44b04aeee2bc926e381a2a47466b0d17ea7665e5
  );
}
}

export default App;
