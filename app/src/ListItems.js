import React from 'react';
import './App.css';

const ListItems = (props) => {
    console.log('>> props in ListItems  >> ', props)
    return (
    <ul>
        <li> {props.item} </li>
    </ul>

    )
}

export default ListItems;