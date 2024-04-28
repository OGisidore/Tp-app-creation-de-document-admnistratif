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
import TaskStyleList from '../../components/TaskStyleList/TaskStyleList';
import EditCopy from '../../components/EditCopy/EditCopy';


interface TaskPageProps {

}


const TaskPage: FC<TaskPageProps> = () => {


  // const [state, setState] = useState<any>(null)
  const { slug } = useParams()
  const taskItem: Task = tasks.filter((task: Task) => task.slug === slug)[0]


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      console.log(taskItem);

    }
    runLocalData()
  }, [])

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

    </div>

  );
}

export default TaskPage;