import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItemsFC from './ListItems';
import ListItemsCC from './ListItems2';
import ListItem3 from './ListItem3';

class App extends React.Component {
  //state
    state = {
      valueInit: '',
      valueArr: [],
   //   valArrObj: [{}], 
  
          valObj: {id: 0, name : 'first', age: 100, real: true },
          valArrObj: [{id: 0, name : 'first', age: 100, real: true }],
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
      valObj: {id: 0, name : 'NEWfirst', age: 100, real: true }
    })

    let newObj = {id: 0, name : this.state.valueInit, age: 100, real: true };

   
    this.setState({
      valArrObj: [...this.state.valArrObj, newObj]
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
          <h5> valObj: {this.state.valObj.name}</h5>
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
 
        <div className = 'valArrObjContainer'>
        <h5> valArrObj length: {this.state.valArrObj.length}</h5>     
                {this.state.valArrObj.map( (itemObj,index) =>  (
                    <ListItem3  key = {index } itemObj = {itemObj} />
                ))}
        </div>
 
      </div>
    ) 
  }
  
}

export default App;