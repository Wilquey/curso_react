import './Display.css';
import React from 'react';

// eslint-disable-next-line
export default (props) => {
    return (
        <div className="display">{props.value}</div>
    )
}