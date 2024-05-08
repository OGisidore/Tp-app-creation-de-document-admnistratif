/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 23/04/2024 21:57:29
*/
import React, { FC, useEffect, useState } from 'react'
import './CompanyInfo.css'
import { convertBlobtoUrl, convertFiletoBlob } from '../../api/utilities'
import { useDispatch } from 'react-redux'
import { UPDATE_COMPANY_INFO } from '../../redux/actions/actionTypes'

interface CompanyInfoProps { }

const CompanyInfo: FC<CompanyInfoProps> = () => {
  const [logoSrc, setLogoSrc] = useState<string>("")

  const dispatch = useDispatch()
  useEffect(() => {
    const runLocalData = async () => { }
    runLocalData()
  })
 

  const handleChange = (e: any , field? : string , val? : any)=>{
    if (val && field) {
      dispatch ({
        type : UPDATE_COMPANY_INFO,
        payload : {
          field : field,
          value : val
        }

      })

      
    } else {
      const {name , value}= e.target
      dispatch ({
        type : UPDATE_COMPANY_INFO,
        payload : {
          field : name,
          value : value
        }

      })
    }
  }
  const handleLogoChange = async (e: any) => {
    const {name} = e.target
    const file = e.target.files[0];
    const blob = await convertFiletoBlob(file)
    handleChange(e ,name , blob)
    console.log(blob);  
    const url =  convertBlobtoUrl(blob)
    console.log(url);
    
    setLogoSrc(url)

  }

  return (
    <div className="socityInfo">
      <form className="p-2">
        <div className="previousLogo w-full flex justify-center">
          <img src={logoSrc} width={100} alt="" />
        </div>
        <div className="logo flex p-[0.2rem]">
          <label htmlFor="logo"> Logo : </label>
          <input onChange={(e) => handleLogoChange(e)} type="file" name="logo_link" id="logo" />
        </div>
        <div className="socityName p-[0.2rem]">
          <input type="text" name="companyName" onChange={(e)=>handleChange(e)} id="SName" placeholder="name" />
        </div>
        <div className="socityAdresse p-[0.2rem]">
          <input
           onChange={(e)=>handleChange(e)}
            type="text"
            name="address"
            id="SAddress"
            placeholder="Address"
          />
        </div>
        <div className="socity_cityAndZIP_code p-[0.2rem]">
          <input
            type="text"
            name="ZIP"
            onChange={(e)=>handleChange(e)}
            id="SZip"
            className="w-[20%] mr-1"
            placeholder="ZIP"
          />
          <input type="text" name="city"  onChange={(e)=>handleChange(e)} id="SCity" placeholder="city" />
        </div>
        <div className="socityCountry p-[0.2rem]">
          <input
            type="text"
            name="country"
            onChange={(e)=>handleChange(e)}
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="socityFax p-[0.2rem]">
          <input type="text" name="fax"  onChange={(e)=>handleChange(e)} id="fax" placeholder="Fax" />
        </div>
        <div className="socityName p-[0.2rem]">
          <input type="email"  onChange={(e)=>handleChange(e)} name="email" id="email" placeholder="email" />
        </div>
        <div className="socitySiret p-[0.2rem]">
          <input
            type="text"
            name="siret"
            id="siret"
            onChange={(e)=>handleChange(e)}
            placeholder="SIREN/SIRET Numero"
          />
        </div>
        <div className="socityRCSVille p-[0.2rem]">
          <input type="text"  onChange={(e)=>handleChange(e)} name="rcsVille" id="Rcs" placeholder="RCS Ville" />
        </div>
        <div className="socityCodeNaf p-[0.2rem]">
          <input
            type="text"
            name="codeNaf"
            id="CodeNaf"
            onChange={(e)=>handleChange(e)}
            placeholder="Code NAF"
          />
        </div>
        <div className="socitTVA p-[0.2rem]">
          <input type="text"  onChange={(e)=>handleChange(e)} name="tva" id="TVA" placeholder="Numero de TVA" />
        </div>
      </form>
    </div>
  )
}

export default CompanyInfo
