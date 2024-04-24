/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 03:30:05
*/
import React, { FC, useEffect, } from 'react';
// import Loading from '../Loading/Loading';
import './TaskPage.css';
import { useParams } from 'react-router-dom';
import { tasks } from '../../api/data';
import { Task } from '../../model/Task';
import PageBanner from '../../components/PageBanner/PageBanner';


interface TaskPageProps {
 
}


const TaskPage : FC<TaskPageProps> = () =>{


    // const [state, setState] = useState<any>(null)
    const {slug} = useParams()
  const taskItem : Task =   tasks.filter((task: Task)=>task.slug === slug)[0]
  

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
console.log(taskItem);

      }
      runLocalData()
    },[])

  return (
   
      <div className="TaskPage main">
        <PageBanner task={taskItem}/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 max-w-md w-full bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Random Design Page</h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus ante non quam
          bibendum, non vestibulum magna mattis. Proin euismod, leo sit amet pharetra feugiat, mi
          sapien mollis odio, non congue orci risus nec nisi.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Action Button
        </button>
      </div>
    </div>
         
      </div>
   
  );
}

export default TaskPage;