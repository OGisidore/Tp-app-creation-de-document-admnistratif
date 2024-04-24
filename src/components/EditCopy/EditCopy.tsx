/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:50:51
*/
import React, { FC, useEffect } from 'react';
import './EditCopy.css';


interface EditCopyProps {
 
}


const EditCopy : FC<EditCopyProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="EditCopy">
          EditCopy Component
      </div>
  );
}

export default EditCopy;