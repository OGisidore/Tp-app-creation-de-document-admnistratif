/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 05/05/2024 10:23:03
*/
import React, { FC, useEffect } from 'react';
import './Article_TotalAmountLine.css';


interface ArticleTotalAmountLineProps {
  withTVA: boolean
}


const ArticleTotalAmountLine : FC<ArticleTotalAmountLineProps> = ({withTVA}) =>{



    useEffect(() => {
      // window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="tablesBody mt-2 font-bold lg:mt-0 border-solid border-gray-950 border-1 lg:border-0 grid grid-cols-12">
    <div className=" p-1 border-y-0 border-x-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-solid border-gray-900">

    </div>
    <div className=" col-span-12 sm:col-span-5 md:col-span-4 p-1 lg:col-span-3  border-r-[0.1rem] border-t-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
      <p className='m-0 mb-2'>Sous-total</p>
    </div>
    <div className=" p-1 border-r-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-y-0 border-l-0 border-solid border-gray-900">
    </div>
    <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
    </div>
    <div className=" col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
    </div>
    <div className=" p-1 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
    </div>
    <div className=" border-t-[0.1rem] col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
    <input
          type="text"
          className=" border-none  font-bold"
          name="reference"
          value={'0.00'}
        />
    </div>
    {withTVA && (
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
       
      </div>
    )}
  </div>
  );
}

export default ArticleTotalAmountLine;