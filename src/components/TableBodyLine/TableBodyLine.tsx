/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 28/04/2024 11:35:42
*/
import React, { FC, useEffect } from 'react';
import './TableBodyLine.css';

import { tvaPercent, unitValue } from '../../api/data';
import { useSelector } from 'react-redux';
import { getTvaOption } from '../../redux/selectors/selectors';


interface TableBodyLineProps {
 
  

}


const TableBodyLine: FC<TableBodyLineProps> = () => {



const withTVA = useSelector(getTvaOption)
  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <>
    
      <div className=" p-1 border-y-0 border-x-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">Reference</label>
        </div>
        <input type="text" name='reference' placeholder='Reference' />

      </div>
      <div className=" col-span-12 sm:col-span-5 md:col-span-4  lg:col-span-3 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">Desigation</label>
        </div>
        <textarea name="designation" className='w[98%]' id="designation" rows={1}  ></textarea>

      </div>
      <div className=" p-1 border-r-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">Quantite</label>
        </div>
        <input type="text" name='reference' defaultValue={"0"} />
      </div>
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">unite</label>
        </div>
        <select className='w-[99%]' name="unit" id="selectUnit">
          <option disabled value="">unite</option>
          {
            unitValue.map((unit, index : number) => {
              return <option key={index} value={unit.value}> {unit.value} </option>
            })
          }
        </select>
      </div>
      <div className=" col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">Prix unitaire</label>
        </div>
        <input type="text" name='reference' defaultValue={"0.00"} />
      </div>
      <div className=" p-1 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">

        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">Remise %</label>
        </div>
        <input type="text" name='reference' defaultValue={"0.00"} />
      </div>
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">Prix Ht</label>
        </div>
        <input type="text" className=' border-none outline-none' name='reference' defaultValue={"0.00"} />
      </div>
      {
        withTVA.option && <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
          <div className="lab">
            <label htmlFor="reference" className=" lg:hidden">Tva </label>
          </div>
          <select className='w-[99%]' name="tva" id="tva">
            {
              tvaPercent.map((tva) => {
                return <option key={tva._id} value={tva.value}> {tva.value} </option>
              })
            }

          </select>
        </div>
      }

    



    </>
  );
}

export default TableBodyLine;