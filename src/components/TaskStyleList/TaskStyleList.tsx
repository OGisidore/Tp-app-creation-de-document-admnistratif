/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:50:24
*/
import React, { FC, useEffect } from 'react';
import './TaskStyleList.css';
import { design } from '../../api/data';
import { Design } from '../../model/design';
import TaskStyle from '../TaskStyle/TaskStyle';


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
      <div className="TaskStyleList  flex h-28 gap-3 overflow-y-scroll flex-wrap max-w-[50rem]">
          {design.map((style:Design)=>{
            return <TaskStyle key={style._id} design={style}/>
          })}
      </div>
  );
}

export default TaskStyleList;