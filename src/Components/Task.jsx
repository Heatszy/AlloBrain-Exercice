import React from 'react';
import './Task.css';

export const Task = (props) => {

    const { task } = props;

 

    return (
        <div className="task">
            <p>{task.name}</p>
            <p>{task.completed}</p>
        </div>
    )
}
