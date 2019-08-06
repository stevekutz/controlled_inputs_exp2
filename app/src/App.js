import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  //state
    state = {
      valueInit: '',
      valueArr: [],
    }
  
  // handlers
  handleChange = ev => {
    this.setState ({[ev.target.name]: ev.target.value})
  }  


  //render
  
  render() {
    return (
      <div>
        <h4> value is: {this.state.valueInit}</h4>
        <form>
          <label> Label text
            <input 
              type = 'text'
              name = 'valueInit'
              onChange = {this.handleChange}
            />
          
          </label>
          {/* input OR button here*/}
          <button> Submit</button>
        
        </form>
      </div>
    )
  
  }
  
}

export default App;
