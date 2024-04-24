/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/04/2024 21:57:29
*/
import React, { FC, useEffect } from 'react';
import './PageTitle.css';


interface PageTitleProps {
 
}


const PageTitle : FC<PageTitleProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="PageTitle">
          PageTitle Component
      </div>
  );
}

export default PageTitle;