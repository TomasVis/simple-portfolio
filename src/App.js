import React from 'react';

import './App.css';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Home from './components/Home';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isOnHover:false,
      cardInFocus: -1
/*      isTestOnHover:false,
      testCounter: 0*/


    };


    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
/*    this.handleTestClick = this.handleTestClick.bind(this);*/


/*    this.listenOff = this.listenOff.bind(this);
    this.listenOn = this.listenOn.bind(this);*/



  }

/*  listenOff(){
    console.log("listenOn")
    this.setState({isTestOnHover:false})
  }
  listenOn(){
    console.log("listenOff")
    this.setState({isTestOnHover:true})
  }*/
/*  handleTestClick(){
    this.setState({
      isTestOnHover:!this.state.isTestOnHover
    })
  }*/
    handleMouseOver(e){

   // console.log( e.currentTarget.id)
    this.setState({isOnHover:true,cardInFocus:e.currentTarget.id})
  } 
   handleMouseLeave(e){


    this.setState({isOnHover:false,cardInFocus:-1})
  } 

  render(){
  return (
    <Router >
    <div className="mainContainer">
<Nav/>

<Switch>

      <Route path="/" exact
    render={(props) => <Home {...props}
    exact
      id={0}
      title={`Props through render`}
      onMouseOver={this.handleMouseOver}          
      onMouseLeave={this.handleMouseLeave} 
 
      cardInFocus={this.state.cardInFocus} 
      isOnHover = {this.state.isOnHover} 
 />}
   />
  <Route path="/projects"
    render={(props) => <Projects {...props}

      title={`Props through render`}
      onMouseOver={this.handleMouseOver}          
      onMouseLeave={this.handleMouseLeave} 
  
      cardInFocus={this.state.cardInFocus} 
      isOnHover = {this.state.isOnHover} 
/>}
   />
  <Route path="/contacts" exact component={Contacts}/>

</Switch>
</div>
    </Router>
  );
}
}

export default App;