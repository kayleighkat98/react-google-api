import React, { Component } from 'react'
//import './';
import GoogleApi from './GoogleApi';

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
      
  //   };
  // }


  render() {
    return(
      <div className='container'>
         <GoogleApi/>
      </div>
    );
  }
}

export default App