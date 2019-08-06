import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //state
    state = {
      valueInit: '',
      valueArr: [],
    }
  
  // handlers
  
  //render
  
  render() {
    return (
      <div>
        <h4> value is: {this.state.valueInit}</h4>
      
      </div>
    )
  
  }
  
}

export default App;
