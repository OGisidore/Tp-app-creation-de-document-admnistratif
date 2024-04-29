/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:48:48
*/
import React, { FC, useEffect } from 'react';
import './TaskStyle.css';
import { Design } from '../../model/design';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { addItem } from '../../api/apiDocument';


interface TaskStyleProps {
  design : Design
 
}


const TaskStyle : FC<TaskStyleProps> = ( {design}) =>{
  const dispatch = useDispatch()

const handleSetDesign = async ()=>{
  console.log(design);

  
dispatch({
  type : ADD_TO_STORAGE,
  key : "Design",
  unique : true,
  payload : design
})
await addItem("design", design)
}

    useEffect(() => {
      // window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div onClick={handleSetDesign} className={" w-6 cursor-pointer p-8 " + design.style + " h-10"}> 
      
    </div>
  );
}

export default TaskStyle;