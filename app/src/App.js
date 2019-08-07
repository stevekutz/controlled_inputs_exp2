import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItemsFC from './ListItems';
import ListItemsCC from './ListItems2';

class App extends React.Component {
  //state
    state = {
      valueInit: '',
      valueArr: [],
   //   valArrObj: [{}], 
  
          valArrObj: {id: 0, name : 'first', age: 100, real: true }
    }
  
  // handlers
  handleChange = ev => {
    this.setState ({[ev.target.name]: ev.target.value})
  }  

  handleSubmit = ev => {
    ev.preventDefault();

    this.setState(prevState => {
      return {
        valueArr: [...prevState.valueArr, this.state.valueInit],      
      }
    })
  /*
    this.setState(prevState => {
      // This method mutates state directly
      return {
        valueArrObj: [{...prevState.valArrObj.name}, this.state.valArrObj.name = this.state.valueInit],
      }  
    })
*/

// simply updates staate in obj properly
   this.setState({
      valArrObj: {id: 0, name : 'NEWfirst', age: 100, real: true }
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

        <div className = 'valueArrContainer' >
          <h4> valueArr: {this.state.valueArr}</h4> 
          <h5> valArrObj: {this.state.valArrObj.name}</h5>
          <ul>
            {this.state.valueArr.map( (item,index) => (
              <div key = {index}>
                <li>{item}</li>
                <ListItemsFC item = {item}/>
                <ListItemsCC item = {item}/>
              </div>
                      
          ))}
          </ul> 
        </div>  
 
 
      </div>
    ) 
  }
  
}

export default App;