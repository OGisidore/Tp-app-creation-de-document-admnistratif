/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 24/04/2024 03:55:01
*/
import React, { FC, useEffect, useState } from 'react';
import './SubTotalBox.css';
import { FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { discountRates, limitoptions, paymentMode } from '../../api/data';


interface SubTotalBoxProps {
  handleAddLine: () => void

}

const SubTotalBox: FC<SubTotalBoxProps> = ({ handleAddLine }) => {
  const [currency, setCurrency] = useState<string>("usd")
  const [discountCase, setDiscountCase] = useState<boolean>(false)
  const [depositCase, setDepositCase] = useState<boolean>(false)
  const [editDateInput, setEditDateInput] = useState<boolean>(false)
  const [displaylimitDateInput, setDisplayLimitDateInput] = useState<boolean>(false)
  const [displayRateInput, setDisplayRateInput] = useState<boolean>(false)
  const { slug } = useParams()





  useEffect(() => {
    const runLocalData = async () => {

    }
    runLocalData()
  })
  const handleDisplayDiscountCase = () => {
    setDiscountCase(!discountCase)
  }
  const handleDisplayDepositCase = () => {
    setDepositCase(!depositCase)
  }
  const handleDateChange = (e: any) => {
    const value = e.target.value
    if (value === "Edit Date") {
      setEditDateInput(!editDateInput)

    }


  }
  const handleDateLimitChange = (e: any) => {
    const value = e.target.value
    if (value === "Saisir une date") {
      setDisplayLimitDateInput(!displaylimitDateInput)

    }


  }
  const handleAnnulPenalityRateChange = (e: any) => {
    const value = e.target.value
    if (value === "saisir un taux") {
      setDisplayRateInput(!displayRateInput)

    }


  }

  return (
    <div className="  grid grid-cols-12 ">
      <div className=" col-span-6 border-0 border-t-[.1rem] border-solid border-gray-950">
        <div onClick={handleAddLine} className=" cursor-pointer mt-2 flex gap-2 items-center addLineTag">
          <FaPlus /> <p>Ajouter une ligne</p>

        </div>
        <div className="addDiscountLIne">
          <input type="checkbox" onChange={handleDisplayDepositCase} name="forAddDiscount" id="forAddDiscount" />
          <label htmlFor="forAddDiscount">Ajouter une case Remise globale en dessous de la case Total HT.</label>
        </div>
        <div className="addDepositCase">
          <input type="checkbox" onChange={handleDisplayDiscountCase} name="addDeposit" id="addDeposit" />
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
          <div className="element relative">
            <ul className="list-disc">
              {
                slug === "fature" && <li >
                  <div className="ctn flex gap-2">
                    <div className="select">
                      <label htmlFor="Date">Date  : </label>
                      <select onChange={(e) => handleDateChange(e)} name="Date" id="Date">
                        <option value="A La reception">A ne pas preciser</option>
                        <option >Edit Date </option>
                      </select>
                    </div>

                    {
                      editDateInput && <input type="date" name="Date" />
                    }
                  </div>

                </li>
              }


              <li>
                <div className="ctn flex gap-2">
                  <div className="selection">
                    <label htmlFor="LimitDate">Date limite : </label>
                    <select name="LimitDate" onChange={handleDateLimitChange} id="LimitDate">
                      {
                        limitoptions.map((option, index: number) => {
                          return <option key={index} value={option}>{option}</option>
                        })
                      }
                    </select>
                  </div>
                  {
                    displaylimitDateInput && <input type="date" name="Date" />
                  }

                </div>

              </li>
              <li>
                <label htmlFor="mode">Mode : </label>
                <select name="mode" id="mode">
                  {
                    paymentMode.map((mode, index: number) => {
                      return <option key={index} value={mode}>{mode}</option>
                    })
                  }
                </select>
              </li>
              <li>
                <label htmlFor="discountRate">Taux d'escompte en cas de paiement anticipée : </label>
                <select name="discountRate" id="discountRate">
                  <option value="Ne pas preciser"> Ne pas preciser</option>
                  <option value="Neant"> Neant </option>
                  {
                    discountRates.map((rate) => {
                      return <option key={rate._id} value={rate.value}> {rate.value} </option>
                    })
                  }
                </select>
              </li>
              <li>
                <div className="ctn 'flex gap-2'">
                  <div className="selectRate">
                    <label htmlFor="anualRatePenality">Taux annuel de pénalité en cas de retard de paiement : : </label>
                    <select name="anualRatePenality" onChange={handleAnnulPenalityRateChange} id="anualRatePenality">
                      <option value="A La reception">A La reception</option>
                      <option value="A La commande">3 fois le taux legal selon la loi n 2008-776 du 04 aout 2008 </option>
                      <option> saisir un taux</option>

                    </select>
                  </div>
                  {
                    displayRateInput && <> <input type="text" defaultValue={"0.00"} /> % </>
                  }

                </div>

              </li>
              <li>

                <label htmlFor="delayIndermnity">En cas de retard de paiement, application d'une indemnité forfaitaire pour frais de recouvrement de 40€ selon l'article D. 441-5 du code du commerce : </label>
                <input type="checkbox" name="delayIndermnity" id="delayIndermnity" /> <span>oui</span>

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
        {
          depositCase && <>
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
          </>
        }

        <div className="grid grid-cols-12 ">
          <div className=" p-1  col-span-6 text-end ">
            Total TTC
          </div>
          <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
            <input type="text" className=' ' name='reference' defaultValue={"0.00"} />

          </div>
        </div>
        {
          discountCase && <div className="grid grid-cols-12">
            <div className=" p-1  col-span-6 text-end ">
              Acompte
            </div>
            <div className=" p-1  col-span-2 border-[.1rem] border-t-0 border-solid border-gray-950">
              <input type="text" className=' border-none ' name='reference' defaultValue={"0.00"} />

            </div>
          </div>
        }

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