/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:48:48
*/
import React, { FC, useEffect } from 'react';
import './TaskStyle.css';


interface TaskStyleProps {
 
}


const TaskStyle : FC<TaskStyleProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="TaskStyle">
          TaskStyle Component
      </div>
  );
}

export default TaskStyle;