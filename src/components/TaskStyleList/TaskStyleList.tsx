/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:50:24
*/
import React, { FC, useEffect } from 'react';
import './TaskStyleList.css';


interface TaskStyleListProps {
 
}


const TaskStyleList : FC<TaskStyleListProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="TaskStyleList">
          TaskStyleList Component
      </div>
  );
}

export default TaskStyleList;