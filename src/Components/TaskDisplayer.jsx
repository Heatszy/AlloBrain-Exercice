import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Task } from './Task';

const TaskDisplayer = () => {
    
    const [tasks, setTasks]=useState([]);

    //Fetch the api and get the data
    const fetchData= async ()=>{
        try{
            const response = await axios.get('https://a971-89-3-24-17.ngrok-free.app/api/tasks', {
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                }
            });
            setTasks(response.data);
        }
        catch(error){
            console.error('Error fetching data :', error);
        }
    }

    //Initialize our data
    useEffect(()=>{
        fetchData();
    }, [])

    useEffect(()=>{
        console.log(tasks);
    }, [tasks])

    return (
        <div className="taskdisplayer"> 
            
                {tasks.map((task)=>{
                    return (
                    <div>
                        <Task task={task} />
                    </div>
                    )
                })}
        </div>
    )
}

export default TaskDisplayer;
