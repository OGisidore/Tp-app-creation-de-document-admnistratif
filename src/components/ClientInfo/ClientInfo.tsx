/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/04/2024 21:57:29
*/
import React, { FC, useEffect } from 'react'
import './ClientInfo.css'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { UPDATE_CLIENT_INFO } from '../../redux/actions/actionTypes'

interface ClientInfoProps {
  proforma : boolean
}

const ClientInfo: FC<ClientInfoProps> = ({proforma}) => {
  const { slug } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    const runLocalData = async () => {}
    runLocalData()
  })
  const handleChange = (e: any )=>{
      const {name , value}= e.target
      dispatch ({
        type : UPDATE_CLIENT_INFO,
        payload : {
          field : name,
          value : value
        }

      })
    
  }
  return (
    <div className="clientInfo">
      <form className="p-3 flex items-stretch flex-col">
        <div className="facturNumero p-2 sm:w-[100%] md:w-[100%] lg:w-[80%]  self-end">
          <div className="number">
            <label htmlFor="numeroFacture">{slug?.toUpperCase()} {proforma && "PROFORMA"} N </label>
            <input
              type="text"
              onChange={(e)=>handleChange(e)}
              className="w-[50%]"
              name="numeroFacture"
              id="numb_facture"
            />
          </div>
          <div className="emissionDate pt-[0.5rem]">
            <label htmlFor="date_ofEmission"> Date d'emission : </label>
            <input
            onChange={(e)=>handleChange(e)}
              type="date"
              className="w-[50%]"
              name="date_ofEmission"
              id="date"
            />
          </div>
        </div>
        <div className="clientDes w-[70%] sm:w-[100%] md:w-[100%] lg:w-[80%] flex flex-col items-end p-2 self-end">
          <div className="all w-[100%]">
            <div className="clientCode p-[0.2rem]">
              <input
              onChange={(e)=>handleChange(e)}
                type="text"
                name="client_code"
                id="C_code"
                placeholder="Code client (facultatif)"
              />
            </div>
            <div className="clientFullname p-[0.2rem]">
              <input
                type="text"
                onChange={(e)=>handleChange(e)}
                name="Client_Fullname"
                id="C_fullname"
                placeholder="Nom et Prenom du client"
              />
            </div>
            <div className="clientAddress p-[0.2rem]">
              <input
                type="text"
                onChange={(e)=>handleChange(e)}
                name="Client_Address"
                id="client_address"
                placeholder="Address du client"
              />
            </div>
            <div className="client_cityAndZIP_code p-[0.2rem]">
              <input
                type="text"
                onChange={(e)=>handleChange(e)}
                name="client_ZIP"
                id="C_Zip"
                className="w-[20%] mr-1"
                placeholder="code postal"
              />
              <input
                type="text"
                onChange={(e)=>handleChange(e)}
                name="client_city"
                id="c_City"
                placeholder="ville"
              />
            </div>

            <div className="clientCountry p-[0.2rem]">
              <input type="text" onChange={(e)=>handleChange(e)} name="Country" id="Pays" placeholder="Pays" />
            </div>
            <div className="clientEmail p-[0.2rem]">
              <input
                type="text"
                name="phone"
                onChange={(e)=>handleChange(e)}
                id="phone "
                placeholder="email et telephone"
              />
            </div>
            <div className="clientTva p-[0.2rem]">
              <input
                type="text"
                onChange={(e)=>handleChange(e)}
                name="client_tva"
                id="c_tva"
                placeholder="Numero TVA  du client ( facultatif)"
              />
            </div>
          </div>
        </div>
        <div className="titleAdInput mt-2">
          <p>Mettez ici un titre</p>
          <input type="text" onChange={(e)=>handleChange(e)} name="Title" id="titleAdd" className="w-[25%]" />
        </div>
      </form>
    </div>
  )
}

export default ClientInfo
