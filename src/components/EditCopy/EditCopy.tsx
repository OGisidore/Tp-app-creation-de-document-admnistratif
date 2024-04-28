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
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { getTvaOption } from '../../redux/selectors/selectors';
import { FaPlus } from "react-icons/fa";


interface EditCopyProps {

}


const EditCopy: FC<EditCopyProps> = () => {


  const [color, setColor] = useState<any>()
  const [currency, setCurrency]= useState<string>("usd")
  const [rows, setRows] = useState<Line[]>([{
    _id: generateID(),
    name: ""
  }])

  const dispatch = useDispatch()

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
    let withTva;
    if (option.trim() === "Entreprise avec TVA") {
      console.log("yes");
      withTva = true;
    } else {
      withTva = false;
    }
    dispatch({
      type: ADD_TO_STORAGE,
      key: "withTVA",
      unique: true,
      payload: withTva
    })

  }

  const withTVA = useSelector(getTvaOption)


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      console.log(color);
      console.log('lolavgit ~ kiloju');
      console.log("git");



    }
    runLocalData()
  }, [])

  return (
    <div className="EditCopy w-[98%l px-2 mt-2">
      <div className="header flex flex-col items-center">
        <div className="headerContent p-2 rounded-b-lg   bg-gray-200">
          <div className="modelSelect flex ">
            <label htmlFor="modele">Modele de facture : </label>
            <select name="modele" defaultValue={"Entreprise avec TVA"} onChange={(e) => handleChange(e)} id="model">
              <option value="Entreprise avec TVA "> Entreprise avec TVA </option>
              <option value="Entreprise sans TVA "> Entreprise sans TVA </option>
              <option value="Auto-entrepreneur "> Auto-entrepreneur </option>
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
        <div className="socityInfo">
          <form className='p-2' >
            <div className="previousLogo">
              <img src="" alt="" />
            </div>
            <div className="logo flex p-[0.2rem]">
              <label htmlFor="logo"> Logo : </label>
              <input type="file" name="logo" id="logo" />
            </div>
            <div className="socityName p-[0.2rem]">
              <input type="text" name="socity_name" id="SName" placeholder='name' />
            </div>
            <div className="socityAdresse p-[0.2rem]">
              <input type="text" name="socity_address" id="SAddress" placeholder='Address' />
            </div>
            <div className="socity_cityAndZIP_code p-[0.2rem]">
              <input type="text" name="socity_ZIP" id="SZip" className="w-[20%] mr-1" placeholder='ZIP' />
              <input type="text" name="socity_city" id="SCity" placeholder='city' />
            </div>
            <div className="socityCountry p-[0.2rem]">
              <input type="text" name="Country" id="country" placeholder='Country' />
            </div>
            <div className="socityFax p-[0.2rem]">
              <input type="text" name="fax" id="fax" placeholder='Fax' />
            </div>
            <div className="socityName p-[0.2rem]">
              <input type="email" name="email" id="email" placeholder='email' />
            </div>
            <div className="socitySiret p-[0.2rem]">
              <input type="text" name="Siret" id="siret" placeholder='SIREN/SIRET Numero' />
            </div>
            <div className="socityRCSVille p-[0.2rem]">
              <input type="text" name="RCSVille" id="Rcs" placeholder='RCS Ville' />
            </div>
            <div className="socityCodeNaf p-[0.2rem]">
              <input type="text" name="CodeNaf" id="CodeNaf" placeholder='Code NAF' />
            </div>
            <div className="socitTVA p-[0.2rem]">
              <input type="text" name="TVA" id="TVA" placeholder='Numero de TVA' />
            </div>

          </form>
        </div>
        <div className="clientInfo">
          <form className='p-3 flex items-stretch flex-col' >
            <div className="facturNumero p-2 sm:w-[100%] md:w-[100%] lg:w-[80%]  self-end">
              <div className="number">
                <label htmlFor="numeroFacture">FACTURE N </label>
                <input type="text" className="w-[50%]" name='numeroFacture' id='numb_facture' />
              </div>
              <div className="emissionDate pt-[0.5rem]">
                <label htmlFor="date_ofEmission"> Date d'emission :  </label>
                <input type="date" className="w-[50%]" name="date_ofEmission" id="date" />
              </div>
            </div>
            <div className="clientDes w-[70%] sm:w-[100%] md:w-[100%] lg:w-[80%] flex flex-col items-end p-2 self-end">
              <div className="all w-[100%]">
                <div className="clientCode p-[0.2rem]">
                  <input type="text" name="client_code" id="C_code" placeholder='Code client (facultatif)' />
                </div>
                <div className="clientFullname p-[0.2rem]">
                  <input type="text" name="Client_Fullname" id="C_fullname" placeholder='Nom et Prenom du client' />
                </div>
                <div className="clientAddress p-[0.2rem]">
                  <input type="text" name="Client_Address" id="client_address" placeholder='Address du client' />
                </div>
                <div className="client_cityAndZIP_code p-[0.2rem]">
                  <input type="text" name="client_ZIP" id="C_Zip" className="w-[20%] mr-1" placeholder='code postal' />
                  <input type="text" name="client_city" id="c_City" placeholder='ville' />
                </div>

                <div className="clientCountry p-[0.2rem]">
                  <input type="text" name="Pays" id="Pays" placeholder='Pays' />
                </div>
                <div className="clientEmail p-[0.2rem]">
                  <input type="text" name="phone" id="phone " placeholder='email et telephone' />
                </div>
                <div className="clientTva p-[0.2rem]">
                  <input type="text" name="client_tva" id="c_tva" placeholder='Numero TVA  du client ( facultatif)' />
                </div>
              </div>

            </div>
            <div className="titleAdInput mt-2">
              <p>Mettez ici un titre</p>
              <input type="text" name='Title' id='titleAdd' className="w-[25%]" />
            </div>

          </form>
        </div>
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
            <div className="reference border-[0.1rem] p-1 border-solid border-gray-900 col-span-12 sm:col-span-2 md:col-span-4 lg:col-span-1">Reference</div>
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
              <select name="currencySelect" className='w-[8rem]' onChange={(e)=>setCurrency(e.target.value)} id="currencySelect">
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
            <div className="grid grid-cols-12 h-[2rem]">
              <div className=" p-1  col-span-6 border-0 border-t-[.1rem] border-solid border-gray-950 text-end">Total HT </div>
              <div className=" p-1  col-span-2 border-[.1rem] border-solid border-gray-950">
                <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

              </div>
              {
                withTVA && <div className=" p-1  col-span-2 border-0 border-t-[.1rem] border-solid border-gray-950"></div>
              }
            </div>
            <div className="grid grid-cols-12 h-[2rem]">
              <div className=" remiseGLobale p-1 col-span-6 text-end ">
                <label htmlFor="remiseGlobal"> Remise Globale  </label>
                <input type="text" className=' w-[5rem] ' name='reference' defaultValue={"0.00"} />
                <span> % </span>

              </div>
              <div className="p-1 col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
                <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

              </div>
            </div>
            <div className="grid grid-cols-12 h-[2rem]">
              <div className=" p-1  col-span-6 text-end ">
                Total HT après remise globale
              </div>
              <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
                <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

              </div>
            </div>
            <div className="grid grid-cols-12 h-[2rem]">
              <div className=" p-1  col-span-6 text-end ">
                Total TTC
              </div>
              <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
                <input type="text" className=' ' name='reference' defaultValue={"0.00"} />

              </div>
            </div>
            <div className="grid grid-cols-12 h-[2rem]">
              <div className=" p-1  col-span-6 text-end ">
                Acompte
              </div>
              <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
                <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

              </div>
            </div>
            <div className="grid grid-cols-12 h-[2rem]">
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