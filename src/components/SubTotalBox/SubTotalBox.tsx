/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 03:55:01
*/
import React, { FC, useEffect, useState } from 'react';
import './SubTotalBox.css';
import { FaPlus } from 'react-icons/fa';


interface SubTotalBoxProps {
  handleAddLine : ()=> void
 
}

const SubTotalBox : FC<SubTotalBoxProps> = ({handleAddLine}) =>{
  const [currency, setCurrency] = useState<string>("usd")




    useEffect(() => {
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    <div className="  grid grid-cols-12">
    <div className=" col-span-6 h-[20rem] border-0 border-t-[.1rem] border-solid border-gray-950">
      <div onClick={handleAddLine} className=" cursor-pointer mt-2 flex gap-2 items-center addLineTag">
        <FaPlus /> <p>Ajouter une ligne</p>

      </div>
      <div className="addDiscountLIne">
        <input type="checkbox" name="forAddDiscount" id="forAddDiscount" />
        <label htmlFor="forAddDiscount">Ajouter une case Remise globale en dessous de la case Total HT.</label>
      </div>
      <div className="addDepositCase">
        <input type="checkbox" name="addDeposit" id="addDeposit" />
        <label htmlFor="addDeposit">Ajouter une case Acompte juste au dessus de la case Net à payer.
        </label>
      </div>
      <div className="currencyChoiceCase my-[2rem]">
        <label htmlFor="currencySelect">Symbole, unité ou devise monétaire </label>
        <select name="currencySelect" className='w-[8rem]' onChange={(e) => setCurrency(e.target.value)} id="currencySelect">
          <option value="usd">usd</option>
          <option value="eur">eur</option>
          <option value="cfa">cfa</option>
        </select>
      </div>
      <div className="reglement my-[1rem] border-[.1rem] border-solid border-gray-950 relative">
        <div className="title absolute top-[-0.5rem] left-[0.5rem] px-[0.5rem]  bg-white ">Reglement</div>
        <div className="element">
          <ul>
            <li>
              <label htmlFor="LimitDate">Date limite : </label>
              <select name="LimitDate" id="LimitDate">
                <option value="A La reception">A La reception</option>
                <option value="A La commande">A La commande </option>
                <option value="Fin du mois ">Fin du mois  </option>
                <option value="15 jours">15 jours </option>
                <option value="20 jours">20 jours </option>
                <option value="20 jours"> 20 jours </option>
                <option value="A La commande">A La commande </option>
                {/* <option onClick={()=>setEditLimitDate(true)} value="A La commande">Edit Date </option> */}
              </select>
              {
              // editLimitDate && <input type="date" name="limitDate" placeholder='lola' id="lmt" />
              }
            </li>
             <li>
              <label htmlFor="LimitDate">Date limite : </label>
              <select name="LimitDate" id="LimitDate">
                <option value="A La reception">A La reception</option>
                <option value="A La commande">A La commande </option>
                <option value="Fin du mois ">Fin du mois  </option>
                <option value="15 jours">15 jours </option>
                <option value="20 jours">20 jours </option>
                <option value="20 jours"> 20 jours </option>
                <option value="A La commande">A La commande </option>
                <option value="A La commande">A La commande </option>
              </select>
            </li>
             <li>
              <label htmlFor="LimitDate">Date limite : </label>
              <select name="LimitDate" id="LimitDate">
                <option value="A La reception">A La reception</option>
                <option value="A La commande">A La commande </option>
                <option value="Fin du mois ">Fin du mois  </option>
                <option value="15 jours">15 jours </option>
                <option value="20 jours">20 jours </option>
                <option value="20 jours"> 20 jours </option>
                <option value="A La commande">A La commande </option>
                <option value="A La commande">A La commande </option>
              </select>
            </li>
             <li>
              <label htmlFor="LimitDate">Date limite : </label>
              <select name="LimitDate" id="LimitDate">
                <option value="A La reception">A La reception</option>
                <option value="A La commande">A La commande </option>
                <option value="Fin du mois ">Fin du mois  </option>
                <option value="15 jours">15 jours </option>
                <option value="20 jours">20 jours </option>
                <option value="20 jours"> 20 jours </option>
                <option value="A La commande">A La commande </option>
                <option value="A La commande">A La commande </option>
              </select>
            </li>
             <li>
              <label htmlFor="LimitDate">Date limite : </label>
              <select name="LimitDate" id="LimitDate">
                <option value="A La reception">A La reception</option>
                <option value="A La commande">A La commande </option>
                <option value="Fin du mois ">Fin du mois  </option>
                <option value="15 jours">15 jours </option>
                <option value="20 jours">20 jours </option>
                <option value="20 jours"> 20 jours </option>
                <option value="A La commande">A La commande </option>
                <option value="A La commande">A La commande </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className=" totalAmount col-span-6 ">
      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 border-0 border-t-[.1rem] border-solid border-gray-950 text-end">Total HT </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-solid border-gray-950">
          <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

        </div>
        {
          // withTVA && <div className=" p-1  col-span-2 border-0 border-t-[.1rem] border-solid border-gray-950"></div>
        }
      </div>
      <div className="grid grid-cols-12 ">
        <div className=" remiseGLobale p-1 col-span-6 text-end ">
          <label htmlFor="remiseGlobal"> Remise Globale  </label>
          <input type="text" className=' w-[5rem] ' name='reference' defaultValue={"0.00"} />
          <span> % </span>

        </div>
        <div className="p-1 col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

        </div>
      </div>
      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 text-end ">
          Total HT après remise globale
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

        </div>
      </div>
      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 text-end ">
          Total TTC
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' ' name='reference' defaultValue={"0.00"} />

        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className=" p-1  col-span-6 text-end ">
          Acompte
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

        </div>
      </div>
      <div className="grid grid-cols-12 ">
        <div className=" p-1  col-span-6 text-end font-bold ">
          Net à payer ({currency})
        </div>
        <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
          <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

        </div>
      </div>
    </div>
  </div>
  );
}

export default SubTotalBox;