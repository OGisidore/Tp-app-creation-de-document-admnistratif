/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/04/2024 21:57:29
*/
import React, { FC, useEffect } from 'react';
import './TaskCart.css';
import { Task } from '../../model/Task';
import { Link } from 'react-router-dom';


interface TaskCartProps {
  task : Task
 
}


const TaskCart : FC<TaskCartProps> = ({task}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
       
        

      }
      runLocalData()
    })

  return (
      <Link to={"/taskPage/" + task.slug} className="TaskCart">
         <img src={task.imageUrl} alt={task.Title} className="object-cover h-48 w-60 m-0" />
         <div className="submit m-0 p-3">
          {task.Title}
         </div>
      </Link>
  );
}

export default TaskCart;