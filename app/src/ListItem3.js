import React from 'react';
import './App.css';

class ListItem3 extends React.Component  {
    
    render() {
        console.log('ListItem3  props',  this.props);
        
        return (
            <ul style = {{color: 'deeppink'}} >
                <li> {this.props.itemObj.name} </li>
                   <li>   length: {this.props.itemObj.length} </li>
            </ul>
        )
    }

}

export default ListItem3;