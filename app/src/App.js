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

  handleSubmit = ev => {
    ev.preventDefault();

    this.setState(prevState => {
      return {valueArr: [...prevState.valueArr, this.state.valueInit]}
    })

    this.setState({ valueInit: ''})
  }

  //render
  
  render() {
    return (
      <div>
        <h4> value is: {this.state.valueInit}</h4>
        <form onSubmit = {this.handleSubmit}>
          <label> Label text
            <input 
              type = 'text'
              name = 'valueInit'
              onChange = {this.handleChange}
              value = {this.state.valueInit}
            />
          
          </label>
          {/* input OR button here*/}
          <button type = 'submit'> Submit</button>
        
        </form>

        <h4> valueArr: {this.state.valueArr}</h4> 
        <ul>
          {this.state.valueArr.map( (item,index) => (
          <li key = {index}>{item}</li>
        ))}
        </ul>  
 

      </div>
    )
  
  }
  
}

export default App;
