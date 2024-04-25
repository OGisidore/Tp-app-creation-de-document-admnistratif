/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:48:48
*/
import React, { FC, useEffect } from 'react';
import './TaskStyle.css';
import { Design } from '../../model/design';


interface TaskStyleProps {
  design : Design
 
}


const TaskStyle : FC<TaskStyleProps> = ( {design}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className={" w-6 cursor-pointer " + design.style + " h-10"}> 
      
    </div>
  );
}

export default TaskStyle;