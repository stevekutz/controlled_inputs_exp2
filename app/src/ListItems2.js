import React from 'react';
import './App.css';

class ListItem2 extends React.Component  {
  /*  NOT NEEDED
    constructor(props) {
        super(props);
    }
    */

    render() {
        return (
            <ul style = {{color: 'green'}} >
                <li> {this.props.item}</li>
            </ul>
        )
    }

}

export default ListItem2;
