import React from 'react';
import './App.css';

class ListItem3 extends React.Component  {

    render() {
        return (
            <ul style = {{color: 'deeppink'}} >
                <li> {this.props.itemObj.name} length: {this.props.length} </li>
            </ul>
        )
    }

}

export default ListItem3;