/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 03:55:01
*/
import React, { FC, useEffect } from 'react'
import './PageBanner.css'
import { Task } from '../../model/Task'

interface PageBannerProps {
  task: Task
}
const color = 'red'

const PageBanner: FC<PageBannerProps> = ({ task }) => {
  useEffect(() => {
    const runLocalData = async () => {}
    runLocalData()
  })

  return (
    <div className="PageBanner sticky z-10 top-0 bg-[rgb(255,115,0)] w-full">
      <div className="page flex justify-between items-center px-6">
        <div className="PageTitle">
          <h1>{task.Title}</h1>
        </div>
        <div className={`ref text-${color} `}>home / {task.Title}</div>
      </div>
    </div>
  )
}

export default PageBanner
