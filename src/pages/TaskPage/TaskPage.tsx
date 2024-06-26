/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 03:30:05
*/
import React, { FC, useEffect } from 'react'
// import Loading from '../Loading/Loading';
import './TaskPage.css'
import { useParams } from 'react-router-dom'
import { tasks } from '../../api/data'
import { Task } from '../../model/Task'
import PageBanner from '../../components/PageBanner/PageBanner'
import TaskStyleList from '../../components/TaskStyleList/TaskStyleList'
import EditCopy from '../../components/EditCopy/EditCopy'
import { getAllItems } from '../../api/apiDocument'
import { useDispatch } from 'react-redux'
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes'
import { Design } from '../../model/design'


interface TaskPageProps {}

const TaskPage: FC<TaskPageProps> = () => {
  const { slug } = useParams()
  const taskItem: Task = tasks.filter((task: Task) => task.slug === slug)[0]
  

  const dispatch = useDispatch()
  
  useEffect(() => {
    const runLocalData = async () => {
      const designData = await getAllItems('design');
      if (designData.results && designData.results.length > 0) {
        const result = designData.results[0];
        dispatch({
          type: ADD_TO_STORAGE,
          key: 'design',
          unique: true,
          payload: result as Design,
        });
      }
    
  };
    runLocalData()
  },[dispatch])

  return (
    <div className="TaskPage w-full  main">
      <PageBanner task={taskItem} />
      <div className="style flex flex-col items-center">
        <h3>Style de la feuilles | choisir le style ici </h3>
        <TaskStyleList />
      </div>
      <div className="model">
        <EditCopy />
      </div>
      <div className="callToAction my-[3rem] p-1 ">
        <button className="w-full p-3 font-bold border-none bg-[rgb(255,115,0)] cursor-pointer ">
          Enregister le Pdf
        </button>
      </div>
    </div>
  )
}

export default TaskPage
