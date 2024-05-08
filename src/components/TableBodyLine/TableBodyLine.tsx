/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 28/04/2024 11:35:42
*/
import React, { FC, useEffect, useState } from 'react'
import './TableBodyLine.css'

import { tvaPercent, unitValue } from '../../api/data'
import { Line } from '../../model/Line'
import { Task } from '../../model/Taches'
import { CalculateHTAmount } from '../../api/utilities'
// import { getItem } from '../../services/localStorage'

interface TableBodyLineProps {
  row: Line
  withTVA: boolean
}

const TableBodyLine: FC<TableBodyLineProps> = ({ withTVA, row }) => {
  const [height, setHeight] = useState('auto');
  const [task, setTask] = useState<Task>({
    _id: row._id,
    reference: "",
    designation: "",
    quantity: 0.00,
    unit: "",
    unitPrice: 0.00,
    discount: 0.00,
    pre_taxAmount:"",
    VAT_rate: 0.00




  })
  const handleChange = (event: any) => {
    const {name , value}=event.target
    setTask({
      ...task , [name]:value
    })
    const { scrollHeight, clientHeight } = event.target;
    const newHeight = scrollHeight > clientHeight ? `${scrollHeight}px` : height;
    setHeight(newHeight);
  };
  useEffect(() => {
    const runLocalData = async () => { 
      console.log(task);
    const  htAmount = CalculateHTAmount(task.quantity, task.unitPrice, task.discount)
    console.log(htAmount);
    
     setTask({
      ...task, pre_taxAmount : htAmount.toString() })

    }


    runLocalData()
  },[task.quantity, task.unitPrice, task.discount])
  const  handleTaskChange = (e:any)=>{
    const {name , value}=e.target
    setTask({
      ...task , [name]:value
    })
    
    return task

  }

  return (
    <>
      <div className=" p-1 border-y-0 border-x-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">
            Reference
          </label>
        </div>
        <input type="text"
        onChange={(e)=>handleTaskChange(e)}
          name="reference" defaultValue={task.reference} placeholder="Reference" />
      </div>
      <div className=" col-span-12 sm:col-span-5 md:col-span-4  lg:col-span-3 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="reference" className=" lg:hidden">
            Desigation
          </label>
        </div>

        <textarea
          name="designation"
          placeholder='designation'
          defaultValue={task.designation}
          onChange={(e) => handleChange(e)}
          style={{ height }}
          id="designation"
          rows={1}
        ></textarea>
      </div>
      <div className=" p-1 border-r-[0.1rem] col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1 border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="quantity" className=" lg:hidden">
            Quantite
          </label>
        </div>
        <input type="text"  onChange={(e)=>handleTaskChange(e)} name="quantity" defaultValue={task.quantity} />
      </div>
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="unit" className=" lg:hidden">
            unite
          </label>
        </div>
        <select className="w-[99%]" defaultValue={task.unit} name="unit" id="selectUnit">
          <option disabled value="">
            unite
          </option>
          {unitValue.map((unit, index: number) => {
            return (
              <option key={index} value={unit.value}>
                {' '}
                {unit.value}{' '}
              </option>
            )
          })}
        </select>
      </div>
      <div className=" col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="unitPrice" className=" lg:hidden">
            Prix unitaire
          </label>
        </div>
        <input type="text" name="unitPrice" onChange={(e)=>handleTaskChange(e)} defaultValue={task.unitPrice} />
      </div>
      <div className=" p-1 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="discount" className=" lg:hidden">
            Remise %
          </label>
        </div>
        <input type="text" name="discount" onChange={(e)=>handleTaskChange(e)} defaultValue={task.discount} />
      </div>
      <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
        <div className="lab">
          <label htmlFor="pre_taxAmount" className=" lg:hidden">
            Prix Ht
          </label>
        </div>
        <input
          type="text"
          className=" border-none"
          name="pre_taxAmount"
          defaultValue={task.pre_taxAmount}
        />
      </div>
      {withTVA && (
        <div className=" col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4 p-1 border-r-[0.1rem] border-y-0 border-l-0 border-solid border-gray-900">
          <div className="lab">
            <label htmlFor="reference" className=" lg:hidden">
              Tva{' '}
            </label>
          </div>
          <select className="w-[99%]" defaultValue={task.VAT_rate} name="tva" id="tva">
            {tvaPercent.map((tva) => {
              return (
                <option key={tva._id} value={tva.value}>
                  {' '}
                  {tva.value}{' '}
                </option>
              )
            })}
          </select>
        </div>
      )}
    </>
  )
}

export default TableBodyLine
