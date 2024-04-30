/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 04:50:51
*/
import React, { FC, useEffect, useState } from 'react';
import './EditCopy.css';
import { generateID } from '../../helpers/utiles';
import { Line } from '../../model/Line';
import TableBodyLine from '../TableBodyLine/TableBodyLine';
import { useSelector , useDispatch } from 'react-redux';
import { getDesign } from '../../redux/selectors/selectors';
import { FaPlus } from "react-icons/fa";
import CompanyInfo from '../CompanyInfos/CompanyInfo';
import ClientInfo from '../ClientInfo/ClientInfo';
import { Design } from '../../model/design';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { getItem } from '../../services/localStorage';


interface EditCopyProps {

}


const EditCopy: FC<EditCopyProps> = () => {

  const dispatch = useDispatch()
  const [color, setColor] = useState<any>()
  const [defaultValues ,  setDefaultValue]=useState <string>("")
  const [withTVA, setWithTVA] = useState<boolean>()
  const [currency, setCurrency] = useState<string>("usd")
  const [rows, setRows] = useState<Line[]>([{
    _id: generateID(),
    name: ""
  }])

  const design: Design = useSelector(getDesign)
  console.log(design);



  const handleAddLine = () => {
    setRows([...rows, {
      _id: generateID(),
      name: ""
    }])

  }
  const handleRemoveLine = (e: any, id: string) => {
    console.log("hello");
    setRows(rows.filter((row) => row._id !== id))
  }

  const handleChange = async (e: any) => {
    const option: string = e.target.value
    console.log(option);

    if (option.trim() !== "Entreprise avec TVA") {
      setWithTVA(false)
    }else{
      setWithTVA(true)
    }
    dispatch({
      type: ADD_TO_STORAGE,
      key: "withTVA",
      unique: true,
      payload: {
        option : withTVA,
        value : option
      }
    })

  }

  // const withTVA = useSelector(getTvaOption)
  console.log(withTVA);
  

  useEffect(() => {
    // window.scrollTo(0, 0)
    const runLocalData = async () => {
      
      const model = await  getItem("withTVA")
      console.log(model.option);
      
      if (model) {
        setWithTVA(model.option)
        setDefaultValue(model.value)
        console.log(model.value);
        
      }else{
        setDefaultValue("Entreprise avec TVA")
        setWithTVA(true)
      }



    }
    runLocalData()
  }, [])

  return (
    <div className={"EditCopy w-[98%l px-2 mt-2" + design?.style}>
      <div className="header flex flex-col items-center">
        <div className="headerContent p-2 rounded-b-lg   bg-gray-200">
          <div className="modelSelect flex ">
            <label htmlFor="modele">Modele de facture lola ko : </label>
            <select name="modele" defaultValue={defaultValues} onChange={(e) => handleChange(e)} id="model">
              <option value="Entreprise avec TVA " > Entreprise avec TVA </option>
              <option value="Entreprise sans TVA "> Entreprise sans TVA </option>
              <option value="Auto-entrepreneur"> Auto-entrepreneur </option>
            </select>
          </div>
          <div className="mentionSelect flex ">
            <label htmlFor="mention">Modele de facture : </label>
            <div className="options flex ">
              <div className="proforma flex">
                <input type="checkbox" name="proforma" id="proforma" />
                <label htmlFor="proforma">proforma</label>
              </div>
              <div className="duplicata flex">
                <input type="checkbox" name="duplicata" id="duplicata" />
                <label htmlFor="duplicata">duplicata</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`socityAndClientInformation  w-full flex flex-wrap justify-between`}>
        <CompanyInfo />
        <ClientInfo />
      </div>
      <div className="facBody">
        <div className="exucutiveDate">
          <label htmlFor="dateD_execution"> Date d'exécution de la vente ou de la prestation : </label>
          <input type="date" name="dateD_execution" id="ex_date" />
        </div>
        <div className="headColor flex justify-between">
          <div className="ColorBox">
            <label htmlFor="color">Couleur de l'entête du tableau :</label>
            <input onChange={(e) => setColor(e.target.value)} type="color" name="color" id="color" />
          </div>
          <div className="warning">Veuillez utiliser le point au lieu de la virgule pour les nombres.</div>

        </div>
        <div className="tables ">

          <div style={{ backgroundColor: color }} className="tableHeader font-bold grid grid-cols-12">
            <div
              className="reference border-[0.1rem] p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">
              Reference</div>
            <div className="designation border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-5 md:col-span-4  lg:col-span-3">Designation</div>
            <div className="quantity border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">Quantite</div>
            <div className="Unite border-r-[0.1rem] border-y-[0.1rem] border-l-0 border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">Unité</div>
            <div className="unitPrice border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid col-span-12 sm:col-span-2 lg:col-span-2 md:col-span-4">Prix unitaire HT</div>
            <div className="remise border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">Remise %</div>
            <div className="HtAmount border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">Montant HT</div>
            {
              withTVA && <div className="tva border-r-[0.1rem] border-y-[0.1rem] border-l-0 p-1 border-solid border-gray-900 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">TVA %</div>
            }
          </div>


          {
            rows.map((row: Line) => {
              return <div key={row._id} className="tablesBody mt-2 lg:mt-0 border-solid border-gray-950 border-1 lg:border-0 grid grid-cols-12">
                <TableBodyLine />
                <div className="bg-gray-100 col-span-12 sm:col-span-1 lg:col-span-1 md:col-span-4">
                  <div className="action flex justify-between px-1 font-bold  bg-gray-100">
                    <div className="titles">
                      <div className="title p-0 m-0">
                        <label htmlFor="addT" className=" text-blue-600">T</label>
                        <input type="checkbox" className='w-[1rem]' name="Tit" id="" />
                      </div>
                      <div className="sum p-0 m-0">
                        <label htmlFor="sumb" className=" text-orange-800">=</label>
                        <input type="checkbox" className='w-[1rem]' name="summ" id="" />
                      </div>
                    </div>
                    <div className="AddL">
                      <div onClick={(e) => handleRemoveLine(e, row._id)} className="remve cursor-pointer text-red-700 ">x</div>
                      <div onClick={handleAddLine} className="remve cursor-pointer text-green-800 ">+</div>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <div className="  grid grid-cols-12">
          <div className=" col-span-6 h-[20rem] border-0 border-t-[.1rem] border-solid border-gray-950">
            <div onClick={handleAddLine} className=" cursor-pointer mt-2 flex items-center hover:bg-orange-900 addLineTag">
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
                withTVA && <div className=" p-1  col-span-2 border-0 border-t-[.1rem] border-solid border-gray-950"></div>
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
      </div>



    </div >
  );
}

export default EditCopy;